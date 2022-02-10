import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import FoodContainer from './components/FoodContainer/FoodContainer';
import About from './components/About/About';

function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <FoodContainer/>
      <About/>
    </div>
  );
}

export default App;
