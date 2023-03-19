//rubyのDBから写真と名前、説明等をランダムで返すAPIを作成したい
import { useEffect,useState } from "react";
import {axiosInstance} from "../../../../utils/axios";
export const FirstPage=()=>{
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
                    <div  className="third-tab-top">
                    </div>
                    {/* style={{backgroundImage:`url(${api.image})`}}  */}
                    <div className="third-tab-bottom">
                        <h3>{api.name}</h3>
                        <p>{api.explain1}</p>
                    </div>
                </div>
                )
            })}
        </>
    );
};
