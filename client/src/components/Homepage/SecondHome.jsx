import React from "react";
import homestyle from "./Homepage.module.css";
import {  ChevronRightIcon } from "@chakra-ui/icons";

const SecondHome = () => {
  return (
    <div>
      <div className={homestyle.top_div_sec_homepage}>
        {" "}
        <h1>
          Toggl Track saves you{" "}
          <i style={{ color: "rgb(229, 124, 216)" }}>
            time and <br />
            money
          </i>
          , no matter how you use it.
        </h1>
      </div>

      <div className={homestyle.main_div_secondhomepage}>
        <div className={homestyle.second_divhome}>
          <p className={homestyle.p1_h_para}>BILLING AND INVOICING</p>
          <h1 className={homestyle.h1_h_heading}>
            Do you <i>sell your time?</i>
            <br />
            We'll help you get the <br />
            numbers right. Every time.
          </h1>
          <div>
            <button className={homestyle.btnsecondHome}>Learn more</button>
            <img
              className={homestyle.imgsechomepage1}
              src="https://public-assets.toggl.com/b/static/97ac29cd39b328b13d2e4d1654a5756a/306ab/feature-billing.avif"
              alt=""
            />
          </div>
          <h2
            style={{ textAlign: "justify", padding: "30px", fontSize: "large" }}
          >
            <b>
              "We saved $18,000 by identifying missing billable hours, thanks to
              Toggl Track"
            </b>
          </h2>
          <p className={homestyle.sechome_last_para}>
            — Platinum Companies, Operations Consulting
          </p>
        </div>

        <div className={homestyle.second_divhome2}>
          <p className={homestyle.p1_h_para}>EMPLOYEE TIME TRACKING</p>
          <h1 className={homestyle.h1_h_heading}>
            Improve team productivity
            <br />
            and <i>happiness</i> without the <br />
            micromanagement.
          </h1>
          <div>
            <button className={homestyle.btnsecondHome}>Learn more</button>
            <img
              className={homestyle.imgsechomepage2}
              src="https://public-assets.toggl.com/b/static/97ac29cd39b328b13d2e4d1654a5756a/306ab/feature-billing.avif"
              alt=""
            />
          </div>
          <h2
            style={{ textAlign: "justify", padding: "30px", fontSize: "large" }}
          >
            <b>
              "We had a 100% adoption rate. Toggl Track was wholeheartedly
              accepted by everyone."
            </b>
          </h2>
          <p className={homestyle.sechome_last_para}>— Newlogic, Software Consulting</p>
        </div>
      </div>

      {/* employee time tracking small box div start from here */}

      <div className={homestyle.small_div_homepage}>
        <div className={homestyle.small_div1_hp}>
          <p className={homestyle.sp1_h_para}>EMPLOYEE TIME TRACKING</p>
          <h1 className={homestyle.head_text_small_div}>
            No more anxiety over late deadlines and unprofitable projects. Plan
            and set budgets with confidence!
          </h1>
          <div className={homestyle.small_div_learnmore}>
            <p>
              Learn more <ChevronRightIcon />
            </p>
          </div>
        </div>
        <div className={homestyle.small_div2_hp}>
          <p className={homestyle.sp1_h_para}>EMPLOYEE TIME TRACKING</p>
          <h1 className={homestyle.head_text_small_div}>
            No more anxiety over late deadlines and unprofitable projects. Plan
            and set budgets with confidence!
          </h1>
          <div className={homestyle.small_div_learnmore}>
            <p>
              Learn more <ChevronRightIcon />
            </p>
          </div>
        </div>
        <div className={homestyle.small_div3_hp}>
          <p className={homestyle.sp1_h_para}>EMPLOYEE TIME TRACKING</p>
          <h1 className={homestyle.head_text_small_div}>
            No more anxiety over late deadlines and unprofitable projects. Plan
            and set budgets with confidence!
          </h1>
          <div className={homestyle.small_div_learnmore}>
            <p>
              Learn more <ChevronRightIcon />
            </p>
          </div>
        </div>
      </div>
      <div>
        <img style={{width:"100%"}}
          src="https://i.postimg.cc/hPBP7vw5/div3.png"
          alt=""
        />
      </div>
      {/* end the small employee div */}

      {/* 20% 100% text div start from here */}

      <div className={homestyle.small_div_percent}>
      <div>
          <span style={{ color: "rgb(229, 124, 216)", fontWeight: "bold", fontSize:"50px" }}>
            ↑ <span style={{color:"black"}}>20%</span>
          </span>
         
          <p>
            Toggl Track increased PR Agency Sweat+Co’s profitability by at least
            20% with accurate billable hours tracking.
          </p>
          
            <p  className={homestyle.pp}>
            Read Case Study<ChevronRightIcon />
            </p>
          
        </div>
        <div>
          <span style={{ fontWeight: "bold", fontSize:"50px" }}>
           100
          </span>
         
          <p>
          Software consultancy Moove It provides 100% transparency to their clients, even in a company as large as 100+!
          </p>
          
            <p  className={homestyle.pp}>
            Read Case Study<ChevronRightIcon />
            </p>
          
        </div>
        <div>
          <span style={{ color: "rgb(229, 124, 216)", fontWeight: "bold", fontSize:"50px" }}>
            ↑ <span style={{color:"black"}}>45%</span>
          </span>
         
          <p>
          Creative studio RogueMark Studios boosted resource allocation by 45% thanks to accurate labor forecasting.
          </p>
          
            <p  className={homestyle.pp}>
            Read Case Study<ChevronRightIcon />
            </p>
          
        </div>
      </div>

      {/* 20% 100% text div end  here */}
    </div>
  );
};

export default SecondHome;
