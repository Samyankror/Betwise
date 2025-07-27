import { FcGoogle } from 'react-icons/fc';
import {GoogleAuthProvider, getAuth,signInWithPopup} from 'firebase/auth';
import {app} from '../firebase.js'
import { signInSuccess } from '../redux/user/userSlice.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function OAuth(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleAuth = async()=>{
           try{
              const provider = new GoogleAuthProvider();
              const auth = getAuth(app);
              const result = await signInWithPopup(auth,provider);
              console.log(result);

              const res = await fetch('/api/auth/google',{
                method : 'POST',
                headers : {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify({username : result.user.displayName, email : result.user.email,photo:result.user.photoURL})
              })

              const data = await res.json();
              console.log(data);
              dispatch(signInSuccess(data.user));
              navigate('/');

           }catch(error){
               console.log(error);
           }
    }
    return(
          <button className="w-full border-none border-gray-300 bg-white text-xl cursor-pointer font-semibold text-black py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition duration-200"
           onClick={handleGoogleAuth}
          >
                   <FcGoogle size={20} />
                   Continue with Google
          </button>
    )
}

export default  OAuth;