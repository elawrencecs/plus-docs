import React, { useState, useEffect } from 'react';

const PlayBar = () => {

  useEffect(() => {
    // console.log('table of contents')
  }, [])

  return (
    <div className="playbar">
      <div className="controls">
        <a href="#">⏸</a>
      </div>
      <div className="pb-progress-bar">
        <div className="pb-background">
          <div className="pb-progress"></div>
        </div>
      </div>
    </div>
  )
}

export default PlayBar