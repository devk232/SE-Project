/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect,useState, Component } from "react";
import {Link} from 'react-router-dom';

const Logout=()=> {
     
    useEffect(()=>{

       const logout=()=>{
            localStorage.removeItem("token");
            window.location='/';
       }
    })
  
  return (
    null
  )
}
export default Logout;
