import Marquee from "react-fast-marquee";
import { MdArrowForward } from "react-icons/md";
const ImageSlide = () => {
    const row1=[
        "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ]
  return (
    <div className=" py-20 flex flex-col gap-10 ">
      <Marquee className=" gap-4 rounded-md " direction="left" speed={30}>
      <div className="   flex flex-row items-center gap-4 bg-[#e0e3e6] rounded-xl  ">

        
        {
            row1.map(it=>(
<div key={it} className="relative rounded-xl flex items-center justify-center">
    <img className="h-[300px] w-[200px] object-cover rounded-xl" src={it} alt="logo" />
    <button className="absolute top-56 flex items-center justify-center rounded-md z-10 bg-black px-3 py-2 text-white">
        Customize <MdArrowForward size={30} className="pl-2" />
    </button>
</div>
                
            ))
        }
       
      </div>
      </Marquee>
      <Marquee className=" gap-4 rounded-md " direction="right" speed={30}>
      <div className="   flex flex-row items-center gap-4 bg-[#e0e3e6] rounded-xl  ">

        
        {
            row1.map(it=>(
<div key={it} className="relative rounded-xl flex items-center justify-center">
    <img className="h-[300px] w-[200px] object-cover rounded-xl" src={it} alt="logo" />
    <button className="absolute top-56 flex items-center justify-center rounded-md z-10 bg-black px-3 py-2 text-white">
        Customize <MdArrowForward size={30} className="pl-2" />
    </button>
</div>
                
            ))
        }
       
      </div>
      </Marquee>
   
    </div>
  );
}

export default ImageSlide;