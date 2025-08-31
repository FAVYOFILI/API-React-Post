import axios from 'axios'
import { useEffect, useState } from 'react'

const Get = () => {
  interface Data {
    title:string;
    id:number;
    price:number;
    description:string;
    category:string;
   image:string;
  };

  const [data, setData] = useState<Data[]>([]);
  const [modalView, setModalView] = useState(false)
   const [selectedItem, setSelectedItem] = useState<Data | null>(null);

 useEffect(()=>{
   const handleData = async () =>{
      try{
        const response = await axios.get<Data[]>("https://fakestoreapi.com/products");
        setData(response.data);
        console.log(response.data);
      }catch(error){
        console.log(error, "error fetching data");
      }
  }
  handleData()
 },[])

 const handleModal =(id:number) =>{
  console.log("i have been clicked", id);
  const findCard = data.find((x)=> (x.id === id))

  if (findCard){
    setModalView(true)
    setSelectedItem(findCard)
  }else{
    null
  }
 }

  return (
    <div className="relative" >
      {data.map((item)=>(
        <div key={item.id} onClick={()=>handleModal(item.id)}>
          <div>{item.title}</div>
          <div>
            <img src={item.image} alt="" />
          </div>
          <div>{item.price}</div>
        </div>
        
      ))}


     {modalView && selectedItem && (
      <div onClick={()=> setModalView(false)} className='bg-amber-400 h-30 absolute top-0'>
        <div>{selectedItem.category}</div>
    <div>{selectedItem.description}</div>
    <div>{selectedItem.price}</div>
      </div>
     )}
     
    </div>
  )
}

export default Get