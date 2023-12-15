import { NavBar } from './Components/Layout/Navbar/NavBar.jsx';
import { Footer } from './Components/Layout/Footer/Footer.jsx';
import HomePage from './Pages/HomePage.jsx';
import './App.css';

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

export default App;
