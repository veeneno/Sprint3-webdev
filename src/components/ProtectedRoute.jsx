import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../utils/auth'

// Componente "pai" de rota: só renderiza a página filha (children)
// se o usuário estiver logado (checagem via localStorage).
// Caso contrário, redireciona para a tela de login.
function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
