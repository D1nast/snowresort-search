import { Link, useParams,useNavigate} from "react-router-dom";
import { useState, useEffect,React } from "react";
import { axiosInstance } from "../utils/axios.js";

export const EditResort=()=>{
 const [id, setId] = useState();
 const [name, setName] = useState("");
 const [explain1, setExplain1] = useState("");
 const [url, setUrl] = useState("");

 const params = useParams();
 const navigate = useNavigate();

 const onClick = async () => {
  await axiosInstance.post('/edit/:id/update',{id,name,explain1,url});
  if (axiosInstance) {
    console.log("成功しました");
    navigate("/index");
  } else 
    console.log("失敗しました")
  }

  useEffect(() => {
    const getData = async () => {
    const res = await axiosInstance.get(`/index/${params.id}`);
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
      <h4>{id}</h4>
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