import React from 'react'
import { Link } from 'react-router-dom'

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
