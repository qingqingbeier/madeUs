/**
 * Created by 黄晶晶 on 2018-04-15.
 */

import React from 'react';
import { connect } from 'dva';
import styles from './Cosmetics.less';
import  Header from '../components/Header';
import {cosBanner, pony_1, pony_2, pony_3, title_1, title_2, title_3, } from '../assets/index';
import Goods from '../components/Goods';
import Footer from '../components/Footer';
import CosCategory from '../components/CosCategory/CosCategory';
import BrandShop from '../components/BrandShop';
import { faceData, eyesData, lipsData, otherData, brandShopData } from '../mock/data';

function Cosmetics() {

  return (
    <div>
      <Header/>
      <div className={styles.banner}>
        <img src={cosBanner}/>
      </div>
      <div className={styles.content}>
        <img src={title_1} className={styles.title}/>
        <CosCategory/>
        <div className={styles.pony}>
          <div><img src={pony_1}/></div>
          <div><img src={pony_2}/></div>
          <div><img src={pony_3}/></div>
        </div>
        <img src={title_2} className={styles.title}/>
        <div className={styles.items}>
          {
            otherData.map((elem,index)=>{
              return (
                <Goods goodsData={otherData[index]}/>
              )
            })
          }
        </div>
        <div className={styles.items}>
          {
            faceData.map((elem,index)=>{
              return (
                <Goods goodsData={faceData[index]}/>
              )
            })
          }
        </div>
        <div className={styles.items}>
          {
            lipsData.map((elem,index)=>{
              return (
                <Goods goodsData={lipsData[index]}/>
              )
            })
          }
        </div>
        <div className={styles.items}>
          {
            eyesData.map((elem,index)=>{
              return (
                <Goods goodsData={eyesData[index]}/>
              )
            })
          }
        </div>
        <img className={styles.title} src={title_3}/>
        <div className={styles.brandShop}>
          <BrandShop brandShopData = {brandShopData[0]}/>
          <BrandShop brandShopData = {brandShopData[1]}/>
          <BrandShop brandShopData = {brandShopData[2]}/>
          <BrandShop brandShopData = {brandShopData[3]}/>
          <BrandShop brandShopData = {brandShopData[4]}/>
          <BrandShop brandShopData = {brandShopData[5]}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

Cosmetics.propTypes = {
};

export default connect()(Cosmetics);

