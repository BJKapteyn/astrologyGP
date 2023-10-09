import { NavBar } from './Components/Layout/Navbar/NavBar.jsx';
import { BioCard } from './Components/PageElements/BioCard/BioCard.jsx';
import { TitleCard } from './Components/HomePage/TitleCard/TitleCard.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="testContent">
        <TitleCard></TitleCard>
        <BioCard></BioCard>
        {/* addstuff to test here */}
        <div className='testPage'></div>
      </div>
    </div>
  );
}

export default App;
