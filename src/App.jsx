
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
function App() {

  const background = {
    backgroundImage: "url(/background-blue-gradient.png)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height:"100vh",

  }
  return (
    <>
      <div className= "App" style= {background}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>

        </Routes>
      </BrowserRouter>

      </div>
    </>
  )
}

export default App
