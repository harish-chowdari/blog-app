import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>
        Login
        <form>
          <input type='text' placeholder='user name' />
          <input type='password' placeholder='password' />
          <button>Login</button>
          <p>This is an error!</p>
          <span>
            Don't have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </h1>
    </div>
  )
}

export default Login