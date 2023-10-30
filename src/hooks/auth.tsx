import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from 'react'

type AuthContextProps = {
  logged: boolean
  setLogged: React.Dispatch<React.SetStateAction<boolean>>
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext<AuthContextProps>({
  logged: false,
  setLogged: () => {
    /* default implementation */
  },
})

export const useAuth = () => {
  const { logged, setLogged } = useContext(AuthContext)

  const logout = () => setLogged(false)

  return { logged, login: setLogged, logout }
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [logged, setLogged] = useState(() => {
    const auth = localStorage.getItem('auth')
    return auth ? JSON.parse(auth) : false
  })

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(logged))
  }, [logged])

  return (
    <AuthContext.Provider value={{ logged, setLogged }}>
      {children}
    </AuthContext.Provider>
  )
}
