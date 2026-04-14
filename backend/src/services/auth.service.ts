import bcrypt from 'bcrypt';
import jwt, { SignOptions } from 'jsonwebtoken';
import { prisma } from '../config/prisma';
import { loginSchema } from '../validators/auth.validator';
import { z } from 'zod';
import env from '../config/env';

// Extrai o tipo de dado de entrada a partir do schema do Zod
type LoginInput = z.infer<typeof loginSchema>;

export const loginService = async (input: LoginInput) => {
    const { email, senha } = input;

    const voluntario = await prisma.voluntario.findUnique({
        where: { email },
    });

    if (!voluntario) {
        throw new Error('Credenciais inválidas.');
    }

    const senhaValida = await bcrypt.compare(senha, voluntario.senha);

    if (!senhaValida) {
        throw new Error('Credenciais inválidas.');
    }

    const secret = env.JWT_SECRET;
    const expiresIn: SignOptions['expiresIn'] = env.JWT_EXPIRES_IN as SignOptions['expiresIn'];

    const token = jwt.sign(
        {
            id: voluntario.id,
            email: voluntario.email,
            admin: voluntario.admin,
        },
        secret,
        { expiresIn },
    );

    const { senha: _, ...voluntarioSemSenha } = voluntario;

    return {
        voluntario: voluntarioSemSenha,
        token: token,
    };
};
