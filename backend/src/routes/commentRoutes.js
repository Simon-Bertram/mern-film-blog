import express from 'express';
import {
  addComment,
  upvoteComment,
} from '../controllers/commentController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/:name/addComment', protect, addComment);

export default router;