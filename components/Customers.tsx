import React, {useRef} from "react";
import { motion } from "framer-motion"



const Customers: React.FC = () => {

  return (
      <div className="container mx-auto bg-background min-h-[70vh] flex px-6 pt-12 md:pt-0 md:px-32 justify-center items-center">
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto">
              <div className="flex flex-col md:flex-row w-full ">
                  <h2 className="text-2xl w-full  sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-0 text-black dark:text-white text-center md:text-left md:w-1/3">
                      RUN & EAT — this is not just a slogan, but a philosophy that combines sports and gastronomy in one
                      exciting event.
                  </h2>
                  <div className="hidden justify-center md:justify-end gap-6 md:w-2/3 relative md:flex">
                      <div>
                          {/*<Image src={'/elements/9.png'} width={128} height={64} alt="element"/>*/}
                          <motion.img src={'/elements/9.png'} initial={{left: 150, top: 60, scale: 0.4}}
                                      whileInView={{scale: 1}}
                                      animate={{
                                          translateZ: '32px',
                                          translateY: "-12px",
                                          transition: {
                                              duration: 2.2,
                                              delay: 0,
                                              ease: 'easeIn',
                                              repeat: Infinity,
                                              repeatType: "mirror"
                                          }
                                      }}
                                      whileHover={{scale: 1.2, transition: {delay: 0}}}
                                      transition={{duration: 0.4, delay: 0.3, ease: 'backInOut'}}
                                      className="w-36 absolute hover:scale-125 hover:cursor-pointer"
                          />
                      </div>
                      <div>
                          {/*<Image src={'/elements/7.png'} width={128} height={32} alt="element"/>*/}
                          <motion.img src={'/elements/7.png'} initial={{right: 300, bottom: 10, scale: 0.4}}
                                      whileInView={{scale: 1}}
                                      animate={{
                                          translateZ: '32px',
                                          translateY: "-10px",
                                          transition: {
                                              duration: 2.2,
                                              delay: 0,
                                              ease: 'easeIn',
                                              repeat: Infinity,
                                              repeatType: "mirror"
                                          }
                                      }}
                                      whileHover={{scale: 1.2, transition: {delay: 0}}}
                                      transition={{duration: 0.4, delay: 0.4, ease: 'backInOut'}}
                                      className="w-36 absolute hover:scale-125 hover:cursor-pointer"
                          />
                      </div>
                      <div>
                          {/*<Image src={'/elements/7.png'} width={128} height={32} alt="element"/>*/}
                          <motion.img src={'/elements/2.png'} initial={{right: 15, bottom: 100, scale: 0.4}}
                                      whileInView={{scale: 1}}
                                      animate={{
                                          translateZ: '32px',
                                          translateY: "-19px",
                                          transition: {
                                              duration: 2.2,
                                              delay: 0,
                                              ease: 'easeIn',
                                              repeat: Infinity,
                                              repeatType: "mirror"
                                          }
                                      }}
                                      whileHover={{scale: 1.2, transition: {delay: 0}}}
                                      transition={{duration: 0.4, delay: 0.4, ease: 'backInOut'}}
                                      className="w-36 absolute hover:scale-125 hover:cursor-pointer"
                          />
                      </div>
                      <div>
                          {/*<Image src={'/elements/7.png'} width={128} height={32} alt="element"/>*/}
                          <motion.img src={'/elements/4.png'} initial={{right: 140, bottom: 34, scale: 0.4}}
                                      whileInView={{scale: 0.8}}
                                      animate={{
                                          translateZ: '32px',
                                          translateY: "-14px",
                                          transition: {
                                              duration: 2.2,
                                              delay: 0,
                                              ease: 'easeIn',
                                              repeat: Infinity,
                                              repeatType: "mirror"
                                          }
                                      }}
                                      whileHover={{scale: 1.2, transition: {delay: 0}}}
                                      transition={{duration: 0.4, delay: 0.4, ease: 'backInOut'}}
                                      className="w-36 absolute hover:scale-125 hover:cursor-pointer"
                          />
                      </div>
                      <div>
                          {/*<Image src={'/elements/7.png'} width={128} height={32} alt="element"/>*/}
                          <motion.img src={'/elements/8.png'} initial={{right: 0, bottom: 0, scale: 0.4}}
                                      whileInView={{scale: 0.9}}
                                      animate={{
                                          translateZ: '32px',
                                          translateY: "-11px",
                                          transition: {
                                              duration: 2.2,
                                              delay: 0,
                                              ease: 'easeIn',
                                              repeat: Infinity,
                                              repeatType: "mirror"
                                          }
                                      }}
                                      whileHover={{scale: 1.2, transition: {delay: 0}}}
                                      transition={{duration: 0.4, delay: 0.4, ease: 'backInOut'}}
                                      className="w-36 absolute hover:scale-125 hover:cursor-pointer"
                          />
                      </div>
                  </div>
                  <div className="flex justify-center md:justify-end gap-6 md:w-2/3 relative md:hidden">
                      <div>
                          <motion.img src={'/elements/9.png'} initial={{left:0, top: 10, scale: 0.4}}
                                      whileInView={{scale: 1}}
                                      animate={{
                                          translateZ: '32px',
                                          translateY: "-12px",
                                          transition: {
                                              duration: 2.2,
                                              delay: 0,
                                              ease: 'easeIn',
                                              repeat: Infinity,
                                              repeatType: "mirror"
                                          }
                                      }}
                                      whileHover={{scale: 1.2, transition: {delay: 0}}}
                                      transition={{duration: 0.4, delay: 0.3, ease: 'backInOut'}}
                                      className="w-36 absolute hover:scale-125 hover:cursor-pointer"
                          />
                      </div>
                      <div>
                          {/*<Image src={'/elements/7.png'} width={128} height={32} alt="element"/>*/}
                          <motion.img src={'/elements/7.png'} initial={{left: -100, bottom: 10, scale: 0.4}}
                                      whileInView={{scale: 1}}
                                      animate={{
                                          translateZ: '32px',
                                          translateY: "-10px",
                                          transition: {
                                              duration: 2.2,
                                              delay: 0,
                                              ease: 'easeIn',
                                              repeat: Infinity,
                                              repeatType: "mirror"
                                          }
                                      }}
                                      whileHover={{scale: 1.2, transition: {delay: 0}}}
                                      transition={{duration: 0.4, delay: 0.4, ease: 'backInOut'}}
                                      className="w-36 absolute hover:scale-125 hover:cursor-pointer"
                          />
                      </div>
                      <div>
                          {/*<Image src={'/elements/7.png'} width={128} height={32} alt="element"/>*/}
                          <motion.img src={'/elements/2.png'} initial={{right: 10, bottom: 150, scale: 0.4}}
                                      whileInView={{scale: 1}}
                                      animate={{
                                          translateZ: '32px',
                                          translateY: "-19px",
                                          transition: {
                                              duration: 2.2,
                                              delay: 0,
                                              ease: 'easeIn',
                                              repeat: Infinity,
                                              repeatType: "mirror"
                                          }
                                      }}
                                      whileHover={{scale: 1.2, transition: {delay: 0}}}
                                      transition={{duration: 0.4, delay: 0.4, ease: 'backInOut'}}
                                      className="w-36 absolute hover:scale-125 hover:cursor-pointer"
                          />
                      </div>
                      <div>
                          {/*<Image src={'/elements/7.png'} width={128} height={32} alt="element"/>*/}
                          <motion.img src={'/elements/4.png'} initial={{right: 160, bottom: 170, scale: 0.4}}
                                      whileInView={{scale: 0.8}}
                                      animate={{
                                          translateZ: '32px',
                                          translateY: "-14px",
                                          transition: {
                                              duration: 2.2,
                                              delay: 0,
                                              ease: 'easeIn',
                                              repeat: Infinity,
                                              repeatType: "mirror"
                                          }
                                      }}
                                      whileHover={{scale: 1.2, transition: {delay: 0}}}
                                      transition={{duration: 0.4, delay: 0.4, ease: 'backInOut'}}
                                      className="w-36 absolute hover:scale-125 hover:cursor-pointer"
                          />
                      </div>
                      <div>
                          {/*<Image src={'/elements/7.png'} width={128} height={32} alt="element"/>*/}
                          <motion.img src={'/elements/8.png'} initial={{right: -80, bottom: -20, scale: 0.4}}
                                      whileInView={{scale: 0.9}}
                                      animate={{
                                          translateZ: '32px',
                                          translateY: "-11px",
                                          transition: {
                                              duration: 2.2,
                                              delay: 0,
                                              ease: 'easeIn',
                                              repeat: Infinity,
                                              repeatType: "mirror"
                                          }
                                      }}
                                      whileHover={{scale: 1.2, transition: {delay: 0}}}
                                      transition={{duration: 0.4, delay: 0.4, ease: 'backInOut'}}
                                      className="w-36 absolute hover:scale-125 hover:cursor-pointer"
                          />
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
  );
};

export default Customers;
