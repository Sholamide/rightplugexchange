"use client";

import { startingFeatures } from "@/app/constants";
import styles from "@/app/styles";
import { fadeIn, staggerContainer } from "@/app/utils/motion";
import { motion } from "framer-motion";
import StartSteps from "../StartSteps";
import { TitleText, TypingText } from "../CustomTexts";

const Steps = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.5)}
          className={`flex-1 text-blue-700 ${styles.flexCenter}`}
        >
          <img
            src="/question-mark-blue.svg"
            alt="get-started"
            className="w-[40%] h-[40%] object-contain text-blue-700"
          />
        </motion.div>
        <motion.div
          className="flex-[0.75] justify-center flex-col"
          variants={fadeIn("down", "spring", 0.2, 0.5)}
        >
          <TypingText
            textStyles="text-2xl lg:text-3xl"
            title="| How does it work?"
          />
          <TitleText
            textStyles="text-xl lg:text-2xl"
            title="You paste, we buy!"
          />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Steps;
