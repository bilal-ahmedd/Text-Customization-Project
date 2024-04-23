import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
  <>  
    <Navbar title="My First App" aboutText="About us" />
    <div className="container">
    <TextForm heading="Enter text to analysis" /> 
    {/* <About /> */}
    </div>
   
    </>
  );
}

export default App;
