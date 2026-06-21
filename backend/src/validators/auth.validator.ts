import { z } from 'zod';
import { passwordSchema } from './password.validator';

export const loginSchema = z.object({
  email: z.email({ error: issue => issue.input === undefined ? 'O email é obrigatório.' : 'Formato de email inválido.' }),
  senha: z.string({ error: issue => issue.input === undefined ? 'A senha é obrigatória.' : 'A senha deve ser um texto.' })
});

// Schema para registro/cadastro de novo usuário
export const registerSchema = z.object({
  nome: z.string({ error: issue => issue.input === undefined ? 'O nome é obrigatório.' : 'O nome deve ser um texto.' })
    .min(3, { message: 'O nome deve ter no mínimo 3 caracteres.' }),
  email: z.email({ error: issue => issue.input === undefined ? 'O email é obrigatório.' : 'Formato de email inválido.' }),
  senha: passwordSchema,
  telefone: z.string({ error: 'O telefone deve ser um texto.' })
    .transform((val) => val.replace(/\D/g, ''))
    .refine((val) => val.length >= 8 && val.length <= 15, { message: 'O telefone deve conter entre 8 e 15 dígitos numéricos.' })
    .optional(),
  endereco: z.string({ error: 'O endereço deve ser um texto.' }).optional(),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
