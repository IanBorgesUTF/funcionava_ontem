import dotenv from 'dotenv';

dotenv.config();

interface EnvConfig {
    PORT: number;
    DATABASE_URL: string;
    POSTGRES_USER: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_DB: string;
    JWT_SECRET: string;
    JWT_EXPIRES_IN: string;
    SEED_ADMIN_EMAIL: string;
    SEED_ADMIN_PASSWORD: string;
}

const env: EnvConfig = {
    PORT: parseInt(process.env.PORT || '3000', 10),
    DATABASE_URL: process.env.DATABASE_URL || '',
    POSTGRES_USER: process.env.POSTGRES_USER || '',
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || '',
    POSTGRES_DB: process.env.POSTGRES_DB || '',
    JWT_SECRET: process.env.JWT_SECRET || '',
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '',
    SEED_ADMIN_EMAIL: process.env.SEED_ADMIN_EMAIL || '',
    SEED_ADMIN_PASSWORD: process.env.SEED_ADMIN_PASSWORD || '',
};

const requiredKeys: (keyof EnvConfig)[] = ['DATABASE_URL', 'POSTGRES_USER', 'POSTGRES_PASSWORD', 'POSTGRES_DB', 'JWT_SECRET', 'JWT_EXPIRES_IN', 'SEED_ADMIN_EMAIL', 'SEED_ADMIN_PASSWORD'];

for (const key of requiredKeys) {
    if (!env[key]) {
        throw new Error(`${key} não está definida nas variáveis de ambiente.`);
    }
}

export default env;