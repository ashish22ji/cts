import { SwiperSlide } from "swiper/react";
import MySlider from "../components/MySlider";
import CTA from "../components/CTA";
import fleetData from "../data/fleet.json";
import contactData from "../data/contactData.json";

export default function HeroSlider() {
  return (
    <div className="pt-16" id="home">
      <MySlider className="h-[65vh]" autoplay pagination showNavigation>
        {fleetData.map((fleetItem, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[65vh] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${fleetItem.src})` }}
            >
              <div className="absolute inset-0 bg-black/30" />

              <div className="relative z-10 h-full flex items-center px-20">
                <div className="text-white max-w-xl">
                  <h1 className="text-4xl font-bold mb-4">{fleetItem.title}</h1>
                  <p className="mb-6">{fleetItem.description}</p>
                  <CTA
                    text="Get a Quote"
                    variant="primary"
                    target="_blank"
                    href={`https://wa.me/${contactData.phone}?text=${encodeURIComponent(`${contactData.quoteMessage}-"${fleetItem.quoteInfo}"`)}`}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </MySlider>
    </div>
  );
}
