import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendReferralEmail = async (referrerEmail: string, refereeEmail: string, course: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: refereeEmail,
    subject: 'Course Referral',
    text: `You have been referred to the course "${course}" by ${referrerEmail}.`,
  };

  await transporter.sendMail(mailOptions);
};
