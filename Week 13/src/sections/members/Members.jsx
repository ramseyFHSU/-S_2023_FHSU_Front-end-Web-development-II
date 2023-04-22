// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination } from "swiper";

import members from "./data";
import Member from "./Member";
import "./members.css";

const Members = () => {
  return (
    <section id="members">
      <h2>Club Members</h2>
      <p>Members sharing their experience working with the club</p>
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            601: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          className="mySwiper"
        >
          {members.map((member) => (
            <SwiperSlide key={member.id}>
              <Member member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Members;
