import React from 'react';
import ReactDOM from 'react-dom/client';
import Directory from './directory';
// import Home1 from './home';//referring home function from home.js
// import Parent from './parent';
// below statement search for the container...just like we search
const root = ReactDOM.createRoot(document.getElementById('container'));
// below function is going to call the home function..Get HTML and load its container...
// this is what we did in load function
// root.render(
  
//     // <><Home1 /> 
//     {/* this syntax is eventually calling home function like home() */}
//     // <Parent />
//     //  <Directory />
//     // </>
// );
root.render(<Directory></Directory>);

