import React, { useState, useEffect, useRef } from "react";
import Header from "../../Components/Header";
import "./Home.scss"
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Footer from "../Footer";
import { StoryblokComponent, useStoryblok } from '@storyblok/react';
import StoryblokClient from 'storyblok-js-client';


const Storyblok = new StoryblokClient({
    accessToken: '1ShO5nbldrfr0ntgQNQhaQtt',
}); 

const Home = () => {
    const [homePageData, setHomePageData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Storyblok.get('cdn/stories/HomePage', {
            version: 'published'
        })
        .then(response => {
            setHomePageData(response.data.story.content);
            
            setLoading(false);
        })
        .catch(error => {
            console.error("Error fetching Storyblok content", error);
            setLoading(false);
        });
    }, []);

    // console.log(homePageData?.body[3].Linkedin);
    
    return (
        <div className="Home">
            <Header />
            {!loading && homePageData ? (
                <First data={homePageData?.body[0]?.HomeAchievements} />
                
            ) : (
                <div>Loading...</div>
            )}
            <Second />
            {!loading && homePageData ? (
                <Third data={homePageData?.body[1]} />
                
            ) : (
                <div>Loading...</div>
            )}
            {!loading && homePageData ? (
                <Fourth data={homePageData?.body[2]} />
                
            ) : (
                <div>Loading...</div>
            )}
            {!loading && homePageData ? (
                <Fifth data={homePageData?.body[3]} />
                
            ) : (
                <div>Loading...</div>
            )}
            <Footer />
        </div>
    );
};  


export default Home