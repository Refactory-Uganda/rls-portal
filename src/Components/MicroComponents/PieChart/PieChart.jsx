import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import UserData from "../../../assets/PieChatDemoData.json";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js";
import PieCss from "./PieChart.module.css"


function PieChart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.name),
    datasets: [
      {
        label: "Name",
        data: UserData.map((data) => data.number),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "yellow",
          "green",
        ],
        hoverOffset: 4,
      },
    ],
  });

  chartjs.register(Tooltip, Legend, ArcElement);


  // Optional configuration options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };

  return (
    <div>
      <div className={PieCss.container}>
        <div className={PieCss.row}>
          <div className={PieCss.col}>
            {" "}
            <Pie data={userData} height={400} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PieChart;
