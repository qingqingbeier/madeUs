/**
 * Created by 黄晶晶 on 2018-04-24.
 */
import React, {Component} from "react";
import {connect} from "dva";
import styles from "./Detail.less";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideRight from "../../components/SideRight";
import {InputNumber, Tabs, notification} from "antd";
import TOOL from '../../utils//tools.js'

const TabPane = Tabs.TabPane;

function onChange(value) {
  console.log('changed', value);
}

function callback(key) {
  console.log(key);
}

class Detail extends Component {

  static defaultProps = {
    location: {
      state: {
        data: {}
      }
    },
  };

  static propsTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      colour: 0,
    }
  }

  colourCheck(value) {
    this.setState({
      colour: value,
    })
  }

  componentDidMount() {
    document.documentElement.scrollTop = document.body.scrollTop = 0
  }

  addToCart(e,videoData){
    TOOL.addCartAni(e);
    this.props.dispatch({
      type:"shopCart/addToCart",
      payload:{
        goodsData:videoData
      }
    })
  }

  goBuy(buyData){
    if(!window.localStorage.userName){
      notification.error({
        message: "未登录",
        description: "请先登陆账号",
        duration: 3
      });
      return;
    }
    window.localStorage[window.localStorage.userName+"Buy"] = JSON.stringify([buyData]);
    this.props.history.push({
      pathname:"/tallyOrder"
    })
  }

  render() {
    let data = {};

    if (!this.props.location.state) {
      data = JSON.parse(window.localStorage.productData);
    } else {
      data = this.props.location.state.data;
      window.localStorage.productData = JSON.stringify(data)
    }
    return (
      <div>
        <Header/>
        <SideRight/>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.left}>
              <img alt="" src={data.image}/>
            </div>
            <div className={styles.right}>
              <h1>{ data.title }</h1>
              <h2>{ data.subTitle }</h2>
              <div className={styles.price}>
                <p><strong>{ data.price }</strong>
                  <del>¥ { data.originalPrice }</del>
                </p>
                <p><label>活动</label><span>{ data.activity}</span></p>
              </div>
              <ul className={styles.option}>
                <li className={styles.freight}>
                  <h3>运费</h3>
                  <div className={styles.address}>
                  </div>
                  <p className={styles.money}>¥10</p>
                </li>
                <li className={styles.colour}>
                  <h3>颜色</h3>
                  {data.colour.map((ele, index) => {
                      return (
                        <div className={this.state.colour === index ? styles.item + " " + styles.active : styles.item}
                             onClick={() => this.colourCheck(index)}>
                          <img alt="" src={data.image}/>
                          <span>{ ele.col }</span>
                        </div>
                      )
                    }
                  )}
                </li>
                <li className={styles.size}>
                  <h3>规格</h3>
                  <div className={styles.item + " " + styles.active}>{ data.size }</div>
                </li>
                <li className={styles.size}>
                  <h3>数量</h3>
                  <InputNumber min={1} max={10} defaultValue={1} onChange={onChange}/>
                </li>
                <li className={styles.button}>
                  <h3>&nbsp;</h3>
                  <button onClick={()=>this.goBuy(data)}>立即购买</button>
                  <button onClick={(e)=>this.addToCart(e,data)}>加入购物车</button>
                </li>
                <li className={styles.service}>
                  <h3>服务保障</h3>
                  <p>
                    <span>七天无理由退货</span>
                    <span>48小时发货</span>
                    <span>退货补运费</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.bottom}>
            <Tabs onChange={callback} type="card">
              <TabPane tab="商品详情" key="1">
                <div className={styles.parameter}>
                  <h2>品牌名称：<span>{ data.parameter.brandName }</span></h2>
                  <table>
                    <thead>
                    <tr>
                      <th>产品参数：</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>产品名称：</td>
                      <td>{ data.parameter.proName }</td>
                      <td>功效：</td>
                      <td>{ data.parameter.effect }</td>
                    </tr>
                    <tr>
                      <td>颜色分类：</td>
                      <td>{ data.parameter.colour }</td>
                      <td>净含量：</td>
                      <td>{ data.parameter.size }</td>
                    </tr>
                    <tr>
                      <td>适合肤质</td>
                      <td>{ data.parameter.fitFace }</td>
                      <td>保质期：</td>
                      <td>{ data.parameter.time }</td>
                    </tr>
                    <tr>
                      <td>上市时间：</td>
                      <td>{ data.parameter.year }</td>
                      <td>是否进口：</td>
                      <td>{ data.parameter.imported }</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <img alt="" src={data.detailImg}/>
              </TabPane>
              <TabPane tab="累计评价" key="2">Content of Tab Pane 2</TabPane>
            </Tabs>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

Detail.propTypes = {};
function mapStateToProps({ shopCart }) {
  return shopCart
}
export default connect(mapStateToProps)(Detail);
