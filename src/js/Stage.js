import React, { useState, useEffect } from 'react';
import {gsap} from 'gsap'
import Sprite from './Sprite'
import commonsenseLogo from '../img/Common_Sense_logo.png'
import stripeLogo from '../img/Stripe logo - slate_sm.png'
import drupalLogo from '../img/drupal-wordmark.png'
import salesforceLogo from '../img/salesforce-logo-blue.png'
import userIcon from '../img/usericon.png'

const Stage = () => {
  const cslogoRef = React.createRef()
  const userRef = React.createRef()
  const stripeLogoRef = React.createRef()
  const drupalLogoRef = React.createRef()
  const sfLogoRef = React.createRef()

  useEffect(() => {
    gsap.to(cslogoRef.current, {color: 'red', duration: 2})
    gsap.to(userRef.current, {color: 'blue', scale: 2, y:127, duration: 1, ease: 'back.inOut(1.7)'})
  }, [])

  return (
    <div className="stage">
      <header>
        <Sprite src={commonsenseLogo} ref={cslogoRef} />
      </header>
      <main className="swimlanes">
      <div className="swimlane user">
          <Sprite src={userIcon} ref={userRef} />
        </div>
        <div className="swimlane drupal">
          <Sprite src={drupalLogo} ref={drupalLogoRef} />
        </div>
        <div className="swimlane stripe">
          <Sprite src={stripeLogo} ref={stripeLogoRef} />
        </div>
        <div className="swimlane salesforce">
          <Sprite src={salesforceLogo} ref={sfLogoRef} />
        </div>
      </main>
    </div>
  )
}

export default Stage