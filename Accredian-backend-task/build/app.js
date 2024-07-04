"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const referralRoutes_1 = __importDefault(require("./routes/referralRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/referrals', referralRoutes_1.default);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
exports.default = app;
