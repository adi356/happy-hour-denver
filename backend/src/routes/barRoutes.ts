import { Router } from 'express';
import { getBars } from '../controllers/barController'

const router = Router();

router.get('/', getBars);

export default router;