import { z } from 'zod';

export const createCondicaoSchema = z.object({
    descricao: z.string({ error: issue => issue.input === undefined ? 'A descrição é obrigatória.' : 'A descrição deve ser um texto.' })
        .min(2, { message: 'A descrição deve ter no mínimo 2 caracteres.' }),
});
