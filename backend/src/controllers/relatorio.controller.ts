import { Request, Response } from 'express';
import PDFDocument from 'pdfkit';
import { getMovimentacoesService } from '../services/relatorio.service';

const formatDate = (value?: string | Date | null) => {
  if (!value) return 'Sem período definido';
  const date = value instanceof Date ? value : new Date(value);
  if (isNaN(date.getTime())) return 'Data inválida';
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());
  return `${day}/${month}/${year}`;
};

const buildPdfRelatorio = (data: Awaited<ReturnType<typeof getMovimentacoesService>>, res: Response) => {
  const doc = new PDFDocument({ size: 'A4', margin: 42 });
  const palette = {
    primary: '#4d7ebf',
    light: '#eef3fb',
    headerText: '#1f3558',
    border: '#d6dce5',
    text: '#1f1f2b',
    muted: '#555',
    altRow: '#f8f9fb',
  };

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="relatorio-movimentacoes.pdf"');

  doc.pipe(res);

  const drawTitle = () => {
    const contentWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
    doc.fillColor(palette.primary).fontSize(22).font('Helvetica-Bold').text('RELATÓRIO DE MOVIMENTAÇÕES', {
      align: 'center',
      width: contentWidth,
      continued: false,
    });
    doc.moveDown(0.15);
    doc.fillColor(palette.muted).fontSize(10).font('Helvetica').text(
      'Entradas (doações) e saídas (distribuições) consolidadas por período.',
      { align: 'center', width: contentWidth }
    );
    doc.moveDown(0.6);
  };

  const drawInfoCards = () => {
    const startX = doc.page.margins.left;
    const contentWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
    const gap = 12;
    const resumoMin = 160;
    const calcWidth = Math.max(140, Math.min(190, (contentWidth - gap * 2 - resumoMin) / 2));
    const width = calcWidth;
    const height = 32;
    const y = doc.y;

    const drawCard = (label: string, value: string, x: number) => {
      doc.rect(x, y, width, height).fillAndStroke(palette.light, palette.border);
      doc.fillColor(palette.muted).fontSize(9).font('Helvetica-Bold').text(label, x + 8, y + 6);
      doc.fillColor(palette.text).fontSize(11).font('Helvetica').text(value, x + 8, y + 16);
    };

    const periodoInicio = formatDate(data.periodo.inicio);
    const periodoFim = formatDate(data.periodo.fim);

    drawCard('INÍCIO', periodoInicio, startX);
    drawCard('FIM', periodoFim, startX + width + gap);

    const resumoWidth = Math.max(resumoMin, contentWidth - (width * 2 + gap * 2));
    const resumoX = startX + 2 * (width + gap);
    doc.rect(resumoX, y, resumoWidth, height).fillAndStroke('#ffffff', palette.border);
    doc.fillColor(palette.muted).fontSize(9).font('Helvetica-Bold').text('RESUMO (itens)', resumoX + 8, y + 6, {
      width: resumoWidth - 16,
    });
    doc.fillColor(palette.text).fontSize(11).font('Helvetica').text(
      `+${data.resumo.totalEntradas} | -${data.resumo.totalSaidas}`,
      resumoX + 8,
      y + 16,
      { width: resumoWidth - 16 }
    );

    const saldo = data.resumo.totalEntradas - data.resumo.totalSaidas;
    doc
      .fillColor(palette.text)
      .fontSize(11)
      .font('Helvetica-Bold')
      .text(`Saldo: ${saldo}`, resumoX + 8, y + 16, {
        align: 'right',
        width: resumoWidth - 16,
      });

    doc.moveDown(2);
  };

  const drawSectionTitle = (label: string) => {
    const contentWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
    doc.fillColor(palette.primary).fontSize(14).font('Helvetica-Bold').text(
      label.toUpperCase(),
      doc.page.margins.left,
      doc.y,
      {
        align: 'center',
        width: contentWidth,
      }
    );
    doc.moveDown(0.35);
  };

  const drawTable = (
    columns: { key: string; label: string; width?: number; weight?: number; align?: 'left' | 'right' }[],
    rows: Record<string, any>[]
  ) => {
    const startX = doc.page.margins.left;
    const headerHeight = 18;
    const rowHeight = 16;
    const availableWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
    const totalWeight = columns.reduce((acc, c) => acc + (c.weight ?? 1), 0);
    const normalized = columns.map((c) => ({
      ...c,
      width: c.width ?? (availableWidth * (c.weight ?? 1)) / totalWeight,
    }));

    const ensureSpace = (needed: number) => {
      if (doc.y + needed > doc.page.height - doc.page.margins.bottom) {
        doc.addPage();
      }
    };

    ensureSpace(headerHeight + rowHeight * Math.max(rows.length, 1) + 10);

    const headerY = doc.y;
    const totalWidth = normalized.reduce((acc, c) => acc + c.width, 0);
    doc.rect(startX, headerY, totalWidth, headerHeight).fillAndStroke(palette.light, palette.border);
    doc.strokeColor(palette.border).lineWidth(0.5);

    doc.fillColor(palette.headerText).fontSize(10).font('Helvetica-Bold');
    let x = startX;
    normalized.forEach((col) => {
      doc.text(col.label, x + 6, headerY + 5, { width: col.width - 8, align: col.align ?? 'left' });
      x += col.width;
    });

    doc.y = headerY + headerHeight;

    rows.forEach((row, idx) => {
      ensureSpace(rowHeight + 4);
      const rowY = doc.y;
      const isAlt = idx % 2 === 1;
      doc.rect(startX, rowY, totalWidth, rowHeight).fill(isAlt ? palette.altRow : '#ffffff');
      doc.strokeColor(palette.border).lineWidth(0.3).rect(startX, rowY, totalWidth, rowHeight).stroke();

      doc.fillColor(palette.text).fontSize(9).font('Helvetica');
      let rx = startX;
      normalized.forEach((col) => {
        const value = row[col.key] ?? '-';
        doc.text(String(value), rx + 6, rowY + 4, { width: col.width - 8, align: col.align ?? 'left' });
        rx += col.width;
      });
      doc.y = rowY + rowHeight;
    });

    doc.moveDown(0.6);
  };

  const mapDoacoes = () =>
    data.doacoes.flatMap((d) =>
      d.itens.map((i) => ({
        data: formatDate(d.createdAt as Date),
        pessoa: d.voluntario?.nome ?? 'N/A',
        tipo: i.item.tipo.descricao,
        tamanho: i.item.tamanho.descricao,
        condicao: i.item.condicao.descricao,
        quantidade: i.quantidade,
      }))
    );

  const mapDistribuicoes = () =>
    data.distribuicoes.flatMap((d) =>
      d.itens.map((i) => ({
        data: formatDate(d.createdAt as Date),
        pessoa: d.beneficiario?.nome ?? 'N/A',
        tipo: i.item.tipo.descricao,
        tamanho: i.item.tamanho.descricao,
        condicao: i.item.condicao.descricao,
        quantidade: i.quantidade,
      }))
    );

  drawTitle();
  drawInfoCards();

  drawSectionTitle('Doações (Entradas)');
  const doacaoRows = mapDoacoes();
  if (doacaoRows.length === 0) {
    doc.fillColor(palette.muted).fontSize(10).font('Helvetica-Oblique').text('Nenhuma doação no período.').moveDown();
  } else {
    drawTable(
      [
        { key: 'data', label: 'DATA', weight: 1.3 },
        { key: 'pessoa', label: 'VOLUNTÁRIO', weight: 1.6 },
        { key: 'tipo', label: 'TIPO', weight: 1.1 },
        { key: 'tamanho', label: 'TAMANHO', weight: 0.9 },
        { key: 'condicao', label: 'CONDIÇÃO', weight: 1.2 },
        { key: 'quantidade', label: 'QTD.', weight: 0.7, align: 'right' },
      ],
      doacaoRows
    );
  }

  drawSectionTitle('Distribuições (Saídas)');
  const distRows = mapDistribuicoes();
  if (distRows.length === 0) {
    doc.fillColor(palette.muted).fontSize(10).font('Helvetica-Oblique').text('Nenhuma distribuição no período.').moveDown();
  } else {
    drawTable(
      [
        { key: 'data', label: 'DATA', weight: 1.3 },
        { key: 'pessoa', label: 'BENEFICIÁRIO', weight: 1.6 },
        { key: 'tipo', label: 'TIPO', weight: 1.1 },
        { key: 'tamanho', label: 'TAMANHO', weight: 0.9 },
        { key: 'condicao', label: 'CONDIÇÃO', weight: 1.2 },
        { key: 'quantidade', label: 'QTD.', weight: 0.7, align: 'right' },
      ],
      distRows
    );
  }

  doc.end();
};

export const getMovimentacoesController = async (req: Request, res: Response) => {
  try {
    const { inicio, fim, formato } = req.query;

    const parseDateInput = (value?: string | string[]) => {
      if (!value) return undefined;
      const raw = Array.isArray(value) ? value[0] : value;
      if (raw.includes('/')) {
        const [d, m, y] = raw.split('/');
        const parsed = new Date(Number(y), Number(m) - 1, Number(d));
        return isNaN(parsed.getTime()) ? undefined : parsed;
      }
      const parsed = new Date(raw);
      return isNaN(parsed.getTime()) ? undefined : parsed;
    };

    const inicioDate = parseDateInput(inicio as string);
    const fimDate = parseDateInput(fim as string);

    if (inicio && !inicioDate) {
      return res.status(400).json({ message: 'Parâmetro "inicio" inválido. Use dd/mm/yyyy.' });
    }
    if (fim && !fimDate) {
      return res.status(400).json({ message: 'Parâmetro "fim" inválido. Use dd/mm/yyyy.' });
    }

    const data = await getMovimentacoesService(inicioDate, fimDate);
    const acceptHeader = req.get('accept') || '';
    const wantsPdfHeader = acceptHeader.split(',').some((h) => h.trim().toLowerCase() === 'application/pdf');
    const wantsPdf = String(formato || '').toLowerCase() === 'pdf' || wantsPdfHeader;

    if (wantsPdf) {
      return buildPdfRelatorio(data, res);
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao gerar relatório de movimentações.' });
  }
};
