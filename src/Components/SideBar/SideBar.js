import React from "react";
import "./SideBar.css";
import Avatar from "react-avatar";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="brand">
        <div className="upper">
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/D4D03AQEKnG_UkC5pDA/profile-displayphoto-shrink_800_800/0/1667397234732?e=1674086400&v=beta&t=MHly_6-SZwe400klX-pW44JPYPFR0Ov5dTpCPNE7Zr8"
            size="100"
            round={true}
          />
          <div className="companies">
            <p>No of Companies</p>
            <p>54</p>
          </div>
        </div>
        <div className="lower">
          <h2>Brand Moustache</h2>
          <p>Since 2013</p>
          <a href="https://www.brandmoustache.com">
            www.brandmoustache.com{" "}
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
      <div className="employee">
        <div className="upload">
          <i class="fa-solid fa-user-plus"></i>
          <p>Upload Employee</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
