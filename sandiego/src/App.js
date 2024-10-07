import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Schedule from './Pages/Schedule';
import About from './Pages/About';
import BMXCoaching from './Pages/BMXCoaching';
import StateFinals from './Pages/StateFinals';
import BMXCamps from './Pages/BMXCamps';
import BMXBeginnerLeague from './Pages/BMXBeginnerLeague';
import OtherEvents from './Pages/OtherEvents';
import More from './Pages/More';
function App() {
  return (
 <>
 <h1>San Diego Bmx</h1>
 <Header />
 <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/Schedule" element={<Schedule/>} />
  <Route path="/About" element={<About/>} />
  <Route path="/BMXCoachin" element={<BMXCoaching/>} />
  <Route path="/StateFinals" element={<StateFinals/>} />
  <Route path="/BMXCamps" element={<BMXCamps/>} />
  <Route path="/BMXBeginnerLeague" element={<BMXBeginnerLeague/>} />
  <Route path="/OtherEvents" element={<OtherEvents/>} />
  <Route path="/More" element={<More/>} />
 </Routes>
 <Footer />
 </>
  );
}

export default App;
