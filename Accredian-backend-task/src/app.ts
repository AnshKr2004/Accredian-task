import express from 'express';
import referralRoutes from './routes/referralRoutes';

const app = express();

app.use(express.json());

app.use('/api/referrals', referralRoutes);

app.use((err:any, req:any, res:any, next:any) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

export default app;
