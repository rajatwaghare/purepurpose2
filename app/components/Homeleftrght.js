import React from 'react'


import localFont from "next/font/local";

const autography = localFont({
    src: "../fonts/Autography.woff",
    variable: "--font-autography",
    weight: "400",
});

function Homeleftrght() {
    return (
        <>
            <section className="py-10 border-t sm:py-16 lg:py-24">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10 text-center md:text-left items-center ">
                        <div className=' order-2' >
                            <h2 className="text-3xl font-bold leading-tight  text-[#33402E] sm:text-4xl lg:text-5xl">What we Accept</h2>
                            <p className="mt-4  text-gray-600 text-xl font-light leading-relaxed ">We’re excited to help you recycle! Please bring us your Indulgeo Essentials beauty empties, including items made from plastic, glass, aluminum, and rubber parts used in our products.</p>
                            <p className="mt-4  text-gray-600 text-xl font-light leading-relaxed ">Note: Only fully empty, clean containers are eligible for recycling. No points will be rewarded for partially used or unclean items.</p>
                        </div>
                        <div className=' '>
                            <img className="w-full mx-auto sm:max-w-xs rounded-3xl leading-relaxed" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/2/business-man.jpg" alt="" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10 items-center text-center md:text-left">
                        <div className=' md:order-2 ' >
                            <img className="w-full mx-auto sm:max-w-xs rounded-3xl" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/2/business-man.jpg" alt="" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold leading-tight  text-[#33402E] sm:text-4xl lg:text-5xl">What We Don't</h2>
                            <ul className=' list-disc pl-5 mt-5  text-gray-600 text-xl font-light'>
                                <li>Empties from other brands</li>
                                <li>Courier packaging</li>
                                <li>Empty sachets</li>
                                <li>Paper or plastic pouches</li>
                                <li>Partially used products</li>
                            </ul>
                            <p className="mt-4 text-gray-600 text-xl font-light leading-relaxed">Only fully empty Indulgeo Essentials containers qualify for recycling.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homeleftrght