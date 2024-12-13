import React, { useRef, useState } from 'react'
import './FeaturedProjectComponent.scss'
import { motion, useInView } from 'framer-motion'
import Slider from 'react-slick'
import LightGallery from "lightgallery/react";
import lgZoom from 'lightgallery/plugins/zoom';
import lightGallery from 'lightgallery';


export const FeaturedProjectComponent = () => {

    lightGallery(document.getElementById('gallery-container'), {
        speed: 500,
        mode: 'lg-fade',
    });


    const ref = useRef(null);

    const inView = useInView(ref, { margin: "-10%", once: true });

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const images1 = [
        `${'/Projects/Image-Manga-1.png'}`,
        `${'/Projects/Image-Manga-2.png'}`,
        `${'/Projects/Image-Manga-3.png'}`,
        `${'/Projects/Image-Manga-4.png'}`,
        `${'/Projects/Image-Manga-5.png'}`,
        `${'/Projects/Image-Manga-6.png'}`,
        `${'/Projects/Image-Manga-7.png'}`,

    ];

    const images2 = [
        `${'/Projects/Image-Cinema-1.png'}`,
        `${'/Projects/Image-Cinema-2.png'}`,
        `${'/Projects/Image-Cinema-3.png'}`,
        `${'/Projects/Image-Cinema-4.png'}`,
        `${'/Projects/Image-Cinema-5.png'}`,
        `${'/Projects/Image-Cinema-6.png'}`,
        `${'/Projects/Image-Cinema-7.png'}`,
        `${'/Projects/Image-Cinema-8.png'}`,

    ];


    return (
        <>
            <section className='FeaturedProject'>
                <div className='FeaturedProject__Title'>
                    <motion.h2
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}
                    >
                        Featured Projects
                    </motion.h2>
                </div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="FeaturedProject__Slider slider-container">
                    <Slider {...settings}>
                        <div className="FeaturedProject__Slider__Item">
                            <div className="FeaturedProject__Slider__Item__chilren">
                                <div className='FeaturedProject__Slider__Item__chilren__Left'>
                                    <LightGallery plugins={[lgZoom]} speed={500}>
                                        <a href={images1[0]} data-sub-html="ảnh 1">
                                            <img
                                                className='Img_Item'
                                                src={images1[0]}
                                                alt="Thumbnail"
                                                style={{
                                                    width: "300px",
                                                    height: "auto",
                                                    cursor: "pointer",
                                                    borderRadius: "8px",
                                                }}
                                            />
                                        </a>

                                        {images1.slice(1).map((src, index) => (
                                            <a href={src} data-sub-html={`ảnh ${index + 2}`} key={index} style={{ display: "none" }}>
                                                <img src={src} alt={` ${index + 2}`} />
                                            </a>
                                        ))}
                                    </LightGallery>
                                </div>
                                <div className='FeaturedProject__Slider__Item__chilren__Right'>
                                    <h3>Manga Web</h3>
                                    <p>Develop a comic reading Web application that allows users to read and rate comics through the Website.</p>
                                    <p>My personal project does both frontend and backend.</p>
                                    <p><a href="https://duythuc.io.vn/">Link deploy</a></p>

                                    <div className='FeaturedProject__Slider__Item__chilren__Right__Tech'>
                                        <span>React.JS</span>
                                        <span>Node.JS</span>
                                        <span>MySql</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="FeaturedProject__Slider__Item">
                            <div className="FeaturedProject__Slider__Item__chilren">
                                <div className='FeaturedProject__Slider__Item__chilren__Left'>
                                    <LightGallery plugins={[lgZoom]} speed={500}>
                                        <a href={images2[0]} data-sub-html="ảnh 1">
                                            <img
                                                className='Img_Item'
                                                src={images2[0]}
                                                alt="Thumbnail"
                                                style={{
                                                    width: "300px",
                                                    height: "auto",
                                                    cursor: "pointer",
                                                    borderRadius: "8px",
                                                }}
                                            />
                                        </a>

                                        {images2.slice(1).map((src, index) => (
                                            <a href={src} data-sub-html={`ảnh ${index + 2}`} key={index} style={{ display: "none" }}>
                                                <img src={src} alt={` ${index + 2}`} />
                                            </a>
                                        ))}
                                    </LightGallery>
                                </div>
                                <div className='FeaturedProject__Slider__Item__chilren__Right'>
                                    <h3>Cinema Booking Web</h3>
                                    <p>Develop an online movie ticket booking Web application that allows users to book movie tickets and pay through the Website.</p>
                                    <p>Final project of the course, 100% frontend and 40% backend implemented.</p>
                                    <div className='FeaturedProject__Slider__Item__chilren__Right__Tech'>
                                        <span>React.JS</span>
                                        <span>Node.JS</span>
                                        <span>MongoDB</span>
                                        <span>Express</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="FeaturedProject__Slider__Item">
                            <div className="FeaturedProject__Slider__Item__chilren">
                                <div className='FeaturedProject__Slider__Item__chilren__Left'>

                                </div>
                                <div className='FeaturedProject__Slider__Item__chilren__Right'>

                                </div>
                            </div>
                        </div>
                    </Slider>
                </motion.div>

                <motion.a

                    className='FeaturedProject__MyCV' href="#"
                >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path></svg>
                    More projects in my CV
                </motion.a>
            </section>
        </>
    )
}
