import React, { useState, useEffect, useRef } from "react";
import Header from "../../Components/Header";
import Footer from "../Footer";
// import { second, third } from "./data";
import { ProgramIllustration } from "../../Assets";
import Axios from "axios";
import "./Program.scss";
import { StoryblokComponent, useStoryblok } from '@storyblok/react';
import StoryblokClient from 'storyblok-js-client';
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Storyblok = new StoryblokClient({
  accessToken: 'mJACtD2mFUStOh1WQugdcAtt',
}); 

const Program = () => {
  const [formData, setFormData] = useState({
    name: "",
    college_name: "",
    mail_id: "",
    phone_number: "",
    year_of_studies: "",
    course_name: "",
    course_duration: "",
    time_slot: "",
  });
  const [onlineRegistration, setOnlineRegistrationPage] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    Storyblok.get('cdn/stories/Program', {
        version: 'published'
    })
    .then(response => {
      setOnlineRegistrationPage(response.data.story.content);
        
        setLoading(false);
    })
    .catch(error => {
        console.error("Error fetching storyblok content", error);
        setLoading(false);
    });
}, []);

  // console.log(onlineRegistration?.body[1]);


  let second = [];
  let third = []
  if(onlineRegistration?.body[0]?.item1) {
      for(let item of onlineRegistration?.body[0]?.item1) {
        second.push(item);
      }
  }

  if(onlineRegistration?.body[1]?.item1) {
    for(let item of onlineRegistration?.body[1]?.item1) {
      third.push(item);
    }
  }
  
  


  const [pop, setPop] = useState(false);
  const modalRef = useRef();

  // Handling changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  // Handling form reset
  const handleFormReset = () => {
    setFormData({
      name: "",
      college_name: "",
      mail_id: "",
      phone_number: "",
      year_of_studies: "",
      course_name: "",
      course_duration: "",
      time_slot: "",
    });
    setPop(false);
  };

  // Handling submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(
        "https://thebettertomorrow.in/register-course",
        formData
      );
      console.log("Form submitted:", formData);
      handleFormReset();
    } catch (err) {
      console.log(err);
    }
  };

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setPop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (loading) {
    return  <div className="spinner-container">
              <Spinner animation="border" role="status" >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
            }
  return (
    <div className="Program">
      <Header />
      <div className="top_div">
        <div className="top_left">
          <h2>Expert Guidance From Start To Summit</h2>
          <p>
            Designed and taught by Industrial Experts to help you transform Your
            Career into Dream-Job Reality.
          </p>
          <h5>
            Navigate Your Career Journey <br />
            <br />
            <br />
            <br /> Steering Your Journey Till Your <br /> Desired Destination
          </h5>
        </div>
        <div className="top_right">
          <img src={ProgramIllustration} alt="Program Illustration" />
        </div>
      </div>
      <div className="Program_sec">
        {second.map((elem, index) => (
          <div
            key={index}
            className="Program_box"
            style={{ background: elem.color }}
          >
            <img src={elem?.img?.filename || elem?.img} alt="Project" />
            <p>{elem.data}</p>
          </div>
        ))}
      </div>
      <div className="Program_third">
        <h1 className="head1">Algo And Problem Solving Expertise</h1>
        <div className="Program_third_section">
          {third
            .filter((elem) => elem.topic === "Alog")
            .map((item, index) => (
              <div
                key={index}
                className="Program_Card"
                onClick={() => {
                  setPop(true);
                  setFormData({
                    ...formData,
                    course_name: item.data,
                  });
                  console.log(formData);
                }}
              >
                <img src={item?.img?.filename || item?.img} alt="Project" />
                <h2>{item.data}</h2>
                <div className="line"></div>
                <p>{item.tech}</p>
              </div>
            ))}
        </div>
        <h1 className="head2">Domain Expertise</h1>
        <div className="Program_third_section">
          {third
            .filter((elem) => elem.topic === "Domain")
            .map((item, index) => (
              <div
                key={index}
                className="Program_Card"
                onClick={() => {
                  setPop(true);
                  setFormData({
                    ...formData,
                    course_name: item.data,
                  });
                }}
              >
                <img src={item?.img?.filename || item?.img} alt="Project" />
                <h2>{item.data}</h2>
                <div className="line"></div>
                <p>{item.tech}</p>
              </div>
            ))}
        </div>
      </div>
      {pop && (
        <div className="form_cover">
          <div className="modal-overlay">
            <div className="modal-content" ref={modalRef}>
              <h2 className="modal-title">Register for the Course</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="college_name">College Name</label>
                  <input
                    required
                    type="text"
                    id="college_name"
                    name="college_name"
                    onChange={handleChange}
                    value={formData.college_name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mail_id">Mail</label>
                  <input
                    required
                    type="email"
                    id="mail_id"
                    name="mail_id"
                    onChange={handleChange}
                    value={formData.mail_id}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone_number">Phone</label>
                  <input
                    required
                    type="number"
                    id="phone_number"
                    name="phone_number"
                    onChange={handleChange}
                    value={formData.phone_number}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="year_of_studies">Year of Studies</label>
                  <input
                    required
                    type="number"
                    id="year_of_studies"
                    name="year_of_studies"
                    onChange={handleChange}
                    value={formData.year_of_studies}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="course_duration">Course Duration</label>
                  <select
                    required
                    name="course_duration"
                    onChange={handleChange}
                    value={formData.course_duration}
                    id="course_duration"
                  >
                    <option value="">Select Duration</option>
                    <option value="Fastrack course">
                      Fastrack course (1 month)
                    </option>
                    <option value="Deep dive">Deep Dive (3 months)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="time_slot">Time Slot</label>
                  <input
                    required
                    type="text"
                    id="time_slot"
                    name="time_slot"
                    onChange={handleChange}
                    value={formData.time_slot}
                  />
                </div>
                <div className="form-actions">
                  <button
                    type="reset"
                    onClick={handleFormReset}
                    className="btn-cancel"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Program;
