import { z } from 'zod';

export const createVoluntarioSchema = z.object({
    nome: z.string({ error: issue => issue.input === undefined ? 'O nome é obrigatório.' : 'O nome deve ser um texto.' })
        .min(3, { message: 'O nome deve ter no mínimo 3 caracteres.' }),
    email: z.email({ error: issue => issue.input === undefined ? 'O email é obrigatório.' : 'Formato de email inválido.' }),
    senha: z.string({ error: issue => issue.input === undefined ? 'A senha é obrigatória.' : 'A senha deve ser um texto.' })
        .min(8, { message: 'A senha deve ter no mínimo 8 caracteres.' }),
    admin: z.boolean({ error: 'O campo admin deve ser booleano.' }).optional().default(false),
    endereco: z.string({ error: 'O endereço deve ser um texto.' }).optional(),
    telefone: z.string({ error: 'O telefone deve ser um texto.' })
        .transform((val) => val.replace(/\D/g, ''))
        .refine((val) => val.length >= 8 && val.length <= 15, { message: 'O telefone deve conter entre 8 e 15 dígitos numéricos.' })
        .optional(),
});

export const updateVoluntarioSchema = z.object({
    nome: z.string({ error: 'O nome deve ser um texto.' }).min(3).optional(),
    email: z.email({ message: 'Formato de email inválido.' }).optional(),
    senha: z.string({ error: 'A senha deve ser um texto.' }).min(6).optional(),
    admin: z.boolean({ error: 'O campo admin deve ser booleano.' }).optional(),
    endereco: z.string({ error: 'O endereço deve ser um texto.' }).optional(),
    telefone: z.string({ error: 'O telefone deve ser um texto.' })
        .transform((val) => val.replace(/\D/g, ''))
        .refine((val) => val.length === 0 || (val.length >= 8 && val.length <= 15), { message: 'O telefone deve conter entre 8 e 15 dígitos numéricos.' })
        .optional(),
});

export type CreateVoluntarioInput = z.infer<typeof createVoluntarioSchema>;
export type UpdateVoluntarioInput = z.infer<typeof updateVoluntarioSchema>;
