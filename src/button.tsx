// import React from 'react'


// let url: string = "https://www.google.com";

// url:"7"

// function convertCurrency (amount: number, currency: string):string{
//     // ...
// }

// convertCurrency(7, "usd" ) 
// u can make any of the props optional by adding a ? after the prop name
// any means it can be any type of data

//  why do this ? ... since the both use the same union type. so if i want to make a change i only do it one place 
// type Color = "red" | "blue" | "green" 

// what about arrays

type ButtonProps = {
  // a union type
  // backgroundColor: "red" | "blue" | "green" from that to backgroundColor:Color
  // textColor:"red" | "blue" | "green"  from that to textColor:Color
backgroundColor: string
textColor:string
// eg fontSize:any means it can be any type of data
  fontSize: number
  pillShape: boolean
  // so padding needs to be an array of numbers so u put this [] when ever u are expect array
  padding: number[]

  // so we have the turple it rear
  // padding:[number, number, number]
  // tuple is basicaly a more specific array so what u specify in the array is what u will add in the same order too and how many
}

const Button = ({
  backgroundColor,
  fontSize,
  pillShape,
  textColor,
  padding

}: ButtonProps) => {
  //  typeScript will not allow u use string methods on a number
  // console.log(fontSize.toUpperCase()) // this will give an error
  // fontSize.toUpperCase...... i will not get error cus fontsize has any

  //  the reture type of this component is jsxElement but we dont realy need to type the  return type cus typeScript knows and when u hover on the button u will see the return type
  return (
    <div style={{
      backgroundColor:backgroundColor,
      color: textColor,
      fontSize: fontSize,
      padding: `${padding[0]}px ${padding[1]}px} `
    }}>
        click me 
    </div>
  )
}

export default Button

// so instead of doing all this stress with the css properties there is a better way
// type ButtonProps = {style:React.CSSProperties}

// so not the button we pass the style like this
// export default fuction Button ({ style}:ButtonProps){
// return <button style={style}>click me <button/>
// }

// so on the button component u use it like this 
// <Button style = {{background: "blue"  fontSize:24 color: white etc}}

// using Records

// eg 
// <Button
// borderRadius={{
// "topLeft": 2
// "topRight": 5
// "bottomRight": 10
// }}
// />

//so how to accept this

// what u think u will do 
// type ButtonProps ={
// borderRadius:{
// topLeft:number
// topRight:number
// bottomRight:number
// }
// }
//
// but no ....cus we are only specifyng the value for topleft
// better ways
// // type ButtonProps ={
// borderRadius: Records<string, number>

// now for fuction ...
