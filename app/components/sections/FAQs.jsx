"use client";

import styles from "@/app/styles";
import { fadeIn, staggerContainer } from "@/app/utils/motion";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../CustomTexts";
import { faqs } from "@/app/constants";
import { Disclosure } from "@headlessui/react";
import { FaArrowCircleUp } from "react-icons/fa";

const FAQs = () => {
  

  
  return (
    <section id="faqs" className={`${styles.paddings} relative z-10`}>
      <motion.div
        className={` mx-auto justify-center items-center flex gap-8`}
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >

        <motion.div
          className="flex justify-center flex-col"
          variants={fadeIn("down", "spring", 0.2, 0.5)}
        >
          <TypingText
            textStyles="text-sm text-center lg:text-3xl"
            title="| Frequently Asked Questions"
          />
          <div className="mt-[25px] flex flex-col mx-auto max-w-[370px] gap-[24px] justify-center">
            {faqs.map((faq, index) => (
              <Disclosure key={faq.answer}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-center text-sm font-medium text-blue-900 hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                      <span>{faq.question}</span>
                      <FaArrowCircleUp
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-red-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </motion.div>
       
      </motion.div>
    </section>
  );
};

export default FAQs;
