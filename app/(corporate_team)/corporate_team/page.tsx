'use client';
import React from 'react';
import Header from "components/Header";
import Footer from "components/Footer";
import { motion } from 'framer-motion';
import FirstSlide from "components/FirstSlide";

const Page = () => {
    return (
        <>
            <FirstSlide/>
            <div className="mx-auto h-full container flex justify-center items-start">


                <motion.div initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.2, delay: 0.1, ease: "easeOut"}}>
                    <div className="py-4 h-full ">
                        <img src="/corporate/Part1-1.png" alt=""/>
                    </div>
                    <motion.div initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}}
                                transition={{duration: 0.2, delay: 0.1, ease: "easeOut"}}>
                        <div className={'text-3xl px-20 '}>
                            For registration of corporate teams, please contact Diana Menibaeva
                            <br/>
                            <br/>
                            <span className={'text-blue-500 underline'} >diana@runeatdubai.com</span>
                        </div>

                    </motion.div>

                        <div className="py-4 h-full ">
                            <img src="/corporate/Part2-1.png" alt=""/>
                        </div>
                    </motion.div>

            </div>
        </>
);
};

export default Page;