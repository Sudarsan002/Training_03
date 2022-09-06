import React from 'react'

export const Dropdown0 = () => {
    return (
      <div>
        <select
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            padding: " 8px 16px",
            gap: "30px",
            width: "54px",
            height: "56px",
            background: "#FFFFFF",
            border: "1px solid #E8E8EA",
            order: "1",
            flexGrow: "0",
            borderRadius:"5px",
            height: "56px",
            marginRight: "20px",
            opacity: "0.5",
            
          }}
         
        >
         <option>AM</option>
         <option>PM</option>
        </select>
      </div>
    );
  };
  
