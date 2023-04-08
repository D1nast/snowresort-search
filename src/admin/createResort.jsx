 import { Link, useNavigate } from "react-router-dom";
import { useState,React } from "react";
 import { axiosInstance } from "../utils/axios.js";

export const CreateResort=()=>{
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [explain1, setExplain1] = useState("");
  const navigate = useNavigate();
    const onClick = async () => {
        await axiosInstance.post("/index", { id, name, explain1 });
        navigate("/index", { replace: true });
      };
  return (
    <div style={{ margin: "auto",marginTop:"100px", width: "1000px" }}>
      <h1>ゲレンデ追加</h1>
      <div>
        <Link to="/">TOP</Link>
      </div>
      <div>
        <Link to="/index">ゲレンデ一覧</Link>
      </div>
      
      <h2>id</h2>
      <div>
        <input
          value={id}
          onChange={(e) =>{{setId(e.target.value)
          console.log(e)}}}
          style={{ width: "500px" }}
        />
      </div>
      <h2>ゲレンデ</h2>
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "500px" }}
        />
      </div>
      <h2>説明文</h2>
      <div>
        <textarea
          value={explain1}
          onChange={(e) => setExplain1(e.target.value)}
          style={{ width: "500px", height: "300px" }}
        />
      </div>

     <div style={{ marginTop: "20px" }}>
       <button onClick={onClick}>作成する</button>
     </div>
    </div>
  );
}
