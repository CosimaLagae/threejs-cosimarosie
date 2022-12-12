import React from 'react';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import TouchDesigner from "./components/TouchDesigner"

import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>

      {/* <Router>
        <Routes>
          <Route path="/touchDesigner"></Route>
          <TouchDesigner></TouchDesigner>
        </Routes>
      </Router> */}



    </div>
  );
}

export default App;
