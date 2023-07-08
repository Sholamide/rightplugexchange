"use client";

import Image from "next/image";
import { map } from "../../assets";
import { motion } from "framer-motion";
import styles from "@/app/styles";
import { fadeIn, staggerContainer, textVariant } from "@/app/utils/motion";
import { perks } from "@/app/constants";
import { IconType } from "react-icons";
import { Tilt } from "react-tilt";

type perkCardType = {
  title: string;
  icon: IconType;
  index: number;
};

const PerksCard = ({ title, icon: Icon, index }: perkCardType) => {
  return (
    <Tilt className="">
        <motion.div
      className="flex perksglassmorphism rounded-lg py-2 z-10 px-3 items-center"
      variants={fadeIn("left", "spring", 0.5 * index, 0.75)}
    >
      <Icon className="h-10 w-10 text-blue-600" />
      <p className="ml-3 text-sm md:text-md lg:text-lg text-white font-medium">{title}</p>
    </motion.div>
    </Tilt>
    
  );
};
const Hero = () => {
  return (
    <section id="about" className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute top-[120px] inset-0 flex flex-row items-start gap-5 max-w-7xl mx-auto`}
      >
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          className="flex flex-col"
        >
          <motion.h6
            className="font-bold lg:text-[10px] mt-2 md:text-[10px] sm:text-[10px] text-[10px] text-blue-600"
            variants={textVariant(1.1)}
          >
            Attention all visitors of rightexchange.com! Uncover the hidden magic with just two words: &apos;Send Aza.&apos; Find it, capture proof, and unlock surprises. Happy hunting!
          </motion.h6>
          <motion.h1
            className="font-bold lg:text-[48px] mt-12 md:text-[40px] sm:text-[35px] text-[20px] uppercase  text-white red-gradient"
            variants={textVariant(1.1)}
          >
            Right Plug Exchange
          </motion.h1>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-[#e2e2e2] lg:text-[24px] text-[17px] max-w-3xl font-semibold leading-[30px]"
          >
            Your One-Stop Shop for Buying, Selling, and Trading Bitcoin, Gift
            Cards, Altcoins, and eFunds at Affordable Rates.
          </motion.p>

          <div className="hidden sm:flex mt-10">
          <motion.p
            variants={fadeIn("", "", 0.2, 1)}
            className="mt-4 text-[#e2e2e2] text-[20px] max-w-xl font-semibold leading-[30px]"
          >
            RightPlug Exchange offers a wide range of affordable options, simplified transactions, and a user-friendly experience for buying, selling, and trading Bitcoin, gift cards, altcoins, and eFunds.
          </motion.p>
          </div>

          <div className="mt-10 flex flex-wrap gap-5">
            {perks.map((perks, index) => (
              <PerksCard key={perks.title} {...perks} index={index} />
            ))}
          </div>
        </motion.div>
        <div className="absolute">
          <Image alt="right plug map" src={map} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
