import dotenv from "dotenv";
dotenv.config();
import cookieParser from 'cookie-parser';
import express, { urlencoded } from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

// Allow the frontend to make requests from a different origin
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});