import React from "react";
import { internship,scrum,customer } from "../../../Assets";
import "./Second.scss"

const Second = () =>{
    const datas = [
        {
            img:scrum,
            heading:'Adaptive Training',
            content:`Rather than imposing a fixed syllabus, we tailor our approach to each student's unique learning journey. Our proprietary tool conducts daily assessments and generates progress charts, providing you with detailed statistical reports and live tracking of each student's results`
        },
        {
            img:customer,
            heading:"Curve Technique",
            content:'Our teaching methodology departs from traditional lecturing. We integrate engaging activities and hands-on practical sessions to enhance comprehension. Encouraging students to think critically and engage in open dialogue, we create an environment for the exchange of ideas and insights'
        },
        {
            img:internship,
            heading:'Developers - Mentors',
            content:'Our in-house trainers are seasoned industry experts who have excelled in interviews with their vast expertise. At Better Tomorrow, our product engineers have meticulously crafted an immersive training plan, backed by an extensive repository of interview questions'
        }
    ]
    return(
        <div className="Second">
            <div className="AllRound">
                <h1>
                Blaze A Trail On Our Pathway To <br /> Turbocharge Your Tech Career!             
                </h1>   
                <p>At Better Tomorrow, we immerse budding talents in live industrial projects and real-world problem-solving. We fortify their confidence with a solid foundation in industry essentials. Our commitment drives us, and our unwavering pillars include:</p>
            </div>
            <div className="service">
                {
                    datas.map((elem)=>
                        <div className="service_box">
                            <img src={elem.img} alt="img" />
                            <h1>{elem.heading}</h1>
                            <p>{elem.content}</p>
                        </div>
                    )
                }
            </div>
            <div className="immersive">
                <h1>
                Extensive Programs From Domain Experts <br /> That Meets Industry Expectations                </h1>
            </div>
        </div>
    )
}

export default Second