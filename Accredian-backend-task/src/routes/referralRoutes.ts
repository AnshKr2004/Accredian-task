import { Router } from 'express';
import { createReferral } from '../controllers/referralController';

const router = Router();

router.post('/', createReferral);

export default router;
