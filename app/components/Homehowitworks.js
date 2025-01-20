import React from 'react'
import localFont from "next/font/local";
import Image from 'next/image';

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
                    <Image className=' max-w-20 m-auto ' width='80' height='80' src='/step1.png' alt=''></Image>
                    <h3 className="mt-12 text-xl font-bold  text-[#33402E] font-pj">STEP ONE</h3>
                    <p className="mt-1 text-base text-gray-600 font-pj">Clean out the empties.</p>
                </div>
    
                <div className="md:p-8 lg:p-14 bg-white py-10 px-8 rounded-2xl">
                    <Image className=' max-w-20 m-auto ' width='80' height='80' src='/step2.png' alt=''></Image>
                    <h3 className="mt-12 text-xl font-bold  text-[#33402E] font-pj">STEP TWO</h3>
                    <p className="mt-1 text-base text-gray-600 font-pj">Fill form: <a className=' text-green-800 font-semibold ' href='https://tally.so/r/3j0YvY'>CLIK HERE</a></p>
                </div>
    
                <div className="md:p-8 lg:p-14 bg-white py-10 px-8 rounded-2xl">
                    <Image className=' max-w-20 m-auto ' width='80' height='80' src='/step3.png' alt=''></Image>
                    <h3 className="mt-12 text-xl font-bold  text-[#33402E] font-pj">STEP THREE</h3>
                    <p className="mt-1 text-base text-gray-600 font-pj">Courier the box to us.</p>
                </div>
    
                <div className="md:p-8 lg:p-14 bg-white py-10 px-8 rounded-2xl">
                    <Image className=' max-w-20 m-auto ' width='80' height='80' src='/step4.png' alt=''></Image>
                    <h3 className="mt-12 text-xl font-bold  text-[#33402E] font-pj">STEP FOUR</h3>
                    <p className="mt-1 text-base text-gray-600 font-pj">Earn points and bonuses from our affiliated brands.</p>
                </div>
    
            </div>
        </div>
    </section>
    </>
  )
}

export default Homehowitworks