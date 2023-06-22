"use client";

import Link from "next/link";
import styles from "../../styles";
import Image from "next/image";
import { logo, menu, close, rpe } from "../../assets";
import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../../constants";
import { navVariants } from "@/app/utils/motion";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex max-w-7xl justify-between mx-auto">
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-x-3"
          href="/"
        >
          <Image className="w-16 h-16" alt="logo" src={rpe} />
          <p className="hidden sm:flex text-white text-[16px] cursor-pointer">
            <span className="text-red-500 font-bold">Right&nbsp;</span>
            Plug&nbsp;<span className="text-blue-500 font-bold">Exchange</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link: any) => (
            <li
              onClick={() => setActive(link.title)}
              className={`${
                active === link.title ? "text-red-600" : "text-secondary"
              } hover:text-white cursor-pointer font-medium`}
              key={link.id}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex sm:hidden flex-1 justify-end items-center">
          <Image
            onClick={() => setToggle(!toggle)}
            className="w-[28px] h-[28px]"
            alt="hamburger"
            src={!toggle ? menu : close}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 black-gradient`}
          >
            <ul className="flex justify-end gap-4 list-none flex-col items-start">
              {navLinks.map((link: any) => (
                <li
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                  className={`${
                    active === link.title ? "text-red-600" : "text-secondary"
                  } hover:text-white cursor-pointer font-medium`}
                  key={link.id}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
