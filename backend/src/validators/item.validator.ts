import { z } from 'zod';

export const updateItemQuantidadeSchema = z.object({
  quantidade: z.number({
    error: (issue) =>
      issue.input === undefined
        ? 'A quantidade é obrigatória.'
        : 'A quantidade deve ser numérica.',
  })
    .int({ message: 'A quantidade deve ser um número inteiro.' })
    .min(0, { message: 'A quantidade não pode ser negativa.' }),
});
