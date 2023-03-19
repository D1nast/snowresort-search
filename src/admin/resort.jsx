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
 },);
  return (
    <div style={{ margin: "auto", width: "1000px" }}>
      <h1>詳細</h1>
      <div>
        <Link to="/">TOP</Link>
      </div>
      <div>
        <Link to="/create">作成</Link>
      </div>
      <div>
        <Link to="/index">一覧</Link>
      </div>

     <h2>id:{resorts?.id} {resorts?.name}</h2>
     <h3>説明</h3>
     <p>{resorts?.explain1}</p>
    </div>
  );
};