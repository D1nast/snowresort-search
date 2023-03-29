import { useEffect,useState } from "react";
import {axiosInstance} from "../../../../utils/axios";

export const SecondPage=()=>{
    const [apiContents, setContents] = useState([]);
    const tabTop={
        width: '100%',
        height: '60%',
        backgroundImage: 'url("../public/Top.jpg")',
        backgroundSize: 'cover'
    }
    const tabBottom={
        padding:'3px',
        border: 'none'
    }
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
                        <h3>{api.name}</h3>
                        <p>{api.explain1}</p>
                    </div>
                </div>
                )
        })}
        </>
    );};