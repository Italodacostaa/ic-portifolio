import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Sobre from './components/Sobre';
import Tecnologias from './components/Tecnologias';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Sobre />
      <Tecnologias />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;