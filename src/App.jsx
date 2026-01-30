import { BrowserRouter,Routes,Route,Link,} from 'react-router-dom'
import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Login/Login.css'
import Login from './Components/Login/Login'
import TesteLogin from './Components/Login/TesteLogin'
import Sobre from './page/Sobre'
import Home from './page/Home'
import Layout from './layout/Layout'
import PageLogin from './page/PageLogin'

function App() {
  const [EmailLogin,setEmailLogin] = useState('')
 
  return (
    <React.Fragment>
      <PageLogin></PageLogin>
    </React.Fragment>
  )
}

export default App
