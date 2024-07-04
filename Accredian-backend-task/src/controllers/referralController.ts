import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { sendReferralEmail } from '../services/emailService';

const prisma = new PrismaClient();

export const createReferral = async (req: Request, res: Response) => {
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

    await sendReferralEmail(referrerEmail, refereeEmail, course);

    return res.status(201).json(referral);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
