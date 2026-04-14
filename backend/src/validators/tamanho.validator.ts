import { z } from 'zod';

export const createTamanhoSchema = z.object({
    descricao: z.string({ error: issue => issue.input === undefined ? 'A descrição é obrigatória.' : 'A descrição deve ser um texto.' }),
    tipoId: z.number({ error: issue => issue.input === undefined ? 'O ID do tipo é obrigatório.' : 'O ID do tipo deve ser numérico.' })
        .int({ message: 'O ID do tipo deve ser um número inteiro.' }),
});
