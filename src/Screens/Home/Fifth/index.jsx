import React, { useState } from "react";
import "./Fifth.scss";
import Graph from "../Graph";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import {
  student_1,
  student_2,
  graph_1,
  graph_2,
  pathways,
  Linkedin1,
  Linkedin2,
  Linkedin3,
  Linkedin4,
  Linkedin5,
  Linkedin6,
  Linkedin7,
  Linkedin8,
  Linkedin9,
  Linkedin10,
} from "../../../Assets";

const Fifth = () => {
  const imgs = [
    Linkedin2,
    Linkedin9,
    Linkedin1,
    Linkedin6,
    Linkedin7,
    Linkedin8,
    Linkedin10,
    Linkedin3,
    Linkedin4,
    Linkedin5,
  ];

  const numberOfComponents = 10; // Change this to the desired number of repetitions
  const logoArray1 = [
    "https://www.pngmart.com/files/8/Amazon-PNG-Pic.png",
    "https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-transparent-vector-3.png",
    "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png",
    "https://download.logo.wine/logo/Oracle_Cloud_Platform/Oracle_Cloud_Platform-Logo.wine.png",
    "https://seekvectorlogo.com/wp-content/uploads/2019/11/informatica-vector-logo.png",
    "https://download.logo.wine/logo/Zoho_Corporation/Zoho_Corporation-Logo.wine.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Freshworks-vector-logo.svg/2048px-Freshworks-vector-logo.svg.png",
    "https://1000logos.net/wp-content/uploads/2020/04/Commscope-Logo.png",
    "https://images.hasgeek.com/embed/file/a0baca393d534736b152750c7bde97f1",
    "https://devrev.ai/images/og-image.png",
    "https://arizent.brightspotcdn.com/dims4/default/817e023/2147483647/strip/true/crop/498x210+0+0/resize/840x354!/quality/90/?url=https%3A%2F%2Fsource-media-brightspot.s3.amazonaws.com%2F94%2F11%2F884ef3324e1aba53216aaa32afa9%2Ftiger-analytics.png",
    "https://mms.businesswire.com/media/20200902005342/en/817754/23/Mr._Cooper_logo_thumbnail.jpg",
    "https://download.logo.wine/logo/Robert_Bosch_GmbH/Robert_Bosch_GmbH-Logo.wine.png",
  ];
  const logoArray2 = [
    "https://vtlogo.com/wp-content/uploads/2021/07/temenos-vector-logo.png",
    "https://cionews.co.in/wp-content/uploads/2022/08/Agg-6-7.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1200px-Tata_Consultancy_Services_Logo.svg.png",
    "https://1000logos.net/wp-content/uploads/2021/08/Capgemini-Logo.png",
    "https://w7.pngwing.com/pngs/926/247/png-transparent-wipro-consumer-care-lighting-ltd-job-business-information-technology-business-text-service-people.png",
    "https://download.logo.wine/logo/Athenahealth/Athenahealth-Logo.wine.png",
    "https://dl6pgk4f88hky.cloudfront.net/2021/12/Hexaware-logo.png",
    "https://mma.prnewswire.com/media/660270/Rfpio_logo_green_blue_Logo.jpg?p=facebook",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
    "https://kebs.ai/wp-content/uploads/2023/06/kaar-removebg-preview.png",
    "https://www.grootan.com/static/og-grootan-ba42b86aed1a71bc869263782bd6aaf4.jpg",
    "https://image.pitchbook.com/73svCaCNCSYyKTOq7ZLoGRFq6Cu1567110393061_200x200",
    // "https://signeasy.com/blog/wp-content/uploads/2021/11/Rectangle-blue-logo-1-1024x353.png",
    "https://allvectorlogo.com/img/2016/10/virtusa-logo.png",
  ];
  const components = [];
  for (let i = 0; i < numberOfComponents; i++) {
    components.push(<img src={pathways} alt="path" />);
  }

  return (
    <div className="Fifth">
      <div className="Student">
        <h1>
          Our Commitment Towards Mentorship <br /> Makes Us Unique
        </h1>
        <div className="card_contain">
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            infiniteLoop={true}
            useKeyboardArrows
            autoPlay
            interval={4000}
            transitionTime={500}
          >
            <div className="carousel-slide">
              <img src={imgs[0]} />
              <img src={imgs[1]}/>
            </div>
            <div className="carousel-slide">
              <img src={imgs[2]} />
              <img src={imgs[3]}/>
            </div>
            <div className="carousel-slide">
              <img src={imgs[4]} />
              <img src={imgs[5]}/>
            </div>
            <div className="carousel-slide">
              <img src={imgs[6]} />
              <img src={imgs[7]}/>
            </div>
            <div className="carousel-slide">
              <img src={imgs[8]} />
              <img src={imgs[9]}/>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="Pathways">
        <h1>Our Graduates Pathway To Success</h1>
        <div className="Success_contain">
          <marquee behavior="alternate" direction="right" scrollamount="5">
            {logoArray1.map((elem, index) => (
              <img key={index} src={elem} alt={`Logo ${index}`} />
            ))}
          </marquee>
          <marquee behavior="alternate" direction="left" scrollamount="5">
            {logoArray2.map((elem, index) => (
              <img key={index} src={elem} alt={`Logo ${index}`} />
            ))}
          </marquee>
        </div>
      </div>
      <div className="Placements">
        <h1 style={{ textAlign: "center" }}>
          Full Stack Web Development Using MERN Stack In 15 Days, Students
          Momentous Transformations
        </h1>
        <Graph />
      </div>
    </div>
  );
};

export default Fifth;
