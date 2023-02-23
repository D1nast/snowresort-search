// import { Link } from "react-router-dom";
import React,{useState} from "react";
import {FirstPage} from "../Pages/FirstPage";
import {SecondPage} from "../Pages/SecondPage";
import {ThirdPage} from "../Pages/ThirdPage";
import {FourthPage} from "../Pages/FourthPage";

export const ThirdTab=()=>{
    const [firstPage,setFirstPage]=useState(true);
    const [secondPage,setSecondPage]=useState(false);
    const [thirdPage,setThirdPage]=useState(false);
    const [fourthPage,setFourthPage]=useState(false);
  
    const onClickFirstPage=()=>{
      setFirstPage(true);
      setSecondPage(false);
      setThirdPage(false);
      setFourthPage(false);
    };
    const onClickSecondPage=()=>{
      setFirstPage(false);
      setSecondPage(true);
      setThirdPage(false);
      setFourthPage(false);
    };
    const onClickThirdPage=()=>{
      setFirstPage(false);
      setSecondPage(false);
      setThirdPage(true);
      setFourthPage(false);
    };
    const onClickFourthPage=()=>{
      setFirstPage(false);
      setSecondPage(false);
      setThirdPage(false);
      setFourthPage(true);
    };
    return(
     <div  className="third-tab">
        <div  className="third-tab-container">
        {firstPage&&<FirstPage/>}
        {secondPage&&<SecondPage/>}
        {thirdPage&&<ThirdPage/>}
        {fourthPage&&<FourthPage/>}
        </div>
            <div className="paging">
                <ul className="paging-ul">    
                    <li className={firstPage ?  "pageList page-active" : "pageList"} onClick={onClickFirstPage}>1</li>
                    <li className={secondPage ? "pageList page-active" : "pageList"} onClick={onClickSecondPage}>2</li>
                    <li className={thirdPage ?  "pageList page-active" : "pageList"} onClick={onClickThirdPage}>3</li>
                    <li className={fourthPage ? "pageList page-active" : "pageList"} onClick={onClickFourthPage}>4</li>
                </ul>  
            </div>
     </div>
    );
}