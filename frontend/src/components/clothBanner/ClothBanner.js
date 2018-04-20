/**
 * Created by 黄晶晶 on 2018-04-21.
 */

import React, { Component } from "react";
import styles from "./ClothBanner.less";
import {clothFloat, clothMan_1, clothMan_2} from "../../assets/index";
import Swiper from "swiper";

class ClothBanner extends Component {

  constructor(props) {
    super(props);
    this.state = {};

  }

  componentDidMount() {
    var elem = this.refs.swiperContainer;
    this.swiper = new Swiper(elem, {
      mousewheel: true,
    });
  }

  render() {
    return (
      <div className={styles.wrap}>
        <div className="swiper-container" ref="swiperContainer">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img className={styles.man} src={ clothMan_1 }/>
              <div className={styles.float}>
                <div><p className={ styles.price}>MUGUET<label><i>¥ </i>198</label></p>
                  <p className={styles.des}>手绘欧根纱绿野仙踪唯美仙女新款连衣裙</p></div>
                <img src={ clothFloat }/>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-slide">
                <img className={styles.man} src={ clothMan_2 }/>
                <div className={styles.float}>
                  <div><p className={ styles.price}>MUGUET<label><i>¥ </i>198</label></p>
                    <p className={styles.des}>手绘欧根纱绿野仙踪唯美仙女新款连衣裙</p></div>
                  <img src={ clothFloat }/>
                </div>
              </div>
            </div>
            <div className="swiper-slide">3333</div>
          </div>
        </div>

      </div>
    );
  };
}

ClothBanner.propTypes = {};

export default ClothBanner;
