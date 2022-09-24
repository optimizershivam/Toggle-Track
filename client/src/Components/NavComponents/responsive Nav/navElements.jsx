// Why does this file have a jsx extension when there is no jsx. This prevents the IDE
// from properly highlighting the syntax and showing any suggestions.

import styled from "styled-components";
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa";


export const Nav = styled.nav`
// postion:sticky;
height : 80px;
z-index : 10;
`

export const NavLink = styled(Link)`
color : #fff;
display : flex;
align-items : center;
text-decoration : none;
padding : 0 1rem;
height : 100%;
cursor : pointer;


&.active {
    // color : #15cdfc;
}
`

export const Bars = styled(FaBars)`
display : none;
color : #fff;

@media screen and (max-width : 768px) {
    display : block;
    position : absolute;
    top : 0;
    right : 0;
    transform : translate(-100%, 75%);
    font-size : 1.8rem;
    cursor : pointer;

}
`

export const NavMenu = styled.div`
// display : flex;
// align-items : center;
// margin-right : -24px;
@media screen and (max-width : 768px) {
    display: none
}
`

export const NavBtnLink = styled(Link)`
border-radius : 20px;
background : #FCE5D8;
padding : 10px 22px;
color : #E57CD8;
border : none;
outline : none;
cursor : pointer;
transition : all 0.2s ease-in-out;
text-decoration : none;
`

export const NavBtn = styled.div`
display : flex;
align-items : center;
margin-right : 24px;

@media screen and (max-width: 768px) {
    display: none;
}
`


