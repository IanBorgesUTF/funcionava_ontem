import { z } from 'zod';

// Schema para um item individual dentro da distribuição
const itemDistribuicaoSchema = z.object({
    tipoId: z.number({ error: issue => issue.input === undefined ? 'O tipo do item é obrigatório.' : 'O tipo do item deve ser numérico.' })
        .int({ message: 'O tipo do item deve ser um inteiro.' }),
    tamanhoId: z.number({ error: issue => issue.input === undefined ? 'O tamanho do item é obrigatório.' : 'O tamanho do item deve ser numérico.' })
        .int({ message: 'O tamanho do item deve ser um inteiro.' }),
    condicaoId: z.number({ error: issue => issue.input === undefined ? 'A condição do item é obrigatória.' : 'A condição do item deve ser numérica.' })
        .int({ message: 'A condição do item deve ser um inteiro.' }),
    quantidade: z.number({ error: issue => issue.input === undefined ? 'A quantidade é obrigatória.' : 'A quantidade deve ser numérica.' })
        .int({ message: 'A quantidade deve ser um inteiro.' })
        .positive('A quantidade deve ser de pelo menos 1.'),
});

// Schema principal para criar uma nova distribuição
export const createDistribuicaoSchema = z.object({
    beneficiarioId: z.number({ error: issue => issue.input === undefined ? 'O ID do beneficiário é obrigatório.' : 'O ID do beneficiário deve ser numérico.' })
        .int({ message: 'O ID do beneficiário deve ser um inteiro.' }),
    cartaoNumero: z.string({ error: issue => issue.input === undefined ? 'O número do cartão é obrigatório.' : 'O número do cartão deve ser um texto.' })
        .regex(/^\d+$/, { message: 'O número do cartão deve conter apenas dígitos.' })
        .min(6, { message: 'O número do cartão é inválido.' }),

    itens: z.array(itemDistribuicaoSchema)
        .min(1, 'A distribuição deve conter pelo menos um item.'),
});

export type CreateDistribuicaoSchemaType = z.infer<typeof createDistribuicaoSchema>;
