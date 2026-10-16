import React from 'react'
import './style.css'

function Card({data}) {
  return (
    <div className="card">
      <img 
        src={data.image}
        alt="Карточка сүрөтү" 
        className="card-image"
      />
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p className="card-text">
          {data.description}
        </p>
      </div>
    </div>
  )
}

export default Card