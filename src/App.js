import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=> {
    if(mode === "light" || mode === 'blue' || mode === 'green') {
      setMode('dark');
      document.body.style.backgroundColor = '#212530';
      showAlert("Dark Mode Enabled" , "success");
      document.title = 'React App - Dark Mode';
    }else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled" , "success");
      document.title = 'React App - Light Mode';
    }
  }

  const toggleModeGreen = ()=> {
    if(mode === "light" || mode === 'dark' || mode === 'blue') {
      setMode('green');
      document.body.style.backgroundColor = '#1da518';
      showAlert("Green Mode Enabled" , "success");
      document.title = 'React App - Green Mode';
    }else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled" , "success");
      document.title = 'React App - Light Mode';
    }
  }

  const toggleModeBlue = ()=> {
    if(mode === "light" || mode === 'dark' || mode === 'green') {
      setMode('blue');
      document.body.style.backgroundColor = '#101ccc';
      showAlert("Blue Mode Enabled" , "success");
      document.title = 'React App - BLue Mode';
    }else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled" , "success");
      document.title = 'React App - Light Mode';
    }
  }

  return (
  <>  
   <Router>
    <Navbar title="My First App" aboutText="About us" mode={mode} toggleMode={toggleMode} toggleModeGreen={toggleModeGreen} toggleModeBlue={toggleModeBlue} />
    <Alert alert={alert} />
    <div className="container">
      <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<TextForm heading="Enter text to analyze" mode={mode} />} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
