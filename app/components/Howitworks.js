import React from 'react'
import localFont from "next/font/local";
import Image from 'next/image';

const autography = localFont({
  src: "../fonts/Autography.woff",
  variable: "--font-autography",
  weight: "400",
});

export default function Howitworks() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 px-5">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center ">
            <h1  className={`relative text-4xl text-[#6B8C61] ${autography.className}`}> How We Work? </h1>
                <h2 className="text-3xl  font-medium max-w-lg m-auto  !leading-tight text-[#33402E] sm:text-3xl xl:text-5xl">Our process is simple yet impactful</h2>
            </div>
    
            <div className="grid grid-cols-1 mt-20 gap-3 text-center sm:mt-10 sm:grid-cols-2 sm:gap-x-10 gap-y-10 md:grid-cols-3 xl:mt-10">

                <div className="md:p-8 lg:p-14 bg-white py-10 px-8 rounded-2xl">
                    <Image className=' max-w-20 m-auto ' width='80' height='80' src='/collection.png' alt=''></Image>
                    <h3 className="mt-12 text-xl font-bold  text-[#33402E] font-pj">Collection</h3>
                    <p className="mt-5 text-base text-gray-600 font-pj">We work with skincare brands and individuals to collect used containers and packaging through a convenient pickup or drop-off system.</p>
                </div>
    
                <div className="md:p-8 lg:p-14 bg-white py-10 px-8 rounded-2xl">
                    <Image className=' max-w-20 m-auto ' width='80' height='80' src='/recycling.png' alt=''></Image>
                    <h3 className="mt-12 text-xl font-bold  text-[#33402E] font-pj">Recycling & Repurposing</h3>
                    <p className="mt-5 text-base text-gray-600 font-pj">After collection, we sort and transport recyclable materials to specialized facilities that ensure proper processing. For reusable containers, we clean, sanitize, and make them available for resale to eco-conscious consumers and businesses.</p>
                </div>
    
                <div className="md:p-8 lg:p-14 bg-white py-10 px-8 rounded-2xl">
                    <Image className=' max-w-20 m-auto ' width='80' height='80' src='/education.png' alt=''></Image>
                    <h3 className="mt-12 text-xl font-bold  text-[#33402E] font-pj">Education & Partnership</h3>
                    <p className="mt-5 text-base text-gray-600 font-pj">Beyond recycling, we aim to educate our partners and customers about sustainable practices and foster collaborations with brands that share our commitment to the environment.</p>
                </div>
    
            </div>
        </div>
    </section>
    )
}
