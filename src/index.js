import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './responsive.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import {Header} from './routes/Header';
// import Footer from './routes/Footer';
import {Top} from './routes/TopPage/Top';
//以下admin 
import {ResortList} from './admin/ResortList';
import { Resort } from './admin/Resort';
import { CreateResort } from './admin/CreateResort';
import { EditResort } from './admin/Edit';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
       <Route index element={<Top />} />
       <Route path="create" element={<CreateResort />} />
       <Route path="index" element={<ResortList/>} />
       <Route path="index/:id" element={<Resort/>} />
       <Route path="edit/:id" element={<EditResort/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
