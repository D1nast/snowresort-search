import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axios.js";

export const EditResort=()=>{
 const [id, setId] = useState();
 const [name, setName] = useState("");
 const [explain1, setExplain1] = useState("");
 const [url, setUrl] = useState("");
 const [resort, setResort] = useState();
 const params = useParams();
 const onClick=()=>{
    console.log("aaa");
 }
    useEffect(() => {
    const getData = async () => {
    const res = await axiosInstance.get(`/index/${params.id}`);
    setResort(res.data);
    setId(res.data.id);
    setName(res.data.name);
    setExplain1(res.data.explain1);
    setUrl(res.data.url);
    };
    getData();
    },[]);
    return(
    <>
    <div style={{ margin: "auto", width: "1000px",marginTop:"120px"}}>
      <div>
        <Link to="/">TOP</Link>
      </div>
      <div>
        <Link to="/create">作成</Link>
      </div>
      <div>
        <Link to="/index">一覧</Link>
      </div>
      <h4>id</h4>
      <input
          value={id}
          style={{ width: "500px" }}
          onChange={(e) => setId(e.target.value)}
      />
      <h4>ゲレンデ</h4>
      <input
          value={name}
          style={{ width: "500px" }}
          onChange={(e) => setName(e.target.value)}
      />
      <h4>説明</h4>
      <textarea
          value={explain1}
          style={{ width: "500px", height: "100px" }}
          onChange={(e) => setExplain1(e.target.value)}
      />
      <h4>URL</h4>
      <input
          value={url}
          style={{ width: "500px" }}
          onChange={(e) => setUrl(e.target.value)}
      />
      <div style={{ marginTop: "20px" }}>
        <button onClick={onClick}>更新</button>
      </div>
    </div>
    </>
 )
}