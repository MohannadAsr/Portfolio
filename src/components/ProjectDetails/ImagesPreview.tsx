'use client';
import Image from 'next/image';
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';

function ImagesPreview({ targetProject }: { targetProject: any }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      modules={[Pagination, Autoplay]}
      autoplay
      pagination={{ enabled: true, dynamicBullets: true }}
      className=" relative    backdrop-blur-md w-full   "
      style={{ padding: 3 }}
    >
      {Array.from({ length: targetProject?.totalImages as number }).map(
        (item, index) => {
          return (
            <SwiperSlide className="bottom-light">
              <Image
                alt={targetProject?.title as string}
                width={1600}
                height={1600}
                src={`/projects/${targetProject?.title}/${index + 1}.jpg`}
                className=" w-fit object-contain rounded-lg drop-shadow-lg max-h-[500px] cursor-grab z-[-1] "
              />
            </SwiperSlide>
          );
        }
      )}
    </Swiper>
  );
}

export default ImagesPreview;
