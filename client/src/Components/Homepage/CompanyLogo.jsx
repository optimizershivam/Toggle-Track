import React from 'react'
import logostyle from  "./CompanyLogo.module.css"
const CompanyLogo = () => {
  return (
    <div className={logostyle.companylogo_main_div}>
        <div >
            <img  style={{width:"100%"}} src="https://i.postimg.cc/d34DDP24/comp-logo.png" alt="" />
           <div style={{background:"#2C1338",height:"150px"}}><button className={logostyle.logobtn1}>Start Tracking for free</button><span className={logostyle.span1}>or book a demo</span></div> 
        </div>
      

    </div>
  )
}

export default CompanyLogo