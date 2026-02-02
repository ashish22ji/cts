import wtsappData from '../data/contactData.json';

export default function FloatingWtsapp() {

  const whatsappUrl = `https://wa.me/${wtsappData.phone}?text=${encodeURIComponent(wtsappData.message)}`;
  return (
     <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition bg-white/70 hover:bg-white/90 transition flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-12 h-12"
      />
    </a>
  );
}
