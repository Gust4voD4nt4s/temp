import nodemailer from 'nodemailer';
import config from 'config';
import { User } from '../entitys/user.entity';
import { convert } from 'html-to-text'
require('dotenv').config();

const smtp = config.get<{
    host: string;
    port: number;
    user: string;
    pass: string;
}>('smtp');


export const email = (user: User) => {

    const firstName = user.email.split('@')[0];
    const to = user.email;
    const from = `Raval ${config.get<string>('emailFrom')}`;

    const transporter = nodemailer.createTransport({
        ...smtp,
        secure: true,
        auth: {
            user: smtp.user,
            pass: smtp.pass
        },
    });

    const send = async (template: string, subject: string) => {

        const html = '<p> Teste </p>'

        const mailOptions = {
            from,
            to,
            subject,
            text: convert(html),
            html
        }

        const info = await transporter.sendMail(mailOptions)
        console.log(nodemailer.getTestMessageUrl(info));

    }

    const sendPassword = async () => {
        return await send('passwordEmail', 'Senha de acesso da raval')
    }

    return {sendPassword}
}

