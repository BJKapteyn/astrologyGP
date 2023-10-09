import { NavBar } from './Components/Layout/Navbar/NavBar.jsx';
import { BioCard } from './Components/PageElements/BioCard/BioCard.jsx';
import { Footer } from './Components/Layout/Footer/Footer.jsx';
import { TitleCard } from './Components/HomePage/TitleCard/TitleCard.jsx';
import { ActionButton } from './Components/PageElements/ActionButton/ActionButton.jsx';
import './App.css';



function App() {


  return (
    <div className="App">
      <NavBar></NavBar>
      <TitleCard></TitleCard>
      <div className="testContent">
        {/* addstuff to test here */}
        <BioCard></BioCard>
        <ActionButton buttonSettings={{buttonText: 'Whtever', action: testAction}} />
        <div className='testPage'></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

function testAction() {
  alert("hello");
}
export default App;
