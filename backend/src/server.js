import dotenv from "dotenv";
dotenv.config();
import express, { urlencoded } from "express";
import cors from "cors";

const app = express();

let reviewsInfo = [{
  'name': 'killers-of-the-flower-moon',
  'upvotes': 0,
  'comments': [],
}, {
  'name': 'saw-x',
  'upvotes': 0,
  'comments': [],
}, {
  'name': 'a-haunting-in-venice',
  'upvotes': 0,
  'comments': [],
}, {
  'name': 'the-creator',
  'upvotes': 0,
  'comments': [],
}];

// Allow the frontend to make requests from a different origin
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});