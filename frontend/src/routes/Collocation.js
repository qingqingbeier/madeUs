/**
 * Created by 黄晶晶 on 2018-04-13.
 */

import React, {Component} from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import styles from './Collocation.less';
import './Collocation.less';
import  Header from '../components/Header';
import Footer from '../components/Footer';
import SideRight from '../components/SideRight';
import banner_01 from "../assets/collocBanner_01.png";
import banner_02 from "../assets/collocBanner_02.png";
import { suitData } from '../mock/data';
import Swiper from 'swiper';
import TOOL from '../utils/tools.js'
const TabPane = Tabs.TabPane;

class Collocation extends Component{

  constructor(props) {
    super(props);

    const { activeNum } = this.props.location.state||{}
    this.state = {
      nowActiveKey:"key5",
      activeNum: activeNum||"5"
    };
  }

  scrollToAnchor(anchorName) {
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        if(anchorElement) { anchorElement.scrollIntoView(); }
    }
  }

  componentDidMount(){
    var elem = this.refs.swiperContainer;
    this.swiper = new Swiper(elem, {
      // mousewheel: true,
      autoplay:true,
      loop:true
    });
    const { activeNum } = this.props.location.state||{}
    if(activeNum){
      this.scrollToAnchor('list')
    }
  }
  callback(activeKey){
    this.setState({
      nowActiveKey:"key"+activeKey
    })
  }
  addToCart(e,goodsData) {
    TOOL.addCartAni(e);
    this.props.dispatch({
      type: "shopCart/addToCart",
      payload: {
        goodsData: goodsData
      }
    })
  }

  render () {
    return (
      <div className={styles.normal}>
        <Header nowActiveKey="key3"/>
        <SideRight/>
        <div className={styles.banner}>
          <div className={styles.swiper_container} ref="swiperContainer">
            <div className="swiper-wrapper">
              <div className="swiper-slide"><img alt="" src={banner_01}/></div>
              <div className="swiper-slide"><img alt="" src={banner_02}/></div>
              {/*<div className="swiper-slide"><img alt="" src={banner_03}/></div>*/}
            </div>
          </div>
        </div>
        <div id="list" className={styles.content} data-active={this.state.nowActiveKey}>
          <Tabs defaultActiveKey={this.state.activeNum} onChange={_=>this.callback(_)}>
            {["人气网红T","入夏要显白","碎花约会裙","秒变大长腿","甜美连衣裙","女神出游搭","夏季少女衬衫","魅力斩男搭","小个省心搭"].map((elem,index) => {
              return <TabPane tab={elem} key={index+1}>
                <div className={styles.wrap}>
                  {
                    suitData.filter((goods) => {
                      return goods.style.indexOf(elem)!==-1;
                    }).map((item,index)=>{
                      return (
                        <div key={index} className={"hover "+styles.item} >
                          <img className={styles.img_responsive} src={item.image} alt="" />
                          <div className={styles.overlay}>
                              <Link to={{
                                pathname: '/detail/id=' + item.id,
                                state: {
                                  data: item
                                }
                              }} style={{display:'block',position:'absolute',top:'115px',zIndex:555,height:'45px',width:'100%'}}></Link>
                              <h2>{item.name}</h2>
                              <span className={styles.info} >
                                <a data-toggle="modal" data-target="#modal4" onClick={(e) => this.addToCart(e,item)}>加入购物车
                                </a>
                              </span>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </TabPane>;
            })}
          </Tabs>
        </div>
        <Footer/>
      </div>
    );
  }
}

Collocation.propTypes = {
};

export default connect()(Collocation);

