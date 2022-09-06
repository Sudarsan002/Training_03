import React from "react";
export const CheckBox = ({ style={
    marginLeft: "20%",
    marginTop: "19px",
  }}) => {
    return (
      <div
       style={{style}}
      >
        <input type="checkbox" name="FN" value="FN" />
      </div>
    );
  };