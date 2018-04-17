import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import  Header from '../components/Header';
import {face, eyes, lips, other, titlePreferred, titleBrand, float, redManWears } from '../assets/index';
import Goods from '../components/Goods';
import Clothing from '../components/Clothing';
import Brand from '../components/Brand';
import Footer from '../components/Footer';
import { faceData, eyesData, lipsData, otherData, clothData, brandData } from '../mock/data';

function IndexPage() {

  return (
    <div>
      <Header/>
      <div className={styles.banner}>
        <img src={float}/>
      </div>
      <div className={styles.content}>
        <div className={styles.prefer}>
          <img src={titlePreferred}/>
          <div className={styles.face}>
            <img src={face} className={styles.preTitImg}/>
            <div className={styles.goods}>
              <Goods goodsData={faceData[0]}/>
              <Goods goodsData={faceData[1]}/>
              <Goods goodsData={faceData[2]}/>
            </div>
          </div>
          <div className={styles.face}>
            <img src={eyes} className={styles.preTitImg}/>
            <div className={styles.goods}>
              <Goods goodsData={eyesData[0]}/>
              <Goods goodsData={eyesData[1]}/>
              <Goods goodsData={eyesData[2]}/>
            </div>
          </div>
          <div className={styles.face}>
            <img src={lips} className={styles.preTitImg}/>
            <div className={styles.goods}>
              <Goods goodsData={lipsData[0]}/>
              <Goods goodsData={lipsData[1]}/>
              <Goods goodsData={lipsData[2]}/>
            </div>
          </div>
          <div className={styles.face}>
            <img src={other} className={styles.preTitImg}/>
            <div className={styles.goods}>
              <Goods goodsData={otherData[0]}/>
              <Goods goodsData={otherData[1]}/>
              <Goods goodsData={otherData[2]}/>
            </div>
          </div>
        </div>
        <div className={styles.clothing}>
          <div className={styles.image}>
            <img src={redManWears}/>
          </div>
          <div className={styles.subject}>
            <Clothing clothData = {clothData[0]}/>
            <Clothing clothData = {clothData[1]}/>
            <Clothing clothData = {clothData[2]}/>
            <Clothing clothData = {clothData[3]}/>
            <Clothing clothData = {clothData[4]}/>
            <Clothing clothData = {clothData[5]}/>
          </div>
        </div>
        <div className={styles.brand}>
          <img src={titleBrand}/>
          <hr/>
          <div className={styles.container}>
            <Brand brandData = {brandData[0]}/>
            <Brand brandData = {brandData[1]}/>
            <Brand brandData = {brandData[2]}/>
            <Brand brandData = {brandData[3]}/>
            <Brand brandData = {brandData[4]}/>
          </div>
          <div className={styles.container}>
            <Brand brandData = {brandData[4]}/>
            <Brand brandData = {brandData[5]}/>
            <Brand brandData = {brandData[6]}/>
            <Brand brandData = {brandData[7]}/>
            <Brand brandData = {brandData[0]}/>
          </div>
        </div>
        <div className={styles.side}>
          <ul>
            <li>MU<br/>首页</li>
            <li><a>今日优选</a></li>
            <li><a>红人搭配</a></li>
            <li><a>品牌专栏</a></li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
