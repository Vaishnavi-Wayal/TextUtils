import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


// let name = "Vaish";
function App() {
  const[mode, setMode] = useState('dark');
      {/* Whether darkmode is enable or not */}
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type 
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);

  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background='#6c757d';
      showAlert("Dark mode has been enabled", "success");
      // document.title="TextUtils | DarkMode";
    }
    else{
      setMode('light');
      document.body.style.background='white';
      showAlert("Light mode has been enabled", "success");
      // document.title="TextUtils | LightMode";
    }
  }
  return (
    <>
    <Router> 
      {/* <Navbar title = "TextUtils" about = "About TextUtils"/> */}
      <Navbar tittle="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
        <Route exact path="/" element={<TextForm/>} />
        <Route exact path="/about" element={<About/>} /> 
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
