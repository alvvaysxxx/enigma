import React from 'react'
import gradient from '../img/gradient.png'
import Work from './Work'
import hui from '../img/hui.jpg'

export default function Main() {
  return (
    <div className = 'main' style = {{backgroundImage: `url(${gradient})`}}>
      <h1 className = 'right'>ENIGMA STUDIO</h1>
      <h2>ТЕХНОЛОГИИ. КРЕАТИВНОСТЬ.</h2>
      <h2 className = 'inline'>ИННОВАЦИИ.</h2>
      <p className = 'inline history'>ИСТОРИЯ</p>
      <p>Мы - команда энтузиастов, которая любит то, что делает. У нас нет конкретной цели; мы делаем всё, что придёт к нам в голову</p>
      <h2 className='center' style = {{marginTop : '25px'}}>Наши работы:</h2>

      <Work img = {hui}/>
</div>
  )
}
