import React from 'react'
import worksList from '../worksList'
import animation from '../img/animation.gif'
import { Link } from 'react-router-dom'
export default function WorksPage() {
  return (
    <div className = 'worksPage' style = {{backgroundImage: `url(${animation})`}}>
      {worksList.map((item, index) => {
        return (
        <div className = 'workCard' key = {`${index}workDiv`}>
          <h3 key = {`${index}title`} >{item.name}</h3>
          <p key = {`${index}desc`}>{item.desc}</p>
          {item.hasOwnProperty('link') ? (<a className = 'link' href = {item.link} target = '__blank' key = {`${index}work`}><button className = 'btn' style = {{marginRight: '25px', marginTop: '15px' }} key = {`${index}workBtn`}>Работа</button></a>) : (undefined)}
          {item.hasOwnProperty('git') ? (<a className = 'link' href = {item.git} target = '__blank' key = {`${index}git`}><button className = 'btn' style = {{marginRight: '25px', marginTop: '15px'}} key = {`${index}gitBtn`}>Исходный код</button></a>) : (undefined)}
        </div>
        )
      })}
      <Link to = '/' ><div className = 'return'><svg className = 'home' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16"><path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708L7.293 1.5Z"/><path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 1 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.707l1.5-1.5a.5.5 0 0 1 .708 0Z"/></svg><h4 className = 'returnTxt'>На главную</h4></div></Link>
    </div>
  )
}
