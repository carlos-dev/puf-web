import React from 'react'
import { useAuth } from 'hooks/auth'

export const Dashboard = () => {
  const { logout } = useAuth()

  return (
    <div>
      estou logado <button onClick={logout}>sair</button>{' '}
    </div>
  )
}
