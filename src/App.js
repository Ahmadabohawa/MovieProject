import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";

import './App.css';
function App() {
  return ( 
    <div className="App">
      <Router>
        <Header/>
        <div className='container'>
        <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/movie/:imdbID1' element={<MovieDetail/>}/>
        <Route  element={<PageNotFound/>}/>
        </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
