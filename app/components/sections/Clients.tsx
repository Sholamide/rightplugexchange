"use client";

import { counters } from "@/app/constants";
import styles from "@/app/styles";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils/motion";

const Clients = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      variants={fadeIn("up", "", 0.5, 1)}
      className={`${styles.paddings} relative z-10`}
    >
      <hr className="h-[1px]" />
      <div className="justify-around mt-12 flex flex-wrap gap-5">
        {counters.map((type) => (
          <div key={type.name} className="flex items-center">
            <CountUp className="font-bold text-lg" end={type.number} />+
            <p className="text-lg pl-[1px] text-gray-300 font-bold">
              &nbsp;{type.name}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Clients;
