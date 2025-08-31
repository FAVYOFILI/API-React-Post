import React, { useState } from 'react'
import './Header.css'
import logo from "./assets/logo (1).png"
import Button from './button'
import Button2 from './button2'
const Header: React.FC = () => {
  // a dummy handle onclick fuction
  // const handleOnClick = (test:string)=>{
  //   return 5
  // }
   const [count, setCount ]= useState(0)
  return (
  <header>

    <div className='nav-logo'>
    {/* logo */}
    <div>
      <img src={logo} alt="" className='logo'/>
    </div>
{/* navs */}
    <nav>
      <ul className='nav-list'>
        <li>Home</li>
        <li>Metor</li>
        <li>Menteet</li>
        <li>Pages</li>
        <li>Blog</li>
        <li>Admin</li>
      </ul>
    </nav>

    </div>


    {/* button */}
    <div className='btns'>
      {/* when props has beed decleared u can use control space to see all the required props for that component */}
      {/* if i remove one i get the red line why cus i have make all the props madatary in the type part */}
      <Button backgroundColor= "red" fontSize={3} pillShape={true} textColor='blue' padding={[10,20]}/>
      {/* on the padding if i put string i get error type string is not assignable to type number */}
      {/* <button className='signup-btn'>Register</button> */}
    </div>

{/* props for fuction */}
    {/* <Button2 onclick={handleOnClick}/> */}

    <Button2  setCount={setCount}/>
  </header>
  )
}

export default Header

// talk about default values and no need to type dem

// diffrent between type alias and interface with examples when and when not advantage and disadvantage 

// why not interface in interface u can only decribe an object 
// eg for type advan
// type URL = string
// const url:URL = "https:google.com"

// for interface ...
// interface URL = string ....this will not work
// u always  decribe an Object
// interface URL{
// url:string
// }
// this has to change 
// const url:URL{
// url:"https://google.com"
// }

// so thats the first problem wuth interface cus in the real world u offten want to describle things

// types Color = "red" | "blue" | "green"

// in interface u cant do that 
// so it pretty much garanteed that u are going to use the type alias at some point since interface cant do everything 

// we are going to create a button component
// so a button component has so many attriubte

// so when we use the button component we may want to use does atrribut

// eg <Button type="submit" autoFocus={true}/>
// so we need to accept that 
// so what we may do 
// type ButtonProps = {
//  type:"submit" | "reset", | "button"
//  autoFocus:boolean
// }
// const Button2 = ({type, autoFocus}:ButtonProps) => {
//   
//   return (
//     <button>click me</button>
//   )
// }

// export default Button2
// so what to do when u want to use all does attribute 
// what to do
// type ButtonProps = React.ComponentPropsWithoutRef<"button">
// const Button2 = ({type, autoFocus, ...rest}:ButtonProps) => {
//   return (
//     <button {...rest} type={type} autoFocus={autoFocus}>click me</button>
//   )
// so if i pass any other attribute to the button it will not give me an error

// ifu have other props u want to pass u can intersect the type
// type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
//   customProp:string
// }

// using type alias to extend the types to another types alias eg
// for interface we do that with extends 
