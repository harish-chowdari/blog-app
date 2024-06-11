import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1>
        Register
        <form>
          <input type='text' placeholder='user name' />
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <button>Register</button>
          <p>This is an error!</p>
          <span>
            Don't have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </h1>
    </div>
  )
}

export default Register