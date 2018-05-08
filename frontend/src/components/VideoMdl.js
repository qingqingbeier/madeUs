/**
 * Created by 黄晶晶 on 2018-04-12.
 */

import React, {Component} from "react";
import {connect} from "dva";
import styles from "./VideoMdl.less";
// import Swiper from 'swiper';

class VideoMdl extends Component {

  componentDidMount() {
    // var elem = this.refs.swiperContainer;
    // this.swiper = new Swiper(elem, {
    //   on:{
    //     init: function(){
    //       swiperAnimateCache(this); //隐藏动画元素
    //       swiperAnimate(this); //初始化完成开始动画
    //     },
    //     slideChangeTransitionEnd: function(){
    //       swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
    //     }
    //   }
    // });
  }

  addToCart(videoData) {
    this.props.dispatch({
      type: "shopCart/addToCart",
      payload: {
        goodsData: videoData
      }
    })
  }

  render() {
    const videoData = this.props.videoData;
    return (
      <div className={styles.wrap}>
        {/*<img alt="" className={styles.bgImg+ " ani"} src={videoData.bgImg}/>*/}
        <div className={styles.video}>
          <video src={videoData.video} controls width="100%" poster={videoData.cover}/>
        </div>
        <div className={styles.subject} ref="swiperContainer">
          <ul className={styles.product}>
            <li>
              <div className={styles.image}>
                <img alt="" src={videoData.pro_01.img}/>
              </div>
              <div className={styles.text}>
                <p>{videoData.pro_01.description}</p>
                <div>
                  <label><i>¥</i> {videoData.pro_01.price}</label>
                  <button onClick={() => this.addToCart(videoData)}>加入购物车</button>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.image}>
                <img alt="" src={videoData.pro_02.img}/>
              </div>
              <div className={styles.text}>
                <p>{videoData.pro_01.description}</p>
                <div>
                  <label><i>¥</i> {videoData.pro_02.price}</label>
                  <button onClick={() => this.addToCart(videoData)}>加入购物车</button>
                </div>
              </div>
            </li>
          </ul>
          <ul className={styles.product}>
            <li>
              <div className={styles.image}>
                <img alt="" src={videoData.pro_03.img}/>
              </div>
              <div className={styles.text}>
                <p>{videoData.pro_03.description}</p>
                <div>
                  <label><i>¥</i> {videoData.pro_03.price}</label>
                  <button onClick={() => this.addToCart(videoData)}>加入购物车</button>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.image}>
                <img alt="" src={videoData.pro_04.img}/>
              </div>
              <div className={styles.text}>
                <p>{videoData.pro_04.description}</p>
                <div>
                  <label><i>¥</i> {videoData.pro_04.price}</label>
                  <button onClick={() => this.addToCart(videoData)}>加入购物车</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  };
}

VideoMdl.propTypes = {};
function mapStateToProps({shopCart}) {
  return shopCart
}
export default connect(mapStateToProps)(VideoMdl);

