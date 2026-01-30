import { BrowserRouter,Routes,Route,Link,} from 'react-router-dom'
import React from 'react'
import Home from '../page/Home'
import TesteLogin from '../Components/Login/Login'
import Sobre from '../page/Sobre'

import './Layout.css'

function Layout() {
  return (
    <>
   
   
 <BrowserRouter>
       <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        </nav>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Sobre' element={<Sobre></Sobre>}></Route>
      <Route path='/login' element={<TesteLogin></TesteLogin>}></Route>
    </Routes>
 </BrowserRouter>
    </>
  )
}

export default Layout