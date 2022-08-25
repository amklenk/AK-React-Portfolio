import React, { useState } from 'react';
// Why don't I need to import this?
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero'
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <Hero/>
      {renderPage()}
      {/* <About/>
      <Portfolio/>
      <Contact/>
      <Resume/> */}
      <Footer/>
    </div>
  );
}

export default App;
