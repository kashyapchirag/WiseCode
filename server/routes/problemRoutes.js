import express from 'express'
import { getCompletion, getProblemSet } from '../controllers/problemController.js';
import { getProblemBySlug } from '../controllers/problemController.js';
import { runCode } from '../controllers/problemController.js';
import { submitCode } from '../controllers/problemController.js';
import { optionalAuth, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/problems', getProblemSet);
router.get('/problems/completion', protect, getCompletion);
router.get('/problems/:slug', optionalAuth, getProblemBySlug);
router.post('/run', protect, runCode);
router.post('/submit', protect, submitCode);

export default router