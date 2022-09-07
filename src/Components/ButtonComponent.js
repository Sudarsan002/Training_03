import React from "react";
import TextComponent from "./TextComponent";
import { useRouter } from "next/router";
export const ButtonComponent1 = (props) => {
    const { type, marginTop = 90, marginLeft = 90 } = props;
    const Router = useRouter()
    const Next = () => {
        Router.push('/CreateSchedulePage')
    }
    return (
      <div>
        <div>

          <button
          onClick={Next}
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