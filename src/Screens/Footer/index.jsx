import React, { useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { IoMailSharp } from "react-icons/io5";
import Axios from "axios";
import "./Footer.scss"
import { whiteLogo, yellowLogo } from "../../Assets";

const Footer = () =>{
    const [user_email,setuser_email] = useState('');
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const res = Axios.post('/forms/getSubscribers',{user_email});
            console.log(res);
            setuser_email('');
        }
        catch(err){
            console.log(err);
        }
    }
    return(
        <div className="Footer">
            <div className="Logo">
            <img src={yellowLogo} alt="logo"/>
            <h1>Better Tomorrow</h1>
            </div>
            <div className="line"></div>
            <div className="Footer_body">
                <ul>
                    <h2>Reach us</h2>
                    <li><LuPhoneCall id="icon"/> &nbsp; +91 9750503595</li>
                    <li><LuPhoneCall id="icon"/>&nbsp; +91 8300287195</li>
                    <li><IoMailSharp id="icon"/>&nbsp; training@thebettertomorrow.in</li>
                </ul>
                <ul>
                    <h2>Company</h2>
                    <li>About</li>
                    <li>Achievements</li>
                    <li>Placement status</li>
                </ul>
                <ul>
                    <h2>Support</h2>
                    <li>Forums</li>
                    <li>JS documentations</li>
                    <li>Quizz</li>
                </ul>
                <ul>
                    <h2>Quick Links</h2>
                    <li>React JS</li>
                    <li>Node JS</li>
                    <li>Javascript</li>
                </ul>
                <div className="join">
                    <h3>JOIN OUR COMMUNITY</h3>
                    <form className="email" onSubmit={handleSubmit}>
                        <input type="user_email" value={user_email} onChange={(e)=>{setuser_email(e.target.value);console.log(user_email)}} placeholder="Your email Address"/>
                        <button type="submit">Subscribe</button>
                    </form>
                    <li>Will send you  job updates  and  our community news</li>
                </div>
            </div>
        </div>
    )
}

export default Footer