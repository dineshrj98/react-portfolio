import * as React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineArrowLeft } from 'react-icons/ai';


export default function Repo() {
  // Extracting the repository name from the URL parameters
  const { repoName } = useParams();

  // State to hold repository data and loading status
  const [repo, setRepo] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  // Fetch repository data from GitHub API
  React.useEffect(() => {
    fetch(`https://api.github.com/repos/dineshrj98/${repoName}`)
      .then((res) => res.json())
      .then((userRepo) => {
        setRepo(userRepo);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [repoName]);

  return (
    <>
      {loading ? ( // Display loading message while fetching data
        <p className="loading">Loading....</p>
      ) : repo ? ( // If repository data is available
        <>
          <nav>
            <Link to="/"><AiOutlineHome/></Link>
            <Link to="/repo"><AiOutlineArrowLeft/></Link>
          </nav>
          <section className="post-wrapper">
            <h1>More Info:</h1>
            {/* Display repository information */}
            <div className="post-info">
              <p>Description: {repo.description || "None"}</p>
              <p>Language used: {repo.language || "N/A"}</p>
              <p>Size: {repo.size} KB</p>
              <p>Date created: {repo.created_at ? repo.created_at.slice(0, 10) : "N/A"}</p>
              <p>Last update: {repo.updated_at ? repo.updated_at.slice(0, 10) : "N/A"}</p>
              <p><a href={`${repo.html_url}`}>Click to View Repo</a></p>
            </div>
          </section>
        </>
      ) : (
        <p>No repository found</p> // Display message if repository not found
      )}
    </>
  );
}
