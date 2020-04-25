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
  const userIconRef = React.createRef()
  const drupalLogoRef = React.createRef()
  const stripeLogoRef = React.createRef()
  const sfLogoRef = React.createRef()

  let tl

  const introIconY = (tween, el) => {
    let defaultY = 25
    let yPos = el.clientHeight
    console.log(yPos)
    return defaultY - yPos/2
  }

  const animate = () => {
    let tlDefaults = {transformOrign:'50% 50%'}
    let introDefaults = {
      scale: 0.5, 
      stagger: 0.2,
      opacity: 0
    }
    gsap.set([drupalLogoRef.current, stripeLogoRef.current], {scale: 1.5})
    tl = gsap.timeline(tlDefaults)
    tl.from([userIconRef.current, drupalLogoRef.current, stripeLogoRef.current, sfLogoRef.current], introDefaults)
  }

  useEffect(() => {
    animate()
  }, [])

  return (
    <div className="stage">
      <header>
        <Sprite src={commonsenseLogo} ref={cslogoRef} />
      </header>
      <main className="swimlanes">
        <div className="swimlane user">
          <div className="swim-header">
            <Sprite src={userIcon} ref={userIconRef} className="header-icon" />
          </div>
        </div>
        <div className="swimlane drupal">
          <div className="swim-header">
            <Sprite src={drupalLogo} ref={drupalLogoRef} className="header-icon" />
          </div>
        </div>
        <div className="swimlane stripe">
          <div className="swim-header">
            <Sprite src={stripeLogo} ref={stripeLogoRef} className="header-icon" />
          </div>
        </div>
        <div className="swimlane salesforce">
          <div className="swim-header">
            <Sprite src={salesforceLogo} ref={sfLogoRef} className="header-icon" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Stage