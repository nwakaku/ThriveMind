import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating, totalStars = 5, starSize = 16 }) => {
  const filledStars = Array.from({ length: Math.floor(rating) }, (_, index) => (
    <FaStar key={index} className="text-yellow-500" style={{ fontSize: `${starSize}px` }} />
  ));

  const emptyStars = Array.from({ length: totalStars - Math.floor(rating) }, (_, index) => (
    <FaStar key={index + Math.floor(rating)} className="text-gray-500" style={{ fontSize: `${starSize}px` }} />
  ));

  return (
    <div className="flex items-center space-x-1">
      {filledStars}
      {emptyStars}
    </div>
  );
};

export default StarRating;
