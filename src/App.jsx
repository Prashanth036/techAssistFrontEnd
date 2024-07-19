import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RegistrationForm } from './pages/RegistraionPage'
import {  HashRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import { UserProfile } from './pages/Profile'
import { Login } from './pages/Login'
import RequireAuth from './components/requireAuth'
function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Login />} />

          <Route path='/register' element={<RegistrationForm />} />
          <Route path="/" element={<RequireAuth />}>
            <Route path='/user' element={<UserProfile />} />
          </Route>
          <Route path='*' element={<>Not Found</>} />
        </Routes>
      </HashRouter>

    </>
  )
}

export default App
