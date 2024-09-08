import React, { useState } from 'react';

const LoginSignupForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className={`w-full max-w-md bg-white p-8 rounded-lg shadow-lg ${isLogin ? '' : 'hidden'}`}>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Login</h2>
        </div>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <i className='bx bx-hide absolute right-3 top-1/2 transform -translate-y-1/2'></i>
          </div>
          <div className="mb-4 text-right">
            <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg"
            >
              Login
            </button>
          </div>
          <div className="text-center">
            <span>Don't have an account? <button
              type="button"
              className="text-blue-600 hover:underline"
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button></span>
          </div>
        </form>
        {/* <div className="flex justify-center items-center my-6">
          <div className="border-t border-gray-300 w-full"></div>
          <div className="absolute bg-white px-4 text-gray-500">or</div>
        </div>
        <div className="flex justify-between mb-4">
          <a href="#" className="flex items-center text-blue-600 hover:underline">
            <i className='bx bxl-facebook mr-2'></i>
            <span>Login with Facebook</span>
          </a>
          <a href="#" className="flex items-center text-blue-600 hover:underline">
            <img src="#" alt="" className="w-6 h-6 mr-2" />
            <span>Login with Google</span>
          </a>
        </div> */}
      </div>

      <div className={`w-full max-w-md bg-white p-8 rounded-lg shadow-lg ${isLogin ? 'hidden' : ''}`}>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Signup</h2>
        </div>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Create password"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <i className='bx bx-hide absolute right-3 top-1/2 transform -translate-y-1/2'></i>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg"
            >
              Signup
            </button>
          </div>
          <div className="text-center">
            <span>Already have an account? <button
              type="button"
              className="text-blue-600 hover:underline"
              onClick={() => setIsLogin(true)}
            >
              Login
            </button></span>
          </div>
        </form>
        {/* <div className="flex justify-center items-center my-6">
          <div className="border-t border-gray-300 w-full"></div>
          <div className="absolute bg-white px-4 text-gray-500">or</div>
        </div>
        <div className="flex justify-between mb-4">
          <a href="#" className="flex items-center text-blue-600 hover:underline">
          <i className="fa-brands fa-square-facebook"></i>            <span>Login with Facebook</span>
          </a>
          <a href="#" className="flex items-center text-blue-600 hover:underline">
          <i className="fa-brands fa-google"></i>            <span>Login with Google</span>
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default LoginSignupForm;
