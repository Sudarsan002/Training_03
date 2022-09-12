import React from "react";

export const Textcomp = ({Comp = "span",cssStyles,value,onclick})=>{
    return (

        <Comp style = {cssStyles} onClick = {onclick}>

            {value}
        </Comp>
    );
}