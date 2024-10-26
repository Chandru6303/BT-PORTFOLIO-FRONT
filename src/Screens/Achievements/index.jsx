    import React, { useState, useEffect } from "react";
    import Header from '../../Components/Header'
    import Footer from "../Footer";
    import { AchievementsIllustration } from "../../Assets";
    import { Achievement,achievebg } from "../../Assets";
    import "./Achievements.scss"
    import Box from "./Box";
    import { StoryblokComponent, useStoryblok } from '@storyblok/react';
    import StoryblokClient from 'storyblok-js-client';
    import { Spinner } from "react-bootstrap";
    import "bootstrap/dist/css/bootstrap.min.css";

    const Storyblok = new StoryblokClient({
        accessToken: 'h0OTdYETGJSGyE4c0ZGQlwtt',
    });

    const Achievements = () =>{

        const [achievementsPageData, setAchievementsPage] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            Storyblok.get('cdn/stories/Achievements', {
                version: 'published'
            })
            .then(response => {
                setAchievementsPage(response.data.story.content);
                // console.log(response.data.story.content.body[0]);
                
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching storyblok content", error);
                setLoading(false);
            });
        }, []);
        
        const datas = [
        ]

        if (achievementsPageData?.body[0]?.AcheivementData1) {
            for(let i in achievementsPageData.body[0].AcheivementData1) {
                datas.push(achievementsPageData.body[0].AcheivementData1[i]);
            }
        }

        if (loading) {
            return  <div className="spinner-container">
                      <Spinner animation="border" role="status" >
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </div>
                    }
                    
        return(
            <div className="Achievements" style={{background:achievebg}}>
            <div className="Head_wrap">
                    <Header/>
                </div>
                <div className="Achieve">
                    <div className="image">
                    <img src={Achievement} alt="Achievement" />
                    <div className="AchieveContent">
                        <h1>Achievements</h1>
                        <p>Take a look at what are all the achievements our students have done </p>
                        <h2>Learn More</h2>
                    </div>
                    </div>
                </div>
                {
                    datas.map((elem)=>
                        <Box data={elem}/>
                    )
                }
                <Footer/>
            </div>
        )
    }


    export default Achievements