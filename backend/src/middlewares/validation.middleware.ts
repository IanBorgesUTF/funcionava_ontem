import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const validate = <T extends z.ZodTypeAny>(schema: T) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            const validationMessages = result.error.issues.map((issue) => issue.message).join(' | ');
            return res.status(400).json({
                message: validationMessages,
                errors: result.error.issues,
                validationErrors: result.error.issues,
                'Erro de Validação': result.error.issues,
            });
        }

        req.body = result.data as z.infer<T>;
        next();
    };
};
