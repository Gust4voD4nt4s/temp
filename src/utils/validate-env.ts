import {cleanEnv, port, str} from 'envalid'

const validateEnv = () => {
    cleanEnv(process.env, {
        PORT: port(),
        POSTGRES_HOST: str(),
        POSTGRES_DB: str(),
        POSTGRES_PORT: port(),
        POSTGRES_USER: str(),
        POSTGRES_PASSWORD: str()
    });
};

export default validateEnv;