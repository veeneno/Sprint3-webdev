import Header from './Header'
import Footer from './Footer'

// Layout é o componente "pai": organiza a estrutura da página
// (Header + conteúdo + Footer) e recebe o conteúdo de cada
// página como "children", passando a estrutura pai -> filho.
function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="layout-content">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
