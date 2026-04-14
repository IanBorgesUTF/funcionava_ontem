import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Pagination.css";

export default function Pagination({ page, totalItems, perPage, onChange, compact = false }) {
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const prevDisabled = page <= 1;
  const nextDisabled = page >= totalPages;

  return (
    <div className={`pagination basetext-inter ${compact ? "compact" : ""}`}>
      <button
        className="page-btn"
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={prevDisabled}
        aria-label="Página anterior"
      >
        <ChevronLeft size={16} />
      </button>
      {!compact && <span className="page-chip">Página {page} de {totalPages}</span>}
      {compact && <span className="page-chip">{page}/{totalPages}</span>}
      <button
        className="page-btn"
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={nextDisabled}
        aria-label="Próxima página"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
