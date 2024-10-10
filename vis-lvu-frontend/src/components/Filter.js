import { useState } from "react";
import { PlainFilterBar } from "./index";
import "./Filter.css";
export const Filter = () => {
  const prompt ="Select the properties";
  return (
    <>
        <div className="row-12 button-group">
            <span className="top-button">Browse</span><span className="top-button">Stats</span>
        </div>
        <div>
            <PlainFilterBar prompt={prompt}/>
        </div>   
    </>
  )
}
