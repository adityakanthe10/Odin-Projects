import {Routes,Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import {Home} from "./Pages/Home.tsx"
import {About} from "./Pages/About.tsx"
import {Store} from "./Pages/Store.tsx"
import  {Navbar} from "./Components/Navbar"
// import { Container } from 'path-to-container-module';
// import {Container} from "react-bootstrap"

function App(){
  return (
  <>
  <Navbar/>
  <Container className="mb-4">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/store" element={<Store/>} />
      <Route path="/about" element={<About/>} />
      </Routes>
  </Container>
  </>
  )
}
export default App
