import React from 'react';
import './App.css';
import Preview from './Preview.js';
import Editor from  './Editor';

function App() {
  
  return (
    <div className="App">
      <Editor />
      <Preview />
    </div>
  );
}

export default App;
