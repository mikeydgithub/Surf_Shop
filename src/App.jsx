import Hero from './pages/Hero'
import React, { Fragment } from 'react'; 
import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
       <Navbar />
       <div style={{overflowY:"scroll", height:"800px"}}></div> 
    </Fragment>
  );
}

export default App
