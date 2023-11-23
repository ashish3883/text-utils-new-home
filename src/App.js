
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Alerts from './components/Alerts';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import About from './components/About';


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#1a2e4a";
      showAlert("Dark Mode Enabled", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Enabled", "success")
    }
  }
  return (
    <>
    <NavBar title="Text-Utils" about="About Us" mode={mode} toggleMode={toggleMode} /> 
    <Alerts alert={alert}/>
    <div className="container">
    <Routes>
      <Route path='/' element={<TextForm heading="Enter Your Text Here" showAlert={showAlert} mode={mode}/>} />
      <Route path='about' element={<About mode={mode}/>} />
    </Routes>
    </div> 
    </>
  );
}

export default App;
