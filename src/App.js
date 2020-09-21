import React, { useState } from 'react';
import './App.css';
import Preview from './Components/Preview.js';
import Editor from  './Components/Editor';

function App() {
 
  // Set the initial states with useState function
  const [text, updText] = useState("Test");

  // function to be exhecuted when something is typed
  function handleText(event) {
      // Udpate the states in here
      updText(event.target.value);
  }
  
  return (
    <div className="App">
      <Editor value={text} setText={handleText} />
      <Preview text={text} />
    </div>
  );
}

export default App;
