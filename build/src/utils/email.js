"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.email = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = __importDefault(require("config"));
const html_to_text_1 = require("html-to-text");
require('dotenv').config();
const smtp = config_1.default.get('smtp');
const email = (user) => {
    const firstName = user.email.split('@')[0];
    const to = user.email;
    const from = `Raval ${config_1.default.get('emailFrom')}`;
    const transporter = nodemailer_1.default.createTransport(Object.assign(Object.assign({}, smtp), { secure: true, auth: {
            user: smtp.user,
            pass: smtp.pass
        } }));
    const send = (template, subject) => __awaiter(void 0, void 0, void 0, function* () {
        const html = '<p> Teste </p>';
        const mailOptions = {
            from,
            to,
            subject,
            text: (0, html_to_text_1.convert)(html),
            html
        };
        const info = yield transporter.sendMail(mailOptions);
        console.log(nodemailer_1.default.getTestMessageUrl(info));
    });
    const sendPassword = () => __awaiter(void 0, void 0, void 0, function* () {
        return yield send('passwordEmail', 'Senha de acesso da raval');
    });
    return { sendPassword };
};
exports.email = email;
//# sourceMappingURL=email.js.map