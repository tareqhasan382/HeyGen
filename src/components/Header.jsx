import { IoMdArrowRoundForward } from "react-icons/io";
import { Typewriter } from 'react-simple-typewriter'
import ImageCard from "./ImageCard";
import CompanyLogo from "./CompanyLogo";
import ImageSlide from "./ImageSlide";
const Header = () => {
  return (
    <div className=" mt-20 mb-10 flex flex-col items-center justify-center ">
      <div className=" ">
        <h1 className=" lg:text-8xl text-4xl font-semibold flex flex-col items-center justify-center "> <span className=" text-blue-600 ">AI-powered video</span> <span>creations at scale</span></h1>
        <h3 className=" flex flex-col text-center lg:text-2xl py-5 "><span>Effortlessly produce studio quality videos</span> <span>with AI-generated avatars and voices.</span></h3>
      </div>
     
      <button className=" max-md:hidden flex items-center justify-center text-center text-xl px-5 py-3 bg-[#5636f3] hover:bg-[#7559ff] text-white duration-200 rounded-2xl ">Get started for free <IoMdArrowRoundForward className=" ml-2 mt-1 " /></button>
      <button className="md:hidden flex items-center justify-center text-center text-xl px-5 py-3 bg-[#5636f3] hover:bg-[#7559ff] text-white duration-200 rounded-2xl ">Try Demo <IoMdArrowRoundForward className="ml-2 mt-1" /></button>
      <span className=" text-sm">No credit card needed</span>
      <CompanyLogo/>
      <div className=" lg:relative lg:mt-20 mt-5 ">
        <div className=" lg:absolute lg:w-[300px] w-full p-5 rounded-2xl z-10 bg-white lg:top-20 mb-5 ">
          <div className=" flex flex-row items-center gap-2 py-2 " >
            <img className=" lg:w-16 lg:h-16 w-10 h-10 rounded-full object-cover hover:shadow-xl shadow-black cursor-pointer " src="https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=2048x2048&w=is&k=20&c=FyLZBfgZRlYKeQMsFgb6AQBulD8Da4od1RzJwZcQ4_8=" alt="img" />
            <img className=" lg:w-16 lg:h-16 w-10 h-10 rounded-full object-cover hover:shadow-xl shadow-black cursor-pointer " src="https://media.istockphoto.com/id/1483312142/photo/mid-aged-and-blond-haired-business-woman-standing-at-the-office.jpg?s=2048x2048&w=is&k=20&c=LUHd60C5IeNc-9RcuUKDV4TOv6aQvXsc-3YJbRl1uNk=" alt="img" />
            <img className=" lg:w-16 lg:h-16 w-10 h-10 rounded-full object-cover hover:shadow-xl shadow-black cursor-pointer " src="https://media.istockphoto.com/id/1444490810/photo/confident-businesswoman-in-modern-office.jpg?s=2048x2048&w=is&k=20&c=uFHgGOLX8MaC20geI6_8tKQe0V28i29281KhpkaarWs=" alt="img" />
           
          </div>
          <h3 className=" text-blue-500 py-2 " >Script</h3>
          <p>
          <Typewriter
                    loop
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={120}
                    words={["In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. "]}
               / >
                   
          </p>
        </div>
      <div className=" relative lg:ml-40  ">
        {/* <img className=" shadow-lg lg:h-[300px] lg:w-[600px] rounded-md object " src="https://media.istockphoto.com/id/1460755337/photo/white-color-theme-modern-style-office-with-exposed-concrete-floor-and-a-lot-of-plant-3d.jpg?s=2048x2048&w=is&k=20&c=tWDM7wTEi9dTlYi-HRxj_d76rUSp9N45pP9oMrnDIeY=" /> */}
        <iframe className="shadow-lg lg:h-[300px] lg:w-[600px] rounded-md object-contain"  src="https://www.youtube.com/embed/yu_x8qv6mfA?si=zrSNpQysIXf_kAbG&amp;start=7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
        <button className=" absolute top-4 left-4 flex items-center justify-center text-center text-xl px-5 py-3 bg-gray-200  hover:bg-[#7559ff] hover:text-white duration-200 rounded-2xl ">Demo</button> 
      </div>
      </div>
      <div className=" lg:mt-[300px] mt-[30px] w-full pt-8 ">
        <h1 className=" max-md:hidden lg:text-9xl text-6x w-full ">Create videos</h1>
        <div className=" max-md:hidden w-full h-full flex-wrap grid grid-cols-2 gap-4 relative ">
        <h1 className=" lg:text-9xl text-6x  ">for every team</h1>
        <h1 className=" lg:text-2xl h-24 mt-14 ">Engage, explain, entertain. AI-powered video creation for any need.</h1>
        </div>
        <div className="md:hidden pt-8 ">
        <h1 className=" text-6xl w-full font-semibold ">Create videos for every team</h1>
        <h1 className=" py-6 text-lg ">Engage, explain, entertain. AI-powered video creation for any need.</h1>
        </div>
         {/* ===============image======= */}
         <div className=" w-full grid grid-cols-2 gap-4 lg:mt-20 ">
           {/* ===============image card start======= */}
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
{/* ===============image card end======= */}
         </div>
         {/* ===============image======= */}
         <ImageSlide/>
         
      </div>
      
    </div>
  )
}

export default Header