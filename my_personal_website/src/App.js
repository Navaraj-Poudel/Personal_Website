import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Project from './Component/Project/Project';
import Skills from './Component/Skills/Skills';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
     <Navbar/>
     <Routes>
      <Route exact path='/' element= {<Home/>} />
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/project' element={<Project/>}/>
      <Route exact path='/skills' element={<Skills/>}/>
        </Routes>
         </Router>
    </div>
  );
}

export default App;
