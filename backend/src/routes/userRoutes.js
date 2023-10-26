import express from 'express';

const router = express.Router();

router.get('reviews/:name', getReview);
router.put('reviews/:name/upvote', upvoteReview);
router.post('reviews/:name/add-comment', addComment);

export default router;

app.get('/api/reviews/:name', (req, res) => {
  const { name } = req.params;
  console.log(name);
});


app.put('/api/reviews/:name/upvote', (req, res) => {
  const { name } = req.params;
  const review = reviewsInfo.find((review) => review.name === name);
  if (review) {
    review.upvotes += 1;
    res.status(200).send(`The ${name} review now has ${review.upvotes} upvotes!`);
  } else {
    res.status(404).send("Review not found");
  }
});

app.post('/api/reviews/:name/add-comment', (req, res) => {
  const { postedBy, text } = req.body;
  const { name } = req.params;
  const review = reviewsInfo.find((review) => review.name === name);
  if (review) {
    review.comments.push({ postedBy, text });
    res.status(200).send(review.comments);
  } else {
    res.status(404).send("Review not found");
  }
});