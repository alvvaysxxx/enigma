import React from 'react'
import animation from '../img/animation.gif'
import hui from '../img/hui.jpg'
import { Link } from 'react-router-dom'


export default function Main() {
  return (
    <div className = 'main' style = {{backgroundImage: `url(${animation})`}}>
      <button className = 'btn top-left'>О нас</button>
      <button className = 'btn top-right'>Контакты</button>
      <h1 className = 'center enigmastd'>Enigma Studio</h1>
      <Link to = 'works'><button className = 'btn bottom-left'>Проекты</button></Link>
      <button className = 'btn bottom-right'>История</button>
</div>
  )
}
