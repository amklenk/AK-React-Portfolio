// Why don't I need to import this?
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
