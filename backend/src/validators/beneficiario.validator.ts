import { z } from 'zod';

// Schema para criação e atualização de Beneficiário
export const beneficiarioSchema = z.object({
    nome: z.string({ error: issue => issue.input === undefined ? 'O nome é obrigatório.' : 'O nome deve ser um texto.' })
        .min(3, { message: 'O nome deve ter no mínimo 3 caracteres.' }),

    cpf: z.string({ error: issue => issue.input === undefined ? 'O CPF é obrigatório.' : 'O CPF deve ser um texto.' })
        .transform((val) => val.replace(/\D/g, ''))
        .refine((val) => /^\d{11}$/.test(val), { message: 'O CPF deve conter exatamente 11 dígitos numéricos.' }),

    telefone: z.string({ error: 'O telefone deve ser um texto.' })
        .transform((val) => val.replace(/\D/g, ''))
        .refine((val) => val.length === 0 || (val.length >= 8 && val.length <= 15), { message: 'O telefone deve conter entre 8 e 15 dígitos numéricos.' })
        .optional()
        .nullable(),

    endereco: z.string({ error: 'O endereço deve ser um texto.' })
        .min(5, { message: 'O endereço deve ter no mínimo 5 caracteres.' })
        .optional()
        .nullable(),

    limiteItens: z.coerce.number({ error: 'O limite de itens deve ser numérico.' })
        .int({ message: 'O limite de itens deve ser um número inteiro.' })
        .min(0, { message: 'O limite deve ser 0 (sem limite) ou um número positivo.' })
        .optional()
        .default(0),
});

// Tipo inferido para uso nos serviços
export type BeneficiarioSchemaType = z.infer<typeof beneficiarioSchema>;
