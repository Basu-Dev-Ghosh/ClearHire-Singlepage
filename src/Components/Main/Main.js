import React from "react";
import Card from "../Card/Card";
import "./Main.css";
const Main = () => {
  return (
    <div className="main">
      <div className="main-header">
        <h1>Find from the recommendations</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
          consectetur adipisicing elit.
        </p>
      </div>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div
        className="see-more"
        style={{
          marginTop: "10px",
          marginBottom: "40px",
          width: "300px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#00813b",
        }}
      >
        <h3>See more recommendations</h3>
        <i class="fa-solid fa-arrow-right" style={{ fontSize: "20px" }}></i>
      </div>
    </div>
  );
};

export default Main;
