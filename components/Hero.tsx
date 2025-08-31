"use client"
import Link from "next/link";
import Image from "next/image";
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all"
import {AiOutlineInstagram, AiOutlineWhatsApp} from "react-icons/ai";
gsap.registerPlugin(ScrollTrigger)
export default function Hero() {
    return (
        <>

            <div className="relative z-20 bg-foreground">
                <section
                    className="flex flex-col items-center w-full  mx-auto pt-20 pb-20  md:py-20 md:justify-start h-full md:h-full bg-background z-10 text-center ">
                    <div
                        className={' mx-auto flex md:items-start w-full'}
                    >
                        <div className="flex md:items-start w-full md:w-2/3 mx-auto justify-between gap-4">
                            <div className={'flex gap-4  items-start'}>
                                <img className={'-right-6 relative -top-3 hidden md:block'} src="logo2.png" alt="logo"
                                     width="90" height="80"/>
                                <h3 className="container text-xl ml-4 pl-4 leading-6 text-left border-l-2 border-cyan-700 uppercase text-secondary_text">Gastronomic <br/> Race
                                </h3>
                            </div>
                            <div className={'flex gap-4'}>
                                <motion.div
                                    initial={{opacity: 0, x: 30}}
                                    whileInView={{opacity: 1, x: 0}}
                                    whileHover={{scale: 1.2}}
                                    whileTap={{scale: 0.8}}
                                    className={'sm:block hidden'}
                                    exit={{opacity: 0, x: 30}}
                                    transition={{duration: 0.2, ease: "backInOut"}}

                                >
                                    <a target="_blank"  href={'https://www.instagram.com/run.eat.dubai/'}><AiOutlineInstagram className={'w-7 h-7'}/></a>
                                </motion.div>
                                <motion.div
                                    initial={{opacity: 0, x: 30}}
                                    whileInView={{opacity: 1, x: 0}}
                                    whileHover={{scale: 1.2}}
                                    className={'sm:block hidden'}
                                    whileTap={{scale: 0.8}}
                                    exit={{opacity: 0, x: 30}}
                                    transition={{duration: 0.2, ease: "backInOut"}}

                                >
                                    <Link href={'#'}><AiOutlineWhatsApp className={'w-7 h-7'}/></Link>
                                </motion.div>
                            </div>
                        </div>

                    </div>
                    <motion.div
                        initial={{y: 30, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.4, delay: 0.1}}
                        className={'w-full mx-auto flex items-center justify-center mt-8 md:mt-0'}
                    >
                        <img src="/Banner.jpg" className={'w-full md:w-3/4'} alt="banner"/>
                    </motion.div>



                    <h1 className="font-sans text-text absolute top-52 z-50 pl-12 sm:pl-0 sm:right-32  text-5xl sm:text-5xl md:text-6xl lg:text-8xl w-1/3 mb-6">
                        {/*<motion.div initial={{opacity: 0.3, x: 50}} animate={{x: 0, opacity: 1}}*/}
                        {/*            transition={{duration: 0.4, delay: 0.1, ease: "circIn"}}*/}
                        {/*            className={'text-start sm:text-end hidden sm:block '}>*/}
                        {/*    RUN & EAT*/}


                        {/*    <span className={'relative font-black w-full h-full'}>*/}
                        {/*           <svg viewBox="0 0 194 11" fill="none"*/}
                        {/*                xmlns="http://www.w3.org/2000/svg"*/}
                        {/*                className={'transform scaleX(-1) sm:scaleX(1) w-40 sm:w-96  absolute -bottom-2 -right-2 z-50'}>*/}
                        {/*        <motion.path initial={{pathLength: 0, opacity: 0.4}}*/}
                        {/*                     animate={{pathLength: 1, opacity: 1}}*/}
                        {/*                     transition={{duration: 0.45, delay: 0.6, ease: "easeInOut"}}*/}
                        {/*                     d="M28.5 3.32516C102 2.32516 234.9 0.925164 178.5 3.32516C122.1 5.72516 36.6667 7.99185 1 8.8252"*/}
                        {/*                     stroke="#4DB92D" strokeWidth="3"/>*/}
                        {/*    </svg>*/}
                        {/*        DUBAI*/}
                        {/*    </span>*/}

                        {/*</motion.div>*/}
                    </h1>
                    <h2 className="text-5xl font-light uppercase w-full md:w-2/4 text-secondary_text mt-32">
                        <motion.div initial={{opacity: 0, y: 30}} whileInView={{y: 0, opacity: 1}}
                                    transition={{duration: 0.3, delay: 0.1, ease: "easeIn"}}
                                    className={'text-left ml-12 md:ml-0 md:text-center inline-flex'}>

                                <p className="text-4xl font-light">
        <span className="flex flex-col gap-2 items-center relative align-middle">
              <div>The first gastronomic race</div>
          <Image
              src="/Logo_Text.png"
              alt="RUN & EAT Dubai"
              width={300}
              height={90}
              className="inline-block"
          />
             <div> will be held already this fall</div>
        </span>{" "}
                                </p>




                        </motion.div>
                        {/*<motion.div initial={{opacity: 0.3, x: -30}} animate={{x: 0, opacity: 1}}*/}
                        {/*            transition={{duration: 0.4, delay: 0.1, ease: "circIn"}}*/}
                        {/*            className={'text-start sm:text-end block sm:hidden'}>*/}
                        {/*    The first gastronomic race RUN & EATDubai will be held already this fall*/}
                        {/*</motion.div>*/}
                    </h2>


                </section>
                {/*<h2 className="text-5xl absolute text-background text-end -z-10 bottom-32 right-32 w-[32rem] ">*/}
                {/*    The first gastronomic race RUN & EATDubai will be held already this fall*/}
                {/*</h2>*/}
            </div>
        </>
    )
        ;
}
