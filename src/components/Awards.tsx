import React from "react";
import AwardsCards from "./AwardsCards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Awards = () => {
  const AwardsData = [
    {
      key: 1,
      img: "https://icazalaw.com/wp-content/uploads/2019/09/awards-home10.jpg",
      text: "VER MÁS",
      link: "https://www.icazalaw.com/iflr1000-recognizes-icaza-gonzalez-ruiz-aleman/",
    },
    {
      key: 2,
      img: "https://icazalaw.com/wp-content/uploads/2020/10/LACCA-Approved-2021-Final.jpg",
      text: "VER MÁS",
      link: "https://www.icazalaw.com/icaza-gonzalez-ruiz-aleman-recognized-in-lacca-approved-2021/",
    },
    {
      key: 3,
      img: "https://icazalaw.com/wp-content/uploads/2020/10/Chambers-Global-2020xhdpi.jpg",
      text: "VER MÁS",
      link: "https://www.icazalaw.com/chambers-partners-global-2020/",
    },
    {
      key: 4,
      img: "https://icazalaw.com/wp-content/uploads/2020/10/Chambers-Latin-America-2021xhdpi.jpg",
      text: "VER MÁS",
      link: "https://www.icazalaw.com/icaza-gonzalez-ruiz-aleman-ranked-in-chambers-latin-america-2021/",
    },
    {
      key: 5,
      img: "https://icazalaw.com/wp-content/uploads/2020/10/Latinlawyer.jpg",
      text: "VER MÁS",
      link: "https://www.icazalaw.com/latin-lawyer-250-2019-recommended-firm-duplicate-1/",
    },
  ];

  return (
    <div className="layout-padding p-20">
      <div className="flex gap-3">
        <h3 className="text-secundary font-semibold text-xs">
          ICAZA, GONZÁLEZ-RUIZ & ALEMÁN
        </h3>
        <h3 className="text-secundary font-semibold text-xs"> ___</h3>
      </div>

      <h3 className="text-secundary font-bold text-2xl mt-3">
        Premios & Reconocimientos
      </h3>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {AwardsData.map((item) => {
            return (
              <SwiperSlide key={item.key}>
                <AwardsCards img={item.img} text={item.text} link={item.link} />
              </SwiperSlide>
            );
          })}
        </Swiper>
    </div>
  );
};

export default Awards;
