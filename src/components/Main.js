import React from 'react'
import gradient from '../img/gradient.png'

export default function Main() {
  return (
    <div className = 'main' style = {{backgroundImage: `url(${gradient})`}}>
      <h1 className = 'right'>ENIGMA STUDIO</h1>
      <h2>ТЕХНОЛОГИИ. КРЕАТИВНОСТЬ.</h2>
      <h2 className = 'inline'>ИННОВАЦИИ.</h2>
      <p className = 'inline history'>ИСТОРИЯ</p>
      <p>Мы - команда энтузиастов, которая любит то, что делает. У нас нет конкретной цели; мы делаем всё, что придёт к нам в голову</p>
</div>
  )
}
