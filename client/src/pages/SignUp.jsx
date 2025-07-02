import { FcGoogle } from 'react-icons/fc'; // Google icon
import bgImage from '../images/login_bg.avif';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  {Link} from 'react-router-dom'

function SignUp() {
     const navigate = useNavigate();
     const [formData,setFormData] = useState({});
     const handleChange=(e)=>{
        setFormData({...formData,[e.target.id]:e.target.value})
     }
    const handleSubmit = async(e)=>{
         e.preventDefault();
        console.log(formData);
        try{
         const res = await fetch('/api/auth/signup',{
            method:'POST',
            headers : {
           "Content-Type" : "application/json",
            },
            body:JSON.stringify(formData)
         })

         const data = await res.json();
         console.log('hello');
          navigate('/sign-in');

        }catch(error){
            console.log(error);
        }
    }
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-slate-800"
    >
      <div className= "backdrop-blur-lg p-8  rounded-2xl shadow-md w-[420px] border-10 border-white">
        <h2 className="text-3xl font-semibold mb-6 text-center text-white">Sign up</h2>
        <form onSubmit = {handleSubmit} className='flex flex-col gap-4'>
              <div className="">
            <label className="block  font-semibold text-white mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your username"
            />
          </div>
          <div className="">
            <label className="block  font-semibold mb-2 text-white" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
               onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your email"
            />
          </div>
          <div className="">
            <label className="block  font-semibold text-white mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
               onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-xl font-semibold cursor-pointer py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign up
          </button>
        </form>

        {/* OR divider */}
        <div className="flex items-center my-4 text-white">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-sm font-semibold">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Google Sign In Button */}
        <button className="w-full border-none border-gray-300 bg-white text-xl cursor-pointer font-semibold text-black py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition duration-200">
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* Signup Link */}
        <p className="text-white text-center mt-4 text-sm">
           Already have an account?{' '}
          <Link href="/sign-in" className="text-blue-400 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;