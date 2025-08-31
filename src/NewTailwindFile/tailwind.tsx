import Button from "../button"
import Button3 from "./Button"
import Card from "./Card"

 import image from '../assets/pic.jpg'


const Tailwind = () => {
  return (
    <header className="px-16 py-6 flex justify-between items-center">
    <div className="">
        victor
    </div>

    <nav className="sm:bg-blue-700 bg-red-800">
        <ul className="flex gap-4 text-white font-bold ">
            <li className="hover:text-green-400 hover:text-2xl">Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
<Button3 text="click me" bgColor="bg-red-500" textColor="text-white" padding="p-4"/>
   

   <div>
    <Button3 text="add food" bgColor="bg-green-500" textColor="text-amber-500" padding="p-4"/>
   </div>



   <div>
    <Card image={image} title="Machine Learning" buttonContent="On Campus" description="Welcome to the Machine Learning Fundamentals course! In this 12-week curriculum, you will embark on an exciting journey to explore the world of machine…" icon="@" duration="12 Weeks" weeks="Twice a week"/>


   
   </div>
    </header>
  )
}
export default Tailwind