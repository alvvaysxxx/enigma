import React from 'react'

export default function Work(props) {
  return (
    <div className = 'workCard'>
      <img src = {props.img} style = {{width : '250px'}}/>
      <h2>Lorem</h2>
      <p>ipsum dolor sit amet</p>
    </div>
  )
}
