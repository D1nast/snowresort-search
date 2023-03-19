import { Link } from "react-router-dom";
 import { useState } from "react";

export const CreateResort=()=> {
 const [name, setName] = useState("");
 const [explain1, setExplain1] = useState("");
  return (
    <div style={{ margin: "auto", marginTop:"100px",width: "1000px" }}>
      <h1>ゲレンデ追加</h1> 
      <div>
        <Link to="/">TOP</Link>
      </div>
      <div>
        <Link to="/index">記事一覧画面</Link>
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
   </div>
  );
}