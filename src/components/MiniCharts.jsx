import React from "react";
import PropTypes from "prop-types";
import {
  Line,
  Polar,
} from "react-chartjs-2";
import colors from "../constants/colors";


export const barData = (data) => ({
  datasets: [],
});

export const polarDataItem = (data, color = colors.blue) => ({
  data,
  label: color,
  backgroundColor: [
    colors.orange,
    colors.blue,
    colors.purple,
  ],
  borderColor: colors.black,
  hoverBackgroundColor: [
    colors.orange,
    colors.blue,
    colors.purple,
  ],

});

export const polarData = (data) => ({
  labels: [],
  datasets: [
    polarDataItem(data),
  ],
});


const lineDataPoint = (data, color = colors.blue, i = 0) => ({
  label: color,
  lineTension: 0.4,
  backgroundColor: color,
  borderColor: color,
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: "miter",
  pointBorderColor: color,
  pointRadius: 1,
  pointStyle: "square",
  pointHitRadius: 0,
  animation: { duration: (250 + (250 * i)), },
  fill: false,
  padding: {
    left: 10,
    right: 10,
  },
  data,
});

export const lineData = (
  data,
  labels = Array(data[0].length).fill(""),
) => ({
  labels,
  datasets: [
    lineDataPoint(data[0], colors.blue),
    lineDataPoint(data[1], colors.orange, 1),
    lineDataPoint(data[2], colors.purple, 2),
  ],
});

const options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    enabled: false,
  },
  scales: {
    xAxes: [{
      display: false,

    }],
    yAxes: [{
      display: false,
      ticks: {
        suggestedMin: -1,
        suggestedMax: 12,
      }
    }],
  },
  animation: {
    easing: "easeInOutCubic",
    duration: 300,
  }
};

export const MiniLine = ({ data, key }) => <Line key={key} data={data} options={{
  ...options,
}} />;
MiniLine.propTypes = { data: PropTypes.object, chartKey: PropTypes.string };
MiniLine.defaultProps = { data: lineData([5, 10, 55, 30, 40, 90, 26, 50]) };

export const MiniBars = () => <div>bars</div>
MiniBars.propTypes = { data: PropTypes.object, chartKey: PropTypes.string };
MiniBars.defaultProps = { data: barData([10, 55, 30, 40, 90, 26, 50]) };

export const MiniPolar = ({ data, key }) => <Polar key={key} data={data} options={{
  ...options,
  scale: { display: false, },
}} />
MiniPolar.propTypes = { data: PropTypes.object, chartKey: PropTypes.string };
MiniPolar.defaultProps = { data: polarData([5,2,3]) };

export default {};
