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

const TabPane = Tabs.TabPane;

class Collocation extends Component{

  constructor(props) {
    super(props);
    this.state = {
      nowActiveKey:"key5"
    };
  }

  componentDidMount(){
    var elem = this.refs.swiperContainer;
    this.swiper = new Swiper(elem, {
      // mousewheel: true,
      autoplay:true,
      loop:true
    });
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
        <div className={styles.content} data-active={this.state.nowActiveKey}>
          <Tabs defaultActiveKey="5" onChange={_=>this.callback(_)}>
            <TabPane tab="人气T恤装" key="1">
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
            <TabPane tab="超甜荷叶边" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="碎花约会裙" key="3">Content of Tab Pane 3</TabPane>
            <TabPane tab="懒人出门装" key="4">Content of Tab Pane 3</TabPane>
            <TabPane tab="休闲又显瘦" key="5">
              <div className={styles.wrap}>
                {
                  suitData.map((elem,index)=>{
                    return (
                      <div key={index} className={"hover "+styles.item}>
                        <img className={styles.img_responsive} src={elem.image} alt="" />
                        <div className={styles.overlay}>
                            <h2>{elem.des}</h2>
                            <span className={styles.info} >
                              <a data-toggle="modal" data-target="#modal4">加入购物车
                              </a>
                            </span>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </TabPane>
            <TabPane tab="赏花甜美裙装" key="6">Content of Tab Pane 3</TabPane>
            <TabPane tab="春少女衬衫搭" key="7">Content of Tab Pane 2</TabPane>
            <TabPane tab="女神出游搭" key="8">Content of Tab Pane 3</TabPane>
            <TabPane tab="衬衫牛仔搭" key="9">Content of Tab Pane 3</TabPane>
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

