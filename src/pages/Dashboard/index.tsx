import React from 'react'
import { useAuth } from 'hooks/auth'

export const Dashboard = () => {
  const { logout, logged } = useAuth()
  console.log({ logged })

  return (
    <div>
      Olá {logged?.user.name} <button onClick={logout}>sair</button>{' '}
    </div>
  )
}
