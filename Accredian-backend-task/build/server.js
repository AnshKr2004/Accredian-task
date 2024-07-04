"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const client_1 = require("@prisma/client");
const cors = require('cors');
const prisma = new client_1.PrismaClient();
app_1.default.use(cors());
const PORT = process.env.PORT || 3000;
const startServer = async () => {
    try {
        await prisma.$connect();
        console.log('Connected to the database');
        app_1.default.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error('Error connecting to the database', error);
        process.exit(1);
    }
};
startServer();
