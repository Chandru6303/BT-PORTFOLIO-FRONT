import React from "react";
import "./Students.scss"
import Header from "../../Components/Header";
import Footer from "../Footer";
import { Student1,Student2,download } from "../../Assets";

const Students = () =>{
    return(
        <div className="Students">
            <Header/>
            <div className="Students_body">
                <div className="content">
                    <div className="text">
                        <h1>Instant Feedback on Trainings</h1>
                        <br /><br />
                        <p>This innovative approach revolutionizes the way we learn and develop by providing real-time insights and guidance. No more waiting for post-training evaluations or struggling to identify areas that need improvement.</p>
                        <br />
                        <p>Whether you're an individual learner or an organization committed to employee growth, this approach ensures that you are always on the path to success.</p>
                    </div>
                    <img src={Student1} alt="first student" />
                </div>
                <div className="content">
                    <img src={Student2} alt="second student" />
                    <div className="text">
                        <h1>Track sheet</h1>
                        <br /><br />
                        <p>Whether you're an individual learner or an organization committed to employee growth, this approach ensures that you are always on the path to success. This innovative approach revolutionizes the way we learn and develop by providing real-time insights and guidance.</p>
                        <br />
                        <img src={download} alt="download" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Students