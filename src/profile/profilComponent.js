import React from "react";

import PropTypes from "prop-types";

const stylename = {
  margin: " 1%",
  textShadow: " black -4px 7px 45px",
  textAlign: "center",
  color: "White",
};

function profilComponent({ x, children, handleClick }) {
  return (
    <div>
      <h2 onClick={() => handleClick(x.FirstName)}>
        {" "}
        Full Name : {x.LastName}
        {x.FirstName}
      </h2>
      <h3>Bio : {x.bio} </h3>
      <h3>Profession : {x.profession} </h3>
      {children}
    </div>
  );
}

export default profilComponent;
profilComponent.propTypes = {
  LastName: PropTypes.string,
  FirstName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  img: PropTypes.string,
};
