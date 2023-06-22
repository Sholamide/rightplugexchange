import styles from "../styles";

const StartSteps = ({ number, text }: { number: number; text: string }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#49080a]`}
    >
      <p className="animate-bounce font-bold text-[16px] lg:text-[20px] text-white">0{number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[14px] lg:text-[18px] text-[#B0B0B0] leading-[32px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
