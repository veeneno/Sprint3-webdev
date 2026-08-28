import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { isAuthenticated, logout } from '../utils/auth'

function Header() {
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const logged = isAuthenticated()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <header className="header">
      <div className="header-brand">
        <span className="header-logo">📷</span>
        <span className="header-title">RawShot</span>
      </div>

      <div className="header-actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Alternar tema claro/escuro"
        >
          {theme === 'light' ? '🌙 Escuro' : '☀️ Claro'}
        </button>

        {logged && (
          <button type="button" className="logout-button" onClick={handleLogout}>
            Sair
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
