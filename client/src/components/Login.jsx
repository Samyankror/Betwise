import { FcGoogle } from 'react-icons/fc'; // Google icon
import bgImage from '../images/login_bg.avif';

function Login() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className= "backdrop-blur-lg p-8 rounded-lg shadow-md w-96 border border-white/10">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-white" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* OR divider */}
        <div className="flex items-center my-4 text-white">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-sm">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Google Sign In Button */}
        <button className="w-full border border-gray-300 bg-white text-black py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100 transition duration-200">
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* Signup Link */}
        <p className="text-white text-center mt-4 text-sm">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
