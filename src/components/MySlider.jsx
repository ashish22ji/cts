// import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { ChevronLeft, ChevronRight } from "./icons/Icon";

// import 'swiper/css';
// import "swiper/css/navigation";
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import truck1 from "../assets/images/truck1.webp";
// import truck2 from "../assets/images/truck2.avif";


// export default function HeroSlider(){
//     return (
//           <div className="relative mt-16">

//       <div className="prev-btn absolute left-2 top-1/2 -translate-y-1/2 z-10">
//     <ChevronLeft width={24} height={24} color="white" />
//   </div>
//   <div className="next-btn absolute right-2 top-1/2 -translate-y-1/2 z-10">
//     <ChevronRight width={24} height={24} color="white" />
//   </div>
//         <Swiper
//         modules={[Autoplay, Pagination, Navigation, A11y]}
//         navigation={{
//         prevEl: '.prev-btn',
//         nextEl: '.next-btn',
//     }}
//       autoplay={{ delay: 3500, disableOnInteraction: false }}
//       pagination={{ clickable: true }}
//       loop
//       className="h-[65vh]"
//       > <SwiperSlide style={{ backgroundImage: `url(${truck1})` }} className="relative bg-cover bg-center">
//         <div className="absolute inset-0 bg-black/25" />
//         <div className="relative z-10 flex h-full items-center px-10">
//           <div className="text-white max-w-xl">
//             <h1 className="text-4xl font-bold mb-4">
//               kya likhu batao
//             </h1>
//             <p className="mb-6">
//               Fast, safe, and on-time delivery across India
//             </p>
//             <button className="bg-orange-500 px-6 py-3 rounded">
//               Get a Quote
//             </button>
//           </div>
//         </div>
//       </SwiperSlide>
//       <SwiperSlide style={{ backgroundImage: `url(${truck2})` }} className="relative bg-cover bg-center">
//         <div className="absolute inset-0 bg-black/25" />
//         <div className="relative z-10 flex h-full items-center px-10">
//           <div className="text-white max-w-xl">
//             <h1 className="text-4xl font-bold mb-4">
//               Reliable Transport Solutions
//             </h1>
//             <p className="mb-6">
//               Fast, safe, and on-time delivery across India
//             </p>
//             <button className="bg-orange-500 px-6 py-3 rounded">
//               Get a Quote
//             </button>
//           </div>
//         </div>
//       </SwiperSlide>

// <SwiperSlide className="bg-container-even">
//   <div className="h-full flex items-center justify-center text-primary text-3xl font-extrabold">
//     Fleet & Logistics Services
//   </div>
// </SwiperSlide>
// </Swiper>
// </div>
//     )
// }

import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper } from "swiper/react";
import { ChevronLeft, ChevronRight } from "./icons/Icon";
// import { useId } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MySlider({
  children,
  slidesPerView = 1,
  spaceBetween = 24,
  autoplay = true,
  autoplayDelay = 4000,
  pagination = false,
  loop = true,
  breakpoints,
  showNavigation = true,
  className = "",
}) {
  // const id = useId();
  // const prevClass = `slider-prev-${id}`;
  // const nextClass = `slider-next-${id}`;

  return (
    <div className={`relative ${className}`}>
      {showNavigation && (
        <>
          <div
            className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-container-even opacity-40 hover:opacity-60 p-2 rounded-full"
          >
            <ChevronLeft width={18} height={18} color="#2f507d"/>
          </div>

          <div
            className="next-btn absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-container-even opacity-40 hover:opacity-60 p-2 rounded-full"
          >
            <ChevronRight width={18} height={18} color="#2f507d"/>
          </div>
        </>
      )}

      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
         navigation={
          showNavigation
            ? {
                prevEl: ".prev-btn",
                nextEl: ".next-btn",
              }
            : false
        }
        autoplay={autoplay ? { delay: autoplayDelay, disableOnInteraction: false } : false}
        pagination={pagination ? { clickable: true } : false}
        loop={loop}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
      >
        {children}
      </Swiper>
    </div>
  );
}
