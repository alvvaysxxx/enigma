import React from 'react'
import worksList from '../worksList'

export default function WorksPage() {
  return (
    <div className = 'worksPage'>
      {worksList.map((item, index) => {
        return (<h2>{item.name}</h2>)
      })}
    </div>
  )
}
