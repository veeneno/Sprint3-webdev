// Autenticação fictícia (hardcoded) apenas para fins do protótipo.
// Não representa uma autenticação real/segura.
const HARDCODED_USER = {
  username: 'admin',
  password: '1234',
}

const AUTH_STORAGE_KEY = 'raw-shot-logged-in'

export function login(username, password) {
  const isValid =
    username === HARDCODED_USER.username && password === HARDCODED_USER.password

  if (isValid) {
    localStorage.setItem(AUTH_STORAGE_KEY, 'true')
  }

  return isValid
}

export function logout() {
  localStorage.removeItem(AUTH_STORAGE_KEY)
}

export function isAuthenticated() {
  return localStorage.getItem(AUTH_STORAGE_KEY) === 'true'
}
