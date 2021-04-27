/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect,useState, Component } from "react";
import {Link} from 'react-router-dom';

const Logout=()=> {
  
  useEffect(() => {
      
    const logout=async()=>{
      try {
        await localStorage.removeItem("token");
        window.location = "/";
      } catch (err) {
        console.log('error occurred! ', err)
      }
    }
    logout(); 
  },[]);
  return (
    null
  )
}
export default Logout;
