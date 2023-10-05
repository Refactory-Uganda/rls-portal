import  { useState } from "react";
import style from "./PieChart.module.css";
import { Line } from "react-chartjs-2";
import UserData from "../../../assets/PieChatDemoData.json";
import { Chart as ChartJS, CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';



function PieChart() {
  const [userData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Month Of The Year",
        data: UserData.map((data) => data.number),
       
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "yellow",
          "green",
          "red"
        ],
        hoverOffset: 4,
      },
    ],
  });

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


  // Optional configuration options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' ,
        labels: {
          fontSize: 36,
        },
      },
      title: {
        display: true,
        text: 'Newly Registered Students',
        font:{
          size: 30
        },
        color: "#693769",
      },
     
    },
   

  };

  return (
    <>
       
      <div className={style.container}>
        <div className="row">
          <div className="col-9 m-auto h-[300px] p-2">
            <Line data={userData} height={600} options={options} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PieChart;
