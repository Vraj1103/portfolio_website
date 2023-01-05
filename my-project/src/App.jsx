import React from "react";
import About from "./assets/About";
import Header from "./assets/Header";
import Home from "./assets/Home";
import Qualification from "./assets/Qualification";
import Services from "./assets/Services";
import Skills from "./assets/Skills";

export default function App(){
  return(
    <>
    <Header/>
    <Home/>
    <About/>
    <Skills/>
    <Qualification/>
    <Services/>
    </>
  )
}