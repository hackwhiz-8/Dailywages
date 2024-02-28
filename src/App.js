import Navbar from './Components/Navbar'
import './App.css';
import Hompage from './Components/Hompage';
import { useState } from 'react';
// import AnimePGG from './Components/AnimePGG';
import Nomatch from './Components/Nomatch';
import About2 from './Components/About2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,

} from "react-router-dom";
import Top from './Components/Top';
import Services from './Components/Services';
import LoginPage from './Components/LoginPage';
import Cart from './Components/Cart';

function App() {

  const [searchname, setsearchname] = useState('naruto')
  const [update, setupdate] = useState(false)

  return (
    <Router>
      <Navbar setname={setsearchname} update={update} setBool={setupdate} ></Navbar>

      <Routes>
        <Route exact path="/home" element={<Hompage name={searchname} update={update}></Hompage>} />
        <Route exact path='/services' element={<Services/>}/>
        <Route exact path='/about' element={<About2/>}/>
        <Route exact path='/Cart' element={<Cart/>}/>
        <Route exact path='/login' element={<LoginPage/>}/>
      </Routes>
  </Router>
  );
}

export default App;

{/* <Route exact path="/anime/:id" element={ <AnimePGG/>} />
<Route path="*" element={<Nomatch/>}/> */}
{/* <Route path='/top' element={<Top update={update}/>} /> */}