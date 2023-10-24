import React from 'react'
import HouseDisplay from '../../components/HouseDisplay'


const Home = ({houses}) => {
  return (
    <div>
      <h2>Home Page</h2>
    //house display goes here
    // map thru house array and show each on in jsx
    {houses.map((house, index) => (
      <HouseDisplay key={index} house={house} />
    ))}
    </div>
  )
}

export default Home