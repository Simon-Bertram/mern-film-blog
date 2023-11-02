import express from 'express';
import {
  addComment,
  upvoteComment,
} from '../controllers/commentController.js';
import Comment from '../models/commentModel.js';

const router = express.Router();

router.get('/review/addComment', (req, res) => {
  res.send('Adding comment functionality');
});

export default router;