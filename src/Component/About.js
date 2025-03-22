import React, { useState } from "react";

const About = () => {
  const [style, setstyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const buttonStyle = {
    color: "white",
    backgroundColor: "#008080",
    border: "2px solid black",
  };

  const [ButtonText, setButtonText] = useState("Enable Dark Mode");

  const handleClickMode = () => {
    if (style.color === "black") {
      setstyle({
        color: "white",
        backgroundColor: "#333333",
        border: "1px solid white",
      });
      setButtonText("Enable Light Mode");
    } else {
      setstyle({
        color: "black",
        backgroundColor: "white",
      });

      setButtonText("Enable Dark Mode");
    }
  };

  return (
    <div className="container">
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={style}>
        <div className="accordion-item" style={style}>
          <h2 className="accordion-header" style={style}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={buttonStyle}
            >
              <h5>Omkar Mapuskar - Family Head.</h5>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <img
                src="om.jpg"
                alt="Description of the image"
                className="rounded img-thumbnail"
                width="100"
                height="100"
              />
              <strong> I am the Family Head. Just for namesake </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={style}>
          <h2 className="accordion-header" style={style}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={buttonStyle}
            >
              <h5>Amrutha Narayanan - The Wife.</h5>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <img
                src="amu.jpg"
                alt="Description of the image"
                className="rounded img-thumbnail"
                width="100"
                height="100"
              />
              <strong> I am the cutest one , well "was". </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={style}>
          <h2 className="accordion-header" style={style}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={buttonStyle}
            >
              <h5>Avyukt Mapuskar - aka Golu.</h5>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <img
                src="avu.jpg"
                alt="Description of the image"
                className="rounded img-thumbnail"
                width="100"
                height="100"
              />
              <strong> I am the real cutest one. I run the show.</strong>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <button className="btn btn-primary mx-1" onClick={handleClickMode}>
          {ButtonText}
        </button>
      </div>
    </div>
  );
};

export default About;
