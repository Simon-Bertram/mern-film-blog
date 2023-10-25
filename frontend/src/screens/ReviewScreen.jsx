import articles from '../articles.js'

// Get value of the articleId parameter from the name
import { useParams } from 'react-router-dom'

const ReviewScreen = () => {
  const { reviewId } = useParams();
  console.log(articleId);
  const review = review.find((review) => review.name === reviewId);

  return ( 
    <h1>This is the article page for the article with id: {reviewId}</h1>
   );
}
 
export default ReviewScreen;