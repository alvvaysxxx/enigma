import { useRef, useEffect } from 'react'
import React from 'react'
import animation from '../img/animation.gif'
import { Link } from 'react-router-dom'
import { TweenMax, Power3 } from 'gsap'
import { easing } from '@mui/material'


export default function Main() {
  
  let projectsBtn = useRef(null)
  let historyBtn = useRef(null)
  let aboutBtn = useRef(null)
  let contactsBtn = useRef(null)

  useEffect(() => {
    TweenMax.to(
      projectsBtn,
      2,
      {
        opacity: 1,
        y: -90,
        ease: Power3.easeInOut,
      }
    )
    TweenMax.to(
      historyBtn,
      2,
      {
        opacity: 1,
        y: -90,
        ease: Power3.easeInOut,
      }
    )
    TweenMax.to(
      aboutBtn,
      2,
      {
        opacity: 1,
        y: 90,
        ease: Power3.easeInOut,
      }
    )
    TweenMax.to(
      contactsBtn,
      2,
      {
        opacity: 1,
        y: 90,
        ease: Power3.easeInOut,
      }
    )
  }, [])

  return (
    <div className = 'main' style = {{backgroundImage: `url(${animation})`}}>
      <Link to = 'about'><button className = 'btn top-left zeroOpacity' ref = {el => {aboutBtn = el}}>О нас</button></Link>
      <button className = 'btn top-right zeroOpacity' ref = {el => { contactsBtn = el}}>Контакты</button>
      <h1 className = 'center enigmastd'>Enigma Studio</h1>
      <Link to = 'works'><button className = 'btn bottom-left zeroOpacity' ref = {el => {projectsBtn = el}}>Проекты</button></Link>
      <button className = 'btn bottom-right zeroOpacity' ref = {el => {historyBtn = el}} >История</button>
</div>
  )
}
