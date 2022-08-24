
import React from "react";

import Signup from "./Signup";
import Timer from "./Timer";
import topstyle from "./TopHome.module.css"
const TopHomepage1 = () => {
  return (
   <div className={topstyle.tophomewrapper}>
    {/* <div className={topstyle.title}> <h1>
        Time tracking for{" "}
        <span style={{ color: "rgb(229, 124, 216)" }}>
          <i>better</i>
        </span>{" "}
        work,
        <br /> not overwork.
      </h1></div>
    
    
      <div className={topstyle.signhome}>
       
    
       <Signup />
       </div>  */}
       <div className={topstyle.timer}><Timer/></div>
          
       
       </div>
  );
};

export default TopHomepage1;
