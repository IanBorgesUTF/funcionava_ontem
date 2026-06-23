import { z } from 'zod';

export const familiarSchema = z.object({
  nome: z.string({ error: issue => issue.input === undefined ? 'O nome é obrigatório.' : 'O nome deve ser um texto.' })
    .min(3, { message: 'O nome deve ter no mínimo 3 caracteres.' }),

  parentesco: z.string({ error: issue => issue.input === undefined ? 'O parentesco é obrigatório.' : 'O parentesco deve ser um texto.' })
    .min(2, { message: 'O parentesco deve ter no mínimo 2 caracteres.' }),

  telefone: z.string({ error: 'O telefone deve ser um texto.' })
    .transform((val) => val.replace(/\D/g, ''))
    .refine((val) => val.length === 0 || (val.length >= 8 && val.length <= 15), { message: 'O telefone deve conter entre 8 e 15 dígitos numéricos.' })
    .optional()
    .nullable(),

  dataNascimento: z.preprocess((value) => {
    if (value === undefined || value === null || value === '') return undefined;
    return new Date(value as string);
  }, z.date({ invalid_type_error: 'A data de nascimento deve ser uma data válida.' }).optional()),

  beneficiarioId: z.number({ error: issue => issue.input === undefined ? 'O ID do beneficiário é obrigatório.' : 'O ID do beneficiário deve ser numérico.' })
    .int({ message: 'O ID do beneficiário deve ser um número inteiro.' })
    .positive({ message: 'O ID do beneficiário deve ser um número positivo.' }),
});

export type FamiliarSchemaType = z.infer<typeof familiarSchema>;
