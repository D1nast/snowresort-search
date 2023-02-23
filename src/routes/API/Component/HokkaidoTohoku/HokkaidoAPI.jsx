import { useState,useEffect } from "react";
import axios from "axios";

const style={
    paddingTop: '100px',
    paddingBottom:'400px',
};

const contentsStyle={
  width:'40%',
  marginTop:'40px',
  paddingBottom:'80px',
};
const  HokkaidoAPI=()=>{
    const arrayHotel=[];
    const [apiHotel, setHotel] = useState([]);
    console.log(apiHotel);
    useEffect(()=>{
    const getAPI=async()=>{
        const response=await axios.get("https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=%E9%87%8E%E6%B2%A2%E6%B8%A9%E6%B3%89&applicationId=1001318956766170232");
        const result=response.data;
        const resultStr=JSON.stringify(result);
        const obj=JSON.parse(resultStr);
        const getones=JSON.stringify(obj.hotels);
        const jsonAPIs=JSON.parse(getones);
        console.log(jsonAPIs);
        jsonAPIs.map((jsonapi)=>{
            const deleteObject=()=>{
                delete jsonapi.hotel[1];
                delete jsonapi.hotel[0].hotelBasicInfo.access;
                delete jsonapi.hotel[0].hotelBasicInfo.address1;
                delete jsonapi.hotel[0].hotelBasicInfo.address2;
                delete jsonapi.hotel[0].hotelBasicInfo.dpPlanListUrl;
                delete jsonapi.hotel[0].hotelBasicInfo.faxNo;
                delete jsonapi.hotel[0].hotelBasicInfo.hotelKanaName;
                delete jsonapi.hotel[0].hotelBasicInfo.hotelMapImageUrl;
                delete jsonapi.hotel[0].hotelBasicInfo.hotelMinCharge;
                delete jsonapi.hotel[0].hotelBasicInfo.hotelNo;
                delete jsonapi.hotel[0].hotelBasicInfo.hotelThumbnailUrl;
                delete jsonapi.hotel[0].hotelBasicInfo.latitude;
                delete jsonapi.hotel[0].hotelBasicInfo.longitude;
                delete jsonapi.hotel[0].hotelBasicInfo.nearestStation;
                delete jsonapi.hotel[0].hotelBasicInfo.parkingInformation;
                delete jsonapi.hotel[0].hotelBasicInfo.planListUrl;
                delete jsonapi.hotel[0].hotelBasicInfo.postalCode;
                delete jsonapi.hotel[0].hotelBasicInfo.reviewAverage;
                delete jsonapi.hotel[0].hotelBasicInfo.reviewCount;
                delete jsonapi.hotel[0].hotelBasicInfo.reviewUrl;
                delete jsonapi.hotel[0].hotelBasicInfo.roomImageUrl;
                delete jsonapi.hotel[0].hotelBasicInfo.roomThumbnailUrl;
                delete jsonapi.hotel[0].hotelBasicInfo.telephoneNo;
                delete jsonapi.hotel[0].hotelBasicInfo.userReview;
            };
            deleteObject();
            const getHotel=jsonapi.hotel[0].hotelBasicInfo;
            arrayHotel.push(getHotel);
        });
        setHotel(arrayHotel);
    };
    getAPI();
    },[]);
    return(
        <div className="photo">
         {apiHotel.map((api,index)=>{
             return(
              <>
                  <div key={index} className ="photoContents">
                    <div style={{backgroundImage:`url(${api.hotelImageUrl})`}} className="photoImage"></div>
                    <div className="photoExplain">
                     <h4>{api.hotelName}</h4>
                     <p>{api.hotelSpecial}</p>
                     <a href={api.hotelInformationUrl}>リンク先</a>
                     </div>
                     </div>
             </>
                    )
         })}
        </div>
      );
      };
    export default HokkaidoAPI;