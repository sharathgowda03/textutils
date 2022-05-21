import React, {useState} from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // text = "new text";// wrong way to change state=
  // setText("new text");// right way to change state

  const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text was converted to Uppercase", "success");
  }

  const handleLoClick = () =>{
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text was converted to Lowercase", "success");
  }

  const handleOnChange = (e)=>{
    // console.log("onChange was clicked")
    setText(e.target.value)
  }

  const handleCopy = () =>{
    // console.log("Copy was clicked")
    let text = document.getElementById("myBox");
    text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text was copied to clipboard", "success");
  }

  const handleClear = () =>{
    // console.log("Clear was clicked")
    //clear the text box
    setText("");
    props.showAlert("Text was cleared", "warning");
  }

  return (
    <>
      <div className="container" style={{color:props.mode === "dark" ? "white" : "black"}}>
     <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control mb-3" id="myBox"rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === "dark" ? "grey" : "white", color:props.mode === "dark" ? "white" : "black"}}></textarea>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
      </div>
    </div>
    <div className="container"  style={{color:props.mode === "dark" ? "white" : "black"}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text: "Enter Something in the textarea above to preview it here"}</p>
    </div>
    </>
    
  );
}
