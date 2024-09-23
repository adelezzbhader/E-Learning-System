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
  const [resetEmail, setResetEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState(''); 
  const [step, setStep] = useState('login');

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
      // const response = await axios.post('http://backend-url/api/auth/forgot-password', { email: resetEmail });
      console.log('Password reset link sent!');
      setStep('verify'); 
    } catch (error) {
      console.error('Failed to send reset link:', error.response ? error.response.data : error.message);
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    
    setStep('reset'); 
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      console.error('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://backend-url/api/auth/reset-password', {
        newPassword,
        
      });
      console.log('Password reset successful!', response.data);
      setStep('login'); 
    } catch (error) {
      console.error('Failed to reset password:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-gradient-xy">
      <div className="text-center mb-12">
        <h1 className="text-4xl mr-5 font-extrabold text-white drop-shadow-lg transition duration-300">
          {step === 'login' ? "Welcome Back!" : step === 'verify' ? "Verify Your Email" : "Join Us Today!"}
        </h1>
        <p className="text-white text-opacity-80">
          {step === 'verify' ? "Please enter the verification code sent to your email." : `Please ${isLogin ? "login" : "signup"} to continue.`}
        </p>
      </div>

      {step === 'login' && (
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl mt-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Login</h2>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
              <button
                type="button"
                className="text-indigo-600 hover:underline"
                onClick={() => setStep('forgot')}
              >
                Forgot password?
              </button>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Login
              </button>
            </div>
            <div className="text-center">
              <span>Don't have an account? <button
                type="button"
                className="text-indigo-600 hover:underline"
                onClick={() => {
                  setIsLogin(false);
                  setStep('signup');
                }}
              >
                Signup
              </button></span>
            </div>
          </form>
        </div>
      )}

      {step === 'signup' && (
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl mt-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Signup</h2>
          </div>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Create password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4 relative">
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Signup
              </button>
            </div>
            <div className="text-center">
              <span>Already have an account? <button
                type="button"
                className="text-indigo-600 hover:underline"
                onClick={() => {
                  setIsLogin(true);
                  setStep('login');
                }}
              >
                Login
              </button></span>
            </div>
          </form>
        </div>
      )}

      {step === 'forgot' && (
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl mt-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Forgot Password</h2>
          </div>
          <form onSubmit={handleForgotPassword}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 mt-4"
            >
              Send Reset Link
            </button>
          </form>
        </div>
      )}

      {step === 'verify' && (
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl mt-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Verify Code</h2>
          </div>
          <form onSubmit={handleVerifyCode}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter verification code"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 mt-4"
            >
              Verify
            </button>
          </form>
        </div>
      )}

      {step === 'reset' && (
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl mt-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Reset Password</h2>
          </div>
          <form onSubmit={handleResetPassword}>
            <div className="mb-4">
              <input
                type="password"
                placeholder="New Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 mt-4"
            >
              Reset Password
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default LoginSignupForm;
