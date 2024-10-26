import './App.scss';
import Home from './Screens/Home';
import About from './Screens/About';
import Program from './Screens/Program';
import Achievements from './Screens/Achievements';
import Placement from './Screens/Placement';
import { Linkedin,Insta } from './Assets';
import Students from './Screens/Students';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="icons">
          <a href="https://instagram.com/the_better_tomorrow_?igshid=NzZlODBkYWE4Ng==">
            <img src={Insta} alt="" /><br />
          </a>
          <a href="https://www.linkedin.com/company/better-tomorrow-training-institute/">
            <img src={Linkedin} alt="" />
          </a>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Program' element={<Program/>}/>
          <Route path='/Achievements' element={<Achievements/>}/>
          <Route path='/Placement' element={<Placement/>}/>
          {/* <Route path='/Students' element={<Students/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;