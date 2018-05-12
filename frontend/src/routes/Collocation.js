/**
 * Created by 黄晶晶 on 2018-04-13.
 */

import React, {Component} from 'react';
import { connect } from 'dva';
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

  render () {
    return (
      <div>
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
            <TabPane tab="人气网红T" key="1">
              <div className={styles.wrap}>
                {
                  suitData.map((elem,index)=>{
                    return (
                      <div key={index} className={styles.item}>
                        <img alt="" src={elem.image}/>
                      </div>
                    )
                  })
                }
              </div>
            </TabPane>
            <TabPane tab="入夏要显白" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="碎花约会裙" key="3">Content of Tab Pane 3</TabPane>
            <TabPane tab="展示大长腿" key="4">Content of Tab Pane 3</TabPane>
            <TabPane tab="甜美连衣裙" key="5">
              <div className={styles.wrap}>
                {
                  suitData.map((elem,index)=>{
                    return (
                      <div key={index} className={"hover "+styles.item}>
                        <img className={styles.img_responsive} src={elem.image} alt="" />
                        <div className={styles.overlay}>
                            <h2>{elem.name}</h2>
                            <span className={styles.info} >
                              <a data-toggle="modal" data-target="#modal4" onClick={TOOL.addCartAni}>加入购物车
                              </a>
                            </span>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </TabPane>
            <TabPane tab="魅力斩男搭" key="6">Content of Tab Pane 3</TabPane>
            <TabPane tab="夏季少女衬衫" key="7">Content of Tab Pane 2</TabPane>
            <TabPane tab="女神出游搭" key="8">Content of Tab Pane 3</TabPane>
            <TabPane tab="小个省心搭" key="9">Content of Tab Pane 3</TabPane>
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

