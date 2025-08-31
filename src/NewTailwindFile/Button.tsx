import React from 'react'


type Props = {
    text:string,
    icon?: React.ReactNode,
    bgColor:string,
    textColor:string,
    padding:string

}
const Button3 = ({text,icon,bgColor,textColor,padding}:Props) => {
  return (
    <div>
         <button className={` ${padding} ${bgColor} ${textColor} font-bold rounded-md shadow-md`}>
        {text}
        <span>{icon}</span>
    </button>

    </div>
  )
}

export default Button3