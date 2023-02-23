import { Link } from "react-router-dom";

export const SecondTab=()=>{
    return(
        <div className="tab-content">
        <div className="searchPrefecture">
          <ul>
            <div className="HokkaidoTohoku">
              <h5>北海道・東北</h5>
              <li><Link to="/Prefecture/hokkaido" className="borderLeft">北海道</Link></li>
              <li><Link to="/Prefecture/aomori" className="borderLeft">青森</Link></li>
              <li><Link to="/Prefecture/iwate" className="borderLeft">岩手</Link></li>
              <li><Link to="/Prefecture/akita" className="borderLeft">秋田</Link></li>
              <li><Link to="/Prefecture/miyagi" className="borderLeft">宮城</Link></li>
              <li><Link to="/Prefecture/yamagata" className="borderLeft">山形</Link></li>
              <li><Link to="/Prefecture/hukusima">福島</Link></li>
            </div>
            <div className="Kanto">
              <h5>関東</h5>
              <li><Link to="/Prefecture/totigi" className="borderLeft">栃木</Link></li>
              <li><Link to="/Prefecture/ibaragi" className="borderLeft">茨城</Link></li>
              <li><Link to="/Prefecture/gunma" className="borderLeft">群馬</Link></li>

            </div>
            <div className="Chubu">
              <h5>中部</h5>
              <li><Link to="/Prefecture/nigata" className="borderLeft">新潟</Link></li>
              <li><Link to="/Prefecture/toyama" className="borderLeft">富山</Link></li>
              <li><Link to="/Prefecture/ishikawa" className="borderLeft">石川</Link></li>
              <li><Link to="/Prefecture/hukui" className="borderLeft">福井</Link></li>
              <li><Link to="/Prefecture/yamanashi" className="borderLeft">山梨</Link></li>
              <li><Link to="/Prefecture/nagano" className="borderLeft">長野</Link></li>
              <li><Link to="/Prefecture/gihu" className="borderLeft">岐阜</Link></li>
              <li><Link to="/Prefecture/shizuoka" className="borderLeft">静岡</Link></li>
              <li><Link to="/Prefecture/aiti">愛知</Link></li>
            </div>
            <div className="Kinki">
              <h5>近畿</h5>
              <li><Link to="/Prefectureshiga" className="borderLeft">滋賀</Link></li>
              <li><Link to="/Prefecture/kyoto" className="borderLeft">京都</Link></li>
              <li><Link to="/Prefecture/hyogo" className="borderLeft">兵庫</Link></li>
              <li><Link to="/Prefecture/nara" className="borderLeft">奈良</Link></li>
            </div>
            <div className="Chugoku">
              <h5>中国</h5>
              <li><Link to="/Prefecture/tottori" className="borderLeft">鳥取</Link></li>
              <li><Link to="/Prefecture/shimane" className="borderLeft">島根</Link></li>
              <li><Link to="/Prefecture/okayama" className="borderLeft">岡山</Link></li>
              <li><Link to="/Prefecture/hirosima" className="borderLeft">広島</Link></li>
              <li><Link to="/Prefecture/yamaguti">山口</Link></li>
            </div>
            <div className="Sikoku">
              <h5>四国</h5>
              <li><Link to="/Prefecture/kagawa" className="borderLeft">香川</Link></li>
              <li><Link to="/Prefecture/ehime" className="borderLeft">愛媛</Link></li>
              <li><Link to="/Prefecture/kochi">高知</Link></li>
            </div>
            <div className="Kyushu">
              <h5>九州</h5>
              <li><Link to="/Prefecture/hukuoka" className="borderLeft">福岡</Link></li>
              <li><Link to="/Prefecture/saga" className="borderLeft">佐賀</Link></li>
              <li><Link to="/Prefecture/miyazaki" className="borderLeft">宮崎</Link></li>
            </div>
          </ul>
        </div>
      </div>
    );
}