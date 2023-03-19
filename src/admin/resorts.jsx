import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axios.js";

export const Resorts=()=> {
  const [resorts, setResorts] = useState();
  useEffect(() => {
    const f = async () => {
      const res = await axiosInstance.get("/index");
      const result=res.data;
      console.log(result);
      setResorts(res.data);
    };
  f();
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

     <div>
       <ul>
         {resorts?.map((r) => (
           <Link to={`/index/${r.id}`} key={r.id}>
             <li>id:{r.id} {r.name}</li>
           </Link>
         ))}
       </ul>
     </div>
    </div>
  );
}

