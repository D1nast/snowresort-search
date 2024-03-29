//rubyのDBから写真と名前、説明等をランダムで返すAPIを作成したい
import { useEffect,useState,React } from "react";
import {axiosInstance} from "../../../../utils/axios";
export const SecondPage=()=>{
    const [apiContents, setContents] = useState([]);
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
     const generateStyle=(api)=>{
        return {
            width:"100%",
            height:"60%",
            backgroundImage: `url(${api.image})`,
            backgroundSize: 'cover',
            cursor:"pointer"
         };
    };
    const handleClick = (api) => {
        window.location.href = api.url;
      };
    useEffect(()=>{
        const getAPI=async()=>{
            const res = await axiosInstance.get("list2");
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
                    <div  style={generateStyle(api)}
                          onClick={() => handleClick(api)}>
                    </div>
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