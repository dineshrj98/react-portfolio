import React, { useEffect, useState } from 'react';

// Kanye component fetches and displays a random Kanye West quote
const Kanye = () => {
  // State to store the fetched quote
  const [quote, setQuote] = useState("");

  // Effect hook to fetch the quote when the component mounts
  useEffect(() => {
    // API URL for Kanye West quotes
    const apiURL = "https://api.kanye.rest/";

    // Function to fetch the quote from the API
    const fetchQuote = async () => {
      try {
        // Fetch quote from the API
        const response = await fetch(apiURL);
        const data = await response.json();
        // Update state with the fetched quote
        setQuote(data.quote);
      } catch (error) {
        // Log error if fetching quote fails
        console.error("Error fetching quote:", error);
      }
    };

    // Call fetchQuote function when the component mounts
    fetchQuote();
  }, []);

  // Render the fetched quote in italic style
  return (
    <div>
      <p style={{ fontStyle: "italic" }}>"{quote}"</p>
    </div>
  );
};

export default Kanye;

