import React from 'react'
import worksList from '../worksList'
import animation from '../img/animation.gif'

export default function WorksPage() {
  return (
    <div className = 'worksPage' style = {{backgroundImage: `url(${animation})`}}>
      {worksList.map((item, index) => {
        return (
        <div className = 'workCard'>
          <h3 key = {index}>{item.name}</h3>
        </div>
        )
      })}
    </div>
  )
}
