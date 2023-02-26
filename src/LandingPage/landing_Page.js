import React from 'react';
import { Link } from 'react-router-dom';


export default function Landing_page() {
  return <>
  <div id='mainlandingpage'>
    <div id='imageoflandingpage'>
    </div>
    <div>
      <h2 id='tenxteam'>10x Team 04</h2>
      <Link to="/PostView">
      <button id='enter-button'>Enter</button>
      </Link>
    </div>
  </div>
  </>
}
