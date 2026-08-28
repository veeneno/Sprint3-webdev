function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>© {currentYear} RawShot — Projeto acadêmico Sprint 3</p>
    </footer>
  )
}

export default Footer
