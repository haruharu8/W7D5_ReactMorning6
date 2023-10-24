import React from 'react'

const HouseDisplay = ( {house} ) => {
  return (
    <div className="house">
        <h3>{house.name}</h3>
        <p>{house.address}</p>
        <p>Price: ${house.price}</p>
        <p>{house.isSold ? "Sold" : "Available"}</p>
    </div>
  )
}

export default HouseDisplay