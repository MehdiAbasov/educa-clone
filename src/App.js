import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";

import Home from './components/pages/Home';
import Course from './components/pages/Coursegrid';
import Courselist from './components/pages/Courselist';
import Homepage2 from './components/pages/Hometwo';
import AboutUs from './components/pages/AboutUs';
import OurTeacher from './components/pages/OurTeacher';
import SingleCourse from './components/pages/SingleCourse';
import Events from './components/pages/Events';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Vievcourseslink from './components/Vievcourseslink';


function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Course />} />
          <Route path='/courselist' element={<Courselist />} />
          <Route path='/homepage2' element={<Homepage2 />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/ourteacher' element={<OurTeacher/>}/>
          <Route path='/singlecourse' element={<SingleCourse/>}/>
          <Route path='/events' element={<Events/>}/> 
        </Routes>
        <Vievcourseslink />
        <Footer />

      </BrowserRouter>

    </>

  );
}

export default App;
