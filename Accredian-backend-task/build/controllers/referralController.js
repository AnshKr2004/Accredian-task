"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReferral = void 0;
const client_1 = require("@prisma/client");
const emailService_1 = require("../services/emailService");
const prisma = new client_1.PrismaClient();
const createReferral = async (req, res) => {
    const { referrerName, referrerEmail, refereeName, refereeEmail, course } = req.body;
    if (!referrerName || !referrerEmail || !refereeName || !refereeEmail || !course) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    try {
        const referral = await prisma.referral.create({
            data: {
                referrerName,
                referrerEmail,
                refereeName,
                refereeEmail,
                course,
            },
        });
        await (0, emailService_1.sendReferralEmail)(referrerEmail, refereeEmail, course);
        return res.status(201).json(referral);
    }
    catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.createReferral = createReferral;
