
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import FoodContainer from './components/FoodContainer/FoodContainer';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <FoodContainer/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
