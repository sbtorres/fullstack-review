import React from 'react';

const RepoList = (props) => (
  <div>
    <h3> Top 25 Repos by Stars </h3>
    {props.repos.map((repo, index) => {
      return(
        <div key={repo.id} className="repo">
          <div className="name">Repository: {repo.repo_name}</div>
          <div className="description">Description: {repo.description}</div>
          <div className="sub-content">
            <div className="creator">Creator: {repo.username}</div>
            <div className="stars">Stars: {repo.stars}</div>
            <div className="forks">Forks: {repo.forks}</div>
            <div className="updated_at">Last Updated: {repo.updated_at}</div>
            <div className="language">Language: {repo.language}</div>
          </div>
        </div>
      )
    })}
  </div>
)

export default RepoList;