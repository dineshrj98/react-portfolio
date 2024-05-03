import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Repo.css";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import RepoList from "./RepoList";
import { Helmet } from "react-helmet-async";
import { AiOutlineHome, AiOutlineArrowLeft } from 'react-icons/ai';

export default function Repos() {
  // State variables
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [loading, setLoading] = useState(true);

  // Calculate indexes for pagination
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = repos.slice(firstPostIndex, lastPostIndex);

  // Fetch repositories data from GitHub API
  useEffect(() => {
    fetch(`https://api.github.com/users/dineshrj98/repos`)
      .then((res) => res.json())
      .then((userRepos) => {
        setRepos(userRepos);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Repositories</title>
        <meta name="description" content='List of all my repositories' />
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <link rel="canonical" href="/" />
      </Helmet>

      {/* Display loading message if data is loading */}
      {loading ? <p className="loading">Loading....</p> :
        <>
          {/* Navigation links */}
          <nav>
            <Link to="/"><AiOutlineHome /></Link>
            <Link to="/github"><AiOutlineArrowLeft /></Link>
          </nav>

          {/* Repository section */}
          <section className="bbb">
            <h2>My Repos</h2>
            <div className="repos-wrapper">
              {/* Component to display list of repositories */}
              <RepoList repos={currentPosts} />
            </div>
            <Outlet />
            {/* Pagination component */}
            <Pagination
              totalPosts={repos.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </section>
        </>
      }
    </>
  );
}
