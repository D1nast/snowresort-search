// import { Link } from "react-router-dom";
import {React} from "react";

export const Header=()=>{
    const header={
        position: 'fixed',
        top: '0',
        left: '0',
        height: '72px',
        backgroundColor: '#00c4cc',
        color: '#fff',
        width: '100%',
        alignItems: 'center',
    }
    const logo={
        margin: '0',
        lineHeight: '60px',
        float: 'left',
        fontSize:'25px',
        paddingLeft:'25px',
    }
    // const nav={
    //     main:{
    //         listStyle: 'none',
    //         float: 'right',
    //     },
    //     li:{
    //         display: 'inline-block',
    //     },
    //     a:{
    //         display: 'inline-block',
    //         padding: '3px 15px',
    //         color: 'inherit',
    //         textDecoration: 'none',
    //     }
    // }

    return(
    <div style={header}>
     <div className="container">
        <h1 style={logo}>ゲレンデ・宿検索</h1>
        {/* <ul style={nav.main}>
        <li style={nav.li}>
            <Link to="/" style={nav.a}>HOME</Link>
        </li>
        <li style={nav.li}>
            <Link to="Prefecture" style={nav.a}>都道府県</Link>
        </li>
        <li style={nav.li}>
            <Link to="test" style={nav.a}>テスト</Link>
        </li>
        <li style={nav.li}>
             <Link to="about" style={nav.a}>About</Link>
        </li>
        </ul> */}
     </div>
    </div>
    );
}