import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Base = ({ children }) => {
  return (
    <>
      <Header />
      <body>
        {children}
      </body>
      <Footer />
    </>
  )
}

export default Base
