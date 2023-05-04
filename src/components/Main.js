import React from 'react'
import animation from '../img/animation.gif'
import hui from '../img/hui.jpg'

export default function Main() {
  return (
    <div className = 'main' style = {{backgroundImage: `url(${animation})`}}>
      <button className = 'btn top-left'>О нас</button>
      <button className = 'btn top-right'>Контакты</button>
      <h1 className = 'center enigmastd'>Enigma Studio</h1>
      <button className = 'btn bottom-left'>Проекты</button>
      <button className = 'btn bottom-right'>История</button>
</div>
  )
}
