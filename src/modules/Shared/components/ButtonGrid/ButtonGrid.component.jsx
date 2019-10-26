import React from "react";
import "./ButtonGrid.styles.css";
export function ButtonGrid({value},{handleClick}){
    return (
        <button className="button_grid">
            {value}
        </button>
    );
}