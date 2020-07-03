import React from 'react';
import './App.css';

import { Header } from './components/index';
import MainPage from './pages/Page/MainPage';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
