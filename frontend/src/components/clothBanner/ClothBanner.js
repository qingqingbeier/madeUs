/**
 * Created by 黄晶晶 on 2018-04-21.
 */

import React, {Component} from "react";
import {Link} from "dva/router";
import styles from "./ClothBanner.less";
import "./antdign.less";
import {clothFloat, clothMan_1, clothMan_2, clothMan_3} from "../../assets/index";
import {manShowData} from "../../mock/data"; //banner的数据
import Swiper from "swiper";

class ClothBanner extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var elem = this.refs.swiperContainer;
    this.swiper = new Swiper(elem, {
      loop: true,
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
              <Link to={{
                pathname: '/detail/id=' + manShowData[0].id,
                state: {
                  data: manShowData[0]
                }
              }}>
                <img alt="" className={styles.girl} src={ clothMan_1 }/>
                <div className={styles.float}>
                  <div className={styles.boxShade}>
                    <div className={styles.box}>
                      <p className={ styles.price}>{manShowData[0].brand}<label><i>¥ </i>{manShowData[0].price}</label>
                      </p>
                      <p className={styles.des}>{manShowData[0].title}</p>
                    </div>
                  </div>
                  <div className={styles.lineShade}><img alt="" src={ clothFloat }/></div>
                </div>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link to={{
                pathname: '/detail/id=' + manShowData[1].id,
                state: {
                  data: manShowData[1]
                }
              }}>
                <img alt="" className={styles.girl} src={ clothMan_2 }/>
                <div className={styles.float}>
                  <div className={styles.boxShade}>
                    <div className={styles.box}>
                      <p className={ styles.price}>{manShowData[1].brand}<label><i>¥ </i>{manShowData[1].price}</label>
                      </p>
                      <p className={styles.des}>{manShowData[1].title}</p>
                    </div>
                  </div>
                  <div className={styles.lineShade}><img alt="" src={ clothFloat }/></div>
                </div>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link to={{
                pathname: '/detail/id=' + manShowData[2].id,
                state: {
                  data: manShowData[2]
                }
              }}>
                <img alt="" className={styles.girl} src={ clothMan_3 }/>
                <div className={styles.float}>
                  <div className={styles.boxShade}>
                    <div className={styles.box}>
                      <p className={ styles.price}>{manShowData[2].brand}<label><i>¥ </i>{manShowData[2].price}</label>
                      </p>
                      <p className={styles.des}>{manShowData[2].title}</p>
                    </div>
                  </div>
                  <div className={styles.lineShade}><img alt="" src={ clothFloat }/></div>
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>
    );
  };
}

ClothBanner.propTypes = {};

export default ClothBanner;
