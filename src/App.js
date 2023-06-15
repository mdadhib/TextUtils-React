import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {  //jsx html with js mask -
   const [mode, setMode] = useState('light');//wether darkmode is enabled or not,controlling state of entire page through app.js using state variable and passing it as props to the components 
   const [alert,setAlert] = useState(null); //Alert is a object

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  } 

   const toggleMode=()=>{
     if(mode==='light'){
       setMode('dark');
       document.body.style.backgroundColor = '#342f2f';
       showAlert("Dark mode has been enabled","success");
       document.title = "TextUtils - Dark Mode"; //changes title dynamically
     } 
     else{
       setMode('light');
       document.body.style.backgroundColor = 'white';
       showAlert("Light mode has been enabled","success");
       document.title = "TextUtils - Light Mode";
     }
   }

   return (
   <>
   <BrowserRouter>
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze below"mode={mode}/>} />
        <Route exact path="/about" element={<About mode={mode} />}>
        </Route>
      </Routes>
    </div>
     </BrowserRouter>
  
   </>
  );
}

export default App;
