import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ numOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex: number) {
    setRating(getCurrentIndex);
  }

  function handleMouseMove(getCurrentIndex: number) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      <h1>Star rating</h1>
      <div className="starContainer">
        {[...Array(numOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={`starItem ${
                index <= (hover || rating) ? "active" : "inactive"
              }`}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseMove(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={45}
            />
          );
        })}
      </div>
    </div>
  );
}
