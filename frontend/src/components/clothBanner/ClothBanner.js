/**
 * Created by 黄晶晶 on 2018-04-21.
 */

import React, {Component} from "react";
import styles from "./ClothBanner.less";
import './antdign.less';
import {clothFloat, clothMan_1, clothMan_2, clothMan_3} from "../../assets/index";
import Swiper from "swiper";

class ClothBanner extends Component {

  constructor(props) {
    super(props);
    this.state = {};

  }

  componentDidMount() {
    var elem = this.refs.swiperContainer;
    this.swiper = new Swiper(elem, {
      loop:true,
      // autoplay:true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  render() {
    return (
      <div className={styles.wrap}>
        <div className="swiper-container" ref="swiperContainer">
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img alt="" className={styles.girl} src={ clothMan_1 }/>
              <div className={styles.float}>
                <div className={styles.boxShade}>
                  <div className={styles.box}>
                    <p className={ styles.price}>MUGUET<label><i>¥ </i>198</label></p>
                    <p className={styles.des}>手绘欧根纱绿野仙踪唯美仙女新款连衣裙</p>
                  </div>
                </div>
                <div className={styles.lineShade}><img alt="" src={ clothFloat }/></div>
              </div>
              {/*<div className={styles.float}>*/}
              {/*<div><p className={ styles.price}>MUGUET<label><i>¥ </i>198</label></p>*/}
              {/*<p className={styles.des}>手绘欧根纱绿野仙踪唯美仙女新款连衣裙</p></div>*/}
              {/*<img alt="" src={ clothFloat }/>*/}
              {/*</div>*/}
            </div>
            <div className="swiper-slide">
              <img alt="" className={styles.girl} src={ clothMan_2 }/>
              <div className={styles.float}>
                <div className={styles.boxShade}>
                  <div className={styles.box}>
                    <p className={ styles.price}>MUGUET<label><i>¥ </i>198</label></p>
                    <p className={styles.des}>手绘欧根纱绿野仙踪唯美仙女新款连衣裙</p>
                  </div>
                </div>
                <div className={styles.lineShade}><img alt="" src={ clothFloat }/></div>
              </div>
            </div>
            <div className="swiper-slide">
              <img alt="" className={styles.girl} src={ clothMan_3 }/>
              <div className={styles.float}>
                <div className={styles.boxShade}>
                  <div className={styles.box}>
                    <p className={ styles.price}>MUGUET<label><i>¥ </i>198</label></p>
                    <p className={styles.des}>手绘欧根纱绿野仙踪唯美仙女新款连衣裙</p>
                  </div>
                </div>
                <div className={styles.lineShade}><img alt="" src={ clothFloat }/></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  };
}

ClothBanner.propTypes = {};

export default ClothBanner;
