import React from "react";
import { Link } from "react-router-dom";
import style from "./career.module.css";
const Career = () => {
  return (
    <div className={style.career_main1}>
      <h1 className={style.career_h1}>
        {" "}
        WORK ON A PRODUCT THAT MATTERS TO MILLIANS
      </h1>

      <div className={style.career_main2}>
        <div className={style.career_main3}>
          <div>
            <img
              className={style.career_img1}
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzEwNjBfMTY3MiIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjUzIiBoZWlnaHQ9IjUzIj4KPHJlY3Qgd2lkdGg9IjUzIiBoZWlnaHQ9IjUzIiBmaWxsPSIjQzRDNEM0Ii8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF8xMDYwXzE2NzIpIj4KPHJlY3QgeD0iMzIuNzIxOSIgeT0iMzUuMTY5OSIgd2lkdGg9IjMuMjgxNzMiIGhlaWdodD0iNS40Njk1NiIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1LjQ0MjQgMzIuNzIxOSAzNS4xNjk5KSIgZmlsbD0iI0U1N0NEOCIvPgo8cmVjdCB4PSIzOS45Mjk0IiB5PSIzNC40MjY4IiB3aWR0aD0iMTkuODAxOSIgaGVpZ2h0PSI3LjcwMDcyIiByeD0iMy44NTAzNiIgdHJhbnNmb3JtPSJyb3RhdGUoNDQuNTU3NiAzOS45Mjk0IDM0LjQyNjgpIiBmaWxsPSIjNTY0MjYwIi8+CjxjaXJjbGUgY3g9IjIwLjQ2ODIiIGN5PSIyMC40Njg0IiByPSIyMC4zNTE5IiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUuMDk5OCAyMC40NjgyIDIwLjQ2ODQpIiBmaWxsPSIjNDEyQTRDIi8+CjxjaXJjbGUgY3g9IjIwLjQ2ODIiIGN5PSIyMC40Njc1IiByPSIxNS45NTE1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUuMDk5OCAyMC40NjgyIDIwLjQ2NzUpIiBmaWxsPSIjRkRFNURDIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNjc1NiAxOC4zMzI2TDIzLjMyIDcuMTc2NzZMMTEuMzc3IDIyLjQ5NDZIMTkuNTgwOEwxNi45MzY0IDMzLjY1MDRMMjguODc5NSAxOC4zMzI2TDIwLjY3NTYgMTguMzMyNloiIGZpbGw9IiNFNTdDRDgiLz4KPC9nPgo8L3N2Zz4K"
              alt=""
            />
          </div>
          <div>
            <Link to={"/currentjobs"}>
              <p className={style.career_h2}>Current job openings</p>
              <p className={style.career_h3}>
                We are hiring ! Apply by taking a skills testt; no resume or CV
                required
              </p>
            </Link>
          </div>
        </div>
        <div className={style.career_main4}>
          <div>
            <img
              className={style.career_img2}
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA1MyA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjYuNSIgY3k9IjI3IiByPSIyNi41IiBmaWxsPSIjRjdEOEYzIi8+CjxyZWN0IHg9IjExLjY1OTkiIHk9IjM5LjcyMDciIHdpZHRoPSIzMC43NCIgaGVpZ2h0PSI0LjI0IiByeD0iMi4xMiIgZmlsbD0iIzQxMkE0QyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjgyOTQgMzcuNkgxMC42MjkzTDcuNDM3MzUgMjEuOTU3QzcuMzY5MTIgMjEuNjIzMSA3LjUwNDcxIDIxLjI4MDcgNy43ODMxOSAyMS4wODQyQzguMDYxMjUgMjAuODg3MiA4LjQyOTQxIDIwLjg3NDQgOC43MjExOSAyMS4wNTAzTDE5LjY5OTUgMjcuNjY3M0wyNS45NjA0IDE1LjA3QzI2LjEwNDEgMTQuNzgwOCAyNi4zOTg1IDE0LjU5NjMgMjYuNzIxNiAxNC41OTM4QzI3LjAyNTggMTQuNTkyNSAyNy4zNDE2IDE0Ljc3MDEgMjcuNDkwNSAxNS4wNTcyTDMzLjk1OSAyNy41NDM3TDQ0LjczNyAyMS4wNTA3QzQ1LjAyOTIgMjAuODc0OCA0NS4zOTY1IDIwLjg4ODEgNDUuNjc1IDIxLjA4NDZDNDUuOTUzNCAyMS4yODExIDQ2LjA4OSAyMS42MjM2IDQ2LjAyMTIgMjEuOTU3NEw0Mi44Mjk0IDM3LjZaIiBmaWxsPSIjRTU3Q0Q4Ii8+CjxjaXJjbGUgY3g9IjI2LjUwMDEiIGN5PSIxNC4yODA2IiByPSIzLjE4IiBmaWxsPSIjNDEyQTRDIi8+CjxjaXJjbGUgY3g9IjQ1LjU3OTkiIGN5PSIyMC42NDA5IiByPSIzLjE4IiBmaWxsPSIjNDEyQTRDIi8+CjxjaXJjbGUgY3g9IjcuNDE5OTkiIGN5PSIyMC42NDA5IiByPSIzLjE4IiBmaWxsPSIjNDEyQTRDIi8+CjxwYXRoIGQ9Ik0yNC41Nzk2IDMxLjg4ODZDMjQuNTc5NiAzMi44ODAxIDI0Ljc1MzEgMzMuNjQ0MSAyNS4wOTk2IDM0LjE2NDNDMjUuNjMyNSAzNC45NTg5IDI2LjIyNzcgMzUuNDgwMyAyNy42NzYxIDM1LjQ4MDNDMjguNTE1OCAzNS40ODAzIDI5LjIxODggMzUuMjgxMSAyOS42ODAxIDM1LjAxNThWMzIuMDUyNUMyOS40NjE0IDMyLjEzMyAyOS4yMzA2IDMyLjE3MjUgMjguOTk4NSAzMi4xNjkzQzI4LjQzOTUgMzIuMTY5MyAyOC4yMTAzIDMxLjk5MiAyOC4wMDM2IDMxLjcyMTJDMjcuODY5OCAzMS41NDM5IDI3LjgwMjkgMzEuMjg0MiAyNy44MDI5IDMwLjk0NjdWMjkuMzY5MUgyOS42ODAxVjI2LjU0MTZIMjcuODAyOVYyMy44MjAzSDI1LjQwNDVWMjQuODM3NEMyNS40MDQ1IDI1Ljk2NDUgMjQuNTcyNSAyNi44NzY1IDIzLjU0NjMgMjYuODc2NUMyMy40NzA3IDI2Ljg3NjggMjMuMzk1MSAyNi44NzIxIDIzLjMyMDEgMjYuODYyNVYyOS4zNjg1SDI0LjU3OTZWMzEuODg4NloiIGZpbGw9IiMyQzEzMzgiLz4KPC9zdmc+Cg=="
              alt=""
            />
          </div>
          <div>
            <Link to={"/toggletrack"}>
              <p className={style.career_h4}>The Toggl Track Culture</p>
              <p className={style.career_h5}>
                Learn more about our mission,vision and values
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;