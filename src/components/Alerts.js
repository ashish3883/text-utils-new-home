import React from "react";

function Alerts(props) {
    const capitalize = (word)=>{
        const str = word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
  return (
    <div style={{height:"50px"}}>
    {props.alert && <div>
      <div className={`alert alert-${props.alert.type==="error"?"danger":"success"} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}!</strong> : {props.alert.msg}
      </div>
    </div>}
    </div>
  );
}

export default Alerts;
