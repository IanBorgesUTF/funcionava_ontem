import { Request, Response } from 'express';
import { loginService } from '../services/auth.service';

export const loginController = async (req: Request, res: Response) => {
    try {
        const { voluntario, token } = await loginService(req.body);

        // Retorna 200 OK com o token e os dados do usuário
        return res.status(200).json({
            message: 'Login bem-sucedido!',
            voluntario,
            token,
        });

    } catch (error: any) {
        // Se o serviço lançar o erro "Credenciais inválidas."
        if (error.message.includes('Credenciais inválidas')) {
            return res.status(401).json({ message: error.message });
        }

        // Outros erros (ex: JWT_SECRET não definido)
        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};