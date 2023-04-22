import { useState,useEffect,React } from "react";
import axios from "axios";
import { json } from "react-router-dom";

export const FourthTab=()=>{
    const [apiHotel, setHotel] = useState([]);
    const tab = {
      width: '100%',
      height:'100%'
    };
    const tabContainer={
      display:'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
    const tabContents={
      width: '31%',
      height: '370px',
      margin:'20px 15px',
      backgroundColor: 'white',
      boxShadow: '0 0 4px',
      paddingBottom:'50px',
      color:'#444444'
    }
    const tabBottom={
      padding:'0px 10px',
      border: 'none'
    }
    const generateStyle=(api)=>{
      return {
          width:"100%",
          height:"60%",
          backgroundImage: `url(${api.hotel[0].hotelBasicInfo.hotelImageUrl})`,
          backgroundSize: 'cover',
          cursor: "pointer",
       };
    };
    const handleClick = (api) => {
      window.location.href = api.hotel[0].hotelBasicInfo.hotelInformationUrl;
    };
    useEffect(()=>{
    const getAPI=async()=>{
      const response=await axios.get("https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=%E3%82%B2%E3%83%AC%E3%83%B3%E3%83%87%20%E3%82%B9%E3%82%AD%E3%83%BC%20%E3%82%B9%E3%83%8E%E3%83%9C&hits=30&applicationId=1001318956766170232");
      const result=response.data;
      const APIdata=result.hotels
      setHotel(APIdata);
    };
    getAPI();
    },[]);
    return(
      <>
      <div style={tab}>
      <div style={tabContainer}>
         {apiHotel.map((api,index)=>{
          return(
            <>
             <div key={index} style={tabContents}>
                <div style={generateStyle(api)}
                     onClick={() => handleClick(api)}>
                </div>
                <div style={tabBottom}> 
                  <h4>{api.hotel[0].hotelBasicInfo.hotelName}</h4>
                  <p>{api.hotel[0].hotelBasicInfo.hotelSpecial}</p>
                </div>
              </div>
            </>)
         })}
        </div>
        </div>
     </>
    );
};
