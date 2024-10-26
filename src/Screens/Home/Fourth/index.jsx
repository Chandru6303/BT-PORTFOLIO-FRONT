import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Gallery1,Gallery2,Gallery3,Gallery4,Gallery5,Gallery6,Gallery7,Gallery8,Gallery9,Gallery10 } from "../../../Assets";
import "./Fourth.scss"

const Fourth = () =>{
    const data = [
        {
            img:Gallery10,
            head:'Mern stack training 15 days',
            subHead:'Bannari Amman Institute Of Technology, Erode'
        },
        {
            img:Gallery9,
            head:'Mern stack Training',
            subHead:'Kongu Engineering College, Perundurai'
        },
        {
            img:Gallery8,
            head:'Mern stack training',
            subHead:'Sri Eswar College Of Engineering, Coimbatore'
        },
        {
            img:Gallery7,
            head:'Introduction on DSA and Data Science Workshop',
            subHead:'Perumal Manimegalai College, Hosur'
        },
        {
            img:Gallery6,
            head:'Data cleaning and pre processing using Tableau',
            subHead:'Bannari Amman Institute Of Technology, Erode'
        },
        {
            img:Gallery5,
            head:'Advance Java Training',
            subHead:'Kongu Engineering College, Perundurai college'
        },
        {
            img:Gallery4,
            head:'Programming expertise in Java',
            subHead:'M. Kumarasamy College Of Engineering, Karur'
        },
        {
            img:Gallery3,
            head:'MERN Stack Training',
            subHead:'Bannari Amman Institute Of Technology, Erode'
        },
        {
            img:Gallery2,
            head:'MERN Stack Training',
            subHead:'Bannari Amman Institute Of Technology, Erode'
        },
        {
            img:Gallery1,
            head:'MERN Stack Training',
            subHead:'Sri Eswar College Of Engineering, Coimbatore'
        },
    ]
    return(
        <div className="Fourth">
            <h1>Learning in Action than thinking about it</h1>
            <div className="Swiper-wrapper">
            {/* <h2>In the below institutions we are doing long run programs not an one or two days events. For detailed event list check our Instagram page.</h2> */}
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
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                >
                    {
                        (data)?.map((elem)=>            
                        <SwiperSlide>
                            <div className="slide">
                                <div className="slideImg">
                                    <img src={elem.img} alt="1" />
                                </div>
                                <h3>{elem.subHead}</h3>
                                <h2>{elem.head}</h2>
                            </div>
                        </SwiperSlide>
                        )
                    }
            </Swiper>
            </div>
        </div>
    )
}

export default Fourth