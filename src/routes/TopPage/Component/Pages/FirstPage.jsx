//rubyのDBから写真と名前、説明等をランダムで返すAPIを作成したい
import { useEffect,useState } from "react";
import {axiosInstance} from "../../../../utils/axios";
export const FirstPage=()=>{
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
