import { IoMdArrowRoundForward } from "react-icons/io";
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
      <div className=" h-32 lg:w-[70%] w-full bg-slate-300 lg:mt-5  "></div>
      <div className=" lg:relative lg:mt-20 mt-5 ">
        <div className=" lg:absolute lg:w-[300px] w-full p-5 rounded-2xl z-10 bg-white lg:top-20 mb-5 ">
          <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication,</p>
        </div>
      <div className=" relative lg:ml-40  ">
        <img className=" shadow-lg lg:h-[300px] lg:w-[600px] rounded-md object " src="https://media.istockphoto.com/id/1460755337/photo/white-color-theme-modern-style-office-with-exposed-concrete-floor-and-a-lot-of-plant-3d.jpg?s=2048x2048&w=is&k=20&c=tWDM7wTEi9dTlYi-HRxj_d76rUSp9N45pP9oMrnDIeY=" />
        <button className=" absolute top-4 left-4 flex items-center justify-center text-center text-xl px-5 py-3 bg-gray-200  hover:bg-[#7559ff] hover:text-white duration-200 rounded-2xl ">Demo</button> 
      </div>
      </div>
      <div className=" w-full lg:mt-[300px] bg-gray-50 mt-[30px] w-full h-[200px] ">
        <h1 className=" lg:text-8xl text-6xl ">Create videos for every team</h1>
        {/* <div className=" w-[50%] " ></div>
        <div className=" w-[50%] "></div> */}
      </div>
    </div>
  )
}

export default Header