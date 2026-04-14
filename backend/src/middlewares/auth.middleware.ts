import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
    id: number;
    email: string;
    admin: boolean;
}

export const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'Token de autenticação não fornecido.' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token mal formatado.' });
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
        return res.status(500).json({ message: 'Segredo JWT não configurado.' });
    }

    try {
        const decoded = jwt.verify(token, secret) as JwtPayload;

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido ou expirado.' });
    }
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user?.admin) {
        return res.status(403).json({ message: 'Acesso negado. Requer perfil de Administrador.' });
    }
    return next();
};