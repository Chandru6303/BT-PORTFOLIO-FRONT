import React, { useState, useEffect } from "react";
import Header from '../../Components/Header';
import { AboutIllustration, PlacementGraph, Bubble_bg } from "../../Assets";
import PlaceCard from "./PlaceCard";
import Footer from "../Footer";
import "./Placement.scss";
import { StoryblokComponent, useStoryblok } from '@storyblok/react';
import StoryblokClient from 'storyblok-js-client';
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Storyblok = new StoryblokClient({
    accessToken: '5fjg1xYouB9hBUjQrEOE0Qtt',
});

const Placement = () => {
    const [placementData, setPlacementData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Storyblok.get('cdn/stories/Placement', {
            version: 'published'
        })
        .then(response => {
            setPlacementData(response.data.story.content);
            setLoading(false);
        })
        .catch(error => {
            console.error("Error fetching storyblok content", error);
            setLoading(false);
        });
    }, []);

    let data = [];
    let genReview = [];
    if(placementData?.body[0]?.Review1) {
        for(let item of placementData.body[0].Review1) {
            data.push(item);
        }
    }
    if(placementData?.body[1]?.Review1){
        for(let item of placementData.body[1].Review1) {
            genReview.push(item);
        }
    }
    if (loading) {
        return  <div className="spinner-container">
                  <Spinner animation="border" role="status" >
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
                }

    return (
        <div className="Placement">
            <div className="Head_wrap">
                <Header />
            </div>  
            <div className="Placement_banner" style={{ backgroundImage: `url(${Bubble_bg})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundAttachment: "fixed" }}>
                <div className="banner_left">
                    <h1>Fostering a <br /> Better Tomorrow <br /> through the power of learning in action</h1>
                </div>
                <div className="banner_right">
                    <div className="bubble first">
                        <p>
                            <span>{placementData.StudentPlaced}</span> <br />Student Placed
                        </p>
                    </div>
                    <div className="bubble sec">    
                        <p><span>{placementData.HighestPackage} LPA</span> <br />Highest Package</p>
                    </div>
                    <div className="bubble third">
                        <p><span>{placementData.HiringCompanies}</span> <br />Hiring Companies</p>
                    </div>
                    <div className="bubble four">
                        <p><span>{placementData.ProductOffers}</span> <br />Product Offers</p>
                    </div>
                </div>
            </div>
            <h1>Our top 100+ Hiring Companies, <br />Where you can find a high-paying jobs</h1>
            <img src={PlacementGraph} alt="graph" />
            <h1>Real Stories, Real Results: <br />Our Students Success Stories</h1>
            <div className="PlaceCard_container">
                {
                    (data).map((item)=>
                        <PlaceCard item={item}/>
                    )
                }
            </div>
            <h1>What student says about our training</h1>
            <p>{placementData.BetterTomorrowMission}</p>
            <div className="training">
                {genReview.map((item, index) => (
                    <div key={index} className="training_box" style={{ backgroundColor: item.color }}>
                        {item.review}
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Placement;