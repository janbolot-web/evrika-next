import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div>
      <main className='main'>
        {children}
      </main>
      <Header />
    </div>
  )
}

export default Layout