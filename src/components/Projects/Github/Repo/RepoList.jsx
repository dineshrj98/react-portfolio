import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiGitRepositoryLine } from "react-icons/ri";
import "./Repo.css"

// Component to display a list of repositories
const RepoList = ({repos}) => {
  // State to manage search input value
  const [search, setSearch] = useState("")

  return (
    <div className='repolist-wrapper'>
      {/* Search input field */}
      <div className="search">
        <input type="text" placeholder="🔍 Find a repo" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className='main'>
        {/* Filter and map repositories */}
        {repos
          .filter((value) => {
            if (search === ""){
              return value;
            } else if (
              value.name.toLowerCase().includes(search.toLowerCase())
            ){
              return value;
            }
          })
          .map((repo) => {
            return (
              <div key={repo.name} className="aaa">
                <ul>
                  {/* Display repository name and link */}
                  <li>
                    <span><RiGitRepositoryLine/></span>
                    <Link to={`/repo/${repo.name}`}>{repo.name}</Link>
                  </li>
                  {/* Display repository visibility */}
                  <li className='public'>{repo.visibility}</li>
                </ul> 
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default RepoList;
