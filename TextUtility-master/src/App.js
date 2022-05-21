import React, { useState } from 'react'

import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from "react-router-dom";


function App(){
  const [mode, setMode] = useState('light');
 const [alert, setAlert] = useState(null);

 const showAlert = (message,type) => {
    setAlert({msg: message, 
              type: type})

    setTimeout(() => {
      setAlert(null);
    } , 3000);
 }

  // const removeClass = () => {
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-primary");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-success");
  // }
  const toggleMode = (cls) => {
    // removeClass();
    document.body.classList.add("bg-" + cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#083156";
      showAlert("Dark Mode Enabled","success");
      // document.title = "TextUtils - Dark Mode";

    }
    else{
      setMode('light');
       document.body.style.backgroundColor = "#fff";
        showAlert("Light Mode Enabled","success");
        // document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
  <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container"> 
      <Routes>
        <Route exact path="/" element={ <TextForm heading="Enter Text to analize" mode={mode} showAlert={showAlert} />} />
        <Route exact path="/About" element={<About />} />
      </Routes>
                                         
      </div>
      </Router>
    </>
  );
}

export default App;