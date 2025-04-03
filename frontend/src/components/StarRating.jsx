import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const maxStars = 5;
  return (
    <div className="star-rating">
      {[...Array(maxStars)].map((_, i) => (
        rating >= i + 1 ? <FaStar key={i} color="#FFD700" /> :
        rating >= i + 0.5 ? <FaStarHalfAlt key={i} color="#FFD700" /> :
        <FaRegStar key={i} color="#FFD700" />
      ))}
    </div>
  );
};

export default StarRating;
