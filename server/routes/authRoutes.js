import express from 'express'
import { signUp, signIn, getMe, signOut } from '../controllers/authController.js'
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router()

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get("/me", protect, getMe);
router.post("/signout", signOut);

export default router;