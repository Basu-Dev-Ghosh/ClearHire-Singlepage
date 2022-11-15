import React from "react";
import "./Card.css";
import Avatar from "react-avatar";
const Card = () => {
  return (
    <div
      className="brand"
      style={{
        width: "500px",
        height: "auto !important",
        padding: "10px",
        paddingBottom: "0px",
        margin: "14px 10px ",
      }}
    >
      <div className="upper" style={{ padding: "10px" }}>
        <Avatar
          src="https://media-exp1.licdn.com/dms/image/D4D03AQEKnG_UkC5pDA/profile-displayphoto-shrink_800_800/0/1667397234732?e=1674086400&v=beta&t=MHly_6-SZwe400klX-pW44JPYPFR0Ov5dTpCPNE7Zr8"
          size="95"
          round={true}
        />
        <div className="lower" style={{ wordSpacing: "0 !important" }}>
          <h2>Basudev Ghosh</h2>
          <p style={{ fontSize: "20px" }}>Web Developer</p>
          <p style={{ opacity: ".4", fontSize: "19px" }}>Do it Agency</p>
        </div>
        <i
          class="fa-regular fa-heart"
          style={{
            alignSelf: "flex-start",
            fontSize: "24px",
            marginLeft: "auto",
            padding: "6px",
            opacity: "0.4",
          }}
        ></i>
      </div>
      <div
        className="middle"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "1px",
          fontFamily: "sans-serif",
        }}
      >
        <div className="skills">
          <p style={{ fontSize: "12px", textAlign: "center" }}>
            Total Exprience
          </p>
          <h2>06 years</h2>
        </div>
        <div className="skills">
          <p style={{ fontSize: "12px", textAlign: "center" }}>
            Current Company
          </p>
          <h2>Amazon</h2>
        </div>
        <div className="skills">
          <p style={{ fontSize: "12px", textAlign: "center" }}>Salary</p>
          <h2>32 L PA</h2>
        </div>
      </div>
      <div
        className="lower"
        style={{
          padding: "0",
          marginTop: "12px",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div className="rating" style={{ flex: "1" }}>
          <i
            class="fa-solid fa-star"
            style={{ color: "#00813b", transform: "rotate(-28deg)" }}
          ></i>
          <i
            class="fa-solid fa-star"
            style={{ color: "#00813b", transform: "rotate(-28deg)" }}
          ></i>
          <i
            class="fa-solid fa-star"
            style={{ color: "#00813b", transform: "rotate(-28deg)" }}
          ></i>
          <i
            class="fa-sharp fa-solid fa-star"
            style={{ opacity: ".3", transform: "rotate(-28deg)" }}
          ></i>
          <i
            class="fa-sharp fa-solid fa-star"
            style={{ opacity: ".3", transform: "rotate(-28deg)" }}
          ></i>
        </div>
        <div className="header-button" style={{ padding: "16px" }}>
          <button style={{ padding: "9px" }}>View</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
