// SearchBar.jsx
import { useState } from 'react';
import { useDebounce } from './hooks/useDebounce';
import './SearchBar.css';
import { AiOutlineSearch } from 'react-icons/ai'; // Importing search icon

const SearchBar = ({ fetchData, setResult, suggestionKey }) => {
  // State variables for search value, suggestions, and suggestions visibility
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [hideSuggestions, setHideSuggestions] = useState(true);

  // Function to update search results based on selected suggestion
  const findResult = (value) => {
    setResult(suggestions.find((suggestion) => suggestion[suggestionKey] === value));
  };

  // Debounced function to fetch suggestions on search input change
  useDebounce(
    async () => {
      try {
        const suggestions = await fetchData(value);
        setSuggestions(suggestions || []); // Set suggestions or empty array
      } catch (error) {
        console.log(error);
      }
    },
    1000,
    [value]
  );

  // Handle focus on the search input (show suggestions)
  const handleFocus = () => {
    setHideSuggestions(false);
  };

  // Handle blur on the search input (hide suggestions after delay)
  const handleBlur = () => {
    setTimeout(() => {
      setHideSuggestions(true);
    }, 200);
  };

  // Handle changes in the search input value
  const handleSearchInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h2>Recipe Search Bar</h2>
        <div className="search-icon"> {/* Container for search icon */}
          <AiOutlineSearch />
        </div>
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="search"
          className="textbox"
          placeholder="Looking for a recipe? Type here..."
          value={value}
          onChange={handleSearchInputChange}
        />
        <div className={`suggestions ${hideSuggestions ? 'hidden' : ''}`}>
          {suggestions.map((suggestion, index) => (
            <div
              className="suggestion"
              key={index}
              onClick={() => findResult(suggestion[suggestionKey])}
            >
              {suggestion[suggestionKey]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
