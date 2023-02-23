import { useEffect,useState } from "react";
import {axiosInstance} from "../../../../utils/axios";

export const ThirdPage=()=>{
    const [apiContents, setContents] = useState([]);
    useEffect(()=>{
        const testAPI=async()=>{
            const res = await axiosInstance.get("test");
            const result=res.data;
            setContents(result);
            };
     testAPI();
    },[]); 
    return(
        <>
        {apiContents.map((api,index)=>{
            return(
                <div key={index} className="third-tab-contents">
                    <div className="third-tab-top">
                    </div>
                    <div className="third-tab-bottom"></div>
                </div>
                )
        })};
        <div  className="third-tab-contents">
            <div className="third-tab-top">
            </div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        <div  className="third-tab-contents">
            <div className="third-tab-top"></div>
            <div className="third-tab-bottom"></div>
        </div>
        </>
    );
};