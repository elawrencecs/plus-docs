import React, { useState } from 'react';
import Stage from './Stage'
import Toc from './Toc'
import PlayBar from './PlayBar'

const App = () => {
  return (
    <div id="app">
      <Stage />
      <div className="app-controls">
        <PlayBar />
        <Toc />
      </div>
    </div>
  )
}

export default App