import {
  AiOutlineFacebook,
  AiOutlineX,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineWhatsApp
} from "react-icons/ai";
import {ArrowRight, ArrowRightFromLine, ArrowRightToLine} from "lucide-react";
import {HiArrowRight} from "react-icons/hi";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-white border-t-2 border-gray-100 dark:bg-black shadow-sm text-gray-400 py-6 dark:border-t dark:border-gray-800">
        <div className="flex flex-col md:flex-row w-5/6 mx-auto h-full py-12 justify-between gap-4 md:gap-12 items-start md:items-center">
          <div className="flex flex-col gap-2 md:gap-6 items-start justify-start">
            <span className={'text-lg text-gray-500'}>Phone</span>
            <h2 className={'text-2xl  text-foreground hover:cursor-pointer'}>+971-50-478-1208</h2>
          </div>
          <div className="flex flex-col gap-2 md:gap-6 items-start justify-start">
            <span className={'text-lg text-gray-500'}>Email</span>
            <h2 className={'text-2xl  text-foreground hover:cursor-pointer'}>hi@runeatdubai.com</h2>
          </div>
          <div className="flex flex-col gap-2 md:gap-6 items-start justify-start">
            <span className={'text-lg text-gray-500'}>Whatsapp</span>
            <div className="flex w-full hover:cursor-pointer">
              <h2 className={'border-b-2 py-1 text-2xl text-foreground after:content-["→"]  after:inline-block hover:after:rotate-0 after:relative after:-rotate-45 after:duration-150 after:ease-in'}>chat
                with us </h2>
              {/*<HiArrowRight width={32} height={32} className={'-rotate-45 hover:rotate-0 duration-150 ease-in'}/>*/}
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-6 items-start justify-start">
            <span className={'text-lg text-gray-500'}>Social Media</span>
            <div className="flex w-full hover:cursor-pointer">
              <div className={'flex gap-4 text-2xl'}>
                <AiOutlineInstagram className={'bg-gray-900 rounded-full w-12 h-12 text-white p-1.5 hover:scale-110 hover:bg-gray-800 duration-150 ease-in'} />
                <AiOutlineFacebook className={'bg-gray-900 rounded-full w-12 h-12 text-white p-1.5 hover:scale-110 hover:bg-gray-800 duration-150 ease-in'} />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 pt-7 border-border  mx-auto px-4 flex flex-wrap justify-center sm:justify-between items-center text-sm">
          <p className="ml-4">&copy; {currentYear} RUN & EAT Dubai. All rights reserved.</p>
          <div className="flex gap-4 mr-12 items-center">
            <Link href="/about" className={'hover:text-foreground duration-150 ease-in'}>About the Race</Link>
            <Link href="/corporate_team" className={'hover:text-foreground duration-150 ease-in'}>Corporate Team</Link>
            <Link href="/become_partner" className={'hover:text-foreground duration-150 ease-in'}>Become a Partner</Link>
            <Link href="/volunteer" className={'hover:text-foreground duration-150 ease-in'}>Become a Volunteer</Link>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
