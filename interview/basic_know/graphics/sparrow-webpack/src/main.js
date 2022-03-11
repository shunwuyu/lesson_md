import { plot } from './plot/index'
console.log(plot)
const data = [
  { genre: "Sports", sold: 275 },
  { genre: "Strategy", sold: 115 },
  { genre: "Action", sold: 120 },
  { genre: "Shooter", sold: 350 },
  { genre: "Other", sold: 150 },
];

const chart = plot({
  data,
  element: "interval",
  encode: [
    { channel: "x", field: "genre" },
    { channel: "y", field: "sold" },
    { channel: "fill", field: "genre" },
  ],
});
console.log(chart, '??????');
document.getElementById("container").appendChild(chart);