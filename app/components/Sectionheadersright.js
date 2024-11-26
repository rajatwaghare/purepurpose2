import React from 'react'

import localFont from "next/font/local";
import Image from 'next/image';


const autography = localFont({
    src: "../fonts/Autography.woff",
    variable: "--font-autography",
    weight: "400",
});

function Sectionheadersright() {
    return (
        <section className="py-10 border-t sm:py-16 lg:py-24">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="mx-auto  md:max-w-lg lg:max-w-3xl text-center">
                    <h1 className={`relative text-4xl  md:text-4xl text-[#6B8C61]  ${autography.className}`}> Our Story </h1>
                    <h2 className="my-5 text-[#33402E] leading-tight sm:text-4xl lg:text-4xl lg:leading-tight">
                        <span className='text-5xl font-semibold' >The origin behind the idea:</span>
                    </h2>
                    <p className=' text-gray-600 text-xl font-light  leading-relaxed' >I had gauged an interest in entrepreneurship when I had first interned with my mother in 7th grade and since then wanted to learn more about the disciplines behind running a business that can make an impactful change on society.</p>
                </div>

                <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10 text-center md:text-left items-center ">
                    <div className=' order-2 md:order-1 ' >
                        <p className="mt-4  text-gray-600 text-xl font-light leading-relaxed ">While keeping this in mind I tried to look at the problems around me, faced by countless people. A problem I may be able to solve. And that is when this idea came into my mind. Having acne prone and sensitive skin since a young age, meant that I continuously tried on skincare products, which included a lot of trial and error.</p>
                    </div>
                    <div>
                        <Image width='626' height='720' className="w-full mx-auto sm:max-w-xs rounded-3xl leading-relaxed" src="/business-man.jpg" alt=""></Image>
                    </div>
                </div>

                <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10 items-center text-center md:text-left">
                    <div>
                        <Image width='626' height='720' className="w-full mx-auto sm:max-w-xs rounded-3xl" src="/business-man.jpg" alt="" />
                    </div>
                    <div>
                        <p className="mt-4  text-gray-600 text-xl font-light leading-relaxed ">And this often lead to a significant amount of wastage in my household caused by the single use plastic packaging and the left-over containers. This accumulated waste would end up in landfills and only contribute to pollution, this is one of the primary reasons the skincare and beauty industry are known to be incredibly wasteful.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sectionheadersright