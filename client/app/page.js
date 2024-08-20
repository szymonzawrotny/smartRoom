'use client'
import react from 'react';
import Background from '@/components/Background';
import Icons from '@/components/Icons';
import Header from '@/components/Header';
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