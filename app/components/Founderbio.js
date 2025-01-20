import React from 'react'
import Image from 'next/image'

import localFont from "next/font/local";

const autography = localFont({
    src: "../fonts/Autography.woff",
    variable: "--font-autography",
    weight: "400",
});

function Founderbio() {
    return (
        <>
            <section className="py-20 sm:py-16 lg:py-24">
                <div className="max-w-5xl px-6 md:px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="mx-auto md:max-w-lg lg:max-w-3xl text-center">
                        <h1 className={`relative text-4xl md:text-7xl text-[#6B8C61]  ${autography.className}`}> About the founder </h1>
                    </div>
                </div>
            </section>

            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-20">
                    <div className="sm:pr-0 h-full">
                        <div className="relative  h-full">
                            <Image width='626' height='720' className="object-bottom sticky top-10 w-full rounded-md" src="/sahria.jpg" alt="" />
                        </div>
                    </div>
                    <div className='text-center md:text-left'>
                        <p className="text-base leading-relaxed text-gray-600">Welcome</p>
                        <h2 className="text-3xl font-medium leading-tight  text-[#33402E] sm:text-4xl lg:text-5xl">I'm Sahria Malik</h2>
                        <p className="mt-9 text-base leading-relaxed text-gray-600">the founder of Pure Purpose and I'm thrilled to share my journey with you. As someone deeply passionate about sustainability and reducing environmental waste, I've always believed that small changes can create a ripple effect for larger global impact. Due to which I have had multiple similar projects that surround a movement towards sustainability.</p>
                        <p className="mt-4 text-base leading-relaxed text-gray-600">My interest in entrepreneurship was sparked in 7th grade when I first interned with my mother. That experience inspired me to delve deeper into the disciplines behind running a business that drives meaningful societal change. To nurture this passion, I've continued to intern with my mother every summer since then, gaining valuable hands-on experience and eventually working with her in her skincare brand from time to time.</p>
                        <p className="mt-4 text-base leading-relaxed text-gray-600">I aim for Pure Purpose to be a platform dedicated to collecting, recycling, and reimagining packaging waste while providing reusable glass containers to promote a greener future. With a strong focus on sustainability and innovation, I envisioned a circular economy model where waste could be minimized, and resources could be reused effectively. </p>
                        <p className="mt-4 text-base leading-relaxed text-gray-600">This journey has not only been about creating impact but also learning, through this project, I’ve developed skills in business management, collaboration, and logistics—all while staying true to my vision of making sustainability accessible and actionable. I’m incredibly proud of how far we’ve come, and I’m excited for the future of Pure Purpose. And I aim to create a world of beauty beyond waste.</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Founderbio