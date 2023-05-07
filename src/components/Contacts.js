import React from 'react'
import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'

import { TweenMax, Power3 } from 'gsap'
import { easing } from '@mui/material'

import animation from '../img/animation.gif'

export default function Contacts() {
  let homeBtn = useRef(null)

  useEffect(() => {
    TweenMax.to(
      homeBtn,
      0.5,
      {
        opacity: 1,
        y: -25,
        delay: 0.3,
        ease: Power3.easeInOut,
      }
    )
  }, [])

  return (
    <div className = 'contactsPage' style = {{ backgroundImage: `url(${animation})` }}>
      <div className = 'contactsText'>
        <h1>Связь с нами:</h1>
        <a href = 'https://instagram.com/d4rv1n.dev' target = '__blank'><button className = 'btn' style = {{marginBottom: '10px'}}>d4rv1n (Python, Unity3D, Java Android)</button></a>
        <a href = 'https://instagram.com/urion.dev' target = '__blank'><button className = 'btn'  style = {{marginBottom: '10px'}}>urion (Web dev)</button></a>
      </div>
    <Link to = '/'><div className = 'return zeroOpacity' ref = {el => {homeBtn = el}}><svg className = 'home' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16"><path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708L7.293 1.5Z"/><path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 1 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.707l1.5-1.5a.5.5 0 0 1 .708 0Z"/></svg><h4 className = 'returnTxt'>На главную</h4></div></Link>
    </div>
  )
}
