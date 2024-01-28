import { BiRightArrowAlt } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";

const ImageCard = () => {
  return (
    <div>
    <div className="w-full rounded-xl max-md:hidden ">
    <iframe className="w-full lg:h-[350px] rounded-t-xl"  src="https://www.youtube.com/embed/yu_x8qv6mfA?si=zrSNpQysIXf_kAbG&amp;start=7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
         {/* <img className=" w-full lg:h-[350px] rounded-t-xl  " src="https://img.freepik.com/free-photo/handsome-businessman-suit-glasses-cross-arms-chest-look_176420-21750.jpg?w=996&t=st=1706421231~exp=1706421831~hmac=2e905afa75cba95c7e06409ea0755fc4c47ffdf8712bf03c498c767bde80ed22" alt="img" /> */}
         <div className=" h-[130px] w-full bg-blue-950 rounded-b-xl flex flex-row items-center justify-center gap-6 ">
         <div className=" flex flex-col items-center text-white ">
         <h1 className=" flex flex-col w-full text-3xl " > <span>Sales outreach</span> <span className=" text-[#a2a1ee90] " >that converts</span> </h1>
         <h1 className=" w-full text-[#d2d2f4] ">Create personalized outreach videos at scale</h1>
         </div>
<div className=" flex flex-row items-center gap-5 ">
<button className=" bg-blue-500 hover:bg-[#5a57f7] duration-300 text-white rounded-2xl px-6 py-4 flex flex-row items-center gap-2 ">Get Started<BiRightArrowAlt size={20} /></button>
            <button className=" p-4  rounded-2xl bg-[#a2a1ee90] outline outline-1 outline-[#babac6] "><BiRightArrow className=" text-white " size={20} /></button>
</div>
         </div>
    </div>
    <div className=" md:hidden relative w-full opacity-100 ">
    <iframe className="w-full lg:h-[350px] rounded-xl shadow-md shadow-black/50 "  src="https://www.youtube.com/embed/yu_x8qv6mfA?si=zrSNpQysIXf_kAbG&amp;start=7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
    {/* <img className=" w-full lg:h-[350px] rounded-xl shadow-md shadow-black/50  " src="https://img.freepik.com/free-photo/handsome-businessman-suit-glasses-cross-arms-chest-look_176420-21750.jpg?w=996&t=st=1706421231~exp=1706421831~hmac=2e905afa75cba95c7e06409ea0755fc4c47ffdf8712bf03c498c767bde80ed22" alt="img" /> */}
    <button className=" absolute top-2 left-2 p-3 shadow-md shadow-black bg-[#e6e6ff] rounded-2xl outline outline-1 outline-black "><BiRightArrow className=" text-black " size={20} /></button>
    <div className=" flex flex-col items-center font-semibold text-[#00004d] py-4 opacity-100 ">
         <h1 className=" flex flex-col w-full  " > <span>Sales outreach</span> <span className="text-[#6666ff] " >that converts</span> </h1>
         <h1 className=" w-full text-[12px]  ">Create personalized outreach videos at scale</h1>
         </div>
    </div>
    </div>
  );
}

export default ImageCard;
