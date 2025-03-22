import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("avyukt");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleClear = () => {
    setText("");
  };

  const handleonChange = (event) => {
    setText(event.target.value);
  };

  const imageDisplayer = () => {
    return (
      <div align="center">
        <img
          src={`${text.toLowerCase()}.jpg`}
          onError={(e) => {
            e.target.src = "bumblebee.png"; // Set the fallback image
          }}
          alt="Description of the image"
          className="rounded img-thumbnail"
          width="250"
          height="250"
        />
      </div>
    );
  };

  return (
    <>
      <br />
      <br />
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1> {props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleonChange}
        ></textarea>
      </div>
      <div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div>
        <h3>
          <br />
          <p>Stats:</p>
        </h3>
        <p>
          There are {text.split(" ").length} words and {text.length} alphabets.
          This will take {0.008 * text.split(" ").length} minutes to read.
        </p>
      </div>
      <div>
        <h3>
          <p>Preview:</p>
        </h3>
        {imageDisplayer()}
        <br />
        <br />
      </div>
    </>
  );
};

export default TextForm;
