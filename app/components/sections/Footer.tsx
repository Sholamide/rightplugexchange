import { socials } from "@/app/constants";
import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="flex pb-3 w-full justify-center items-center">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <p className="text-[12px] lg:text-[16px]">
          © {new Date().getFullYear()}&nbsp;
          <span className="red-gradient">Right Plug Exchange.</span>&nbsp;All
          rights reserved
        </p>
        <div className="flex mt-2 gap-4">
          {socials.map((social) => (
            <a href={social.href}>
              <img
                src={social.url}
                key={social.name}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
