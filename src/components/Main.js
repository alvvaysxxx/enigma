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
  let enigmastd = useRef(null)

  useEffect(() => {
    TweenMax.to(
      enigmastd,
      1,
      {
        opacity: 1,
        ease: Power3.easeInOut,
        delay: .5
      }
    )
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
      <Link to = 'contacts'><button className = 'btn top-right zeroOpacity' ref = {el => { contactsBtn = el}}>Контакты</button></Link>
      <h1 className = 'center enigmastd zeroOpacity' ref = {el => {enigmastd = el}}>Enigma Studio</h1>
      <Link to = 'works'><button className = 'btn bottom-left zeroOpacity' ref = {el => {projectsBtn = el}}>Проекты</button></Link>
      <Link to = 'showcase'><button className = 'btn bottom-right zeroOpacity' ref = {el => {historyBtn = el}} >Showcase</button></Link>
</div>
  )
}
