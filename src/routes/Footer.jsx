
const Footer=()=>{
    const footer={
        main:{
            width: '100%',
            height: '72px',
            color: '#efefef',
            backgroundColor: '#3d3d3d',
            padding: '15px 0',
        },
        a:{
            textDecoration: 'none',
            color: '#efefef',
        }
    }
    return(
        <div className="footer">
        <ul className="menu">
          <li>
            <a href="https://github.com/D1nast">Github</a>
          </li>
          <li>
            <a href="#">Todoアプリ</a>
          </li>
          <li>
            <a href="#">CCCCC</a>
          </li>
          <li>
            <a href="#">DDDDD</a>
          </li>
          <li>
            <a href="#">EEEEE</a>
          </li>
        </ul>
        <p className="footerMessage">D1nast</p>
    </div>
    
    );
}

export default Footer;