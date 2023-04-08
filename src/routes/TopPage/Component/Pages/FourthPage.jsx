import { useEffect,useState,React } from "react";
import {axiosInstance} from "../../../../utils/axios";
export const FourthPage=()=>{
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
    const tabContents={
        width: '31%',
        height: '370px',
        margin:'20px 15px',
        backgroundColor: 'white',
        boxShadow: '0 0 4px',
        paddingBottom:'50px',
        color:'#444444'
      }
    useEffect(()=>{
        const getAPI=async()=>{
            const res = await axiosInstance.get("list4");
            const result=res.data;
            setContents(result);
            };
     getAPI();
    },[]); 
    return(
        <>
        {apiContents.map((api,index)=>{
            return(
                <div key={index} style={tabContents}>
                    <div  style={tabTop}>
                    </div>
                    {/* style={{backgroundImage:`url(${api.image})`}}  */}
                    <div style={tabBottom}>
                        <h3>{api.name}</h3>
                        <p>{api.explain1}</p>
                    </div>
                </div>
                )
            })}
        </>
    );
};
