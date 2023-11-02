import asyncHandler from 'express-async-handler';

// @desc   Add a comment
// route   POST /api/reviews/:name
// access  Public
const addComment = asyncHandler(async (req, res) => {
  const { postedBy, comment } = req.body;
  const { name } = req.params;
  const review = Reviews.find((review) => review.name === name);
  if (review) {
    review.comments.push({ postedBy, text });
    res.status(200).send(review.comments);
  } else {  
    res.status(404).send("Review not found");
  }
});

// @desc   Upvote a comment
// route   POST /api/reviews/:commentId/upvote
// access  Private
const upvoteComment = asyncHandler(async (req, res) => {
  const { commentId } = req.params;
  const comment = Comments.find((comment) => comment._id === commentId);
  if (comment) {
    comment.upvotes += 1;
    res.status(200).send(`The comment now has ${comment.upvotes} upvotes!`);
  } else { 
    res.status(404).send("Comment not found");
  }
});

export {
  addComment,
  upvoteComment,
}