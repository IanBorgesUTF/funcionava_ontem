import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import bcrypt from 'bcrypt';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
    throw new Error('DATABASE_URL não está definida nas variáveis de ambiente.');
}

const adapter = new PrismaPg(new Pool({ connectionString: databaseUrl }));
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('Iniciando o script de seed...');

    const salt = await bcrypt.genSalt(10);

    const seedPassword = process.env.SEED_ADMIN_PASSWORD;
    if (!seedPassword) {
        throw new Error('Variável de ambiente SEED_ADMIN_PASSWORD não está definida.');
    }

    const seedEmail = process.env.SEED_ADMIN_EMAIL;
    if (!seedEmail) {
        throw new Error('Variável de ambiente SEED_ADMIN_EMAIL não está definida.');
    }

    const hashedPassword = await bcrypt.hash(seedPassword, salt);

    const adminUser = await prisma.voluntario.upsert({
        where: { email: seedEmail },
        update: {},
        create: {
            nome: 'Admin',
            email: seedEmail,
            senha: hashedPassword,
            admin: true,
            endereco: 'Indefinido',
        },
    });

    console.log(`Usuário ${adminUser.nome} criado/atualizado com sucesso.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
