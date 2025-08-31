import React from "react";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion"
import {AiOutlineTeam} from "react-icons/ai";

import {HandshakeIcon, HeartHandshakeIcon, HelpingHand} from "lucide-react";
import {TbShoe} from "react-icons/tb";
const Features = () => {
  const features = [
    {
      title: "ABOUT THE RACE",
      link:"about"
    },
    {
      title: "CORPORATE TEAM",
      link:"corporate_team"
    },
    {

      title: "BECOME A PARTNER",
      link:"become_partner"
    },
    {
      title: "BECOME A VOLUNTEER",
      link:"volunteer"
    },
  ];

  return (
      <section className="container mx-auto px-4 transition-colors duration-200 rounded-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="flex flex-col md:float-start gap-8">
              {features.map((feature, index) => (
                  <motion.div
                      initial={{opacity: 0, x: -30}}
                      whileInView={{opacity: 1, x: 0}}
                      whileHover={{scale: 1.2}}
                      whileTap={{scale: 0.8}}
                      exit={{opacity: 0, x: -30}}
                      transition={{duration: 0.2, delay: 0.01, ease: "backInOut"}}

                  >
                    <FeatureCard key={index} {...feature} />
                  </motion.div>
              ))}

            </div>
          </div>
        </div>
      </section>
  );
};

export default Features;
