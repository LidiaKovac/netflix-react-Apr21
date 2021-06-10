import './App.css'
import CustomNavbar from './Component/Navbar'
import Header from './Component/Header'
import RowOfMovies from './Component/RowOfMovies'

function App() {
  return (
    <>
      <CustomNavbar />
      <Header />
      <RowOfMovies title="Star Wars" />
      <RowOfMovies title="Harry Potter" />
      <RowOfMovies title="The lord of the rings" />
    </>
  )
}

export default App
