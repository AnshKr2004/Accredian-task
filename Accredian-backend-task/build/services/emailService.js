"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendReferralEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
const sendReferralEmail = async (referrerEmail, refereeEmail, course) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: refereeEmail,
        subject: 'Course Referral',
        text: `You have been referred to the course "${course}" by ${referrerEmail}.`,
    };
    await transporter.sendMail(mailOptions);
};
exports.sendReferralEmail = sendReferralEmail;
