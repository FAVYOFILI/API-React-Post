import React, { use, useState } from 'react'


// type ButtonProps = {
    // void if the fuction is not returning anything 
// onclick:()=>void 

// but if the return is known and it has a parameter then 
// onclick:(test:string)=>number
// }
// const Button2 = ({onclick}:ButtonProps) => {
//   return (
//     <button onClick={()=>onclick("test")}>click me</button>
//   )
// }

// export default Button2

//  how to type a childern prop
// type ButtonProps = {
//   children: React.ReactNode
// }
// const Button2 = ({children}:ButtonProps) => {
//   return (
//     <button>{children}</button>
//   )
// }

// export default Button2

//

// import Button2 from './button2'
// // so on the button2 component u use it like this
// <Button2>click me </Button2>
// what does reactNode mean?
// ReactNode is a type that represents any node that can be rendered in React, including strings, numbers, elements, fragments, portals, and more. It is a flexible type that allows for a wide range of content to be passed as children to React components.... so react node basically allows any of type to be passed as children to a component, including strings, numbers, elements, fragments, portals, and more. It is a flexible type that allows for a wide range of content to be passed as children to React components.

// how to type hooks

// type ButtonProps = {
//   setCount: React.Dispatch<React.SetStateAction<number>>
// }
// const Button2 = ({setCount}:ButtonProps) => {
//    setCount(4)
//   return (
//     <button>click me</button>
//   )
// }

// export default Button2


// event handlers
// const Button2 = () => {

//   const handleClick =(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> console.log("Button clicked", );
    
  
//   return(
//     <button onClick={handleClick} >click me </button>
//   )
// }

// export default Button2

type User ={
  id: number;
  name: string;
  email: string;
}
const Button2 =( )=>{
  const [user, setUser] = useState<User | null>(null)
const addUser =() =>{
  console.log(setUser({
    id: 1,
    name: "Victor",
    email: "victor@gmail.com"
  }));
  
}

  // const theUser = user?.name 
  console.log(user);
  return(
    <div>
      
      <button onClick={addUser}>click me</button>
    </div>
  )
}

export default Button2

// how to use omit in typescript
// an example of using omit in typescript is when you want to create a new type that excludes certain properties from an existing type. For example, if you have a type User with properties id, name, and email, and you want to create a new type UserWithoutEmail that excludes the email property, you can use the Omit utility type like this:
// and also generics
// type User = {    
//   id: number;
//   name: string;
//   email: string; 
// }
// different between unknown and any
// unknown is a type that represents any value, but it is safer than any because it requires you to perform type checking before using the value. any is a type that represents any value, but it does not require type checking before using the value. This means that using any can lead to runtime errors if the value is not of the expected type, while using unknown requires you to check the type before using the value, which can help prevent runtime errors.