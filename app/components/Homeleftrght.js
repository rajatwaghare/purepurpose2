import React from 'react'
import Image from 'next/image'


import localFont from "next/font/local";

const autography = localFont({
    src: "../fonts/Autography.woff",
    variable: "--font-autography",
    weight: "400",
});

function Homeleftrght() {
    return (
        <>
            <section className="py-10 border-t pb-20">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10 text-center md:text-left items-center ">
                        <div className=' order-2' >
                            <h2 className="text-3xl font-medium leading-tight  text-[#33402E] sm:text-4xl lg:text-5xl">What we Accept</h2>
                            <p className="mt-4 text-lg leading-relaxed text-gray-600">We are thrilled to help you in your recycling journey! All you have to do is courier us the empties of our affiliated brands, including items made up of plastic, glass, aluminum, rubber parts, as well as other materials included in the product empties.</p>
                            <p className="mt-4 text-lg leading-relaxed text-gray-600">The bottles you send us should be completely empty, washed and dried out before it is received, as it would hinder our recycling process.</p>
                        </div>
                        <div className=' '>
                            <Image width='626' height='720' className="w-full mx-auto sm:max-w-xs rounded-3xl leading-relaxed" src="/what-we-accept.jpg" alt="" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10 items-center text-center md:text-left">
                        <div className=' md:order-2 ' >
                            <Image width='626' height='720' className="w-full mx-auto sm:max-w-xs rounded-3xl" src="/what-we-dont.jpg" alt="" />
                        </div>
                        <div>
                            <h2 className="text-3xl  font-medium leading-tight  text-[#33402E] sm:text-4xl lg:text-5xl">What We Don't</h2>
                            <ul className=' list-disc pl-5 mt-5 text-lg leading-relaxed text-gray-600'>
                                <li>Empties from other brands</li>
                                <li>Courier packaging</li>
                                <li>Empty sachets</li>
                                <li>Paper or plastic pouches</li>
                                <li>Partially used products</li>
                            </ul>
                            <p className="mt-4 text-lg leading-relaxed text-gray-600">Only fully empty Indulgeo Essentials containers qualify for recycling.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homeleftrght