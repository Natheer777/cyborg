import { SectionWrraper } from "../../components";

import "./Featured_Games.css";

import {FaStar ,FaDownload} from 'react-icons/fa'


// import { Swiper, SwiperSlide } from "swiper/react";

import { Theswiper , GamingLibrarycard } from "../../components/index";

import Data from "../../Data/FeaturedData";

import GamingLibraryData from '../../Data/GmaingLibraryData'


import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



// // Import Swiper styles
// import 'swiper';

const Featured_Games = () => {

    const card = GamingLibraryData.map(card => {
      return <GamingLibrarycard Key={card.id} image={card.image} title={card.title}/>
      })
  

  const swiper = Data.map((swiper) => {
    return <Theswiper Key={swiper.id} image={swiper.image} />;
  });

  return (
    
        <div className="container">
      <SectionWrraper>
    <div className="row">
      <div className="C col-lg-8 col-md-12">

              <h1 className="fw-bold">
                <span>Featured </span>Games
              </h1>

              <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={3}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='col-lg-12 col-md-10 col-sm-12 col-12'>{swiper[0]}</SwiperSlide>
        <SwiperSlide className='col-lg-12 col-md-10 col-sm-12 col-12'>{swiper[1]}</SwiperSlide>
        <SwiperSlide className='col-lg-12 col-md-10 col-sm-12 col-12'>{swiper[2]}</SwiperSlide>
        <SwiperSlide className='col-lg-12 col-md-10 col-sm-12 col-12'>{swiper[3]}</SwiperSlide>
        <SwiperSlide></SwiperSlide>

      </Swiper>


        </div>
 
        <div className="Top-Download col-lg-4 col-md-12">

        <div className='Top-Download contaner'>
            <div className='row'>
                
          <h1 className="fw-bold"><span>Top</span>Download</h1>
          {card}
              
            </div>
        </div>


        </div>
        </div>

      </SectionWrraper>
        </div>
    
  );
};

export default Featured_Games;
