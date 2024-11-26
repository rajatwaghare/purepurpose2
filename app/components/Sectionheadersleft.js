import React from 'react'

function Sectionheadersleft() {
  return (
    <>
     <section className="py-10 sm:py-16 lg:py-24">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
                    <div className="pr-12 sm:pr-0">
                        <div className="relative max-w-xs mb-12">
                            <img className="object-bottom rounded-md" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/2/business-man.jpg" alt="" />

                            <img className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/2/business-man.jpg" alt="" />
                        </div>
                    </div>

                    <div className=' text-center md:text-left ' >
                        <h2 className="text-3xl font-bold leading-tight  text-[#33402E] sm:text-4xl lg:text-5xl">How we work ?</h2>
                        <p className="mt-9 text-base leading-relaxed text-gray-600">Collecting waste packaging and used containers from their consumers and distribute them to recycling facilities and branches as per their requirements, as well as reselling the reusable glass bottles and containers.</p>
                        <p className="mt-4 text-base leading-relaxed text-gray-600">By partnering with such brands, we aim to create a circular economy within the beauty industry, promoting sustainable practices and reducing the overall environmental footprint. Moreover, raising awareness about the importance of proper waste management and inspire collective action towards a greener future.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Sectionheadersleft