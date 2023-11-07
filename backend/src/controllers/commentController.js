import asyncHandler from 'express-async-handler';
import Comment from '../models/commentModel.js';
import Review from '../models/reviewModel.js';

// @desc   Add a comment
// route   POST /api/reviews/:name/comments/addComment
// access  Private
const addComment = asyncHandler(async (req, res) => {

  try {
    // get the review name from the request params
    const { name } = req.params;
    
    // get the review from the database
    const review = await Review.findOne({ name });

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // get the user from the request
    const { _id } = req.user;
    console.log(`user id: ${_id}`);

    // // get the user from the database
    // const user = await User.findOne({ _id });
    // console.log(`user fetched: ${user}`);

    // get the comment text from the request
    const { commentText } = req.body;

    // create a new comment
    const newComment = await Comment.create({
      postedBy: _id,
      review: review._id,
      commentText,
    });
    console.log(`new comment: ${newComment}`);

    if (!newComment) {
      console.error("Failed to create the comment");
      res.status(400).send("Invalid comment data");
    } else {
      // add the comment to the review
      review.comments.push(newComment._id);
      try {
        await review.save();
        res.status(201).json(newComment);
      } catch (error) {
        console.error(`${error} - Failed to save the review`);
        res.status(500).json({ message: "Failed to update review" }); 
      }
    }
  
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @desc   Upvote a comment
// route   POST /api/reviews/:commentId/upvote
// access  Private
const upvoteComment = asyncHandler(async (req, res) => {
  try {
    const { name } = req.params;
    const { postedBy, commentText } = req.body;
    const comment = await Comment.findOne({ name });

    if (!comment) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Get the user's ID from the request
    const userId = req.user._id;
    if (!userId) {
      return res.status(401).json({ message: "You must be logged in to upvote a comment" });
    }

    // Check if the user has already upvoted this comment
    if (comment.upvotes.includes(userId)) {
      return res.status(400).json({ message: "You've already upvoted this comment" });
    }

    // Add the user's ID to the upvotes array
    comment.upvotes.push(userId);

    // Save the updated review
    await comment.save();

    res.status(200).json({ message: `The ${name} review now has ${review.upvotes.length} upvotes!` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }


  const { commentId } = req.params;
  const comment = Comment.find((comment) => comment._id === commentId);
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