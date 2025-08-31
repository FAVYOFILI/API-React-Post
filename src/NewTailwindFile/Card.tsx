import React from 'react'


type CardProps = {
    image: string;
    buttonContent: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    duration: string;
    weeks: string;
}

const Card = ({image, buttonContent, title, description, icon, duration, weeks}:CardProps) => {
  return (
    <div className='rounded-md overflow-hidden hover:shadow-md shadow-sm w-[350px] bg-white'>
        <div className='h-45 p-4  bg-amber-400 ' style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
           

            <button className='py-2 px-4 bg-[#00BD9A] rounded-md text-white font-bold'>{buttonContent}</button>
        </div>

     <div className='p-4 text-gray-600'>
        <h1 className='font-bold mt-4 mb-2 text-2xl text-gray-500 hover:text-[#00BD9A] cursor-pointer'>{title}</h1>

        <p>{description}</p>
        <div className='flex space-x-5 items-center mt-4'>
           <div className='flex gap-2 items-center'>
             <span>{icon}</span>
            <p>{duration}</p>
           </div>

           <div className='flex gap-2 items-center'>
             <span>{icon}</span>
            <p>{weeks}</p>
           </div>
        </div>
    </div>
    </div>
  )
}

export default Card