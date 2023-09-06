import { NavBar } from './Components/Layout/Navbar/NavBar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="testContent">
        {/* addstuff to test here */}
        <div className='testPage'></div>
      </div>
    </div>
  );
}

export default App;
