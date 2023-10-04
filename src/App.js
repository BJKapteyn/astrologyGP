import { NavBar } from './Components/Layout/Navbar/NavBar.jsx';
import { BioCard } from './Components/PageElements/BioCard/BioCard.jsx';
import { ActionButton } from './Components/PageElements/ActionButton/ActionButton.jsx';
import './App.css';

function App() {


  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="testContent">
        {/* addstuff to test here */}
        <BioCard></BioCard>
        <ActionButton buttonSettings={{buttonText: 'Whtever', action: testAction}} />
        <div className='testPage'></div>
      </div>
    </div>
  );
}

function testAction() {
  alert("hello");
}
export default App;
