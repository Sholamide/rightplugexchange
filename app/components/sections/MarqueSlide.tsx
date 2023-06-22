import { cards } from "@/app/constants";
import styles from "@/app/styles";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

type MarqueCardType = {
  icon: string;
};

const MarqueCard = ({ icon }: MarqueCardType) => {
  return (
    <div className="mr-[50px] py-4">
      <Image src={icon} alt="title" className="lg:w-24 w-16 lg:h-24 h-16 object-contain" />
    </div>
  );
};
const MarqueSlide = () => {
  return (
    <section className={`${styles.paddingX} bg-white w-full`}>
 <div className="max-w-7xl mx-auto py-8 mt-[-150px]">
      <Marquee className="gap-16">
        {cards.map((card: any) => (
          <MarqueCard key={card.name} {...card} />
        ))}
      </Marquee>
    </div>
    </section>
   
  );
};

export default MarqueSlide;
