/**
 * Created by 黄晶晶 on 2018-04-17.
 */

import React from 'react';
import { connect } from 'dva';
import styles from './ClothingMall.less';
import  Header from '../components/Header';
import {clothBanner, clothTitle_1, clothTitle_2, clothTitle_3, clothPng_1, clothPng_2,
  clothPng_3,clothPng_4,clothPng_5,clothPng_6,clothPng_7,clothPng_8,clothPng_9,clothPng_10} from '../assets/index';
import Goods from '../components/Goods';
import Footer from '../components/Footer';
import BrandShop from '../components/BrandShop';
import ClothBanner from '../components/clothBanner/ClothBanner';
import SideRight from '../components/SideRight';
import { clothMallData, brandShopData } from '../mock/data';

function ClothingMall() {

  return (
    <div className={styles.wrap}>
      <Header nowActiveKey="key6"/>
      <SideRight/>
      <div className={styles.top}>
        <img alt="" className={styles.topImage} src = { clothBanner }/>
      </div>
      <div className={styles.banner}>
        <ClothBanner/>
      </div>
      <div className={styles.content}>
        {/*<img alt="" src={clothTitle_4} className={styles.title}/>*/}
        {/*<div className={styles.star}>*/}
          {/*<div><img alt="" src={star_1}/></div>*/}
          {/*<div><img alt="" src={star_2}/></div>*/}
          {/*<div><img alt="" src={star_3}/></div>*/}
        {/*</div>*/}
        <img alt="" src={clothTitle_1} className={styles.title}/>
        <div className={styles.classify}>
          <ul>
            <li>
              <img alt="" src={clothPng_2}/>
              <h2>连衣裙</h2>
            </li>
            <li>
              <img alt="" src={clothPng_3}/>
              <h2>上衣</h2>
            </li>
            <li>
              <img alt="" src={clothPng_9}/>
              <h2>短裤</h2>
            </li>
            <li>
              <img alt="" src={clothPng_4}/>
              <h2>衬衫</h2>
            </li>
            <li>
              <img alt="" src={clothPng_5}/>
              <h2>长裤</h2>
            </li>
            <li>
              <img alt="" src={clothPng_6}/>
              <h2>外套</h2>
            </li>
            <li>
              <img alt="" src={clothPng_1}/>
              <h2>半身裙</h2>
            </li>
            <li>
              <img alt="" src={clothPng_7}/>
              <h2>针织衫</h2>
            </li>
            <li>
              <img alt="" src={clothPng_8}/>
              <h2>卫衣</h2>
            </li>
            <li>
              <img alt="" src={clothPng_10}/>
              <h2>其他</h2>
            </li>
          </ul>
        </div>
        <img alt="" src={clothTitle_2} className={styles.title}/>
        <div className={styles.items}>
          {
            clothMallData.map((elem,index)=>{
              return (
                <Goods goodsData={clothMallData[index]}/>
              )
            })
          }
        </div>
        <img alt="" className={styles.title} src={clothTitle_3}/>
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

ClothingMall.propTypes = {
};

export default connect()(ClothingMall);


