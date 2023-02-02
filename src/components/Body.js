import React, { useRef, useState, useEffect } from "react";
import RenderBody from "./RenderBody";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Footer from "./Footer";
import "../styles/index.css";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";
import { db } from "../firebase";
import { collectionGroup, getDocs, query, where } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function Body() {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(3);
  const user = useSelector(selectUser);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const groups = query(
        collectionGroup(db, "groups"),
        where("type", "!=", user.uid)
      );
      const querySnapshot = await getDocs(groups);

      setData(
        querySnapshot.docs.map((doc) => ({
          docId: doc.id,
          data: doc.data(),
        }))
      );
    }
    fetchData();
  }, [user.uid]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    // Remove the event listener when the component unmounts
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []); // Run the effect only once

  const handleKeyDown = (event) => {
    // Check if the right arrow key was pressed
    if (event.keyCode === 39) {
      // Move the carousel to the next slide
      swiperRef.current.swiper.slideNext();
    }
    // Check if the left arrow key was pressed
    if (event.keyCode === 37) {
      // Move the carousel to the previous slide
      swiperRef.current.swiper.slidePrev();
    }
  };
  useEffect(() => {
    const handleKey = (e) => {
      if (e.keyCode === 37 && currentIndex > 0) {
        setCurrentIndex((c) => c - 1);
      } else if (e.keyCode === 39 && currentIndex < data.length - 1) {
        setCurrentIndex((c) => c + 1);
      }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [currentIndex, data.length]);

  return (
    <div class="flex flex-col justify-center items-center pt-10">
      <div
        className={`container mt-24 mb-10 p-10 bg-gradient-to-t from-slate-900 to-slate-100 rounded-md shadow-2xl`}
        tabIndex="0"
        onKeyDown={handleKeyDown}
      >
        <Swiper
          navigation={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 468 ? 1 : "auto"}
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
          onSwiper={(swiper) => {
            setCurrentIndex(swiper.activeIndex);
          }}
          initialSlide={3}
          className="mySwiper"
          ref={swiperRef}
        >
          {data.map(
            ({
              id,
              data: {
                title,
                cover,
                description,
                symptoms,
                timestamp,
                admin,
                profilePic,
                fullname,
                age,
                job,
                location,
                username,
                gender,
                type,
              },
            }) => {
              return (
                <SwiperSlide key={id}>
                  <RenderBody
                    title={title}
                    cover={cover}
                    timestamp={timestamp}
                    description={description}
                    symptoms={symptoms}
                    admin={admin}
                    profilePic={profilePic}
                    fullname={fullname}
                    age={age}
                    job={job}
                    location={location}
                    username={username}
                    gender={gender}
                    docId={id}
                    type={type}
                  />
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
      <Footer />
    </div>
  );
}

export default Body;
