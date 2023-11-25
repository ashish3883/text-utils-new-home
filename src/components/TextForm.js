import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleUpperCase = () => {
    if(text.length>0){
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Upper Case", "success")
    }
    else{
    props.showAlert("Empty text box", "error")
    }
  };
  const handleLowerCase = () => {
    if(text.length>0){
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lower Case", "success")
    }
    else{
      props.showAlert("Empty text box", "error")
      }
  };
  const handleCopy = () => {
    if(text.length>0){
      let newText = document.getElementById("myBox");
      newText.select();
      navigator.clipboard.writeText(newText.value);
      props.showAlert("Text Coppied", "success")
      document.getSelection().removeAllRanges()
    }
    else{
      props.showAlert("Empty text box", "error")
      }
  };
  const removeExtraSpaces = () => {
    if(text.length>0){
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed", "success")
    }
    else{
      props.showAlert("Empty text box", "error")
      }
  };

  const [text, setText] = useState("");
  return (
    <>
      <div style={{color:props.mode==='light'?"black":"white"}}>
        <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="myBox"
              rows="9"
              value={text}
              onChange={handleOnChange}
              placeholder="Enter Your Text Here"
              style={{backgroundColor:props.mode==='light'?"white":"darkGray", color:props.mode==='light'?"black":"white"}}
            ></textarea>
          </div>
          <button
            type="button"
            className={`btn btn-${props.mode==='light'?"primary":"secondary"} mx-1 my-1`}
            onClick={handleUpperCase}
            disabled={text.length===0}
          >
            To Upper Case
          </button>
          <button
            type="button"
            className={`btn btn-${props.mode==='light'?"primary":"secondary"} mx-1 my-1`}
            onClick={handleLowerCase}
            disabled={text.length===0}
          >
            To Lower Case
          </button>
          <button
            type="button"
            className={`btn btn-${props.mode==='light'?"primary":"secondary"} mx-1 my-1`}
            onClick={() => {
              setText("");
            }}
            disabled={text.length===0}
          >
            Clear Text
          </button>
          <button
            type="button"
            className={`btn btn-${props.mode==='light'?"primary":"secondary"} mx-1 my-1`}
            onClick={handleCopy}
            disabled={text.length===0}
            document
          >
            Copy Text
          </button>
          <button
            type="button"
            className={`btn btn-${props.mode==='light'?"primary":"secondary"} mx-1 my-1`}
            onClick={removeExtraSpaces}
            disabled={text.length===0}
          >
            Remove Extra Spaces
          </button>
        </div>
        <div className="container">
          <h1>Your Text Summary</h1>
          <p>
            {text.split(/\s+/).filter((el)=>{return el.length!==0}).length} Words & {text.length} Charecters
          </p>
          <p>{0.008 * text.split(" ").filter((el)=>{return el.length!==0}).length} Minutes to read</p>
          <h3>Preview</h3>
          <p>{text.length>0?text:"Write in textbox to preview it"}</p>
        </div>
      </div>
    </>
  );
}
