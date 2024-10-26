import React, { useState, useEffect } from "react";
import Header from '../../Components/Header'
import { AboutIllustration } from "../../Assets";
import "./About.scss"
import { About1,About2,About3 } from "../../Assets";
import { useSpring,animated } from "react-spring";
import Footer from "../Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Celeb1,Celeb2 } from "../../Assets";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Graph from "../Home/Graph";
import { StoryblokComponent, useStoryblok } from '@storyblok/react';
import StoryblokClient from 'storyblok-js-client';
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Number({n}){
    const {number} = useSpring({
        from:{number:0},
        number:n,
        delay:200,
        config:{mass : 1,tension:20,friction:10}
    });
    return <animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>
}

const Storyblok = new StoryblokClient({
    accessToken: '69sDEdXIT6z4Ok7ezA2tGAtt',
});

const About = () =>{
    const [aboutPageData, setAboutPage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Storyblok.get('cdn/stories/About', {
            version: 'published'
        })
        .then(response => {
            setAboutPage(response.data.story.content);
            console.log(response.data.story.content);
            
            setLoading(false);
        })
        .catch(error => {
            console.error("Error fetching storyblok content", error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return  <div className="spinner-container">
                  <Spinner animation="border" role="status" >
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
                }

    return(
        <div className="About">
            <Header/>
            <div className="GetStarted">
                <div className="Content">
                    <h1>
                    To have long-term success <br /> as a coach, you have to <br />obsessed in some way.</h1>
                    <p>{aboutPageData?.GetStarted}</p>                </div>
                <div className="illustration">
                    <img src={AboutIllustration} alt="pic" />
                </div>
            </div>
            <div className="Mission">
                <h1>Our Mission</h1>
                <p>{aboutPageData?.OurMission}</p>
            </div>
            <div className="sections">
                <img src={About1} alt="1" />
                <div className="content">
                    <h1>Happy Coding Lifestyle</h1>
                    <p>To facilitate the learning process and empower them to code independently with confidence</p>
                </div>
            </div>
            <div className="sections">
                <div className="content">
                    <h1>Create a responsible Engineer</h1>
                    <p>Getting an offer is not our goal, to make them better problem solving Engineer. We are not afraid of Lay offs anymore</p>
                </div>
                <img src={About2} alt="2" />
            </div>
            <div className="sections">
                <img src={About3} alt="3" />
                <div className="content">
                    <h1>Rewrite Your Placement History</h1>
                    <p>Our approach to placement is unique, and our <b>SkillHub360</b> training program provides comprehensive interview preparation, covering all aspects</p>
                </div>
            </div>
            <div className="Empowering">
                <h1>Number of Students Benefited</h1>
                <div className="success">
                    <div className="field">
                        <h1> {aboutPageData?.body[1].StudentsBenefited}k+</h1>
                        <p>Students Benefited</p>
                    </div>
                    <div className="line"></div>
                    <div className="field">
                        <h1>  {aboutPageData?.body[1].FullStackDeveloper}k+</h1>
                        <p>Full Stack Developer</p>
                    </div>
                    <div className="line"></div>
                    <div className="field">
                        <h1> {aboutPageData?.body[1].JavaProgrammers}k+</h1>
                        <p>Java Programmers</p>
                    </div>
                    <div className="line"></div>
                    <div className="field">
                        <h1> {aboutPageData?.body[1].DreamOffers}k+</h1>
                        <p>Dream Offers</p>
                    </div>
                </div>
            </div>
            <div className="happy_hours">
                <div className="happy_left">
                    <div className="Carousel_contain">
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
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                        >
                        {aboutPageData?.body?.[0] &&
                            Object.values(aboutPageData.body[0]).map((image, index) => {
                            if (image?.filename) {
                                return (
                                <SwiperSlide key={index}>
                                    <div
                                    className="celeb"
                                    style={{ backgroundImage: `url(${image.filename})` }}
                                    ></div>
                                </SwiperSlide>
                                );
                            }
                            return null;
                            })}
                        </Swiper>
                    </div>
                <h2>{aboutPageData?.body[0]?.CelebrationName} <br />{aboutPageData?.body[0]?.CelebrationPlace}</h2>
            </div>
                <div className="happy_right">
                    <h1>In Our Happy Hours, We Grow Positivity!</h1>
                    <p>In this fast-paced world, as we race to build our lives, there are those longing for hope, living in the shadows of uncertainty. We dedicate our time to Social Service Organizations and NGOs, illuminating the path to hope and happiness.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About