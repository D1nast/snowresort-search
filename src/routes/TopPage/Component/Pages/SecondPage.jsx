import { useEffect,useState } from "react";
import {axiosInstance} from "../../../../utils/axios";

export const SecondPage=()=>{
    const [apiContents, setContents] = useState([]);
    useEffect(()=>{
        const getAPI=async()=>{
            const res = await axiosInstance.get("db");
            const result=res.data;
            setContents(result);
            };
     getAPI();
    },[]); 
    return(
        <>
        {apiContents.map((api,index)=>{
            return(
                <div key={index} className="third-tab-contents">
                    <div style={{backgroundImage:`url(${api.image})`}}  className="third-tab-top">
                    </div>
                    <div className="third-tab-bottom">
                        <h3>{api.id}</h3>
                        <p>{api.created_at}</p>
                    </div>
                </div>
                )
        })}
        </>
    );};