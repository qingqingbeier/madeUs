import React, {Component} from "react";
import {connect} from "dva";
import { Link } from "dva/router";
import styles from "./IndexPage.less";
import Header from "../components/Header";
import {eyes, face, index_banner, lips, other, redManWears, titleBrand, titlePreferred} from "../assets/index";
import Goods from "../components/Goods";
import Clothing from "../components/Clothing";
import Brand from "../components/Brand";
import Footer from "../components/Footer";
import SideRight from "../components/SideRight";
import {indexBanner1, indexBanner2, indexBanner3, indexBanner4, indexBanner5, indexBanner6} from "../assets";
import { brandData,clothData, faceData, lipsData,otherData,eyesData} from "../mock/data";
import { Icon } from "antd";
import Parallax from 'parallax-js';
let bindFun = null;

class IndexPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nowMenu: 'top'
    };
  }

  componentDidMount() {
    this.bindScroll();
    const scene = this.refs.scene;
    this.parallaxInstance = new Parallax(scene);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', bindFun);
  }

  scrollToAnchor(anchorName) {
    let anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
      anchorElement.scrollIntoView();
    }
    this.setState({
      nowMenu: anchorName
    })
  }

  bindScroll() {
    window.addEventListener('scroll', bindFun = () => {
      const scrollTop = document.documentElement.scrollTop;
      scrollTop <= 500 ? this.refs.sideL.style.opacity = 0 : this.refs.sideL.style.opacity = 1;
      if (scrollTop <= 300) {
        this.activeMenu('top')
      } else if (scrollTop >= 300 && scrollTop < 2800) {
        this.activeMenu('prefer')
      } else if (scrollTop >= 2800 && scrollTop < 3500) {
        this.activeMenu('clothing')
      } else {
        this.activeMenu('brand')
      }
    });
  }

  activeMenu(menuActive) {
    this.setState({
      nowMenu: menuActive
    })
  }

  render() {
    return (
      <div className={styles.wrap} id="top">
        <Header nowActiveKey="key1"/>
        <div className={styles.banner}>
          <a href = "/#/cosmetics" className={styles.area1}></a>
          <a href = "/#/makeUpKit" className={styles.area2}></a>
          <a href = "/#/collocation" className={styles.area3}></a>
          <a href = "/#/clothingmall" className={styles.area4}></a>
          <ul id="scene" ref="scene" className={styles.scene}>
            <li className="layer" data-depth="0.00"><img alt="" src={indexBanner6}/></li>
            <li className="layer" data-depth="-0.20"><img alt="" src={indexBanner5}/></li>
            <li className={`layer ${styles.beautyGirl}`} data-depth="0"><img alt="" src={indexBanner4}/></li>
            <li className={`layer ${styles.bgCloth}`} data-depth="0.80"><img alt="" src={indexBanner3}/></li>
            <li className={`layer ${styles.topUrl}`} data-depth="-0.80"><img alt="" src={indexBanner1}/></li>
            <li className={`layer ${styles.topCircle}`} data-depth="0.60"><img alt="" src={indexBanner2}/></li>
          </ul>
          {/*<img src={index_banner}/>*/}
        </div>
        <div id="youxuan" className={styles.content}>
          <div className={styles.prefer} id="prefer">
            <img alt="" src={titlePreferred} className={styles.title}/>
            <div className={styles.face}>
              <Link to={{
                pathname: '/goodsList',
                state: {
                  source:"homePage",
                  type:"lips"
                }
              }}><img alt="" src={lips} className={styles.preTitImg}/>
              </Link>
              <div className={styles.goods}>
                <Goods goodsData={lipsData[0]}/>
                <Goods goodsData={lipsData[1]}/>
                <Goods goodsData={lipsData[2]}/>
              </div>
            </div>
            <div className={styles.face}>
              <Link to={{
                pathname: '/goodsList',
                state: {
                  source:"homePage",
                  type:"eyes"
                }
              }}><img alt="" src={eyes} className={styles.preTitImg}/>
              </Link>
              <div className={styles.goods}>
                <Goods goodsData={eyesData[0]}/>
                <Goods goodsData={eyesData[1]}/>
                <Goods goodsData={eyesData[2]}/>
              </div>
            </div>
            <div className={styles.face}>
              <Link to={{
                pathname: '/goodsList',
                state: {
                  source:"homePage",
                  type:"face"
                }
              }}><img alt="" src={face} className={styles.preTitImg}/>
              </Link>
              <div className={styles.goods}>
                <Goods goodsData={faceData[0]}/>
                <Goods goodsData={faceData[1]}/>
                <Goods goodsData={faceData[2]}/>
              </div>
            </div>
            <div className={styles.face}>
              <Link to={{
                pathname: '/goodsList',
                state: {
                  source:"homePage",
                  type:"other"
                }
              }}><img alt="" src={other} className={styles.preTitImg}/>
              </Link>
              <div className={styles.goods}>
                <Goods goodsData={otherData[0]}/>
                <Goods goodsData={otherData[1]}/>
                <Goods goodsData={otherData[2]}/>
              </div>
            </div>
          </div>
          <div className={styles.clothing} id="clothing">
            <div className={styles.image}>
              <Link to = "./collocation">
                <img alt="" src={redManWears}/>
              </Link>
            </div>
            <div className={styles.subject}>
              <Clothing activeNum={"1"} clothData={clothData[0]}/>
              <Clothing activeNum={"2"} clothData={clothData[1]}/>
              <Clothing activeNum={"3"} clothData={clothData[2]}/>
              <Clothing activeNum={"4"} clothData={clothData[3]}/>
              <Clothing activeNum={"5"} clothData={clothData[4]}/>
              <Clothing activeNum={"6"} clothData={clothData[5]}/>
            </div>
          </div>
          <div className={styles.brand} id="brand">
            <img alt="" src={titleBrand} className={styles.title}/>
            <div className={styles.container}>
              <Brand brandData={brandData[0]}/>
              <Brand brandData={brandData[1]}/>
              <Brand brandData={brandData[2]}/>
              <Brand brandData={brandData[3]}/>
              <Brand brandData={brandData[4]}/>
            </div>
            <div className={styles.container}>
              <Brand brandData={brandData[4]}/>
              <Brand brandData={brandData[5]}/>
              <Brand brandData={brandData[6]}/>
              <Brand brandData={brandData[7]}/>
              <Brand brandData={brandData[0]}/>
            </div>
          </div>
          <div className={styles.sideL} ref="sideL">
            <ul>
              <li className={this.state.nowMenu === 'top' ? styles.activeLi : ''}
                  onClick={() => this.scrollToAnchor("top")}><a>MU<br/>首页</a></li>
              <li className={this.state.nowMenu === 'prefer' ? styles.activeLi : ''}
                  onClick={() => this.scrollToAnchor("prefer")}><a><Icon type="like-o"
                                                                         style={{fontSize: 16, color: '#ef2751'}}/><br/>今日优选</a>
              </li>
              <li className={this.state.nowMenu === 'clothing' ? styles.activeLi : ''}
                  onClick={() => this.scrollToAnchor("clothing")}><a><Icon type="skin" style={{
                fontSize: 16,
                color: '#ef2751'
              }}/><br/>红人搭配</a></li>
              <li className={this.state.nowMenu === 'brand' ? styles.activeLi : ''}
                  onClick={() => this.scrollToAnchor("brand")}><a><Icon type="smile-o"
                                                                        style={{fontSize: 16, color: '#ef2751'}}/><br/>品牌专栏</a>
              </li>
              <li onClick={() => this.scrollToAnchor("top")}><a>︿<br/>TOP</a></li>
            </ul>
          </div>
          <SideRight/>
        </div>
        <Footer/>
      </div>
    );
  }


}

IndexPage.propTypes = {};

export default connect()(IndexPage);
