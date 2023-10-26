import React, { useState, useEffect } from 'react'
import { Theme } from 'components'
// import SignUp from './SignUp'
import Login from './Login'

const Dashboard = () => {
  const logout = () => {
    localStorage.removeItem('auth')
    window.location.reload()
  }

  return (
    <div>
      estou logado <button onClick={logout}>sair</button>{' '}
    </div>
  )
}

const App: React.FC = () => {
  const [logged, setLogged] = useState(() => {
    const auth = localStorage.getItem('auth')
    return auth ? JSON.parse(auth) : false
  })

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(logged))
  }, [logged])

  return (
    <Theme>{logged ? <Dashboard /> : <Login onSuccess={setLogged} />}</Theme>
  )
}

export default App
