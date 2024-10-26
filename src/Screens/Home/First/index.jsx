import React from "react";
import "./First.scss";
import { illustration } from "../../../Assets";
import { useSpring, animated } from "react-spring";

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 }
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const First = (props) => {
    const achievements = props.data[0];
    return (
        <div className="First">
            <div className="GetStarted">
                <div className="Content">
                    <h1>
                        Education is not the learning <br /> of facts, but the training <br /> of the mind to think
                    </h1>
                    <p>
                        Empowering independent learning fueled by senior developers from leading MNCs. Instead of bringing
                        our presentations we provide problem statements, foster a comfortable environment, and track
                        individual progress for optimal growth.
                    </p>
                    <button>Get Started &gt; </button>
                </div>
                <div className="illustration">
                    <img src={illustration} alt="pic" />
                </div>
            </div>
            <div className="Empowering">
                <h1>Catalysing Your Path to Success</h1>
                <div className="success">
                    <div className="field">
                        <h1>{achievements?.AveragePackage || 0}&nbsp; LPA</h1>
                        <p>Average Dream Job CTC</p>
                    </div>
                    <div className="line"></div>
                    <div className="field"> 
                        <h1>{achievements?.productOffers || 0} +</h1>
                        <p>Product Offers</p>
                    </div>
                    <div className="line"></div>
                    <div className="field">
                        <h1>{achievements?.jobOppurtunities || 0}k+</h1>
                        <p>Job Opportunities</p>
                    </div>
                    <div className="line"></div>
                    <div className="field">
                        <h1>{achievements?.hoghestPackage || 0}&nbsp;LPA</h1>
                        <p>Highest Package</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default First;
