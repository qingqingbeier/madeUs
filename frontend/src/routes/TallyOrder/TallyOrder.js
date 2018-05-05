/**
 * Created by 黄晶晶 on 2018-05-03.
 */

import React, {Component} from "react";
import {connect} from "dva";
import styles from "./TallyOrder.less";
import img from "../../assets/man_3.png";
import SideRight from "../../components/SideRight";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Steps, Checkbox, InputNumber} from "antd";

const Step = Steps.Step;

function checkboxOnChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function numberOnChange(value) {
  console.log('changed', value);
}


class TallyOrder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addAddress: 0,
    };

  }

  componentDidMount() {
  }

  addAddress() {
    this.setState({
      addAddress: !this.state.addAddress,
    })
  }

  render() {
    return (
      <div className={styles.normal}>
        <SideRight/>
        <div className={styles.wrap}>
          <div className={styles.header}>
            {/*<div className={styles.progress}>*/}
              {/*<Steps size="small">*/}
                {/*<Step title="第一步" />*/}
                {/*<Step title="第二步" />*/}
                {/*<Step title="第三步" />*/}
              {/*</Steps>*/}
            {/*</div>*/}
            <Header/>
          </div>
          <div className={styles.content}>
            <div className={styles.address}>
              <h1>1、地址选择</h1>
              <div>
                <div className={styles.myAdr}>
                  <div className={styles.box + ' ' + styles.active}>
                    <h2>周孟海</h2>
                    <p>中和街道新怡花园A区7栋1单元</p>
                    <p>四川省成都市双流县</p>
                    <p>18782011247</p>
                    <a>编辑</a>
                  </div>
                  <div className={styles.box}>
                    <h2>周孟海</h2>
                    <p>中和街道新怡花园A区7栋1单元</p>
                    <p>四川省成都市双流县</p>
                    <p>18782011247</p>
                    <a>编辑</a>
                  </div>
                </div>
                <button className={styles.btn} onClick={() => this.addAddress()}>＋使用新地址</button>
                <table className={styles.formWrap} style={{display: this.state.addAddress ? "table" : "none"}}>
                  <tr>
                    <td className={styles.name}>省市区：</td>
                    <td>地址组件</td>
                  </tr>
                  <tr>
                    <td className={styles.name}>邮政编码：</td>
                    <td><input></input></td>
                  </tr>
                  <tr>
                    <td className={styles.name}>街道地址：</td>
                    <td>
                      <textarea className={styles.street}></textarea>
                      <p>街道地址最少5个字，最多30个字</p>
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.name}>收货人姓名：</td>
                    <td><input></input></td>
                  </tr>
                  <tr>
                    <td className={styles.name}>手机号码：</td>
                    <td><input></input></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <button>确认地址</button>
                      <button className={styles.cancel} onClick={() => this.addAddress()}>取消</button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className={styles.goodsList}>
              <h1>2、商品清单</h1>
              <table>
                <thead>
                <tr>
                  <th> </th>
                  <th>商品</th>
                  <th>数量</th>
                  <th>单价</th>
                  <th>小计</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className={styles.checkbox}>
                    <Checkbox onChange={checkboxOnChange}/>
                  </td>
                  <td className={styles.goods}>
                    <img src={img}/>
                    <div className={styles.text}>
                      <h2>欧诗漫(OSM)小新同学美白寻梦手帐</h2>
                      <span>颜色：</span><span>自然色</span><span>规格：</span><span>20g</span>
                    </div>
                  </td>
                  <td>
                    <InputNumber min={1} max={10} defaultValue={1} onChange={numberOnChange} />
                  </td>
                  <td>¥226</td>
                  <td>¥226</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.shopList}>
              <table>
                <tr>
                  <td>共<i> 3 </i>件商品，商品总金额：</td>
                  <td className={styles.price}>¥ 226</td>
                </tr>
                <tr>
                  <td>总运费：</td>
                  <td className={styles.price}>¥ 10</td>
                </tr>
                <tr>
                  <td>应该付总额：</td>
                  <td className={styles.price}>¥ 236</td>
                </tr>
              </table>
            </div>
            <div className={styles.buyButton}>
              <p>总计: <span> <i>¥ </i>236</span></p>
              <button>立即付款</button>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

TallyOrder.propTypes = {};

export default connect()(TallyOrder);
