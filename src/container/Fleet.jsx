import { SwiperSlide } from "swiper/react";
import MySlider from "../components/MySlider";
import Container from "../layout/Container";
import Image from "../components/Image";
import fleetData from "../data/fleet.json";
import CTA from "../components/CTA";
import contactData from "../data/contactData.json"

export default function Gallery() {
  return (
    <Container
      id={"fleet"}
      title="Our Transport Fleet"
      subtitle="Modern vehicles for safe & reliable delivery"
      bg="bg-container-even"
      spacing="medium"
    >
      <MySlider
        slidesPerView={4}
        spaceBetween={4}
        showNavigation={false}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {fleetData.map((item, index) => (
          <SwiperSlide key={index}>
            <>
            <Image
              src={item.src}
              title={item.title}
              description={item.description}
              rounded={false}
              ctaProps={{ text: "Get Quote", align: "center", target:"_blank", href:`https://wa.me/${contactData.phone}?text=${encodeURIComponent(`${contactData.quoteMessage}-"${item.quoteInfo}"`)}` }}
            />
            </>
          </SwiperSlide>
        ))}
      </MySlider>
    </Container>
  );
}

