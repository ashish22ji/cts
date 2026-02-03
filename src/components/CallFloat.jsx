import calldata from "../data/contactData.json";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="white"
        >
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2
        19.86 19.86 0 0 1-8.63-3.07
        19.5 19.5 0 0 1-6-6
        A19.86 19.86 0 0 1 2.08 4.18
        2 2 0 0 1 4.06 2h3
        a2 2 0 0 1 2 1.72
        c.12.9.32 1.77.59 2.6
        a2 2 0 0 1-.45 2.11L8.09 9.91
        a16 16 0 0 0 6 6
        l1.48-1.11
        a2 2 0 0 1 2.11-.45
        c.83.27 1.7.47 2.6.59
        a2 2 0 0 1 1.72 2.0z"
          />
        </svg>
      </div>
    </a>
  );
}
