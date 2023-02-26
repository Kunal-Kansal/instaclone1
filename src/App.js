import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch,Routes } from 'react-router-dom';
import './App.css';
import Landing_page from './LandingPage/landing_Page';
import Post_View from './PostView/post_View';
import Nav from './PostView/Nav';
import Form from './PostView/form';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing_page/>}/>
          <Route path="/PostView" element={<><Nav/><Post_View/></>}/>
          <Route path='/form' element={<><Nav/><Form/></>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
