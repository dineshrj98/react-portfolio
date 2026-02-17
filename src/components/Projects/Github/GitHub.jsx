import React from 'react';
import { useEffect, useState } from 'react';
import './Github.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AiOutlineHome } from 'react-icons/ai';

export default function Github() {
  // State variables to store GitHub user data
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState();
  const [bio, setBio] = useState();
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();
  const [repo, setRepo] = useState();
  const [loading, setLoading] = useState(true);

  // Fetch GitHub user data from API
  useEffect(() => {
    fetch('https://api.github.com/users/dineshrj98')
      .then((res) => res.json())
      .then(
        (result) => {
          // Set state variables with fetched data
          setAvatar(result.avatar_url);
          setName(result.name);
          setBio(result.bio);
          setFollowers(result.followers);
          setFollowing(result.following);
          setRepo(result.public_repos);
          setLoading(false); // Set loading state to false when data is fetched
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <>
      <Helmet>
        <title>Github Profile</title>
        <meta name="description" content="GitHub profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/github" />
      </Helmet>

      {/* Render loading message while data is being fetched, otherwise render user data */}
      {loading ? (
        <p className="loading">Loading....</p>
      ) : (
        <>
          {/* Navigation back to home */}
          <nav>
            <Link to="/">
              <AiOutlineHome />
            </Link>
          </nav>

          {/* GitHub user profile data */}
          <div className="github-wrapper">
            <div className="github-img">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="github-name">
              <h1>{name}</h1>
              <h2>{bio}</h2>
            </div>
            <div className="github-cards">
              {/* Number of repositories */}
              <div className="repository">
                <span>{repo}</span>
                <p>Repositories</p>
              </div>
              {/* Number of followers */}
              <div className="followers">
                <span>{followers}</span>
                <p>Follower</p>
              </div>
              {/* Number of following */}
              <div className="following">
                <span>{following}</span>
                <p>Following</p>
              </div>
            </div>
            {/* Link to view repositories */}
            <div className="github-repo-link">
              <Link to="/repo">View Repo</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
