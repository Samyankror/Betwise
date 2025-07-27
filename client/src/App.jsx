
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRouter.jsx'




function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
       
          <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />

          <Route element={<PrivateRoute />}>
           <Route path='/' element={<Home />} />
          </Route>
        </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
