import  { useState } from "react";
import { Pie } from "react-chartjs-2";
import UserData from "../../../assets/PieChatDemoData.json";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js";



function PieChart() {
  const [userData] = useState({
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
    <>
       
      <div className="container">
        <div className="row">
          <div className="col-9 m-auto h-[300px] p-2">
            <Pie data={userData} height={400} options={options} />
          </div>
          <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 m-auto ">
          <label htmlFor="" className={PieCss.PieHeading}>NOTIFICATION</label>
        </div>
        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 m-auto mt-2 " id={PieCss.NotificationMessage}>
     
          <p>Hi Joanitah the attempt to send information to the database was successful</p>
        </div>
        </div>
      </div>
    </>
  );
}

export default PieChart;
