import "bootstrap/dist/css/bootstrap.min.css"

import NavBar from "./Components/NavBar.jsx"
import Hours from "./Components/Hours.jsx";
import Gallery from "./Components/Gallery.jsx";
import Menu from "./Components/Menu.jsx"
import Footer from "./Components/Footer.jsx";

function App() {

  return (
    <>
      <NavBar/>
      <Hours/>
      <Gallery/>
      <Menu/>
      <Footer/>
    </>
  )
}

export default App
