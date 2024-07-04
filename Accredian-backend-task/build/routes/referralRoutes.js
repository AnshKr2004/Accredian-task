"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const referralController_1 = require("../controllers/referralController");
const router = (0, express_1.Router)();
router.post('/', referralController_1.createReferral);
exports.default = router;
