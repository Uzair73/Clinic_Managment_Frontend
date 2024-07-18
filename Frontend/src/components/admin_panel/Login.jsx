import React, { useContext, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Admin_context from '../../context/Admin_context'

const Login = () => {
  const { signin_form, submit_form } = useContext(Admin_context)
  const location = useLocation()

  const [input, setInput] = useState({
    Email: '',
    Password: ''
  })

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (location.pathname === '/admin-signup') {
      submit_form(input.Email, input.Password)
    } else if (location.pathname === '/admin-login') {
      signin_form(input.Email, input.Password)
    }
  }

  const isSignupPage = location.pathname === '/admin-signup'

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img className="w-full h-auto" src="/Images/Frame 15.png" alt="Logo" />
        </div>
        <div className="bg-admin_form p-8 border-2 rounded shadow-dark_shadow">
          <h1 className='text-lg font-bold text-center mb-6'>Welcome to CMS, Admin</h1>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <input
                type="email"
                placeholder={isSignupPage ? "Enter Email" : "Email"}
                name='Email'
                id='Email'
                value={input.Email}
                onChange={handleChange}
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder={isSignupPage ? "Enter Password" : "Password"}
                name='Password'
                id='Password'
                value={input.Password}
                onChange={handleChange}
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              {location.pathname === '/admin-login' && (
                <>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue_dark hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Continue to Dashboard &#8594;
                  </button>
                  <NavLink to='/admin-signup' className='block text-center text-blue-600 hover:text-blue-800 mt-2'>
                    OR Signup
                  </NavLink>
                </>
              )}
              {location.pathname === '/admin-signup' && (
                <>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue_dark hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Signup &#8594;
                  </button>
                  <NavLink to='/admin-login' className='block text-center text-blue-600 hover:text-blue-800 mt-2'>
                    Already Signed up? Login
                  </NavLink>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login