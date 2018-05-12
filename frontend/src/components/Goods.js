/**
 * Created by 黄晶晶 on 2018-04-09.
 */
import React, {Component} from "react";
import {connect} from "dva";
import {Link} from "dva/router";
import styles from "./Goods.less";
import { Icon, message } from "antd";

import TOOL from '../utils/tools.js'
class Goods extends Component {

  constructor(props, context) {
    super(props);
    this.state = {
      nowId: 1
    }
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

  addActiveStyle(e) {
    const button = e.target.offsetParent
    const isCollect = button.getAttribute('data-isCollect')
    if(isCollect==="yes"){
      message.warn('已移除收藏',1)
      button.setAttribute("data-isCollect","no")
    }else{
      message.success('收藏成功',1)
      button.setAttribute("data-isCollect","yes")
    }
  }

  render() {
    const {goodsData} = this.props;
    return (
      <div className={styles.wrap}>
        <Link to={{
          pathname: '/detail/id=' + goodsData.id,
          state: {
            data: goodsData
          }
        }}>
          <div className={styles.image}>
            <img alt="" src={goodsData.image}/>
          </div>
        </Link>
        <p className={styles.name}>{goodsData.name}</p>
        <div className={styles.button}>
          <span className={styles.price}><label>¥</label>{goodsData.price}
            <del className={styles.originalPrice}> ¥{goodsData.originalPrice}</del>
          </span>
          <button className={styles.buy} data-isCollect="no">
            <Icon type="heart-o" style={{color: '#EF2751', fontSize: '16px'}} onClick = {(e) => this.addActiveStyle(e)}/>
            <Icon type="heart" style={{color: '#EF2751', fontSize: '16px'}} onClick = {(e) => this.addActiveStyle(e)}/>
             <Icon type="shopping-cart" style={{color: '#EF2751', fontSize: '20px'}} onClick={(e) => this.addToCart(e,goodsData)}/>
          </button>
        </div>
      </div>
    );
  }
}
;

Goods.propTypes = {};
function mapStateToProps({shopCart}) {
  return shopCart
}
export default connect(mapStateToProps)(Goods);
