import { Link } from "react-router-dom";
import { useState, useEffect,React } from "react";
import { axiosInstance } from "../utils/axios.js";

export const ResortList=()=> {
  const [resorts, setResorts] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await axiosInstance.get("/index");
      setResorts(res.data);
    };
  getData();
 }, []);

  return (
    <div style={{ margin: "auto", width: "1000px" }}>
      <h1>ブログ一覧画面</h1>
      <div>
        <Link to="/">TOP</Link>
      </div>
      <div>
        <Link to="/create">記事作成画面</Link>
      </div>

     <div style={{float: "left"}}>
       <h3>確認</h3>
       <ul>
         {resorts?.map((r) => (
           <Link to={`/index/${r.id}`} key={r.id}>
             <li>id:{r.id} {r.name}</li>
           </Link>
         ))}
       </ul>
     </div>

     <div style={{float: "right"}}>
       <h3>編集</h3>
       <ul>
         {resorts?.map((r) => (
           <Link to={`/edit/${r.id}`} key={r.id}>
             <li>id:{r.id} {r.name}</li>
           </Link>
         ))}
       </ul>
     </div>
    </div>
  );
}

