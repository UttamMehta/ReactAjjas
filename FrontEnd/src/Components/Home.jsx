import React from 'react'

export default function Home() {
  return (
    <div>
       <Link to="/login">
        <h3>Login Page</h3>
      </Link>
      <Link to="/chat">
        <h3>Chat Page</h3>
      </Link>
    </div>
  )
}
