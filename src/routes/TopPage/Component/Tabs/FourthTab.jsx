import { useState,useEffect } from "react";
import axios from "axios";

export const FourthTab=()=>{
    const [apiHotel, setHotel] = useState([]);
    useEffect(()=>{
    const getAPI=async()=>{
      const response=await axios.get("https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=%E3%82%B2%E3%83%AC%E3%83%B3%E3%83%87%20%E3%82%B9%E3%82%AD%E3%83%BC%20%E3%82%B9%E3%83%8E%E3%83%9C&hits=30&applicationId=1001318956766170232");
      const result=response.data;
      const resultStr=JSON.stringify(result);
      const obj=JSON.parse(resultStr);
      const getones=JSON.stringify(obj.hotels);
      const jsonAPIs=JSON.parse(getones);
      setHotel(jsonAPIs);
    };
    getAPI();
    },[]);
    return(
      <>
      <div  className="fourth-tab">
      <div className="fourth-tab-container">
         {apiHotel.map((api,index)=>{
          console.log(api.hotel[0].hotelBasicInfo.hotelImageUrl);
          return(
            <>
             <div key={index} className ="fourth-tab-contents">
               <div style={{backgroundImage:`url(${api.hotel[0].hotelBasicInfo.hotelImageUrl})`}} className="fourth-tab-top"></div>
                <div className="fourth-tab-bottom"> 
                  <h4>{api.hotel[0].hotelBasicInfo.hotelName}</h4>
                  <p>{api.hotel[0].hotelBasicInfo.hotelSpecial}</p>
                  <a href={api.hotel[0].hotelBasicInfo.hotelInformationUrl}>リンク先</a>
                </div>
              </div>
            </>)
         })}
        </div>
        </div>
     </>
    );
};
