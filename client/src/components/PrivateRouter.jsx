import { Navigate, Outlet} from "react-router-dom";
import { useSelector } from "react-redux";


const PrivateRoute = ({ children }) => {
   const currUser = useSelector((state)=>state.user.currUser);
   console.log(currUser);
 
 return (
    currUser ? <Outlet/> : <Navigate to='/sign-in' />
 )
};

export default PrivateRoute;