import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { sendReferralEmail } from '../services/emailService';

declare global {
  var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()

export const createReferral = async (req: Request, res: Response) => {
  const { referrerName, referrerEmail, refereeName, refereeEmail, course } = req.body;

  if (!referrerName || !referrerEmail || !refereeName || !refereeEmail || !course) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const referral = await client.referral.create({
      data: {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
        course,
      },
    });

    await sendReferralEmail(referrerEmail, refereeEmail, course);

    return res.status(201).json(referral);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export default client;