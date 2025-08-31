import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";
import {AiOutlineInstagram, AiOutlineWhatsApp} from "react-icons/ai";
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import {Button} from "components/components/ui/button";
import {Sheet, SheetContent, SheetTrigger, SheetClose } from "./components/ui/sheet";
import { Menu, X } from 'lucide-react';
import { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

function MenuIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
  )
}

export default function Header() {
  const { scrollY } = useScroll();
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const backgroundColor = useTransform(
      scrollY,
      [0, 100],
      ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"]
  );
  const darkBackgroundColor = useTransform(
      scrollY,
      [0, 100],
      ["rgba(17, 24, 39, 0.8)", "rgba(17, 24, 39, 0.95)"]
  );
  const navItems = [
    { href: "/about/", label: "About Race" },
    { href: "/corporate_team/", label: "Corporate Teams" },
    { href: "/become_partner/", label: "Partners" },
    { href: "/volunteer/", label: "Volunteer" },
    { href: "/contact/", label: "Contact" },
  ];
  useEffect(() => {
    // if (isMenuOpen) {
    //   headerRef.current.style.display = "none";
    // } else {
    //   headerRef.current.style.display = "block";
    // }
  }, [isMenuOpen]);

  return (
      <motion.header
          ref={headerRef}
          initial={{opacity: 0, y: -5}}
          animate={!isMenuOpen ? {opacity: 1, y: 0} : {y:-30}}
          exit={isMenuOpen && {y: -15}}
          transition={{duration: 0.2}}
          className="fixed top-0 left-0 h-16 md:h-20 right-0 z-50 backdrop-blur-xl bg-white border-b border-gray-200 dark:border-gray-700 will-change-transform"
          style={{
            backgroundColor: scrollY.get() > 100 ? backgroundColor : "white"
          }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <motion.div
                initial={{opacity: 0, x: -30}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.6}}

                className="flex items-center"
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <motion.div
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.2}}
                >
                  <div className="flex items-center gap-4 mb-0">
                    <Image src="/logo2.png" className={'w-16 h-16 md:h-20 md:w-20'} alt="logo" height={80} width={80}/>
                    {/*<img className="w-16 h-16 md:w-20 md:h-20" src="logo2.png" alt="logo"/>*/}
                    <div className="border-l-2 border-cyan-700 pl-4">
                      <h3 className="text-lg md:text-xl font-abys font-light text-gray-900 dark:text-white uppercase tracking-wide">
                        Gastronomic <br/> Race
                      </h3>
                    </div>
                  </div>
                </motion.div>
                <div className="hidden sm:block">
                  {/* <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    RUN & EAT
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Dubai
                  </div> */}
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;

                return (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: index * 0.1}}
                    >
                      <Link
                          href={item.href}
                          className={`text-gray-700 dark:text-gray-300 font-medium transition-colors duration-200 relative group
                ${isActive ? "text-green-600 dark:text-green-400" : "hover:text-green-600 dark:hover:text-green-400"}`}
                      >
                        {item.label}

                        {/* underline */}
                        <motion.span
                            layout
                            initial={false}
                            animate={{
                              width: isActive ? "100%" : "0%",
                              scaleX: isActive ? 1.1 : 1, // only two states
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                            }}
                            className="absolute -bottom-1 left-0 h-0.5 bg-green-600 origin-left"
                        ></motion.span>
                      </Link>
                    </motion.div>
                );
              })}
            </nav>

            {/* Right Side - Social & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Social Links - Desktop */}
              <div className="hidden sm:flex items-center space-x-3">
                <motion.a
                    href="https://www.instagram.com/run.eat.dubai/"
                    target="_blank"
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    transition={{duration: 0.3}}
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-100 dark:hover:bg-green-900 transition-colors duration-200"
                >
                  <AiOutlineInstagram className="w-5 h-5 text-black"/>
                </motion.a>
                <motion.a
                    href="#"
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    transition={{duration: 0.3, delay: 0.1}}
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-100 dark:hover:bg-green-900 transition-colors duration-200"
                >
                  <AiOutlineWhatsApp className="w-5 h-5 text-black"/>
                </motion.a>
              </div>

              {/* Register Button - Desktop */}
              <motion.div
                  initial={{opacity: 0, scale: 0}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{duration: 0.3, delay: 0.2}}
                  className="hidden md:block"
              >
                <Button
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                  <Link href="/contact">Register Now</Link>
                </Button>
              </motion.div>

              {/* Mobile Menu */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                      variant="ghost"
                      size="icon"
                      className="md:hidden w-10 h-10 relative right-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 z-90"
                  >
                    <Menu className="w-6 h-6"/>
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>

                <SheetContent side="right"
                              className="w-80 bg-white dark:bg-gray-300 border-l border-gray-200 dark:border-gray-700 overflow-y-scroll">
                  <SheetClose className="float-right top-0 right-0">
                    <Button variant="ghost" size="icon"
                            className="-top-3 -right-2 bg-gray-100  relative w-10 flex justify-center items-center md:hidden h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 z-90">

                      <X className="w-6 h-6"/>
                    </Button>
                  </SheetClose>
                  <div className="flex flex-col h-full w-full">
                    {/* Mobile Menu Header */}
                    <div
                        className="flex items-center justify-between px-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center gap-4 mb-0 md:mb-6 mt-2">
                          <Image src="/logo2.png" className={'w-16 h-16 md:h-20 md:w-20'} alt="logo" height={80}
                                 width={80}/>
                          <div className="border-l-4 border-green-600 pl-4">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                              Gastronomic Race
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Dubai's Premier Event</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="flex flex-col px-6 py-8 z-90 w-full">
                      <div className="space-y-6">
                        {[
                          {href: "/about", label: "About Race", icon: "🏃‍♂️"},
                          {href: "/corporate_team", label: "Corporate Teams", icon: "👥"},
                          {href: "/become_partner", label: "Become Partner", icon: "🤝"},
                          {href: "/volunteer", label: "Volunteer", icon: "❤️"},
                          {href: "/contact", label: "Contact", icon: "📞"}
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, x: 20}}
                                animate={{opacity: 1, x: 0}}
                                transition={{duration: 0.3, delay: index * 0.1}}
                                onClick={()=>setIsMenuOpen(false)}
                            >
                              <Link
                                  href={item.href}
                                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group"
                              >
                                <span className="text-2xl">{item.icon}</span>
                                <span
                                    className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">
                                {item.label}
                              </span>
                              </Link>
                            </motion.div>
                        ))}
                      </div>
                    </nav>

                    {/* Mobile Menu Footer */}
                    <div className="h-full p-6 border-t border-gray-200 dark:border-gray-700 space-y-4 z-90">
                      <Button
                          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl">
                        Register Now
                      </Button>

                      <div className="flex items-center justify-center space-x-4 z-90">
                        <motion.a
                            href="https://www.instagram.com/run.eat.dubai/"
                            target="_blank"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-100 dark:hover:bg-green-900 transition-colors duration-200"
                        >
                          <AiOutlineInstagram className="w-6 h-6 text-pink-600"/>
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-100 dark:hover:bg-green-900 transition-colors duration-200"
                        >
                          <AiOutlineWhatsApp className="w-6 h-6 text-green-600"/>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.header>
  );
}
