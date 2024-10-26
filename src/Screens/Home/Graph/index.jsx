import React, { useState } from "react";
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";
import { Data1,Data2 } from "../Data";
import "./Graph.scss"
import {Chart as ChartJS} from "chart.js/auto"

const Graph = () =>{
    
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        grid: {
          // display: false,
          color: 'rgba(217,143,7,0.1)',
        },
      },
    },
}

    const [firstData, setFirstData] = useState({
        labels: Data1.map((data) => data.skill),
        datasets: [
          {
            label: "Yet to learn",
            data: Data1.map((data) => data.yet),
            backgroundColor:"rgb(61, 61, 192)",
            borderColor: "black",
            borderWidth: 2,
          },
          {
            label:"Basics",
            data: Data1.map((data) => data.basics),
            backgroundColor:"rgb(221, 102, 59)",
            borderColor: "black",
            borderWidth: 2,
          },
          {
            label:"Intermediate",
            data: Data1.map((data) => data.Intermediate),
            backgroundColor: "rgb(255, 176, 72)",
            borderColor: "black",
            borderWidth: 2,
          },
          {
            label:"Good",
            data: Data1.map((data) => data.Good),
            backgroundColor: "rgb(80, 211, 80)",
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
      const [secondData, setSecondData] = useState({
        labels: Data2.map((data) => data.skill),
        datasets: [
          {
            label: "Yet to learn",
            data: Data2.map((data) => data.yet),
            backgroundColor:"rgb(61, 61, 192)",
            borderColor: "black",
            borderWidth: 2,
          },
          {
            label:"Basics",
            data: Data2.map((data) => data.basics),
            backgroundColor:"rgb(221, 102, 59)",
            borderColor: "black",
            borderWidth: 2,
          },
          {
            label:"Intermediate",
            data: Data2.map((data) => data.Intermediate),
            backgroundColor: "rgb(255, 176, 72)",
            borderColor: "black",
            borderWidth: 2,
          },
          {
            label:"Good",
            data: Data2.map((data) => data.Good),
            backgroundColor: "rgb(80, 211, 80)",
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
    return(
        <div className="Graph">
            <div className="GraphPortion">
                <h1>Before Session</h1>
                <Bar data={firstData} options={options}/>
            </div>
            <div className="GraphPortion">
                <h1>After Session</h1>
                <Bar data={secondData} options={options}/>
            </div>
        </div>
    )
}

export default Graph