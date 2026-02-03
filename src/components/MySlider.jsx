import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper } from "swiper/react";
import { ChevronLeft, ChevronRight } from "./icons/Icon";

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
  return (
    <div className={`relative ${className}`}>
      {showNavigation && (
        <>
          <div className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-container-even opacity-40 hover:opacity-60 p-2 rounded-full">
            <ChevronLeft width={18} height={18} color="#2f507d" />
          </div>

          <div className="next-btn absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-container-even opacity-40 hover:opacity-60 p-2 rounded-full">
            <ChevronRight width={18} height={18} color="#2f507d" />
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
        autoplay={
          autoplay
            ? { delay: autoplayDelay, disableOnInteraction: false }
            : false
        }
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
