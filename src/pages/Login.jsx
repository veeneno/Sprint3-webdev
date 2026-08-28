import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { isAuthenticated, login } from '../utils/auth'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // Se o usuário já tiver logado antes (flag salva no localStorage),
  // pula a tela de login e vai direto para o dashboard.
  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/dashboard')
    }
  }, [navigate])

  function handleSubmit(event) {
    event.preventDefault()

    const success = login(username, password)

    if (success) {
      setError('')
      navigate('/dashboard')
    } else {
      setError('Usuário ou senha inválidos.')
    }
  }

  return (
    <Layout>
      <div className="login-page">
        <form className="login-card" onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <p className="login-subtitle">Acesse sua conta para ver suas fotos</p>

          <label htmlFor="username">Usuário</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Digite seu usuário"
            autoComplete="username"
          />

          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Digite sua senha"
            autoComplete="current-password"
          />

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Login
