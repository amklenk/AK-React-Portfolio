// Why don't I need to import this?
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
