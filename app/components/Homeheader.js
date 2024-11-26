"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import localFont from "next/font/local";

import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const autography = localFont({
    src: "../fonts/Autography.woff",
    variable: "--font-autography",
    weight: "400",
});

function Homeheader() {
    return (
        <>
            <section className="py-20 sm:py-16 lg:py-24">
                <div className="max-w-5xl px-6 md:px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="mx-auto md:max-w-lg lg:max-w-3xl text-center">
                        <h1 className={`relative text-4xl md:text-7xl mb-10 text-[#6B8C61]  ${autography.className}`}> Give Back, Get Back </h1>
                        <h2 className=" text-2xl md:text-3xl text-[#33402E] leading-tight sm:text-4xl lg:text-4xl lg:leading-tight">
                            <span className=' font-semibold' >We're committed to kindness. To ourselves, those around us & the planet.</span> Want to be part of our journey? Don't toss out your empties! Send them to us & get rewarded.
                        </h2>

                    </div>
                </div>
            </section>
            <section>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <img src='https://indulgeoessentials.com/cdn/shop/files/Desktop_01_527744b0-b1e1-4bb1-9bdb-a5c1076236a4.jpg?v=1731141497' />
                    </SwiperSlide>
                    <SwiperSlide><img src='https://indulgeoessentials.com/cdn/shop/files/Desktop_02.jpg?v=1731141536' /></SwiperSlide>
                    ...
                </Swiper>
            </section>
        </>
    )
}

export default Homeheader