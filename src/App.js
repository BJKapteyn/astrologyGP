import { NavBar } from './Components/Layout/Navbar/NavBar.jsx';
import { BioCards } from './Components/PageElements/BioCard/BioCards.jsx';
import { Footer } from './Components/Layout/Footer/Footer.jsx';
import { TitleCard } from './Components/HomePage/TitleCard/TitleCard.jsx';
import { InfoCard } from './Components/PageElements/InfoCard/InfoCard';
import { NewsCard } from './Components/HomePage/NewsCard/NewsCard.jsx';
import { Testimonials } from './Components/HomePage/Testimonials/Testimonials.jsx';
import './App.css';

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="testContent">
        <TitleCard></TitleCard>
        <InfoCard></InfoCard>
        <NewsCard></NewsCard>
        <BioCards></BioCards>
        {/* addstuff to test here */}
        <Testimonials></Testimonials>
      </div>
      <Footer></Footer>
    </div>
  );
}

// function testAction() {
//   alert("hello");
// }
export default App;
