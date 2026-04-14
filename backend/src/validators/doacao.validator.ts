import { z } from 'zod';

// Schema para cada item individual na lista de doação
export const itemDoacaoSchema = z.object({
  tipoId: z.number({ error: issue => issue.input === undefined ? 'O tipo do item é obrigatório.' : 'O tipo do item deve ser numérico.' })
    .int({ message: 'O tipo do item deve ser um número inteiro.' }),
  tamanhoId: z.number({ error: issue => issue.input === undefined ? 'O tamanho do item é obrigatório.' : 'O tamanho do item deve ser numérico.' })
    .int({ message: 'O tamanho do item deve ser um número inteiro.' }),
  condicaoId: z.number({ error: issue => issue.input === undefined ? 'A condição do item é obrigatória.' : 'A condição do item deve ser numérica.' })
    .int({ message: 'A condição do item deve ser um número inteiro.' }),
  quantidade: z.number({ error: issue => issue.input === undefined ? 'A quantidade é obrigatória.' : 'A quantidade deve ser numérica.' })
    .positive({ message: 'A quantidade deve ser maior que zero.' }),
});

// Schema principal para o corpo da requisição de criação de doação
export const createDoacaoSchema = z.object({
    itens: z.array(itemDoacaoSchema).min(1, 'A doação deve conter pelo menos um item.'),
});

export type ItemDoacaoInput = z.infer<typeof itemDoacaoSchema>;
export type CreateDoacaoBody = z.infer<typeof createDoacaoSchema>;
