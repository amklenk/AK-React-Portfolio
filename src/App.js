// Why don't I need to import this?
import './index.css';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
    </div>
  );
}

export default App;
