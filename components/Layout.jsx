import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div>
      <main>
        {children}
      </main>
      <Header />
    </div>
  )
}

export default Layout