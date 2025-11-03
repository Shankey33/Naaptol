import { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { AuthContext } from '../AuthContext'

const User = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { login, register, error, setError } = useContext(AuthContext);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(null);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleUserAuth = async(e) => {

    e.preventDefault();
    if(isLogin) {
      login(email, password);
    }
    else{
      register(name, email, password);
    };
  }
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 pb-20">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
 
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-700">{isLogin ? 'Login' : 'Register'}</h2>
          <p className="text-gray-600 mt-2">
            {isLogin ? 'Welcome back!' : 'Create your account'}
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleUserAuth}>
          <div className="relative">
            {error && 
              <div className="mb-4 p-3 text-red-700 bg-red-100 border border-red-400 rounded">
                {error}
              </div>
            }
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
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
