'use client';
import React from 'react';
import Header from "components/Header";
import Footer from "components/Footer";
import { motion } from 'framer-motion';
import {Document} from "react-pdf";
import FirstSlide from "components/FirstSlide";

const Page = () => {
    return (
        <>
            <Header/>
            <FirstSlide/>
            <div className="mx-auto h-full container flex justify-center items-start">
                <motion.div initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.2, delay: 0.1, ease: "easeOut"}}>
                    {/*<h2 className="text-2xl md:text-5xl font-bold mt-12 uppercase text-center ">ABOUT THE RACE</h2>*/}

                    <div className="py-4 h-full ">
                        <img src="/about/Part1-1.png" alt=""/>
                    </div>
                    <div className="py-4 h-full ">
                        <img src="/about/Part2-1.png" alt=""/>
                    </div>
                    <div className="py-4 h-full ">
                        <img src="/about/Part3-1.png" alt=""/>
                    </div>
                </motion.div>
            </div>


            <Footer/>
        </>
    );
};

export default Page;