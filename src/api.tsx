import React, { useEffect, useState } from 'react'

import axios from 'axios'


interface DataType {
        id:number
        title:string
        price:number
        description:string
        category:string
        image:string
    }


const Api = () => {
    const [data, setData] = useState <DataType[]>([])

    useEffect(()=>{
        const fetchProduct = async () =>{
           try{
             const response = await axios.get<DataType[]>("https://fakestoreapi.com/products");
            console.log(response.data);
            setData(response.data)
           }catch(error){
                console.log(error, "error fetching data");
           }
        }
        fetchProduct()
    },[])

  return (
    <div>
        {data.map((x)=>(
            <div key={x.id}>
                <div>
                    <img src={x.image} alt="" />
                </div>

                <div>{x.titles}</div>
                <div>{x.description}</div>
                <div>{x.category}</div>
                <div>{x.price}</div>
            </div>
        ))}
    </div>
  )
}

export default Api