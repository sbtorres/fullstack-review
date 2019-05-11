import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Top 25 Repos by Stars </h4>
    {props.repos.map((repo, index) => {
      return(
        <div className="repo">
          <div>Repository: {repo.repo_name}</div>
          <div>Description: {repo.description}</div>
          <div>Creator: {repo.username}</div>
          <div>Stars: {repo.stars}</div>
          <div>Forks: {repo.forks}</div>
          <div>Creation Date: {repo.created_at}</div>
          <div>Language: {repo.language}</div>
        </div>
      )
    })}
  </div>
)

export default RepoList;