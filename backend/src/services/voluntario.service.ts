import bcrypt from 'bcrypt';
import { prisma } from '../config/prisma';
import { CreateVoluntarioInput, UpdateVoluntarioInput } from '../validators/voluntario.validator';

export const createVoluntarioService = async (data: CreateVoluntarioInput) => {
    const existingUser = await prisma.voluntario.findUnique({ where: { email: data.email } });
    if (existingUser) {
        throw new Error('Email já cadastrado.');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.senha, salt);

    const voluntario = await prisma.voluntario.create({
        data: {
            ...data,
            senha: hashedPassword,
        },
    });

    // Remove a senha do objeto de retorno
    const { senha: _, ...voluntarioSemSenha } = voluntario;
    return voluntarioSemSenha;
};

export const getAllVoluntariosService = async () => {
    // Usamos 'select' para garantir que a senha nem saia do banco de dados
    return prisma.voluntario.findMany({
        select: {
            id: true,
            nome: true,
            email: true,
            admin: true,
            endereco: true,
            telefone: true,
            createdAt: true,
            updatedAt: true,
        },
    });
};

export const getVoluntarioByIdService = async (id: number) => {
    const voluntario = await prisma.voluntario.findUnique({
        where: { id },
        select: {
            id: true,
            nome: true,
            email: true,
            admin: true,
            endereco: true,
            telefone: true,
            createdAt: true,
            updatedAt: true,
        },
    });

    if (!voluntario) throw new Error('Voluntário não encontrado.');
    return voluntario;
};

export const updateVoluntarioService = async (id: number, data: UpdateVoluntarioInput) => {
    const voluntario = await prisma.voluntario.findUnique({ where: { id } });
    if (!voluntario) throw new Error('Voluntário não encontrado.');

    // Se houver senha nova, faz o hash. Se não, mantém a antiga (undefined no update ignora o campo)
    let hashedPassword = undefined;
    if (data.senha) {
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(data.senha, salt);
    }

    const updatedVoluntario = await prisma.voluntario.update({
        where: { id },
        data: {
            ...data,
            senha: hashedPassword, // Se for undefined, o Prisma ignora
        },
    });

    const { senha: _, ...voluntarioSemSenha } = updatedVoluntario;
    return voluntarioSemSenha;
};

export const deleteVoluntarioService = async (id: number) => {
    const voluntario = await prisma.voluntario.findUnique({
        where: { id },
        include: {
            _count: {
                select: { doacoes: true, distribuicoes: true }
            }
        }
    });

    if (!voluntario) {
        throw new Error('Voluntário não encontrado.');
    }

    if (voluntario._count.doacoes > 0 || voluntario._count.distribuicoes > 0) {
        throw new Error('Não é possível excluir um voluntário que possui registros de doações ou distribuições. Considere desativar o acesso mudando a senha ou criando um campo "ativo".');
    }

    return prisma.voluntario.delete({ where: { id } });
};