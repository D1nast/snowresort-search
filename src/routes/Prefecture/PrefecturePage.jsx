import { Routes,Route} from "react-router-dom";

import Aiti from "./Component/Chubu/Aiti";
import Gihu from "./Component/Chubu/Gihu";
import Hukui from "./Component/Chubu/Hukui";
import Ishikawa from "./Component/Chubu/Ishikawa";
import Nagano from "./Component/Chubu/Nagano";
import Nigata from "./Component/Chubu/Nigata";
import Shizuoka from "./Component/Chubu/Shizuoka";
import Toyama from "./Component/Chubu/Toyama";
import Yamanashi from "./Component/Chubu/Yamanashi";
import Hiroshima from "./Component/Chugoku/Hiroshima";
import Okayama from "./Component/Chugoku/Okayama";
import Shimane from "./Component/Chugoku/Shimane";
import Tottori from "./Component/Chugoku/Tottori";
import Yamaguchi from "./Component/Chugoku/Yamaguchi";
import Aomori from "./Component/HokkaidoTohoku/Aomori";
import Akita from "./Component/HokkaidoTohoku/Akita";
import Hokkaido from "./Component/HokkaidoTohoku/Hokkaido";
import Hukushima from "./Component/HokkaidoTohoku/Hukushima";
import Iwate from "./Component/HokkaidoTohoku/Iwate";
import Miyagi from "./Component/HokkaidoTohoku/Miyagi";
import Yamagata from "./Component/HokkaidoTohoku/Yamagata";
import Gunma from "./Component/Kanto/Gunma";
import Ibaragi from "./Component/Kanto/Ibaragi";
import Kanagawa from "./Component/Kanto/Kanagawa";
import Saitama from "./Component/Kanto/Saitama";
import Tiba from "./Component/Kanto/Tiba";
import Tokyo from "./Component/Kanto/Tokyo";
import Totigi from "./Component/Kanto/Totigi";
import Hyogo from "./Component/Kinki/Hyogo";
import Kyoto from "./Component/Kinki/Kyoto";
import Mie from "./Component/Kinki/Mie";
import Nara from "./Component/Kinki/Nara";
import Osaka from "./Component/Kinki/Osaka";
import Shiga from "./Component/Kinki/Shiga";
import Wakayama from "./Component/Kinki/Wakayama";
import Hukuoka from "./Component/Kyushu/Hukuoka";
import Kagoshima from "./Component/Kyushu/Kagoshima";
import Kumamoto from "./Component/Kyushu/Kumamoto";
import Miyazaki from "./Component/Kyushu/Miyazaki";
import Nagasaki from "./Component/Kyushu/Nagasaki";
import Ohita from "./Component/Kyushu/Ohita";
import Okinawa from "./Component/Kyushu/Okinawa";
import Saga from "./Component/Kyushu/Saga";
import Ehime from "./Component/Shikoku/Ehime";
import Kagawa from "./Component/Shikoku/Kagawa";
import Kochi  from "./Component/Shikoku/Kochi";
import Tokushima from "./Component/Shikoku/Tokushima";


const PrefecturePage=()=>{
    return(
      <>
        <Routes>
        <Route path='/hokkaido' element={<Hokkaido/>}/>
        <Route path='/aomori' element={<Aomori/>}/>
        <Route path='/iwate' element={<Iwate/>}/>
        <Route path='/akita' element={<Akita/>}/>
        <Route path='/miyagi' element={<Miyagi/>}/>
        <Route path='/yamagata' element={<Yamagata/>}/>
        <Route path='/hukushima' element={<Hukushima/>}/>
        <Route path='/totigi' element={<Totigi/>}/>
        <Route path='/ibaragi' element={<Ibaragi/>}/>
        <Route path='/gunma' element={<Gunma/>}/>
        <Route path='/saitama' element={<Saitama/>}/>
        <Route path='/tiba' element={<Tiba/>}/>
        <Route path='/tokyo' element={<Tokyo/>}/>
        <Route path='/kanagawa' element={<Kanagawa/>}/>
        <Route path='/nigata' element={<Nigata/>}/>
        <Route path='/toyama' element={<Toyama/>}/>
        <Route path='/ishikawa' element={<Ishikawa/>}/>
        <Route path='/hukui' element={<Hukui/>}/>
        <Route path='/yamanashi' element={<Yamanashi/>}/>
        <Route path='/nagano' element={<Nagano/>}/>
        <Route path='/gihu' element={<Gihu/>}/>
        <Route path='/shizuoka' element={<Shizuoka/>}/>
        <Route path='/aiti' element={<Aiti/>}/>
        <Route path='/mie' element={<Mie/>}/>
        <Route path='/shiga' element={<Shiga/>}/>
        <Route path='/kyoto' element={<Kyoto/>}/>
        <Route path='/osaka' element={<Osaka/>}/>
        <Route path='/hyogo' element={<Hyogo/>}/>
        <Route path='/nara' element={<Nara/>}/>
        <Route path='/wakayama' element={<Wakayama/>}/>
        <Route path='/tottori' element={<Tottori/>}/>
        <Route path='/shimane' element={<Shimane/>}/>
        <Route path='/okayama' element={<Okayama/>}/>
        <Route path='/hiroshima' element={<Hiroshima/>}/>
        <Route path='/yamaguchi' element={<Yamaguchi/>}/>
        <Route path='/tokushima' element={<Tokushima/>}/>
        <Route path='/kagawa' element={<Kagawa/>}/>
        <Route path='/ehime' element={<Ehime/>}/>
        <Route path='/kochi' element={<Kochi/>}/>
        <Route path='/hukuoka' element={<Hukuoka/>}/>
        <Route path='/saga' element={<Saga/>}/>
        <Route path='/nagasaki' element={<Nagasaki/>}/>
        <Route path='/kumamoto' element={<Kumamoto/>}/>
        <Route path='/ohita' element={<Ohita/>}/>
        <Route path='/miyazaki' element={<Miyazaki/>}/>
        <Route path='/kagoshima' element={<Kagoshima/>}/>
        <Route path='/okinawa' element={<Okinawa/>}/>
        </Routes>
      </>
    );
}

export default PrefecturePage;
