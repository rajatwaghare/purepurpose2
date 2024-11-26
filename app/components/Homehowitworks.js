import React from 'react'

import localFont from "next/font/local";

const autography = localFont({
  src: "../fonts/Autography.woff",
  variable: "--font-autography",
  weight: "400",
});

function Homehowitworks() {
  return (
    <>
    <section className="py-12 sm:py-16 lg:py-20 px-5">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center ">
            <h1  className={`relative text-4xl text-[#6B8C61] ${autography.className}`}> How We Work? </h1>
                <h2 className="text-3xl font-medium max-w-lg m-auto  !leading-tight text-[#33402E] sm:text-3xl xl:text-5xl">Our process is simple yet impactful</h2>
            </div>
    
            <div className="grid grid-cols-1 mt-20 text-center sm:mt-10 sm:grid-cols-2 sm:gap-x-10 gap-y-10 md:grid-cols-4 md:gap-5 xl:mt-10">

                <div className="md:p-8 lg:p-14 bg-white py-10 px-8 rounded-2xl">
                    <svg className="mx-auto" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3 className="mt-12 text-xl font-bold  text-[#33402E] font-pj">STEP ONE</h3>
                    <p className="mt-1 text-base text-gray-600 font-pj">Clean out the empties.</p>
                </div>
    
                <div className="md:p-8 lg:p-14 bg-white py-10 px-8 rounded-2xl">
                    <svg className="mx-auto" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27 27H19V45H27V27Z" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 37H1V45H9V37Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M45 17H37V45H45V17Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 17L15 7L23 15L37 1" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 1H37V10" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3 className="mt-12 text-xl font-bold  text-[#33402E] font-pj">STEP TWO</h3>
                    <p className="mt-1 text-base text-gray-600 font-pj">Fill out this form</p>
                </div>
    
                <div className="md:p-8 lg:p-14 bg-white py-10 px-8 rounded-2xl">
                    <svg className="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41 1H1V41H41V1Z" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18 7H7V20H18V7Z" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18 26H7V35H18V26Z" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M35 7H24V35H35V7Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3 className="mt-12 text-xl font-bold  text-[#33402E] font-pj">STEP THREE</h3>
                    <p className="mt-1 text-base text-gray-600 font-pj">Courier the box to us.</p>
                </div>
    
                <div className="md:p-8 lg:p-14 bg-white py-10 px-8 rounded-2xl">
                    <svg className="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41 1H1V41H41V1Z" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18 7H7V20H18V7Z" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18 26H7V35H18V26Z" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M35 7H24V35H35V7Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3 className="mt-12 text-xl font-bold  text-[#33402E] font-pj">STEP FOUR</h3>
                    <p className="mt-1 text-base text-gray-600 font-pj">Earn 30 gold coins per empty.</p>
                </div>
    
            </div>
        </div>
    </section>
    </>
  )
}

export default Homehowitworks