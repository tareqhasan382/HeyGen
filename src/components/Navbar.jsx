import { useState } from "react";
import { Link } from "react-router-dom"
// import { BiSolidUpArrow } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
 
  return (
    <div  className="px-5 max-w-[1280px] mx-auto  ">
    <div className="flex items-center justify-between w-full py-4 relative">
      <div className="flex items-center justify-center md:space-x-10 lg:space-x-20 ">
        <div className="font-semibold text-2xl">
          <Link to="/" className=" text-blue-950 text-xl font-bold ">
          HeyGen
          </Link>
        </div>
        <nav  className="max-md:hidden flex flex-row items-center  ">
          <ul className="flex items-center space-x-3  font-semibold text-[15px]">
            <li onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Link to="/" className={`${isHovered && " bg-[#eef2f6f0] text-blue-500  rounded-full"} py-2 px-3 inline-block w-full`}>
                <span className={` flex flex-row items-center justify-center gap-1`}>
                Use Cases
                    <IoIosArrowDown className={`transition-transform transform text-blue-500 ${isHovered ? ' duration-300 rotate-180' : ' duration-300 rotate-0'}`} size={20} />
                </span> 
            </Link>
            {/* Nested Menu */}
            <div onMouseEnter={() => setIsHovered(true)} className={`absolute  flex items-center z-[2] pt-2  ${
                isHovered ? "" : "hidden"
              }`}>
 {isHovered && (
                <ul className=" rounded-3xl shadow-lg py-6 px-6 bg-white text-black flex flex-col gap-2 ">
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Sales Outreach</Link></li>
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Product Marketing</Link></li>
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Content Marketing</Link></li>
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Learning & Development</Link></li>
            </ul>
            )}
            </div>
           
        </li>
        {/* Feature  Resources */}
        <li onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>
            <Link to="/" className={`${isHovered2 && " bg-[#eef2f6f0] text-blue-500  rounded-full"} py-2 px-3 inline-block w-full`}>
                <span className={` flex flex-row items-center justify-center gap-1`}>
                Feature
                    <IoIosArrowDown className={`transition-transform transform text-blue-500 ${isHovered2 ? ' duration-300 rotate-180' : ' duration-300 rotate-0'}`} size={20} />
                </span> 
            </Link>
            {/* Nested Menu */}
            <div onMouseEnter={() => setIsHovered2(true)} className={`absolute  flex items-center z-[2] pt-2  ${
                isHovered2 ? "" : "hidden"
              }`}>
 {isHovered2 && (
                <ul className=" rounded-3xl shadow-lg py-6 px-6 bg-white text-black flex flex-col gap-2 ">
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Sales Outreach</Link></li>
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Product Marketing</Link></li>
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Content Marketing</Link></li>
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Learning & Development</Link></li>
            </ul>
            )}
            </div>
           
        </li>
        <li onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}>
            <Link to="/" className={`${isHovered3 && " bg-[#eef2f6f0] text-blue-500  rounded-full"} py-2 px-3 inline-block w-full`}>
                <span className={` flex flex-row items-center justify-center gap-1`}>
                Resources                    <IoIosArrowDown className={`transition-transform transform text-blue-500 ${isHovered3 ? ' duration-300 rotate-180' : ' duration-300 rotate-0'}`} size={20} />
                </span> 
            </Link>
            {/* Nested Menu */}
            <div onMouseEnter={() => setIsHovered3(true)} className={`absolute  flex items-center z-[2] pt-2  ${
                isHovered3 ? "" : "hidden"
              }`}>
 {isHovered3 && (
                <ul className=" rounded-3xl shadow-lg py-6 px-6 bg-white text-black flex flex-col gap-2 ">
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Sales Outreach</Link></li>
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Product Marketing</Link></li>
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Content Marketing</Link></li>
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Learning & Development</Link></li>
            </ul>
            )}
            </div>
           
        </li>
            <li>
              <Link to="/" className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}>
              Pricing
              </Link>
            </li>
          </ul>
          
        </nav>
      </div>
      
      <div className="flex items-center space-x-4">
        {/* <SearchBar /> */}
        <p className=" flex text-right items-end font-semibold cursor-pointer hover:text-[#5636f3] duration-300 max-md:hidden "> Contact Sales</p>
        <div
          onClick={() => setShowProfile(!showProfile)}
          className="relative cursor-pointer"
        >   
        </div>

        <Link to="/">
          <div className=" text-xl py-3 bg-[#5636f3] hover:bg-[#7559ff] text-white rounded-md">
           <button className=" px-4 ">Get started</button>
          </div>
        </Link>


        <span
          onClick={() => setShowNav(!showNav)}
          className="p-[9px] bg-gray-100 rounded-md md:hidden"
        >
         {
          showNav ?  <AiOutlineClose size={30}
          className="transition ease-in duration-150"
        />: <CiMenuBurger size={30}
        className="transition ease-in duration-150"
      />
         }
        </span>
      </div>
    </div>
    <div
      className={`md:hidden ${
        showNav
          ? "pb-4 px-5 bg-slate-300 rounded-lg "
          : "h-0 invisible opacity-0"
      }`}
    >
      <ul className="flex flex-col text-[15px] opacity-75 px-2 ">
        <li>
          <Link to="/" className="py-3 inline-block w-full ">
            Feature
          </Link>
        </li>
        <li>
          <Link to="/addProduct" className="py-3 inline-block w-full ">
            Add Product
          </Link>
        </li>
        <li>
          <Link to="/" className="py-3 inline-block w-full ">
            My Profile
          </Link>
        </li>
      </ul>
      <div className="flex items-center bg-gray-100 p-2 rounded-lg my-4 py-3">
        <input
          type="text"
          className="outline-none w-full bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]"
          placeholder="Search"
          autoComplete="false"
        />
        <button> <p>CiSearch</p>
          {/* <CiSearch size={20} className="opacity-50" /> */}
        </button>
      </div>
    </div>
  </div>
  )
}

export default Navbar