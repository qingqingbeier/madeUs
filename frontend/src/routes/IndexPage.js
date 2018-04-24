import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import  Header from '../components/Header';
import {face, eyes, lips, other, titlePreferred, titleBrand, float, redManWears } from '../assets/index';
import Goods from '../components/Goods';
import Clothing from '../components/Clothing';
import Brand from '../components/Brand';
import Footer from '../components/Footer';
import { faceData, eyesData, lipsData, otherData, clothData, brandData } from '../mock/data';
import { Tooltip, Icon } from 'antd';

const text = <span>prompt text</span>;

let  bindFun=null;

class IndexPage extends Component{

    constructor(props) {
      super(props);
      this.state = {
        nowMenu:'top'
      };
    }

    componentDidMount(){
      this.bindScroll()
    }

    componentWillUnmount() {
      window.removeEventListener('scroll',bindFun)
    }

    scrollToAnchor(anchorName){
      let anchorElement = document.getElementById(anchorName);
      if(anchorElement) { anchorElement.scrollIntoView(); }
      this.setState({
        nowMenu:anchorName
      })
    }

    bindScroll(){
      window.addEventListener('scroll', bindFun = () => {
        const scrollTop = document.documentElement.scrollTop;
        scrollTop<=500?this.refs.sideL.style.opacity=0:this.refs.sideL.style.opacity=1;
        console.log(scrollTop);
        if(scrollTop<=300){
          this.activeMenu('top')
        }else if(scrollTop>=300&&scrollTop<2800){
          this.activeMenu('prefer')
        }else if(scrollTop>=2800&&scrollTop<3500){
          this.activeMenu('clothing')
        }else{
          this.activeMenu('brand')
        }
      });
    }

    activeMenu(menuActive){
      this.setState({
        nowMenu:menuActive
      })
    }

    render () {
      return (
        <div className={styles.wrap} id="top">
          <Header nowActiveKey="key1"/>
          <div className={styles.banner}>
            <img src={float}/>
          </div>

          <div className={styles.content}>
            <div className={styles.prefer} id="prefer">
              <img src={titlePreferred} className={styles.title}/>
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
            <div className={styles.clothing} id="clothing">
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
            <div className={styles.brand} id="brand">
              <img src={titleBrand} className={styles.title}/>
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
            <div className={styles.sideL} ref="sideL">
              <ul>
                <li className={this.state.nowMenu==='top'?styles.activeLi:''} onClick={()=>this.scrollToAnchor("top")}><a>MU<br/>首页</a></li>
                <li className={this.state.nowMenu==='prefer'?styles.activeLi:''} onClick={()=>this.scrollToAnchor("prefer")}><a><Icon type="like-o" style={{ fontSize: 16, color: '#ef2751' }}/><br/>今日优选</a></li>
                <li className={this.state.nowMenu==='clothing'?styles.activeLi:''} onClick={()=>this.scrollToAnchor("clothing")}><a><Icon type="skin" style={{ fontSize: 16, color: '#ef2751' }}/><br/>红人搭配</a></li>
                <li className={this.state.nowMenu==='brand'?styles.activeLi:''} onClick={()=>this.scrollToAnchor("brand")}><a><Icon type="smile-o" style={{ fontSize: 16, color: '#ef2751' }}/><br/>品牌专栏</a></li>
                <li onClick={()=>this.scrollToAnchor("top")}><a>︿<br/>TOP</a></li>
              </ul>
            </div>
            <div className={styles.sideR}>
              <div/>
              <ul>
                <li><Tooltip placement="left" title={text}><a><Icon type="user" /></a></Tooltip></li>
                <li><Tooltip placement="left" title={text}><a><Icon type="shopping-cart" style={{ fontSize: 18, color: '#ef2751' }}/>购物车</a></Tooltip></li>
                <li><Tooltip placement="left" title={text}><a><Icon type = "pay-circle-o"/></a></Tooltip></li>
                <li><Tooltip placement="left" title={text}><a><Icon type="heart-o" /></a></Tooltip></li>
                <li><Tooltip placement="left" title={text}><a><Icon type="clock-circle-o" /></a></Tooltip></li>
              </ul>
              <div><a className={styles.goTop}>▲<br/>Top</a></div>
            </div>
          </div>
          <Footer/>
        </div>
      );
    }


}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
