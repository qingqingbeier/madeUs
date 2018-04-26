/**
 * Created by 黄晶晶 on 2018-04-25.
 */

import React, { Component }from "react";
import {connect} from "dva";
import styles from "./SideRight.less";
import {headPort} from "../assets/index";
import {Badge, Icon, Tooltip} from "antd";

const text =
  <div className={styles.account}>
    <div className={styles.headPort}><img alt="" src={headPort}/></div>
    <span>用户名：</span>
    <span>黄晶晶</span>
  </div>;
const text2 = <span>我的钱包</span>;
const text3 = <span>我的收藏</span>;
const text4 = <span>我的足迹</span>;

class SideRight extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showCart:false
    };
  }

  showCart(){
    this.setState({
      showCart:!this.state.showCart
    })
  }
  showOrder(){
    this.setState({
      showOrder:!this.state.showOrder
    })
  }

  render() {
    return (
      <div className={styles.wrapBox}>
        <div className={this.state.showCart?styles.hideShopCart+" "+styles.showShopCart:styles.hideShopCart}>
          <div className="" style={{"borderBottom":"1px solid #CCC"}}>
            <h2>购物车</h2>
            <span>关闭按钮</span>
          </div>
          {this.props.cartData.length===0
            ?<h1>购物车空空如也</h1>
            :<ul className={styles.cartProductList}>
              {this.props.cartData.map((ele,index) => {
                return (<li key={index}>
                  <img src={ele.image} alt=""/>
                  <h2>{ele.name}</h2>
                  <p>￥{ele.price}</p>
                </li>)
              })}
            </ul>
          }
        </div>
        <div className={styles.wrap}>
          <ul>
            <li>
              <Tooltip placement="left" title={text}>
                <a><Icon type="user"/></a>
              </Tooltip>
            </li>
            <li className={styles.shopCartLi} onClick={()=>this.showCart()}>
              <Badge count={this.props.cartData.length||"o"} offset={[84,-5]}>
                <a className={styles.shopCartIcon}>
                  <Icon type="shopping-cart" style={{fontSize: 18, color: '#EF2751'}}/>
                  <span>购物车</span>
                </a>
              </Badge>
            </li>
            <li>
              <Tooltip placement="left" title={text2}>
                <a><Icon type="pay-circle-o"/></a>
              </Tooltip>
            </li>
            <li>
              <Tooltip placement="left" title={text3}>
                <a><Icon type="heart-o"/></a>
              </Tooltip>
            </li>
            <li>
              <Tooltip placement="left" title={text4}>
                <a><Icon type="clock-circle-o"/></a>
              </Tooltip>
            </li>
          </ul>
          <div className={styles.goTop}>
            <a onClick={() => document.body.scrollTop=0 }>▲<br/>Top</a>
          </div>
        </div>
      </div>
    );
  }
}
;

SideRight.propTypes = {};

function mapStateToProps({ shopCart }) {
  return shopCart
}
export default connect(mapStateToProps)(SideRight);