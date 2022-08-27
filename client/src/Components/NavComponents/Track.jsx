import React from "react";
import { Link } from "react-router-dom";
import style from "./track.module.css";

const Track = () => {
  return (
    <div className={style.track_main}>
      <p className={style.track_p}> TIME TRACKING FOR EVERY TEAM SIZE</p>

      <div className={style.track_main2}>
        <div className={style.track_sub1}>
          <div>
            <img
              className={style.track_img1}
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1NCA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjEuMTA0MTciIHkxPSItMS4xMDQxNyIgeDI9IjcuNjQyNTciIHkyPSItMS4xMDQxNyIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDEzOTcgLTAuNzEyNzcxIDAuNzIxODkzIDAuNjkyMDA0IDM5LjY0NiAxNC43NzE1KSIgc3Ryb2tlPSIjRTg4OURDIiBzdHJva2Utd2lkdGg9IjIuMjA4MzQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8bGluZSB4MT0iMS4xMDQxNyIgeTE9Ii0xLjEwNDE3IiB4Mj0iMTQuMTE0NiIgeTI9Ii0xLjEwNDE3IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjk0MzE5NCAtMC4zMzIyNDEgMC4zNDAwNTMgMC45NDA0MDYgMzkuNjQ2IDIwLjEzMjgpIiBzdHJva2U9IiNERDZGRDEiIHN0cm9rZS13aWR0aD0iMi4yMDgzNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxsaW5lIHgxPSIxLjEwNDE3IiB5MT0iLTEuMTA0MTciIHgyPSI3LjY4NDU0IiB5Mj0iLTEuMTA0MTciIHRyYW5zZm9ybT0ibWF0cml4KC0wLjkyNTA1OCAtMC4zNzk4MjcgMC4zODg0MDUgLTAuOTIxNDg5IDkuMTMwMTMgMTUuMjg1MikiIHN0cm9rZT0iI0U4ODlEQyIgc3Ryb2tlLXdpZHRoPSIyLjIwODM0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPGxpbmUgeDE9IjEuMTA0MTciIHkxPSItMS4xMDQxNyIgeDI9IjE0LjAyNDkiIHkyPSItMS4xMDQxNyIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNjYzNzkyIC0wLjc0NzkxNyAwLjc1NjQ3NCAtMC42NTQwMjQgMTQuMTgwOSAxMy4zMTU0KSIgc3Ryb2tlPSIjREQ2RkQxIiBzdHJva2Utd2lkdGg9IjIuMjA4MzQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzIuMDU1NCAxNC40MzYxSDI0LjU0MjZMMTAuNTM2NiAyOC4wNjY0TDE2Ljg2ODggMzQuNjY2OUwyMi45MzI3IDI4LjgxNzdWNTJIMzIuMDU1NFYxNC40MzYxWiIgZmlsbD0iIzQxMkE0QyIvPgo8L3N2Zz4K"
              alt=""
            />
          </div>
          <div>
            <Link to={"/freelance"}>
              <p className={style.track_h1}> For freelancers and solo users</p>
              <p className={style.track_h2}>
                For solo entrepreneurs with a growing list of clients
              </p>
            </Link>
          </div>
        </div>
        <div className={style.track_sub2}>
          <div>
            <img
              className={style.track_img1}
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzEwNjBfMTU3NiIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMiIgeT0iMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUzIj4KPHJlY3QgeD0iMiIgd2lkdGg9IjQ5LjkxMjYiIGhlaWdodD0iNTMiIGZpbGw9IiNDNEM0QzQiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzEwNjBfMTU3NikiPgo8Y2lyY2xlIGN4PSI0MC44NDkyIiBjeT0iMzYuOTIyMiIgcj0iMy42NzEyMSIgZmlsbD0iI0VEQTNFNCIvPgo8Y2lyY2xlIGN4PSI0Ni4wOTM5IiBjeT0iNDYuMzYxNSIgcj0iMS41NzMzOCIgZmlsbD0iI0U1N0NEOCIvPgo8Y2lyY2xlIGN4PSI4LjMzMjY4IiBjeT0iMTAuNjk5NiIgcj0iNC43MjAxMyIgZmlsbD0iIzU2NDI2MCIvPgo8cGF0aCBkPSJNMTguOTkyNSAxNi42MDQzTDI3LjIwOCAxOS41OTA1TDQ4Ljg0MjEgMjcuNDU0MUM1Mi4wNDc3IDIxLjE5MzkgNTQuOTUzNiA3LjM5OTMxIDQwLjkzMjUgMi4zMDI4OEMyNi45MTE0IC0yLjc5MzU1IDIwLjQ2MzcgOS43MTM2NSAxOC45OTI1IDE2LjYwNDNaIiBmaWxsPSIjNjgzNzJFIiBzdHJva2U9IiM2ODM3MkUiIHN0cm9rZS13aWR0aD0iMC4zNjEwNDciLz4KPGNpcmNsZSBjeD0iMzYuMDg0NSIgY3k9IjE1LjQ1NzciIHI9IjExLjQwMjciIHRyYW5zZm9ybT0icm90YXRlKDE5Ljk3NTMgMzYuMDg0NSAxNS40NTc3KSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMwLjI4NjcgMTcuNzI2NUMzMC44MTQxIDIwLjEwNiAzNC40ODc4IDI0LjIyNTkgMzkuNjYxOCAyMC45MzUzIiBzdHJva2U9IiNGRkFDQTIiIHN0cm9rZS13aWR0aD0iMS4zMTI3MSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik00OC41NDk5IDE3LjI3MzJMMjUuODg2NyA5LjAzNTUzTDI5Ljk0ODkgMS42ODk4OEwzOS4wMzYyIDIuNDA3MzFMNDcuMzczNCA2LjgzTDQ4LjU0OTkgMTcuMjczMloiIGZpbGw9IiM2ODM3MkUiLz4KPGNpcmNsZSBjeD0iMTguMjEyNiIgY3k9IjQwLjkxIiByPSIxMS43NjUxIiB0cmFuc2Zvcm09InJvdGF0ZSgtMjAuMzY1MiAxOC4yMTI2IDQwLjkxKSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE1LjE2OTQgNDYuNTY1NkMxNy4xNzM0IDQ4LjA4NDcgMjIuODE0MyA0OC44NzEgMjQuNjg1NSA0Mi44Mjc0IiBzdHJva2U9IiNGRkFDQTIiIHN0cm9rZS13aWR0aD0iMS4yODgwOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0yOS40NTc5IDM2LjU3MDVMMjYuMDE3MyAzMy42OTI1QzI1LjkzNTIgMzMuNDcxMSAyNS44MTczIDMzLjI2MyAyNS42ODM0IDMzLjA4NDlDMjQuODAxNSAzMS45MTMxIDIyLjkyOSAzMS42NDg3IDIxLjUxODMgMzIuNjI4MUMyMC4zNDYgMzMuNDQ3MSAxOC44OTIxIDM0LjMxMDYgMTcuMjA5NCAzNC45OTUyQzEzLjY1NzQgMzYuNDQ1NiAxMS4xMjg3IDM1LjAzMzcgMTAuMjI0NiAzNC4zODU4QzcuNjk1MTggMzUuNzA4NiA2LjQxMDggMzguNDg4IDcuMzE4NTUgNDAuOTMzNEw2Ljk3OTAxIDQ0LjkxNDhMNi4yOTg2NyA0My45MTQ1QzYuMjk4NjcgNDMuOTE0NSAxLjYwODc1IDM3Ljg0NzkgMi40OTU4NiAzNS4zMTE5QzMuMzcwOSAzMi44MTY0IDUuNTg0NjcgMzIuOTQyIDUuNTg0NjcgMzIuOTQyQzUuNTg0NjcgMzIuOTQyIDIuMzIxMTggMjcuNjUzMyA4Ljc0MDkxIDI1LjM5MDJDMTUuMTQ4NyAyMy4xMzE1IDI1Ljg2MzggMjYuNjAxNiAyNi45MTcgMjcuNTc3OUMyOC41NTQgMjkuMDY5IDI5LjQ1NzkgMzYuNTcwNSAyOS40NTc5IDM2LjU3MDVaIiBmaWxsPSIjNTY0MjYwIi8+CjwvZz4KPC9zdmc+Cg=="
              alt=""
            />
          </div>
          <div>
            <p className={style.track_h1}> For small teams </p>
            <p className={style.track_h2}>
              For teams of less than 10 that need to track projects and bill
              clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;