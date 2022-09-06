import React from "react";
import TextComponent from "./TextComponent";
export const ButtonComponent1 = (props) => {
    const { type, marginTop = 90, marginLeft = 90 } = props;
    return (
      <div>
        <div>
          <button
            type={type}
            style={{
              marginTop,
              marginLeft,
              backgroundColor: "#5375e2",
              borderRadius: "10px",
              borderColor: "white",
            }}
          >
            <div
              style={{ fontSize: "20px", color: "white", padding: "15px 27px" }}
            >
              <TextComponent label="+ Create New" />
            </div>
          </button>
        </div>
      </div>
    );
  };