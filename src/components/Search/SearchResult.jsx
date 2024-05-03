// SearchResult.jsx
import React from 'react';
import './SearchResult.css';
import { FaStar, FaUtensils, FaClock, FaUserFriends, FaRegClock, FaBolt, FaFileAlt, FaInfoCircle } from 'react-icons/fa';

const SearchResult = (props) => {
  const { name, image, rating, reviewCount, caloriesPerServing, mealType, ingredients, prepTimeMinutes, cookTimeMinutes, servings, difficulty, instructions } = props;

  return (
    <div className="search-result-container">
      <div className="search-result-header">
        <h2 className="search-result-name">{name}</h2>
        <img src={image} alt={name} className="search-result-image" />
      </div>
      <div className="search-result-info">
        <div className="search-result-rating">
          <FaStar className="icon" />
          <span>{rating} ({reviewCount} reviews)</span>
        </div>
        <div className="search-result-details">
          <div className="search-result-detail">
            <FaUtensils className="icon" />
            <span>{mealType}</span>
          </div>
          <div className="search-result-detail">
            <FaRegClock className="icon" />
            <span>{prepTimeMinutes} min prep</span>
          </div>
          <div className="search-result-detail">
            <FaClock className="icon" />
            <span>{cookTimeMinutes} min cook</span>
          </div>
          <div className="search-result-detail">
            <FaUserFriends className="icon" />
            <span>{servings} servings</span>
          </div>
          <div className="search-result-detail">
            <FaBolt className="icon" />
            <span>{difficulty}</span>
          </div>
          <div className="search-result-detail">
            <FaFileAlt className="icon" />
            <span>{caloriesPerServing} calories/serving</span>
          </div>
          <div className="search-result-detail">
            <FaInfoCircle className="icon" />
            <span>{ingredients}</span>
          </div>
          <div className="search-result-detail">
            <FaInfoCircle className="icon" />
            <span>{instructions}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
