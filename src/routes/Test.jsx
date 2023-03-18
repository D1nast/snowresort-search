import { useEffect } from "react";
import { axiosInstance } from "../utils/axios";
import { useState } from "react";
export const Test=()=>{
    const [apiContents, setContents] = useState([]);
    useEffect(()=>{
        const testAPI=async()=>{
            const res = await axiosInstance.get("db");
            const result=res.data;
            console.log(result);
            console.log("読み込み中");
            // const resultStr=JSON.stringify(result);
            // setContents(result);
            // console.log(apiContents);
             };
     testAPI();
    },[]); 
    return(
        // <> 
        <div id="area">
         <h1>APIテスト</h1>
         </div>
        //   {/* <div className="gerendePage">
        //   <h1>テスト</h1>
        //    <div className="gerendeFlex">
        //      {apiContents.map((api,index)=>{
        //          console.log(api);
        //          return(
        //             <div key={index} className="articleWrapper">
                         
        //             <div style={{backgroundImage:`url(${api.image})`}} className="wrapperTop">
        //             </div>
        //             <div className="wrapperBottom">
        //                 <h4>{api.content}</h4>
        //             </div>
        //             </div>
        //         );
        //     })}
        //    </div>
        //  </div>
        // </div> */}
        // {/* </> */}
    );
}
