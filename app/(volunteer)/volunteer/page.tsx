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
            <div className="mx-auto h-screen container flex justify-center items-start">
                <motion.div initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.2, delay: 0.1, ease: "easeOut"}}>
                    <h2 className="text-2xl md:text-5xl font-bold mt-12 uppercase text-center ">BECOME A VOLUNTEER</h2>
                </motion.div>
            </div>

        </>
);
};

export default Page;