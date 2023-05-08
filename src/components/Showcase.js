import React from 'react'
import { useRef, useEffect } from 'react'
import animation from '../img/animation.gif'
import { Link } from 'react-router-dom'
import { TweenMax, Power3 } from 'gsap'

export default function Showcase() {

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
    <div className = 'showcasePage' style = {{ backgroundImage: `url(${animation})`}}>

    <h2 className = 'showcaseTitle'>Soon...</h2>

    <Link to = '/'><div className = 'return zeroOpacity' ref = {el => {homeBtn = el}}><svg className = 'home' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16"><path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708L7.293 1.5Z"/><path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 1 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.707l1.5-1.5a.5.5 0 0 1 .708 0Z"/></svg><h4 className = 'returnTxt'>На главную</h4></div></Link>
    </div>
  )
}
