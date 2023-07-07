import { socials } from "@/app/constants";
import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex pb-3 w-full justify-center items-center"
    >
      <div className="flex flex-col items-center max-w-7xl gap-y-2 mx-auto">
        <p className="text-[12px] lg:text-[16px]">
          © {new Date().getFullYear()}&nbsp;
          <span className="red-gradient">Right Plug Exchange.</span>&nbsp;All
          rights reserved
        </p>
        <div className="flex gap-x-4">
          {socials.map((social) => (
            <a key={social.name} href={social.href}>
              <img
                src={social.url}
                key={social.name}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            </a>
          ))}
        </div>
        <p className="text-sm">
          Built with 💙 by{" "}
          <a
            className="cursor-pointer text-sm red-gradient"
            target="_blank"
            href="https://sholuadeolamide.vercel.app"
          >
            Lordie
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
