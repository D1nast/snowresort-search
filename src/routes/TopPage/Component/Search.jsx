import React,{useState} from "react";
// import {FirstTab} from "./Tabs/FirstTab";
// import {SecondTab} from "./Tabs/SecondTab";
import {ThirdTab} from "./Tabs/ThirdTab";
import {FourthTab} from "./Tabs/FourthTab";

export const Search=()=>{
  // const [firstTab,setFirstTab]=useState(true);
  // const [secondTab,setSecondTab]=useState(false);
  const [thirdTab,setThirdTab]=useState(true);
  const [fourthTab,setFourthTab]=useState(false);

  // const onClickFirstTab=()=>{
  //   setFirstTab(true);
  //   setSecondTab(false);
  //   setThirdTab(false);
  //   setFourthTab(false);
  // };
  // const onClickSecondTab=()=>{
  //   setFirstTab(false);
  //   setSecondTab(true);
  //   setThirdTab(false);
  //   setFourthTab(false);
  // };
  const onClickThirdTab=()=>{
    // setFirstTab(false);
    // setSecondTab(false);
    setThirdTab(true);
    setFourthTab(false);
  };
  const onClickfourthTab=()=>{
    // setFirstTab(false);
    // setSecondTab(false);
    setThirdTab(false);
    setFourthTab(true);
  };
  const secondMain={
    width: '100%',
    height: '100vh',
  }
  const searchPart={
    main:{
        width: '100%',
        height: 'auto',
    },
    h2:{
        display: 'inline-block',
        marginTop: '20px',
        marginLeft: '20px',
        borderBottom: '1px solid black',
    },
  }
  const tabListContainer={
    width: '100%',
    margin: '0 auto',
  }
  const tabContainer={
    border: '1px solid #333',
    padding: '20px',
    lineHeight: '2',
    minHeight: '450px',
  }
    return(
<div style={secondMain}>
      <div style={searchPart}>
        <h2 style={searchPart.h2}>Search</h2>
        <div style={tabListContainer}>
          <ul className="tab-list">
            {/* <li className={firstTab ? "tab-item tab-active" : ""} onClick={onClickFirstTab}><span>現在地から探す</span></li>
            <li className={secondTab ? "tab-item tab-active" : ""} onClick={onClickSecondTab}><span>都道府県から探す</span></li> */}
            <li className={thirdTab ? "tab-item tab-active" : ""} onClick={onClickThirdTab}><span>ゲレンデから探す</span></li>
            <li className={fourthTab ? "tab-item tab-active" : ""} onClick={onClickfourthTab}><span>宿から探す</span></li>
          </ul>
          <div style={tabContainer}>
            {/* {firstTab&&<FirstTab/>}
            {secondTab &&<SecondTab/>} */}
            {thirdTab&&<ThirdTab/>}
            {fourthTab&&<FourthTab/>}
          </div>
        </div>
      </div>
    </div>
    
    )
}
