'use client'
import react from 'react';
import Background from '@/layouts/Background';
import Icons from '@/layouts/Icons';
import Header from '@/layouts/Header';
import "./style.scss";

const Home = ()=>{
  return(
    <div className="app">
      <Background/>
      <Icons/>
      <Header/>
    </div>
  )
}
export default Home;