import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
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
        </Routes>
         </Router>
    </div>
  );
}

export default App;
