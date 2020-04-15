import React, { useState, useEffect } from 'react';

const Toc = () => {

  useEffect(() => {
    console.log('table of contents')
  }, [])

  return (
    <div className="toc">
      <ul>
        <li>Anon</li>
        <li>Checkout</li>
        <li>Stripe</li>
        <li>Subscription</li>
      </ul>
    </div>
  )
}

export default Toc