import asyncHandler from 'express-async-handler';

// @desc   Get a review by name
// route   GET /api/reviews/:name
// access  Public
const getReview = asyncHandler(async (req, res) => {
  const { name } = req.params;
  console.log(name);
});

// @desc   Upvote a review
// route   POST /api/reviews/:name/upvote
// access  Private
const upvoteReview = asyncHandler(async (req, res) => {
  const { name } = req.params;
  const review = Reviews.find((review) => review.name === name);
  if (review) {
    review.upvotes += 1;
    res.status(200).send(`The ${name} review now has ${review.upvotes} upvotes!`);
  } else { 
    res.status(404).send("Review not found");
  }
});

// @desc   Add a comment
// route   POST /api/reviews/:name
// access  Public
const addComment = asyncHandler(async (req, res) => {
  const { postedBy, text } = req.body;
  const { name } = req.params;
  const review = Reviews.find((review) => review.name === name);
  if (review) {
    review.comments.push({ postedBy, text });
    res.status(200).send(review.comments);
  } else {  
    res.status(404).send("Review not found");
  }
});

export {
  getReview,
  upvoteReview,
  addComment,
}