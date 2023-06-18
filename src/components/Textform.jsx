import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text coverted to Upper Case", "Success");
  };
  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text coverted to Lower Case", "Success");
  };
  const handleClearClick = () => {
    const newText = " ";
    setText(newText);
    props.showAlert("Text Cleared!", "Success")
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to Clipboard", "Success")
  };
  
  return (
    <>
      <div className="container" style={{color: props.mode === "dark"?"white":"black"}}>
        <h1 className="my-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === "dark"?"#496f8f":"white", color: props.mode === "dark"?"white":"black"}}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert Text to UpperCase
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert Text to LowerCase
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear text
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container" style={{color: props.mode === "dark"?"white":"black"}}>
        <h1>Text Summary</h1>
        <p>
          There are {text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length}{" "}
          characters
        </p>
        <p>
          {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes read
        </p>
        <h2>
          Text Preview
        </h2>
        <p>
          {text.length>0?text:"Enter something in the textarea to previw it"}
        </p>
      </div>
    </>
  );
}
