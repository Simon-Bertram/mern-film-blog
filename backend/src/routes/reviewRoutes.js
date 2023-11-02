import express from 'express';
import {
  getReview,
  upvoteReview,
} from '../controllers/reviewController.js';
import {
  addComment,
  upvoteComment,
} from '../controllers/commentController.js';
import Review from '../models/reviewModel.js';
import Comment from '../models/commentModel.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Api working');
});

// @desc   Get a review by name
// route   GET /api/reviews/:name
// access  Public
router.get('/:name', async (req, res) => {
  const { name } = req.params;

  const review = await Review.find({ name });

  if (review) {
    res.status(200).json(review);
  } else {
    res.status(404).send("Review not found");
  }
});


// @desc   Create a review
// route   POST /api/reviews/:name/upvote
// access  Private
router.post('/:name/', async (req, res) => {
  const { name, title, rating, tags, content } = req.body;
  const review = await Review.create({
    name,
    title,
    rating,
    tags,
    content,
  });
  if (review) {
    res.status(201).json(review);
  } else {
    res.status(400).send("Invalid review data");
  }
});

// @desc   Upvote a review
// route   PUT /api/reviews/:name/upvote
// access  Private
router.put('/:name/upvote', async (req, res) => {
  try {
    const { name } = req.params;
    const review = await Review.find({ name });

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Check if the user has already upvoted this review
    if (review.upvotes.includes(userId)) {
      return res.status(400).json({ message: "You've already upvoted this review" });
    }

    // Add the user's ID to the upvotes array
    review.upvotes.push(userId);

    // Save the updated review
    await review.save();

    res.status(200).json({ message: `The ${name} review now has ${review.upvotes.length} upvotes!` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


export default router;