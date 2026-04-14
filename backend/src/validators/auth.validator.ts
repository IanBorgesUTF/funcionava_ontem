import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email({ error: issue => issue.input === undefined ? 'O email é obrigatório.' : 'Formato de email inválido.' }),
  senha: z.string({ error: issue => issue.input === undefined ? 'A senha é obrigatória.' : 'A senha deve ser um texto.' })
});
