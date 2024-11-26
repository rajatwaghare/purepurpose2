import React from 'react'
import Image from 'next/image'

import localFont from "next/font/local";

const autography = localFont({
  src: "../fonts/Autography.woff",
  variable: "--font-autography",
  weight: "400",
});

function Sectionheaders() {
    return (
        <section className="py-20 sm:py-16 lg:py-24">
            <div className="max-w-5xl px-6 md:px-4 mx-auto sm:px-6 lg:px-8">
                <div className="mx-auto md:max-w-lg lg:max-w-3xl text-center">
                    <h1  className={`relative text-4xl md:text-7xl text-[#6B8C61]  ${autography.className}`}> Beauty Beyond Waste </h1>
                    <div>
                        <Image width='626' height='720' className="w-full mx-auto rounded-2xl my-10 md:my-16  sm:max-w-xs" src="/business-man.jpg" alt="" />
                    </div>
                    <h2 className=" text-2xl md:text-3xl text-[#33402E] leading-tight sm:text-4xl lg:text-4xl lg:leading-tight">
                        <span className=' font-semibold' >The motive behind this entire business revolves around the accumulation of waste created by the beauty and skincare industry.</span> Hence, my business would collaborate with beauty centric businesses and brands;
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Sectionheaders