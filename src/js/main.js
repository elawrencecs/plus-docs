/**
 * @file: Main js entry file
 */

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const init = async () => {
  console.log(`%c ::: init ::: `, 'color:#fff; background: #ddd; border-radius: 3px; text-shadow: -1px -1px #ccc; line-height: 1.25rem; padding: 0 1rem; display: block; width: 100%;')
  let el = document.querySelector('#root')
  ReactDOM.render(<App />, el)
  return
}

init()