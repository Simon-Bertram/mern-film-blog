import reviews from "../reviews";
import { Link } from "react-router-dom";
import ReviewsList from "../components/ReviewsList";

const ReviewListScreen = () => {
  return ( 
    <section className="review-list">
      <h1>Latest Reviews</h1>
      <ReviewsList reviews={reviews} />
    </section>
   );
}
 
export default ReviewListScreen;