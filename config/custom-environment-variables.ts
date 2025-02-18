export default {
    port: 'PORT',
    
    DATABASE_URL: 'DATABASE_URL',
    DATABASE_PUBLIC_URL: 'DATABASE_PUBLIC_URL',

    postgreConfig: {
        host: 'POSTGRES_HOST',
        username: 'POSTGRES_USER',
        password: 'POSTGRES_PASSWORD',
        database: 'POSTGRES_DB',
        port: 'POSTGRES_PORT'
    },

    accessTokenPrivateKey: 'JWT_ACCESS_TOKEN_PRIVATE_KEY',
    accessTokenPublicKey: 'JWT_ACCESS_TOKEN_PUBLIC_KEY',
    refreshTokenPrivateKey: 'JWT_REFRESH_TOKEN_PRIVATE_KEY',
    refreshTokenPublicKey: 'JWT_REFRESH_TOKEN_PUBLIC_KEY',

    smtp: {
        host: 'EMAIL_HOST',
        pass: 'EMAIL_PASS',
        port: 'EMAIL_PORT',
        user: 'EMAIL_USER',
    },
};