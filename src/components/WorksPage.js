import React from 'react'
import worksList from '../worksList'
import animation from '../img/animation.gif'

export default function WorksPage() {
  return (
    <div className = 'worksPage' style = {{backgroundImage: `url(${animation})`}}>
      {worksList.map((item, index) => {
        return (
        <div className = 'workCard'>
          <h3 key = {index} >{item.name}</h3>
          <p>{item.desc}</p>
          {item.hasOwnProperty('link') ? (<a className = 'link' href = {item.link} target = '__blank'><button className = 'btn' style = {{marginRight: '25px', marginTop: '15px'}}>Работа</button></a>) : (undefined)}
          {item.hasOwnProperty('git') ? (<a className = 'link' href = {item.git} target = '__blank'><button className = 'btn' style = {{marginRight: '25px', marginTop: '15px'}}>Исходный код</button></a>) : (undefined)}
        </div>
        )
      })}
    </div>
  )
}
