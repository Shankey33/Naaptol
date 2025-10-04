import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const User = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 pb-20">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
 
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-700">{isLogin ? 'Login' : 'Register'}</h2>
          <p className="text-gray-600 mt-2">
            {isLogin ? 'Welcome back!' : 'Create your account'}
          </p>
        </div>

        <form className="space-y-6">
          <div className="relative">
            <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold">Email</label>
            <div className="flex items-center">
              <div className="absolute left-3 text-gray-500">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <input
                type="email"
                id="email"
                className="w-full py-2 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
          </div>
          

          {!isLogin && (
            <div className="relative">
              <label htmlFor="name" className="block text-gray-700 mb-2 font-semibold">Full Name</label>
              <div className="flex items-center">
                <div className="absolute left-3 text-gray-500">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <input
                  type="text"
                  id="name"
                  className="w-full py-2 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
            </div>
          )}


          <div className="relative">
            <label htmlFor="password" className="block text-gray-700 mb-2 font-semibold">Password</label>
            <div className="flex items-center">
              <div className="absolute left-3 text-gray-500">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full py-2 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="********"
              />
              <div 
                className="absolute right-3 text-gray-500 cursor-pointer" 
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </div>
            </div>
          </div>


          {!isLogin && (
            <div className="relative">
              <label htmlFor="confirmPassword" className="block text-gray-700 mb-2 font-semibold">Confirm Password</label>
              <div className="flex items-center">
                <div className="absolute left-3 text-gray-500">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full py-2 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="********"
                />
              </div>
            </div>
          )}

          {isLogin && (
            <div className="text-right">
              <a href="#" className="text-sm text-green-700 hover:text-green-800">Forgot password?</a>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition font-semibold"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              onClick={toggleForm}
              className="ml-2 text-green-700 hover:text-green-800 font-semibold"
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default User
