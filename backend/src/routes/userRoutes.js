import express from 'express';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('auth', authUser);
router.post('/register', registerUser);
router.post('/logout', logoutUser);
router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;