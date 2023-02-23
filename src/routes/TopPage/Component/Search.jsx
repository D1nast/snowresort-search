import React,{useState} from "react";
import {FirstTab} from "./Tabs/FirstTab";
import {SecondTab} from "./Tabs/SecondTab";
import {ThirdTab} from "./Tabs/ThirdTab";
import {FourthTab} from "./Tabs/FourthTab";


export const Search=()=>{
  const [firstTab,setFirstTab]=useState(true);
  const [secondTab,setSecondTab]=useState(false);
  const [thirdTab,setThirdTab]=useState(false);
  const [fourthTab,setFourthTab]=useState(false);

  const onClickFirstTab=()=>{
    setFirstTab(true);
    setSecondTab(false);
    setThirdTab(false);
    setFourthTab(false);
  };
  const onClickSecondTab=()=>{
    setFirstTab(false);
    setSecondTab(true);
    setThirdTab(false);
    setFourthTab(false);
  };
  const onClickThirdTab=()=>{
    setFirstTab(false);
    setSecondTab(false);
    setThirdTab(true);
    setFourthTab(false);
  };
  const onClickfourthTab=()=>{
    setFirstTab(false);
    setSecondTab(false);
    setThirdTab(false);
    setFourthTab(true);
  };
    return(
<div className="secondMain">
      <div className="searchPart">
        <h2>Search</h2>
        <div className="tab-list-container">
          <ul className="tab-list">
            <li className={firstTab ? "tab-item tab-active" : ""} onClick={onClickFirstTab}><span>現在地から探す</span></li>
            <li className={secondTab ? "tab-item tab-active" : ""} onClick={onClickSecondTab}><span>都道府県から探す</span></li>
            <li className={thirdTab ? "tab-item tab-active" : ""} onClick={onClickThirdTab}><span>ゲレンデから探す</span></li>
            <li className={fourthTab ? "tab-item tab-active" : ""} onClick={onClickfourthTab}><span>宿から探す</span></li>
          </ul>
          <div className="tab-container">
            {firstTab&&<FirstTab/>}
            {secondTab &&<SecondTab/>}
            {thirdTab&&<ThirdTab/>}
            {fourthTab&&<FourthTab/>}
          </div>
        </div>
      </div>
    </div>
    
    )
}
