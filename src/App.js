import { NavBar } from './Components/Layout/Navbar/NavBar.jsx';
import { BioCards } from './Components/PageElements/BioCard/BioCards.jsx';
import { Footer } from './Components/Layout/Footer/Footer.jsx';
import { TitleCard } from './Components/HomePage/TitleCard/TitleCard.jsx';
import { InfoCard } from './Components/PageElements/InfoCard/InfoCard';
import './App.css';



function App() {


  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="testContent">
        <TitleCard></TitleCard>
        <BioCards></BioCards>
        <InfoCard></InfoCard>
        {/* addstuff to test here */}
        <div className='testPage'></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

// function testAction() {
//   alert("hello");
// }
export default App;
