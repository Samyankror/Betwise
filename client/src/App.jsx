
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'



function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<SignIn/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        
        </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
