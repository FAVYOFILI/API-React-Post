import React, { useState } from 'react'

const UseState:React.FC = () => {
    const [count, setCount] = useState<number >(0);

    const handleDecrease = () => {
        setCount((prev)=>(prev > 0 ? prev - 1 : 0));
    }

    const handleIncrease = () =>{
        setCount((count)=> count +1)
      
       
    }
  return (
    <div className='flex'>
        <button onClick={handleDecrease} className='bg-red-500 font-bold py-2 px-3 rounded-md cursor-pointer'>decrease</button>
        <h1 className='text-2xl font-bold'>Count: {count}</h1>
        <button onClick={handleIncrease} className='bg-green-500 font-bold py-2 px-3 rounded-md cursor-pointer'>increase</button>
    </div>
  )
}

export default UseState