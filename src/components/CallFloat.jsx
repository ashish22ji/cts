import calldata from "../data/contactData.json";
import { FloatCallIcon } from "./Icon";

export default function CallFloat() {
  return (
    <a
      href={`tel:+${calldata.phone}`}
      aria-label="Call Us"
      className="
        fixed bottom-24 right-6 z-50
        w-14 h-14 rounded-full
        bg-white/70 hover:bg-white/90 transition
        flex items-center justify-center
        shadow-lg
        transition-transform duration-300
        hover:scale-110
        active:scale-95
      "
    >
      <div className="bg-tertiary w-10 h-10 rounded-full flex items-center justify-center">
        <FloatCallIcon color="white" />
      </div>
    </a>
  );
}
