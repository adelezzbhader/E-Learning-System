import { useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import axios from 'axios';

const LoginSignupForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://backend-url/api/auth/login', {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      console.log('Login successful!', response.data);
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error('Passwords do not match!');
      return;
    }
    try {
      const response = await axios.post('http://backend-url/api/auth/register', {
        name,
        email,
        password,
      });
      console.log('Registration successful!', response.data);
      setIsLogin(true);
    } catch (error) {
      console.error('Registration failed:', error.response ? error.response.data : error.message);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://backend-url/api/auth/forgot-password', { email: resetEmail });
      console.log('Password reset link sent!', response.data);
      setIsForgotPassword(false);
    } catch (error) {
      console.error('Failed to send reset link:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-gradient-xy">
      <div className="text-center mb-12">
        <h1 className="text-4xl mr-5 font-extrabold text-white drop-shadow-lg transition duration-300">
          {isLogin ? "Welcome Back!" : isForgotPassword ? "Reset Your Password" : "Join Us Today!"}
        </h1>
        <p className="text-white text-opacity-80">
          {isForgotPassword ? "Please enter your email to reset password." : `Please ${isLogin ? "login" : "signup"} to continue.`}
        </p>
      </div>

      {isForgotPassword ? (
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl mt-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Reset Password</h2>
          </div>
          <form onSubmit={handleForgotPassword}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105"
              >
                Send Reset Link
              </button>
            </div>
            <div className="text-center">
              <span>Remembered your password? <button
                type="button"
                className="text-indigo-600 hover:underline focus:outline-none"
                onClick={() => setIsForgotPassword(false)}
              >
                Login
              </button></span>
            </div>
          </form>
        </div>
      ) : isLogin ? (
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl mt-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Login</h2>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <a href="#" className="text-indigo-600 hover:underline" onClick={() => setIsForgotPassword(true)}>Forgot password?</a>
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
      ) : (
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl mt-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Signup</h2>
          </div>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Create password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4 relative">
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
      )}
    </section>
  );
}

export default LoginSignupForm;
