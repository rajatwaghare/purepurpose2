import React from 'react'
import Image from 'next/image'

function Sectionheadersleft() {
  return (
    <>
     <section className="py-10 sm:py-16 lg:py-24">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
                    <div className="pr-12 sm:pr-0">
                        <div className="relative max-w-xs mb-12">
                            <Image width='626' height='720' className="object-bottom rounded-md" src="/how-we-work-1.jpg" alt="" />

                            <Image width='626' height='720' className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12" src="/how-we-work-2.jpg" alt="" />
                        </div>
                    </div>

                    <div className=' text-center md:text-left ' >
                        <h2 className="text-3xl font-medium leading-tight  text-[#33402E] sm:text-4xl lg:text-5xl">How we work ?</h2>
                        <p className="mt-9 text-base leading-relaxed text-gray-600">collecting waste packaging and used containers from their consumers and distributing them to recycling facilities and branches as per their requirements, as well as reselling the reusable glass bottles and containers. By partnering with such brands, we aim to create a circular economy within the beauty industry, promoting sustainable practices and reducing the overall environmental footprint.</p>
                        <p className="mt-4 text-base leading-relaxed text-gray-600">Moreover, raising awareness about the importance of proper waste management and inspiring collective action towards a greener future.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Sectionheadersleft