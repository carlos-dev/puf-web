import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './Login'
import { SignUp } from './SignUp'
import { Dashboard } from './Dashboard'
import { useAuth } from 'hooks/auth'

const App: React.FC = () => {
  const { logged } = useAuth()
  console.log(logged)
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
      {/* {logged ? <Navigate to="/" replace /> : null} */}
    </BrowserRouter>
  )
}

export default App
