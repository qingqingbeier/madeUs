/**
 * Created by 黄晶晶 on 2018-04-25.
 */

import React, {Component} from "react";
import {connect} from "dva";
import styles from "./SideRight.less";
import {Badge, Button, Icon, Modal, notification, Tooltip} from "antd";
import Login from "./Login.js";
import Rigister from './Register.js'
import {withRouter} from "dva/router";
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
      showCollect:false,
      loginShow: false,
      registerShow:false,
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

  delCollect(goodsData) {
    this.props.dispatch({
      type: 'shopCart/delCollect',
      payload: {
        goodsData: goodsData
      },
    })
  }

  showCart() {
    if(this.state.showCollect&&!this.state.showCart){
      this.setState({
        showCollect:false
      })
    }
    this.setState({
      showCart: !this.state.showCart
    })
  }

  showCollect(){
    if(!this.state.showCollect&&this.state.showCart){
      this.setState({
        showCart:false
      })
    }
    this.setState({
      showCollect:!this.state.showCollect
    })
  }

  showOrder() {
    this.setState({
      showOrder: !this.state.showOrder
    })
  }

  //点击登录按钮过后
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

  rigister(data, loginLoading, showMessage) {
  }

  loginOut() {
    this.setState({
      loginOutBtnLoading: true
    });

    setTimeout(() => {
      notification.open({
        message: "退出成功",
        description: "您已退出登录",
        duration: 3
      });

      this.props.dispatch({type: 'user/logout'});

      this.setState({loginOutBtnLoading: false})
    }, 2000)
  }

  showRigister(){
    this.setState({
      registerShow: true
    })
  }
  hideRigister(){
    this.setState({
      registerShow: false
    })
  }

  goRegister(){
    this.setState({
      registerShow: true,
      loginShow:false
    })
  }

  goLogin(){
    this.setState({
      registerShow: false,
      loginShow:true
    })
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

  //去结算
  goBuy() {
    if (!window.localStorage.userName) {
      notification.error({
        message: "未登录",
        description: "请先登陆账号",
        duration: 3
      });
      return;
    }

    window.localStorage[window.localStorage.userName + "Buy"] = window.localStorage[window.localStorage.userName + "Cart"];
    this.props.history.push({
      pathname: "/tallyOrder"
    })
  }

  //用户登录
  userCenter(userInfo) {
    if (userInfo.isLogin) {
      return (
        <div className={styles.account}>
          <div className={styles.headPort}>
            <img alt="头像" src={headPort}/>
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
            <img alt="头像" src={yay}/>
          </div>
          <div className={styles.section}>
            你好，请<a href="javascript:" onClick={() => this.showLogin()}> 登录 </a>或<a href="javascript:" onClick={() => this.showRigister()}> 注册 </a>
          </div>
          <div className={styles.buttonWrap}>
            <Button>我的订单</Button>
            <Button onClick={()=>this.showCollect()}>我的收藏</Button>
          </div>
        </div>
      )
    }
  }

  showContent() {
    this.setState({
      showContent: !this.state.showContent
    })
  }

  render() {
    let LoginPro = {
      login: this.login.bind(this),
      goRegister: this.goRegister.bind(this),
    };

    let RigisterPro = {
      rigister: this.rigister.bind(this),
      goLogin: this.goLogin.bind(this),
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
                <Tooltip placement="left" title={() => this.userCenter(this.props.user)} trigger={innerWidth > 768? "hover" : "click" }>
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
                <Tooltip placement="left" title={text2} trigger={innerWidth > 768? "hover" : "click" }><a><Icon type="pay-circle-o"/></a></Tooltip>
              </li>
              <li onClick={()=>this.showCollect()}>
                <Tooltip placement="left" title={text3} trigger={innerWidth > 768? "hover" : "click" }><a><Icon type="heart-o"/></a></Tooltip>
              </li>
              <li>
                <Tooltip placement="left" title={text4} trigger={innerWidth > 768? "hover" : "click" }><a><Icon type="clock-circle-o"/></a></Tooltip>
              </li>
            </ul>
            <div className={styles.goTop} onClick={() => {
              document.documentElement.scrollTop = document.body.scrollTop = 0
            }}>
              <a src="javascript:;">▲<br/>Top</a>
            </div>

            <Modal
              closable={false}
              footer={null}
              onCancel={() => this.hideLogin()}
              visible={this.state.loginShow}>
              <Login  {...LoginPro}/>
            </Modal>

            <Modal
              closable={false}
              footer={null}
              onCancel={() => this.hideRigister()}
              visible={this.state.registerShow}>
              <Rigister  {...RigisterPro}/>
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
                        <i>¥ </i> {Math.round(this.props.shopCart.cartData.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0) * 100) / 100}
                      </span>
                    </div>
                    <button onClick={() => this.goBuy()}>去结算</button>
                  </div>
                </div>
              }
            </div>
            <div
              className={this.state.showCollect ? styles.hideShopCart + " " + styles.showShopCart : styles.hideShopCart}>
              <div className={styles.cartHeader}>
                <h1>收藏夹</h1>
              </div>
              {this.props.shopCart.collectData.length === 0
                ? <p>你还什么都没有收藏</p>
                : <div className={styles.cartProductList}>
                  {this.props.shopCart.collectData.map((ele, index) => {
                    return (
                      <div key={index} data-index={index} className={styles.itemList}>
                        <img src={ele.image} alt=""/>
                        <h2>{ele.name}</h2>
                        <p className={styles.price}><i>¥</i>{ele.price}</p>
                        <span
                          className={styles.delProduct}
                          onClick={() => {
                            this.delCollect(ele)
                          }}>
                        <Icon type="close-circle-o"/>
                      </span>
                      </div>
                    )
                  })
                  }
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
export default withRouter(connect(mapStateToProps)(SideRight));
