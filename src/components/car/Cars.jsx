import React from 'react'
import './style.css'

function CardCar({car}) {
  return (
        <div key={car.id} className="card">
          <div className="card-image-wrapper">
            <img 
              src={car.image} 
              alt={car.title} 
              className="card-image"
            />
            <span className="card-badge">{car.year}</span>
          </div>
          
          <div className="card-body">
            <div className="card-header">
              <h2 className="card-title">{car.title}</h2>
              <span className="card-price">{car.price}</span>
            </div>
            
            <p className="card-model">{car.model}</p>
            <p className="card-text">{car.description}</p>
            
            <button className="card-btn">Толугураак</button>
          </div>
        </div>
  
  )
}

export default CardCar