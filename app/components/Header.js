import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';


function Header() {
    return (
        <>
            <header>

                <div className="py-4 border-b ">
                    <div className="px-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <nav className="relative grid grid-cols-3 items-center justify-between">


                            <div className=" text-[#33402E]  lg:flex lg:items-center lg:space-x-10">
                                <a href="/" title="" className="text-base  text-[#33402E] font-medium flex items-center gap-2"> <RiInstagramFill className=' text-4xl  md:text-2xl ' />
                                    <span className=' hidden md:inline-block' >Social</span></a>
                            </div>

                            <div className=" text-center ">
                                <a href="/" title="" className=" inline-block ">
                                    <Image width='400' height='220'  className="w-auto h-20 lg:h-20" src="/Purepurposelogo_02.png" alt="" />
                                </a>
                            </div>
                            <div className=" flex justify-end lg:items-center lg:space-x-10">
                                <a href="/about" title="" className="hidden md:inline-block text-base font-medium text-[#33402E]"> About </a>
                                <a href="https://tally.so/r/3j0YvY" title="" className="hidden md:inline-block text-base font-medium text-[#33402E]"> Fill Form </a>
                                <Sheet>
                                    <SheetTrigger className="inline-flex text-[#33402E] transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                        </svg>
                                    </SheetTrigger>
                                    <SheetContent className="bg-[#EFF4ED] w-[80%]">
                                        <ul className=' grid gap-10 pt-40'>
                                            <li><a href="/about" className=" text-5xl font-light text-[#33402E]"> Home </a></li>
                                            <li><a href="/about" className=" text-5xl font-light text-[#33402E]"> About </a></li>
                                            <li><a href="#" className="text-5xl font-light text-[#33402E]"> Fill Form </a></li>
                                            <li><a href="#" className="text-5xl font-light text-[#33402E]"> Social </a></li>
                                        </ul>
                                    </SheetContent>
                                </Sheet>
                            </div>

                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header