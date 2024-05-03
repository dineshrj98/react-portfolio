import { useState } from 'react'; // Import useState hook for managing component state
import axios from 'axios'; // Import axios for making HTTP requests
import SearchResult from './SearchResult'; // Import SearchResult component for displaying results
import Searchbar from './SearchBar'; // Import Searchbar component for user input
import { Link } from "react-router-dom"; // Import Link for creating navigation links
import { AiOutlineHome } from 'react-icons/ai'; // Import Home icon from React Icons

const SearchEngine = () => {
  // State variable to store search results
  const [result, setResult] = useState(null);

  // Function to fetch data from the API using async/await for cleaner syntax
  const fetchData = async (value) => {
    try {
      // Make a GET request to the dummyjson API endpoint with search query and limit parameters
      const { data } = await axios.get(
        `https://dummyjson.com/recipes/search?q=${value}&limit=10`
      );

      // Extract the "recipes" array from the response data
      return data.recipes;
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <nav>
        {/* Link to the home page using React Router */}
        <Link to="/">
          <AiOutlineHome /> {/* Display the Home icon */}
        </Link>
      </nav>
      <Searchbar
        // Pass the fetchData and setResult functions as props to Searchbar
        fetchData={fetchData}
        setResult={setResult}
        suggestionKey="name" // Likely used for suggestions based on recipe name
      />
      {/* Conditionally render SearchResult component only if results exist */}
      {result && <SearchResult {...result} />}
    </div>
  );
};

export default SearchEngine;
