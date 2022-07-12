import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom"; 
import {GiCook} from 'react-icons/gi';
import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';

function App() {

  const getMode = ()=> {
    return JSON.parse(localStorage.getItem("mode")) || false
  }


  const [dark,setMode] = useState(getMode())
    useEffect(()=>{
        localStorage.setItem("mode",JSON.stringify(dark))  
    },[dark]);

  return (
    <div className={dark ? "App dark-mode": "App"} >
      <BrowserRouter>
      <Nav>
        <GiCook />
        <Logo to={"/"} style={{alignContent: "initial", alignItems: "initial"}}>COOKBOOK</Logo>
      </Nav>
      <div className="nav">
            <label className="switch">
            <input type="checkbox" checked={dark} onChange={() =>setMode(!dark)}/>
            <span className="slider round"></span>
            </label>
        </div>
      <div className="content">
            <h1>{dark? "Dark Mode" : "Light Mode"}</h1>
        </div>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }

`;

export default App;
