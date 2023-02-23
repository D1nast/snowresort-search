import { Link } from "react-router-dom";

export const Header=()=>{
    return(
    <header>
     <div className="container">
        <h1 className="logo">GerendeNAVI</h1>
        <ul className="nav">
        <li>
            <Link to="/">HOME</Link>
        </li>
        <li>
            <Link to="Prefecture">都道府県</Link>
        </li>
        <li>
            <Link to="test">テスト</Link>
        </li>
        <li>
             <Link to="about">About</Link>
        </li>
        </ul>
     </div>
    </header>
    );
}