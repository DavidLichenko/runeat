"use client";
import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Image from "next/image";
import { useTheme } from "next-themes";
import Accordion from "components/Accordion";
import Reviews from "components/Reviews";
import Download from "components/Download";
import {Button} from 'components/components/ui/button'
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

import {useEffect, useState, useRef} from "react";
import SlotCounter from 'react-slot-counter';



export default function Page() {
    const targetRef = useRef(null);
    const { theme, setTheme } = useTheme();
    const [loading,setLoading] = useState<boolean>(true);
    const { scrollYProgress } = useScroll({ target: targetRef });
    useEffect(() => {
        setLoading(false);
    }, [theme]);
    const x = useTransform(scrollYProgress, [0,1], ['60%','-5%'])
    const minus_x = useTransform(scrollYProgress, [1,0], ['0%','-20%'])
    const x_x = useTransform(scrollYProgress, [0,1], ['70%','-10%'])
    const physics = { damping: 15, mass: 0.27, stiffness: 55 } // easing of smooth scroll
    const spring = useSpring(x, physics) // apply easing to the negative scroll value
    const springX = useSpring(minus_x, physics) // apply easing to the negative scroll value
    const springX2 = useSpring(x_x, physics) // apply easing to the negative scroll value
    // const spring = useSpring(x, physics) // apply easing to the negative scroll value
    const containerRef = useRef(null);

    return (

        <div className="flex flex-col min-h-full bg-background ">
            {loading &&
                <div
                    className="flex items-center justify-center top-0 bottom-0 left-0 right-0 sticky z-[9999] h-dvh w-full overflow-hidden bg-background">
                    {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
                    <div className="three-body">
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                    </div>
                </div>
            }
            <Hero/>
            <Section leftHalf={
                <Features/>
            } rightHalf={

                <>
                    <motion.div
                        initial={{opacity: 0, x: 15}}
                        whileInView={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: 15}}
                        transition={{duration: 0.2, delay: 0.2, ease: "easeOut"}}

                    >

                        <h2 className="text-3xl ml-8 md:ml-0 md:text-center">
                            RUN & EAT is exactly how the idea of the race can be described, as the real gastronomic
                            pit stops await the runners
                            along the route, where participants will enjoy delicious of local cuisine. Each pit stop
                            will become a true culinary oasis, offering a variety of flavors from
                            the heart of Arabian gastronomy. That's why our race is called <br/> THE MOST DELICIOUS RACE.
                        </h2>
                    </motion.div>
                </>
            }>

            </Section>


            {/*<div className="h-[250vh]" ref={targetRef}>*/}

            {/*</div>*/}
            {/*<Section*/}
            {/*    leftHalf={*/}
            {/*        <>*/}
            {/*            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">*/}
            {/*                Effortlessly highlight the key features of your app*/}
            {/*            </h2>*/}
            {/*            <p className="text-xl font-light">*/}
            {/*                Our app makes it easy to showcase your key features. With customizable sections, you can*/}
            {/*                highlight the*/}
            {/*                most important aspects of your product. More to come.*/}
            {/*            </p>*/}
            {/*        </>*/}
            {/*    }*/}
            {/*    rightHalf={*/}
            {/*        <Image src={"/products/phone.png"} alt="section-image" width={500} height={100}*/}
            {/*               className="w-1/2 h-auto"/>*/}
            {/*    }*/}
            {/*/>*/}
            <motion.div
                initial={{opacity: 0.5, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                exit={{opacity: 0.5, y: 50}}
                transition={{duration: 0.4, delay: 0.1, bounce: 1, ease: "easeOut"}}

            >
                <Customers/>
            </motion.div>
            <Section
                leftHalf={
                    <div>
                        <div className={'relative left-0 md:static'}>
                            {/*<Image alt={'g'} src={'/output-onlinegiftools.gif'} width={256} height={256}/>*/}
                            <motion.button
                                initial={{translateY: '-30px', y: 20}}
                                whileInView={{translateY: '-30px'}}
                                whileTap={{translateY: '-140px'}}

                                animate={{
                                    translateZ: '32px',
                                    y: 12,
                                    transition: {
                                        duration: 1.5,
                                        ease: 'easeIn',
                                        repeat: Infinity,
                                        delay: 0.5,
                                        repeatType: "mirror"
                                    }
                                }}
                                className={'z-30 relative'}
                            >
                                <svg width={220} className={'!z-30 bottom-0 relative left-16 hidden dark:block'}
                                     height="212"
                                     viewBox="0 0 303 212" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M176 37.5C176 43.7395 175.066 47.4767 174.015 49.6972C173.073 51.686 171.899 52.7801 170.368 53.5834C168.593 54.5152 165.997 55.2177 162.109 55.6036C158.21 55.9906 153.8 56 148.5 56C143.2 56 138.79 55.9906 134.891 55.6036C131.003 55.2177 128.407 54.5152 126.632 53.5834C125.101 52.7801 123.927 51.686 122.985 49.6972C121.934 47.4767 121 43.7395 121 37.5C121 22.3122 133.312 10 148.5 10C163.688 10 176 22.3122 176 37.5Z"
                                        stroke={`white`} strokeWidth="20"/>
                                    <path

                                        d="M292.685 202H10.0012C9.83568 131.842 69.4098 66 151.757 66C230.114 66 287.942 126.97 292.685 202Z"
                                        fill={`white`}
                                        stroke={`white`} strokeWidth="20"/>
                                </svg>
                                <svg width={220} className={'!z-30 bottom-0 relative left-16 block dark:hidden'}
                                     height="212"
                                     viewBox="0 0 303 212" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M176 37.5C176 43.7395 175.066 47.4767 174.015 49.6972C173.073 51.686 171.899 52.7801 170.368 53.5834C168.593 54.5152 165.997 55.2177 162.109 55.6036C158.21 55.9906 153.8 56 148.5 56C143.2 56 138.79 55.9906 134.891 55.6036C131.003 55.2177 128.407 54.5152 126.632 53.5834C125.101 52.7801 123.927 51.686 122.985 49.6972C121.934 47.4767 121 43.7395 121 37.5C121 22.3122 133.312 10 148.5 10C163.688 10 176 22.3122 176 37.5Z"
                                        stroke={`black`} strokeWidth="20"/>
                                    <path

                                        d="M292.685 202H10.0012C9.83568 131.842 69.4098 66 151.757 66C230.114 66 287.942 126.97 292.685 202Z"
                                        fill={`black`}
                                        stroke={`black`} strokeWidth="20"/>
                                </svg>
                            </motion.button>
                            {/*Food*/}
                            <div className={'relative'}>
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width={128}
                                     className={'absolute bottom-4 z-10 left-28'} viewBox="0 0 200.000000 200.000000"
                                     preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
                                       fill="#4DB92D" stroke="none">
                                        <path d="M1175 1906 c-101 -46 -158 -119 -176 -222 -13 -80 -3 -132 26 -146
                                            19 -9 36 -5 91 21 120 56 177 144 178 277 1 97 -25 113 -119 70z"/>
                                        <path d="M633 1880 c-24 -10 -37 -39 -27 -63 3 -8 24 -23 47 -32 65 -26 101
-58 135 -122 33 -62 62 -164 62 -219 l0 -32 -61 25 c-140 56 -328 70 -441 32
-325 -109 -391 -523 -160 -998 158 -327 392 -460 647 -370 l63 22 54 -24 c44
-19 70 -23 153 -24 89 0 107 3 163 29 34 16 62 31 62 34 0 3 -51 58 -114 121
-145 148 -161 177 -161 296 0 78 4 97 27 140 34 65 100 128 163 156 74 34 181
33 256 -2 52 -25 57 -25 85 -11 16 9 56 23 89 32 l60 15 3 90 c5 158 -36 287
-122 382 -86 95 -190 136 -341 135 -94 -1 -210 -26 -289 -61 l-44 -19 -7 70
c-9 93 -38 205 -68 265 -55 106 -157 164 -234 133z"/>
                                        <path d="M1302 757 c-124 -45 -183 -192 -119 -299 30 -51 347 -368 368 -368
23 0 366 350 384 392 38 94 -5 212 -95 258 -87 45 -174 34 -243 -30 l-42 -38
-42 37 c-63 57 -139 74 -211 48z"/>
                                    </g>
                                </svg>
                            </div>

                            {/*Food*/}
                            <svg className={'z-30 bottom-8 relative left-14'} width="300" height="62"
                                 viewBox="0 0 381 66"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <mask id="path-1-inside-1_93_13" fill="white">
                                    <rect width="300" height="66" rx="10"/>
                                </mask>
                                <rect className={"block dark:hidden"} width="300" height="66" rx="10" stroke={`black`}
                                      strokeWidth="40"
                                      mask="url(#path-1-inside-1_93_13)"/>
                                <rect className={"hidden dark:block"} width="300" height="66" rx="10" stroke={`white`}
                                      strokeWidth="40"
                                      mask="url(#path-1-inside-1_93_13)"/>
                            </svg>
                            <motion.div
                                initial={{translateY: 0}}
                                whileInView={{translateY: '-20px'}}
                                className={"hidden dark:block"}
                                transition={{duration: 0.8, delay: 0.1, ease: 'circInOut'}}
                            >

                                <svg width={256} className={'z-20'} viewBox="0 0 449 132" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <motion.path
                                        d="M88.5 38.915H116C120.167 29.415 132.5 10.415 148.5 10.415C164.5 10.415 238.833 10.415 274 10.415C288.5 10.4153 309 39.585 267 62.5M88.5 38.915V12.5H10V121.416H88.5V105.916M88.5 38.915V105.916M267 62.5C247.5 65.5 200.5 57.9995 200.5 77.415M267 62.5C307.5 57 410.5 29.4156 410.5 29.4156C446.5 25.9995 444 67.4995 426.5 77.415L274 121.416H148.5C146.1 119.416 127 105.916 116 105.916H88.5"
                                        stroke={'white'} strokeWidth="20"/>
                                </svg>
                            </motion.div>
                            <motion.div
                                initial={{translateY: 0}}
                                className={"block dark:hidden"}
                                whileInView={{translateY: '-20px'}}
                                transition={{duration: 0.8, delay: 0.1, ease: 'circInOut'}}
                            >

                                <svg width={256} className={'z-20'} viewBox="0 0 449 132" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <motion.path
                                        d="M88.5 38.915H116C120.167 29.415 132.5 10.415 148.5 10.415C164.5 10.415 238.833 10.415 274 10.415C288.5 10.4153 309 39.585 267 62.5M88.5 38.915V12.5H10V121.416H88.5V105.916M88.5 38.915V105.916M267 62.5C247.5 65.5 200.5 57.9995 200.5 77.415M267 62.5C307.5 57 410.5 29.4156 410.5 29.4156C446.5 25.9995 444 67.4995 426.5 77.415L274 121.416H148.5C146.1 119.416 127 105.916 116 105.916H88.5"
                                        stroke={'black'} strokeWidth="20"/>
                                </svg>
                            </motion.div>


                        </div>
                    </div>
                }
                rightHalf={
                    <motion.div initial={{opacity: 0.3}} whileInView={{opacity: 1}} transition={{delay: 0.3}}>
                        <div className="flex flex-col md:justify-end">
                            {/*<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">*/}
                            {/*    Highlight the key features*/}
                            {/*</h2>*/}
                            <p className="text-4xl  md:text-right">
                                RUN & EAT Dubai is a unique experience for our participants, offering you not only to
                                test
                                your physical abilities, but also to enjoy the rich culinary diversity of the United
                                Arab
                                Emirates.
                            </p>
                        </div>
                    </motion.div>
                }
            />
            <div className="md:block hidden">
                <Section
                    leftHalf={
                        <motion.div initial={{opacity: 0.3}} whileInView={{opacity: 1}} transition={{delay: 0.3}}>
                            <div className="flex flex-col justify-end">
                                {/*<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">*/}
                                {/*    Highlight the key features*/}
                                {/*</h2>*/}
                                <p className="text-4xl  text-left">
                                    Our athletes can choose 5 km or 10 km distances to run. Our young participants will
                                    run
                                    a children's race at distances of 500 m and 1 km.
                                </p>
                            </div>
                        </motion.div>
                    }
                    rightHalf={
                        <motion.div initial={{opacity: 0.3}} whileInView={{opacity: 1}} transition={{delay: 0.3}}
                                    className={'flex flex-col gap-6 w-full ml-28'}>


                            <div className={'flex flex-col gap-3 justify-center items-start '}>
                                <h2 className={'flex items-center justify-center gap-2 font-bold uppercase text-3xl text-center'}>
                                <span className={'relative bottom-[2px]'}><SlotCounter value={5}
                                                                                       animateOnVisible={true}/></span> km
                                </h2>

                                <svg width={206} height="22" viewBox="0 0 206 22" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <motion.path initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                                                 transition={{duration: 0.5, delay: 0.2, ease: 'easeInOut'}}
                                                 d="M3 0V11M3 22V11M3 11H203V0V22" stroke="#F2D118"
                                                 strokeWidth="6"/>
                                </svg>
                            </div>
                            <div className={'flex flex-col gap-3 justify-center items-start'}>
                                <h2 className={'flex gap-2 font-bold uppercase text-3xl text-center'}>
                                 <span className={'relative bottom-[2px]'}><SlotCounter value={10}
                                                                                        animateOnVisible={true}/></span> km
                                </h2>
                                <svg width={406} height="50" viewBox="0 0 406 50" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <motion.path initial={{pathLength: 0}}
                                                 whileInView={{pathLength: 1}}
                                                 transition={{duration: 0.5, delay: 0.3, ease: 'easeInOut'}}
                                                 d="M3 0V10.5M3 21V10.5M3 10.5H403V0V21"
                                                 stroke="#F2D118" strokeWidth="6"/>
                                </svg>


                            </div>

                        </motion.div>
                    }
                />
            </div>
            <div className="md:hidden hidden">
                <Section
                    leftHalf={
                        <motion.div initial={{opacity: 0.3}} whileInView={{opacity: 1}} transition={{delay: 0.3}}
                                    className={' gap-6 w-full flex flex-col mx-12'}>
                            <div className={'flex flex-col gap-3 justify-center items-start'}>
                                <h2 className={'flex items-center justify-center gap-2 font-bold uppercase text-3xl text-center'}>
                                <span className={' bottom-[2px]'}><SlotCounter value={5}
                                                                               animateOnVisible={true}/></span> km
                                </h2>

                                <svg className={'scale-75'} width={206} height="22" viewBox="0 0 206 22" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <motion.path initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                                                 transition={{duration: 0.5, delay: 0.2, ease: 'easeInOut'}}
                                                 d="M3 0V11M3 22V11M3 11H203V0V22" stroke="#F2D118"
                                                 strokeWidth="6"/>
                                </svg>
                            </div>
                            <div className={'flex flex-col gap-3 justify-center items-start'}>
                                <h2 className={'flex items-center justify-center gap-2 font-bold uppercase text-3xl text-center'}>
                                 <span className={'relative bottom-[2px]'}><SlotCounter value={10}
                                                                                        animateOnVisible={true}/></span> km
                                </h2>
                                <svg className={'scale-75'} width={406} height="50" viewBox="0 0 406 50" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <motion.path initial={{pathLength: 0}}
                                                 whileInView={{pathLength: 1}}
                                                 transition={{duration: 0.5, delay: 0.3, ease: 'easeInOut'}}
                                                 d="M3 0V10.5M3 21V10.5M3 10.5H403V0V21"
                                                 stroke="#F2D118" strokeWidth="6"/>
                                </svg>


                            </div>

                        </motion.div>
                    }
                    rightHalf={
                        <motion.div initial={{opacity: 0.3}} whileInView={{opacity: 1}} transition={{delay: 0.3}}
                                    className={'w-3/4 ml-12'}>
                            <div className="flex flex-col">
                                <div className="text-4xl  text-left">
                                    Our athletes can choose 5 km or 10 km distances to run. Our young participants will
                                    run
                                    a children's race at distances of 500 m and 1 km.
                                </div>
                            </div>
                        </motion.div>
                    }
                />
            </div>
            <div className="md:hidden flex flex-col mt-12">
                <motion.div initial={{opacity: 0.3}} whileInView={{opacity: 1}} transition={{delay: 0.3}}
                            className={'ml-4'}>
                    <div className="flex flex-col">
                        <div className="text-4xl  text-left">
                            Our athletes can choose 5 km or 10 km distances to run. Our young participants will
                            run
                            a children's race at distances of 500 m and 1 km.
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0.3}} whileInView={{opacity: 1}} transition={{delay: 0.3}}
                            className={'gap-6 flex flex-col ml-4 my-10'}>
                    <div className={'flex flex-col gap-3 justify-center items-start'}>
                        <h2 className={'flex items-center justify-center gap-2 font-bold uppercase text-3xl text-center'}>
                                <span className={' bottom-[2px]'}><SlotCounter value={5}
                                                                               animateOnVisible={true}/></span> km
                        </h2>

                        <svg width={100} height="22" viewBox="0 0 206 22" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <motion.path initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                                         transition={{duration: 0.5, delay: 0.2, ease: 'easeInOut'}}
                                         d="M3 0V11M3 22V11M3 11H203V0V22" stroke="#F2D118"
                                         strokeWidth="6"/>
                        </svg>
                    </div>
                    <div className={'flex flex-col gap-3 justify-center items-start'}>
                        <h2 className={'flex items-center justify-center gap-2 font-bold uppercase text-3xl text-center'}>
                                 <span className={'relative bottom-[2px]'}><SlotCounter value={10}
                                                                                        animateOnVisible={true}/></span> km
                        </h2>
                        <svg width={200} height="50" viewBox="0 0 406 50" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <motion.path initial={{pathLength: 0}}
                                         whileInView={{pathLength: 1}}
                                         transition={{duration: 0.5, delay: 0.3, ease: 'easeInOut'}}
                                         d="M3 0V10.5M3 21V10.5M3 10.5H403V0V21"
                                         stroke="#F2D118" strokeWidth="6"/>
                        </svg>


                    </div>

                </motion.div>
            </div>
            <div className={'hidden md:block'}>
                <Section
                    leftHalf={<div>
                        <div className={'hidden flex-col gap-6 md:flex'}>
                            <div className={'flex justify-start left-0 relative w-full'}>

                                <motion.img initial={{rotate: 0}} whileInView={{rotate: 25}}
                                            transition={{duration: 0.4, delay: 0.5, ease: "backOut"}}
                                            className={'relative -left-40 hidden dark:block'} width={512} height={512}
                                            src={'TShirtWhite.svg'}
                                            alt="Tshirt"/>
                                <motion.img initial={{rotate: 0}} whileInView={{rotate: 25}}
                                            transition={{duration: 0.4, delay: 0.5, ease: "backOut"}}
                                            className={'relative -left-20 w-96 h-96 dark:hidden'}
                                            src={'TShirt.svg'}
                                            alt="Tshirt"/>
                                {/*<img width={256} height={256} src="/TShirtWhite.svg" alt="Tshirt"/>*/}
                            </div>
                            <div className={'flex justify-end h-1/2 relative bottom-40  w-full'}>
                                <motion.img initial={{rotate: 0, scale: 1.2}}
                                            whileInView={{
                                                rotate: -25,
                                                transition: {duration: 0.4, delay: 0.6, ease: "backOut"}
                                            }}
                                            whileHover={{scale: 1.3, transition: {delay: 0}}}
                                            className={'relative top-10 right-52 hidden dark:block'}
                                            width={128} height={128}
                                            src={'medal.svg'} alt="Tshirt"/>
                                <motion.img initial={{rotate: 0, scale: 1.2}}
                                            whileInView={{
                                                rotate: -25,
                                                transition: {duration: 0.4, delay: 0.6, ease: "backOut"}
                                            }}
                                            whileHover={{scale: 1.3, transition: {delay: 0}}}
                                            className={'relative top-10 right-52 block dark:hidden'}
                                            width={128} height={128}
                                            src={'medalBlack.svg'} alt="Tshirt"/>

                            </div>
                        </div>
                    </div>}
                    rightHalf={<div className={'absolute md:static'}>
                        <div className={'flex absolute flex-col gap-6 md:hidden'}>
                            <div className={'flex justify-start left-0 relative w-full'}>

                                <motion.img initial={{rotate: 0}} whileInView={{rotate: 25}}
                                            transition={{duration: 0.4, delay: 0.5, ease: "backOut"}}
                                            className={'relative -left-52 -top-20 hidden dark:block'} width={512}
                                            height={512}
                                            src={'TShirtWhite.svg'}
                                            alt="Tshirt"/>
                                <motion.img initial={{rotate: 0}} whileInView={{rotate: 25}}
                                            transition={{duration: 0.4, delay: 0.5, ease: "backOut"}}
                                            className={'relative -left-52 -top-44 w-96 h-96 dark:hidden'}
                                            src={'TShirt.svg'}
                                            alt="Tshirt"/>
                                {/*<img width={256} height={256} src="/TShirtWhite.svg" alt="Tshirt"/>*/}
                            </div>
                            <div className={'flex justify-end h-1/2 relative bottom-40  w-full'}>
                                <motion.img initial={{rotate: 0, scale: 1.2}}
                                            whileInView={{
                                                rotate: -25,
                                                transition: {duration: 0.4, delay: 0.6, ease: "backOut"}
                                            }}
                                            whileHover={{scale: 1.3, transition: {delay: 0}}}
                                            className={'relative top-10 right-0 hidden dark:block'}
                                            width={128} height={128}
                                            src={'medal.svg'} alt="Tshirt"/>
                                <motion.img initial={{rotate: 0, scale: 1.2}}
                                            whileInView={{
                                                rotate: -25,
                                                transition: {duration: 0.4, delay: 0.6, ease: "backOut"}
                                            }}
                                            whileHover={{scale: 1.3, transition: {delay: 0}}}
                                            className={'relative -top-10 -right-52 block dark:hidden'}
                                            width={128} height={128}
                                            src={'medalBlack.svg'} alt="Tshirt"/>

                            </div>
                        </div>
                        <p className="text-4xl font-light text-right mr-2 md:mr-0">
                            Each participant will receive a run package with gifts from our partners, an official race
                            T-shirt
                            and an exclusive RUN & EAT medal at the finish line.
                        </p>
                        <p className="text-4xl font-light text-left ml-2 md:ml-0 md:text-right">
                            <br/>
                            <br/>
                            A concert, master classes, tastings, contests and other activities from the organizers and
                            partners
                            will be organized in the runner’s village for the guests of the race.
                        </p>
                    </div>}
                />
            </div>
            <div className={'h-full py-12 static md:hidden'}>
                <div className={'flex absolute flex-col gap-6 md:flex'}>
                    <div className={'flex justify-start left-0 relative w-full'}>

                        <motion.img initial={{rotate: 0}} whileInView={{rotate: 25}}
                                    transition={{duration: 0.4, delay: 0.5, ease: "backOut"}}
                                    className={'relative -left-56 -top-48 w-96 h-96 hidden dark:block'} width={512}
                                    height={512}
                                    src={'TShirtWhite.svg'}
                                    alt="Tshirt"/>
                        <motion.img initial={{rotate: 0}} whileInView={{rotate: 25}}
                                    transition={{duration: 0.4, delay: 0.5, ease: "backOut"}}
                                    className={'relative -left-56 -top-48 w-96 h-96 dark:hidden'}
                                    src={'TShirt.svg'}
                                    alt="Tshirt"/>
                        {/*<img width={256} height={256} src="/TShirtWhite.svg" alt="Tshirt"/>*/}
                    </div>
                    <div className={'flex justify-end h-1/2 hidden relative bottom-40  w-full'}>
                        <motion.img initial={{rotate: 0, scale: 1.2}}
                                    whileInView={{
                                        rotate: -25,
                                        transition: {duration: 0.4, delay: 0.6, ease: "backOut"}
                                    }}
                                    whileHover={{scale: 1.3, transition: {delay: 0}}}
                                    className={'relative -top-12 -right-56 hidden dark:block'}
                                    width={128} height={128}
                                    src={'medal.svg'} alt="Tshirt"/>
                        <motion.img initial={{rotate: 0, scale: 1.2}}
                                    whileInView={{
                                        rotate: -25,
                                        transition: {duration: 0.4, delay: 0.6, ease: "backOut"}
                                    }}
                                    whileHover={{scale: 1.3, transition: {delay: 0}}}
                                    className={'relative -top-12 -right-56 block dark:hidden'}
                                    width={128} height={128}
                                    src={'medalBlack.svg'} alt="Tshirt"/>

                    </div>
                </div>
                <p className="text-4xl font-light text-right mr-2 md:mr-0">
                    Each participant will receive a run package with gifts from our partners, an official race
                    T-shirt
                    and an exclusive RUN & EAT medal at the finish line.
                </p>
                <p className="text-4xl font-light text-left ml-2 md:ml-0 md:text-right">
                    <br/>
                    <br/>
                    A concert, master classes, tastings, contests and other activities from the organizers and
                    partners
                    will be organized in the runner’s village for the guests of the race.
                </p>
            </div>
            {/*<Reviews/>*/}
            {/*<Download/>*/}
            <div className="h-full mb-24 md:mb-0 md:h-screen flex flex-col gap-6">
                <div
                    className=" top-0 flex flex-col items-end justify-center scroll-smooth overflow-x-hidden">
                    <motion.div
                        whileHover={{scale: 1.2}}
                        transition={{duration: 0.2, ease: "backInOut"}}

                    >
                        <Button className={'m-6 border-text border-2 text-sm font-bold'}>SEE MORE</Button>
                    </motion.div>
                    <motion.div className={'flex w-[350vw] md:w-[120vw]  gap-4 px-4'} style={{x: spring}}>
                        <div>
                            <img src={"/carousel/1.jpg"} alt="section-image"
                                 className={'image rounded-lg'}/>
                        </div>
                        <div>
                            <img src={"/carousel/2.jpg"} alt="section-image" className={'image rounded-lg'}/>
                        </div>
                        <div>
                            <img src={"/carousel/1.jpg"} alt="section-image"
                                 className={'image rounded-lg'}/>
                        </div>
                        <div>
                            <img src={"/carousel/2.jpg"} alt="section-image" className={'image rounded-lg'}/>
                        </div>
                        <div>
                            <img src={"/carousel/1.jpg"} alt="section-image"
                                 className={'image rounded-lg'}/>
                        </div>
                        <div>
                            <img src={"/carousel/2.jpg"} alt="section-image" className={'image rounded-lg'}/>
                        </div>
                    </motion.div>

                </div>
                <div
                    className=" top-96 flex flex-col items-center justify-center scroll-smooth overflow-x-hidden">
                    <motion.div className={'flex w-[350vw] md:w-[120vw]  gap-4 px-4'} style={{x: springX}}>
                        <div>
                            <img src={"/carousel/1.jpg"} alt="section-image"
                                 className={'image rounded-lg'}/>
                        </div>
                        <div>
                            <img src={"/carousel/2.jpg"} alt="section-image" className={'image rounded-lg'}/>
                        </div>
                        <div>
                            <img src={"/carousel/1.jpg"} alt="section-image"
                                 className={'image rounded-lg'}/>
                        </div>
                        <div>
                            <img src={"/carousel/2.jpg"} alt="section-image" className={'image rounded-lg'}/>
                        </div>
                        <div>
                            <img src={"/carousel/1.jpg"} alt="section-image"
                                 className={'image rounded-lg'}/>
                        </div>
                        <div>
                            <img src={"/carousel/2.jpg"} alt="section-image" className={'image rounded-lg'}/>
                        </div>
                    </motion.div>
                </div>
                <div
                    className="top-96 flex flex-col items-center justify-center scroll-smooth overflow-x-hidden">
                    <motion.div className={'flex w-[350vw] md:w-[120vw]  gap-4 px-4'} style={{x: springX2}}>
                        <div>
                            <img src={"/carousel/1.jpg"} alt="section-image"
                                 className={'image rounded-lg'}/>
                        </div>
                        <div>
                            <img src={"/carousel/2.jpg"} alt="section-image" className={'image rounded-lg'}/>
                        </div>
                        <div>
                            <img src={"/carousel/1.jpg"} alt="section-image"
                                 className={'image rounded-lg'}/>
                        </div>
                        <div>
                            <img src={"/carousel/2.jpg"} alt="section-image" className={'image rounded-lg'}/>
                        </div>
                        <div>
                            <img src={"/carousel/1.jpg"} alt="section-image"
                                 className={'image rounded-lg'}/>
                        </div>
                        <div>
                            <img src={"/carousel/2.jpg"} alt="section-image" className={'image rounded-lg'}/>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div
                className={'min-h-full md:pt-12 md:pb-32 flex flex-col gap-6 items-center justify-start md:mx-auto md:mt-20 md:w-1/2 pb-12 mx-12'}>

                <motion.div initial={{y: 30, opacity: 0}}
                            whileInView={{y: 0, opacity: 1, transition: {duration: 0.4, delay: .1}}}
                            className="text-center text-3xl font-bold flex flex-col items-center justify-center">
                    <span>Join our race with friends, family or run </span>

                    <span>with a corporate team.</span>
                </motion.div>
                <motion.div initial={{y: 30, opacity: 0}}
                            whileInView={{y: 0, opacity: 1, transition: {duration: 0.7, delay: .2}}}
                            className="text-center text-secondary_text text-5xl font-bold">
                    OUR RACE MAKES YOU FALL IN LOVE WITH RUNNING
                </motion.div>
                {/*<motion.button initial={{y: 30, opacity: 0}}*/}
                {/*               whileInView={{y: 0, opacity: 1, transition: {duration: 1.2, delay: .3}}}*/}
                {/*               whileHover={{scale: 1.05}} whileTap={{scale: 1}}*/}
                {/*               className="px-8 py-2 mt-12 w-full text-2xl rounded-lg bg-text text-black font-bold mx-auto">*/}
                {/*    REGISTER*/}
                {/*</motion.button>*/}
            </div>
        </div>
    );
}
