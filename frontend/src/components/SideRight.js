/**
 * Created by 黄晶晶 on 2018-04-25.
 */

import React, {Component} from "react";
import {connect} from "dva";
import styles from "./SideRight.less";
import {Badge, Button, Icon, Modal, notification, Tooltip} from "antd";
import Login from "./Login.js";
import {headPort, yay} from "../assets";

const text2 = <span>我的钱包</span>;
const text3 = <span>我的收藏</span>;
const text4 = <span>我的足迹</span>;
const innerWidth = window.innerWidth;

class SideRight extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      loginShow: false,
      loginOutBtnLoading: false,
      showContent: innerWidth > 768,
    };
  }

  delProduct(delIndex) {
    this.props.dispatch({
      type: 'shopCart/delProduct',
      payload: {
        delIndex: delIndex
      },
    })
  }

  showCart() {
    this.setState({
      showCart: !this.state.showCart
    })
  }

  showOrder() {
    this.setState({
      showOrder: !this.state.showOrder
    })
  }

  login(data, loginLoading, showMessage) {
    this.props.dispatch({
      type: 'user/login',
      payload: {
        ...data
      },
    }).then((data) => {
      loginLoading();
      showMessage(data);
      this.hideLogin()
    })
  }

  loginOut() {
    this.setState({
      loginOutBtnLoading: true
    });
    setTimeout(() => {
      notification.open({
        message: "退出成功",
        description: "您已推出登录",
        duration: 3
      });
      this.props.dispatch({type: 'user/logout'});
      this.setState({loginOutBtnLoading: false})
    }, 2000)
  }

  showLogin() {
    this.setState({
      loginShow: true
    })
  }

  hideLogin() {
    this.setState({
      loginShow: false
    })
  }

  //用户登录
  userCenter(userInfo) {
    if (userInfo.isLogin) {
      return (
        <div className={styles.account}>
          <div className={styles.headPort}>
            <img alt="头像" src={yay}/>
          </div>
          <div className={styles.section}>
            用户名: <a>{userInfo.user}</a>
          </div>
          <div className={styles.buttonWrap}>
            <Button>我的订单</Button>
            <Button loading={this.state.loginOutBtnLoading} onClick={() => this.loginOut()}>退出账户</Button>
          </div>
        </div>
      )
    } else {
      return (
        <div className={styles.account}>
          <div className={styles.headPort}>
            <img alt="头像" src={headPort}/>
          </div>
          <div className={styles.section}>
            你好，请<a onClick={() => this.showLogin()}> 登录 </a>或<a> 注册 </a>
          </div>
          <div className={styles.buttonWrap}>
            <Button>我的订单</Button>
            <Button>我的收藏</Button>
          </div>
        </div>
      )
    }
  }

  showContent() {
    console.log(1);
    this.setState({
      showContent: !this.state.showContent
    })
  }

  render() {
    let LoginPro = {
      login: this.login.bind(this)
    };
    return (
      <div>
        <div className={styles.extendIcon} onClick={() => this.showContent()}>
          <Icon type="ellipsis"/>
        </div>
        {
          !this.state.showContent ? ""
            : <div className={styles.wrap}>
            <ul className={styles.content}>
              <li>
                <Tooltip placement="left" title={() => this.userCenter(this.props.user)}>
                  <a><Icon type="user"/></a>
                </Tooltip>
              </li>
              <li className={styles.shopCartLi} onClick={() => this.showCart()}>
                <Badge count={this.props.shopCart.cartData.length || " "}>
                  <a className={styles.shopCartIcon}>
                    <Icon type="shopping-cart" style={{fontSize: 18, color: '#EF2751'}}/>
                    <span>购物车</span>
                  </a>
                </Badge>
              </li>
              <li>
                <Tooltip placement="left" title={text2}><a><Icon type="pay-circle-o"/></a></Tooltip>
              </li>
              <li>
                <Tooltip placement="left" title={text3}><a><Icon type="heart-o"/></a></Tooltip>
              </li>
              <li>
                <Tooltip placement="left" title={text4}><a><Icon type="clock-circle-o"/></a></Tooltip>
              </li>
            </ul>
            <div className={styles.goTop}>
              <a onClick={() => document.body.scrollTop = 0 }>▲<br/>Top</a>
            </div>

            <Modal
              closable={false}
              footer={null}
              onCancel={() => this.hideLogin()}
              visible={this.state.loginShow}>
              <Login  {...LoginPro}/>
            </Modal>
            <div
              className={this.state.showCart ? styles.hideShopCart + " " + styles.showShopCart : styles.hideShopCart}>
              <div className={styles.cartHeader}>
                <h1>购物车</h1>
              </div>
              {this.props.shopCart.cartData.length === 0
                ? <p>购物车空空如也</p>
                : <div className={styles.cartProductList}>
                  {this.props.shopCart.cartData.map((ele, index) => {
                    return (
                      <div key={index} data-index={index} className={styles.itemList}>
                        <img src={ele.image} alt=""/>
                        <h2>{ele.name}</h2>
                        <p className={styles.price}><i>¥</i>{ele.price}</p>
                        <span
                          className={styles.delProduct}
                          onClick={() => {
                            this.delProduct(index)
                          }}>
                        <Icon type="close-circle-o"/>
                      </span>
                      </div>
                    )
                  })
                  }
                  <div className={styles.cartBottom}>
                    <div>
                      <span>共 <i className={styles.number}>{this.props.shopCart.cartData.length}</i> 件商品</span>
                      <span className={styles.price}>
                        <i>¥ </i> {this.props.shopCart.cartData.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)}
                      </span>
                    </div>
                    <button>去结算</button>
                  </div>
                </div>
              }
            </div>
          </div>
        }
      </div>
    )
  }
}

SideRight.propTypes = {};

function mapStateToProps({shopCart, user}) {
  return {
    "shopCart": shopCart,
    "user": user
  }
}
export default connect(mapStateToProps)(SideRight);
