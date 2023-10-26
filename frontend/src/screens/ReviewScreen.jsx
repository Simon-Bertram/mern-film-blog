import reviews from '../reviews.js'
// Get value of the reviewId parameter from the URL
import { useParams } from 'react-router-dom'

const ReviewScreen = () => {
  const { reviewId } = useParams();
  console.log(reviewId);
  const review = reviews.find((review) => review.name === reviewId);

  return ( 
    <article className='review'>
      <section className="review-header">
        <h1>{review.title}</h1>
        <p>Published on <time datetime="2023-10-26T08:00:00Z">{review.date}</time></p>
      </section>
      <section className="review-body">
        {review.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        )
        )}
      </section>
    </article>
    
   );
}
 
export default ReviewScreen;