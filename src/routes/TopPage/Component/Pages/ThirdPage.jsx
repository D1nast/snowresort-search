import { useEffect,useState } from "react";
import {axiosInstance} from "../../../../utils/axios";

export const ThirdPage=()=>{
    const [apiContents, setContents] = useState([]);
    const tabTop={
        width: '100%',
        height: '60%',
        backgroundImage: 'url("../../../../../Top.jpg")',
        backgroundSize: 'cover'
    }
    const tabBottom={
        padding:'3px',
        border: 'none'
    }
    const tabContents={
        width: '25%',
        height: '370px',
        marginTop:'30px',
        marginBottom:'30px',
        marginRight:'30px',
        backgroundColor: 'white',
        boxShadow: '0 0 4px',
        paddingBottom: '50px',
        color: '#444444'
    }
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
                <div key={index} style={tabContents}>
                    <div style={tabTop}>
                    </div>
                    <div style={tabBottom}></div>
                </div>
                )
        })}
        <div  style={tabContents}>
            <div style={tabTop}>
            </div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        <div  style={tabContents}>
            <div style={tabTop}></div>
            <div style={tabBottom}></div>
        </div>
        </>
    );
};