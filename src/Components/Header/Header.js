import React from "react";
import "./Header.css";
import Avatar from "react-avatar";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <h1>
            clear<span>hire</span>{" "}
          </h1>
        </div>
        <div className="header-search">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Employee Name or Company" />
        </div>
        <div className="header-dropdown">
          <select>
            <option value="" disabled selected hidden>
              Designation
            </option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <select>
            <option value="" disabled selected hidden>
              Location
            </option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div className="header-button">
          <button>Search</button>
        </div>
        <div className="header-avatar">
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/D4D03AQEKnG_UkC5pDA/profile-displayphoto-shrink_800_800/0/1667397234732?e=1674086400&v=beta&t=MHly_6-SZwe400klX-pW44JPYPFR0Ov5dTpCPNE7Zr8"
            size="50"
            round={true}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
