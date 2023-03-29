import { useState,useEffect } from "react";
import axios from "axios";

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
    const tabTop={
      top:{
        width: '100%',
        height: '60%'
      },
      a:{
        display: 'inline-block',
      },
      img:{
        width: '100%',
        height: '210px',
      }
    }
    const tabBottom={
      padding:'0px 10px',
      border: 'none'
    }
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
      <div style={tab}>
      <div style={tabContainer}>
         {apiHotel.map((api,index)=>{
          console.log(api.hotel[0].hotelBasicInfo.hotelImageUrl);
          return(
            <>
             <div key={index} style={tabContents}>
               {/* <div style={{backgroundImage:`url(${api.hotel[0].hotelBasicInfo.hotelImageUrl})`}} className="fourth-tab-top"></div> */}
                <div style={tabTop}>
                  <a style={tabTop.a} href={api.hotel[0].hotelBasicInfo.hotelInformationUrl}>
                   <img style={tabTop.img} src={api.hotel[0].hotelBasicInfo.hotelImageUrl} alt="#"></img>
                  </a>
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
