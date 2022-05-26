import './App.css';
import Navibar from './components/Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import Banner from './components/Banner';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navibar/>
      <Banner />
      <Home />
      {/* <About /> */}
      <Footer />
    </div>
  );
}

export default App;
