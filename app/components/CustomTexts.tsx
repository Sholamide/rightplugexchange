'use client'

import {motion} from 'framer-motion'
import {textContainer, textVariant2} from '../utils/motion'

interface TypingTextProps {
    title: string;
    textStyles:string;
}


export const TypingText:React.FC<TypingTextProps> = ({ title, textStyles }) => (
    <motion.p
      className={`font-normal text-[14px] text-white ${textStyles}`}
      variants={textContainer}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
  );

  export const TitleText :React.FC<TypingTextProps> = ({ title, textStyles }) => (
    <motion.h2
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
      variants={textVariant2}
    >
      {title}
    </motion.h2>
  );
  