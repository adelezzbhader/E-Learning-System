import { useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

const LoginSignupForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-gradient-xy">
      <div className="text-center mb-12">
        <h1 className="text-4xl mr-5 font-extrabold text-white drop-shadow-lg transition duration-300">{isLogin ? "Welcome Back!" : "Join Us Today!"}</h1>
        <p className="text-white text-opacity-80">Please {isLogin ? "login" : "signup"} to continue.</p>
      </div>

      <div className={`w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl transform transition-all duration-500 hover:shadow-3xl ${isLogin ? '' : 'hidden'} mt-6`}>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Login</h2>
        </div>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
            </button>
          </div>
          <div className="mb-4 text-right">
            <a href="#" className="text-indigo-600 hover:underline">Forgot password?</a>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105"
            >
              Login
            </button>
          </div>
          <div className="text-center">
            <span>Don't have an account? <button
              type="button"
              className="text-indigo-600 hover:underline focus:outline-none"
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button></span>
          </div>
        </form>
      </div>

      <div className={`w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl transform transition-all duration-500 hover:shadow-3xl ${isLogin ? 'hidden' : ''} mt-6`}>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Signup</h2>
        </div>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Create password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              <BsFillEyeFill />
            </button>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105"
            >
              Signup
            </button>
          </div>
          <div className="text-center">
            <span>Already have an account? <button
              type="button"
              className="text-indigo-600 hover:underline focus:outline-none"
              onClick={() => setIsLogin(true)}
            >
              Login
            </button></span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginSignupForm;
