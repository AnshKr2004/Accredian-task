import app from './app';
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined
}

const cors = require('cors');
const client = globalThis.prisma || new PrismaClient()

app.use(cors());

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await client.$connect();
    console.log('Connected to the database');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to the database', error);
    process.exit(1);
  }
};

startServer();
export default client;
