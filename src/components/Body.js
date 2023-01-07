import React from "react";
import RenderBody from "./RenderBody";
import RenderMore from "./RenderMore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

import "../styles/index.css";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

let backdrop =
  "https://cdn.pixabay.com/photo/2022/10/16/13/17/road-7525091__340.jpg";
let cover =
  "https://images.unsplash.com/photo-1606103836293-0a063ee20566?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlcHJlc3Npb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
let backImg =
  "https://cdn.pixabay.com/photo/2021/09/09/20/47/candles-6611567__340.jpg";

const dummy = [
  {
    title: "Dealing with Burn Out...",
    url: "https://images.unsplash.com/photo-1556195332-95503f664ced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    profile: backdrop,
    fullName: "Aiza San",
  },
  {
    title: "Mariage Issue...",
    url: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hZ2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    profile: cover,
    fullName: "Kosem Shah",
  },
  {
    title: "Laziness & Fatigue...",
    url: "https://images.unsplash.com/photo-1556195332-95503f664ced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    profile: backdrop,
    fullName: "Mary Swharchz",
  },
  {
    title: "Addiction Problems",
    url: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hZ2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    profile: cover,
    fullName: "Ejalonah Kesh",
  },
];
const data = [
  {
    title: "Burn Out...",
    url: "https://images.unsplash.com/photo-1556195332-95503f664ced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Mariage Issue...",
    url: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hZ2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Laziness...",
    url: backdrop,
  },
  {
    title: "Addiction...",
    url: cover,
  },
  {
    title: "Weak Faith",
    url: backImg,
  },
  {
    title: "Depression",
    url: cover,
  },
  {
    title: "School Failure",
    url: backdrop,
  },
];

function Body() {
  return (
    <div class="flex justify-center items-center">
      <div class="h-screen min-w-fit max-w-sm w-full mt-24 sticky hidden md:inline mx-4  p-2">
        <RenderMore data={dummy} />
      </div>
      <div className="container">
        <Swiper
          navigation={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {data.map(({ url, title }) => {
            return (
              <SwiperSlide>
                <RenderBody
                  key={Math.random() * 1000 + "pafaepghaph"}
                  title={title}
                  url={url}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Body;
