import { z } from 'zod';

// Schema para criação (só precisa do ID do beneficiário)
export const createCartaoSchema = z.object({
    beneficiarioId: z.number({ error: issue => issue.input === undefined ? 'O ID do beneficiário é obrigatório.' : 'O ID do beneficiário deve ser numérico.' })
        .int({ message: 'O ID do beneficiário deve ser um número inteiro.' })
        .positive({ message: 'O ID do beneficiário deve ser um número positivo.' }),
});

// Schema para uma rota PATCH dedicada a mudar o status
export const updateCartaoStatusSchema = z.object({
    ativo: z.boolean({ error: issue => issue.input === undefined ? 'O status (ativo/inativo) é obrigatório.' : 'O status deve ser um valor booleano (true/false).' }),
});

export type CreateCartaoSchemaType = z.infer<typeof createCartaoSchema>;
