import { NavBar } from './Components/Layout/Navbar/NavBar.jsx';
import { BioCard } from './Components/PageElements/BioCard/BioCard.jsx';
import { Footer } from './Components/Layout/Footer/Footer.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="testContent">
        <BioCard></BioCard>
        {/* addstuff to test here */}
        <div className='testPage'></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
