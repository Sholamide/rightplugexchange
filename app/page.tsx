import Image from "next/image";
import { FiSettings } from "react-icons/fi";
import { TypingText } from "./components/CustomTexts";
export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center">
      <TypingText title="Right Plug Exchange!" textStyles="text-center" />
      <div className="mt-20 text-red-800 animate-bounce">
        <FiSettings size={40} />
      </div>
    </div>
  );
}
