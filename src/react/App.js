import React from 'react';
import './App.scss';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Content">
        <h1>Content!</h1>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
