import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axios.js";
 
 export const Resort=()=> {
    const [resorts, setResorts] = useState();
    const params = useParams();
 useEffect(() => {
   const f = async () => {
     const res = await axiosInstance.get(`/index/${params.id}`);
     setResorts(res.data);
   };
   f();
 }, []);
  return (
    <div style={{ margin: "auto", width: "1000px" }}>
      <h1>ブログ詳細画面</h1>
      <div>
        <Link to="/">TOP</Link>
      </div>
      <div>
        <Link to="/create">記事作成画面</Link>
      </div>
      <div>
        <Link to="/index">記事一覧画面</Link>
      </div>

     <h2>{resorts?.name}</h2>
     <h3>本文</h3>
     <p>{resorts?.explain1}</p>
    </div>
  );
};