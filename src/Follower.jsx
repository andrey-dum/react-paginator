import React from 'react'

const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <div className='card'>
      <img src={avatar_url} alt={login} />
      <h4>${login}</h4>
      <a href={html_url} className='btn'>
        view profile
      </a>
    </div>
  )
}

export default Follower