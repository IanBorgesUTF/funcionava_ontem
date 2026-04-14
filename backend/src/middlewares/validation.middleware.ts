import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const validate = <T extends z.ZodTypeAny>(schema: T) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({ 'Erro de Validação': result.error.issues });
        }

        req.body = result.data as z.infer<T>;
        next();
    };
};
