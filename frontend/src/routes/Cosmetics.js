/**
 * Created by 黄晶晶 on 2018-04-15.
 */
import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './Cosmetics.less';
import  Header from '../components/Header';
import {cosBanner, pony_1, pony_2, pony_3, title_1, title_2, title_3, } from '../assets/index';
import Goods from '../components/Goods';
import Footer from '../components/Footer';
import SideRight from '../components/SideRight';
import CosCategory from '../components/CosCategory/CosCategory';
import BrandShop from '../components/BrandShop';
import { faceData, eyesData, lipsData, otherData, brandShopData } from '../mock/data';

class Cosmetics extends Component {

  scrollToAnchor(anchorName) {
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        if(anchorElement) { anchorElement.scrollIntoView(); }
    }
  }
  componentDidMount(){
    const { maodian } = this.props.location.state||{}
    if(maodian){
      console.log(maodian)
      this.scrollToAnchor(maodian)
    }
  }

  render(){
    return (
      <div>
        <Header nowActiveKey="key5"/>
        <SideRight/>
        <div className={styles.banner}>
          <img alt="" src={cosBanner}/>
        </div>
        <div id="remen" className={styles.content}>
          <img alt="" src={title_1} className={styles.title}/>
          <CosCategory/>
          <div className={styles.pony}>
            <div><img alt="" src={pony_1}/></div>
            <div><img alt="" src={pony_2}/></div>
            <div><img alt="" src={pony_3}/></div>
          </div>
          <img alt="" src={title_2} className={styles.title}/>
          <div className={styles.items}>
            {
              otherData.map((elem,index)=>{
                if(index>=9){
                  return (
                    <Goods key={index} goodsData={otherData[index]}/>
                )}
              })
            }
          </div>
          <div className={styles.items}>
            {
              faceData.map((elem,index)=>{
                if(index>=9){
                  return (
                    <Goods key={index} goodsData={faceData[index]}/>
                )}
              })
            }
          </div>
          <div className={styles.items}>
            {
              lipsData.map((elem,index)=>{
                if(index>=9){
                  return (
                    <Goods key={index} goodsData={lipsData[index]}/>
                )}
              })
            }
          </div>
          <div className={styles.items}>
            {
              eyesData.map((elem,index)=>{
                if(index>=9){
                  return (
                    <Goods key={index} goodsData={eyesData[index]}/>
                )}
              })
            }
          </div>
          <img id="juhui" alt="" className={styles.title} src={title_3}/>
          <div className={styles.brandShop}>
            <BrandShop index={0} brandShopData = {brandShopData[0]}/>
            <BrandShop index={1} brandShopData = {brandShopData[1]}/>
            <BrandShop index={2} brandShopData = {brandShopData[2]}/>
            <BrandShop index={3} brandShopData = {brandShopData[3]}/>
            <BrandShop index={4} brandShopData = {brandShopData[4]}/>
            <BrandShop index={5} brandShopData = {brandShopData[5]}/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

Cosmetics.propTypes = {
};

export default connect()(Cosmetics);

