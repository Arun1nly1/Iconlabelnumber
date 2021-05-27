import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

const data = [
  {
    icon: "👍",
    label: "Likes",
    number: 25
  },
  {
    icon: "🐇",
    label: "comment",
    number: 100
  },
  {
    icon: "❤️",
    label: "love",
    number: 200
  },
  {
    icon: "🥰",
    label: "Care",
    number: 256
  },
  {
    icon: "🏆",
    label: "Trophy",
    number: 354
  }
];

// Create child Statcard component here
function StatCard({ icon, label, number }) {
  return (
    <div className="stat-card">
      <div className="stat-line">
        <span>{icon}</span>
        <span>{label}</span>
      </div>
      <p>{number}</p>
    </div>
  );
}

function App() {
  const cardsToRender = data.map(({ icon, label, number }, index) => (
    <StatCard key={index} icon={icon} label={label} number={number} />
  ));
  return (
    <div className="App">
      <h2>Use components and props in React</h2>
      {/* Use child component x4 here */}
      {cardsToRender}

      <ScotchInfoBar seriesNumber={4} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
