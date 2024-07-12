import React from 'react'
import Card from '../components/Card';

const Home = () => {
    const cards = new Array(24).fill(0);
  return (
    <div className='container mx-auto p-4'>
        <h1 className="text-3xl font-bold mb-4">Advertisments</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {cards.map((_, index)=> (
                <Card key={index}/>
            ))}
        </div>
        <div className='flex justify-center mt-6'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>
                Show More
            </button>
        </div>
    </div>
  )
}

export default Home
