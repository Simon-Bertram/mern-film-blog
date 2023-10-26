import { Link } from "react-router-dom";

const ReviewsList = ({ reviews }) => {
  return ( 
    <article>
      {reviews.map(review => (
        <div className="review-summary" key={review.name}>
          <Link to={`/reviews/${review.name}`} className="review-list-item">
            <h2>{review.title}</h2>
            <p>{review.content[0].substring(0, 150)}...</p>
          </Link>
        </div>
      ))}
    </article>
   );
}
 
export default ReviewsList;