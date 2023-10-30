import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import { Dashboard } from './Dashboard'
import { useAuth } from 'hooks/auth'

const App: React.FC = () => {
  const { logged } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        {logged ? (
          <Route path="/" element={<Dashboard />} />
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App
