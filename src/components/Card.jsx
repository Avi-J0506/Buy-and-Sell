import React from 'react'
import adImage from '../assets/ads.png'

const Card = () => {
  return (
    <div className='bg-gray-200 shadow-md rounded-lg p-4'>
      <img src={adImage} 
      alt="Ad Image"
      className='w-full h-48 object-cover rounded-md' 
      />
      <h2 className='text-xl font-semibold mt-2'>Ad Title</h2>
      <p className='text-gray-700'>Description</p>
      <p className='text-gray-900 font-bold mt-2'>$100</p>
    </div>
  )
}

export default Card
