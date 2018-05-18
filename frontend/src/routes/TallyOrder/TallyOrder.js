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
import {Checkbox, Input, InputNumber, Modal, notification, Select} from "antd";
import city from "../../utils/city.js";
import {QRCode} from "../../assets";

const Option = Select.Option;
const {TextArea} = Input;

class TallyOrder extends Component {

  constructor(props) {
    super(props);
    let chooseProducts = JSON.parse(window.localStorage[window.localStorage.userName + "Buy"] || '[]');
    this.state = {
      addressIndex: 0,
      addAddress: 0,
      address: JSON.parse(window.localStorage[window.localStorage.userName + "Address"] || '[]'),
      chooseProducts: chooseProducts.map(function (ele, index) {
        ele.checked = true;
        ele.count = 1;
        return ele;
      }),
      province: city,
      city: [],
      area: [],
      fukuanVisible: false
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }

  addAddress() {
    this.setState({
      addAddress: !this.state.addAddress,
    })
  }

  numberOnChange(index, value) {
    let newArr = this.state.chooseProducts.slice();
    newArr[index].count = value;
    this.setState({
      chooseProducts: newArr
    })
  }

  checkboxOnChange(index, e) {
    let newArr = this.state.chooseProducts.slice(); //复制一个数组
    newArr[index].checked = e.target.checked;
    this.setState({
      chooseProducts: newArr
    })
  }

  selProvince(value) {
    const city = this.state.province.find(ele => ele.name === value);
    this.setState({
      city: city.children,
      provinceTxt: value
    })

  }

  selCity(value) {
    const area = this.state.city.find(ele => ele.name === value);
    this.setState({
      area: area.children,
      cityTxt: value
    })
  }

  selArea(value) {
    this.setState({
      areaTxt: value
    })
  }

  saveAddress() {
    const userName = this.refs.userName.input.value;
    const phone = this.refs.phone.input.value;
    const address = this.state.provinceTxt + this.state.cityTxt + this.state.areaTxt;
    const detailAdd = this.refs.detailAdd.textAreaRef.value;

    let addressArr = this.state.address.slice();
    addressArr.push({userName, phone, address, detailAdd});

    this.setState({
      address: addressArr
    });

    notification.success({
      message: "添加成功",
      duration: 2
    });

    window.localStorage[window.localStorage.userName + "Address"] = JSON.stringify(addressArr);
    this.addAddress()
  }

  switchAdd(addressIndex) {
    this.setState({
      addressIndex: addressIndex
    })
  }

  render() {

    let balancePro = this.state.chooseProducts.filter(function (ele) {
      return ele.checked
    });

    let sumPrice = balancePro.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.count
    }, 0);

    const SelectProps = {
      size: "small",
      style: {
        width: 120
      }
    };

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
                  <div className={styles.box + ' ' + (this.state.addressIndex === 0 ? styles.active : "")}
                       onClick={() => this.switchAdd(0)}>
                    <h2>周孟海</h2>
                    <p>中和街道新怡花园A区7栋1单元</p>
                    <p>四川省成都市双流县</p>
                    <p>15687942675</p>
                    <a>编辑</a>
                  </div>
                  <div className={styles.box + ' ' + (this.state.addressIndex === 1 ? styles.active : "")}
                       onClick={() => this.switchAdd(1)}>
                    <h2>黄晶晶</h2>
                    <p>高新软件园C区2栋1206室</p>
                    <p>福建省厦门市湖里县</p>
                    <p>15984634875</p>
                    <a>编辑</a>
                  </div>
                  {
                    this.state.address.map((elem, index) => {
                      return (<div onClick={() => this.switchAdd(index + 2)}
                                   className={styles.box + ' ' + (this.state.addressIndex === index + 2 ? styles.active : "")}>
                        <h2>{elem.userName}</h2>
                        <p>{elem.detailAdd}</p>
                        <p>{elem.address}</p>
                        <p>{elem.phone}</p>
                        <a>编辑</a>
                      </div>);
                    })
                  }
                </div>
                <button className={styles.btn} onClick={() => this.addAddress()}>＋使用新地址</button>
                {
                  !this.state.addAddress ? "" :
                    <table className={styles.formWrap}>
                      <tr>
                        <td className={styles.name}>省市区：</td>
                        <td>
                          <Select {...SelectProps} onChange={(value) => this.selProvince(value)}>
                            {
                              this.state.province.map((elem, index) => {
                                return <Option value={elem.name}>{elem.name}</Option>;
                              })
                            }
                          </Select>&nbsp;
                          <Select {...SelectProps} onChange={(value) => this.selCity(value)}>
                            {
                              this.state.city.map((elem, index) => {
                                return <Option value={elem.name}>{elem.name}</Option>;
                              })
                            }
                          </Select>&nbsp;
                          <Select {...SelectProps} onChange={(value) => this.selArea(value)}>
                            {
                              this.state.area.map((elem, index) => {
                                return <Option value={elem.name}>{elem.name}</Option>;
                              })
                            }
                          </Select>
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.name}>邮政编码：</td>
                        <td><Input size="small" style={{width: 200}} placeholder="请输入6位数字"/></td>
                      </tr>
                      <tr>
                        <td className={styles.name}>街道地址：</td>
                        <td>
                          <TextArea ref="detailAdd" rows={4}/>
                          <p>街道地址最少5个字，最多30个字</p>
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.name}>收货人姓名：</td>
                        <td><Input ref="userName" size="small" style={{width: 200}} placeholder="请输入您的姓名"/></td>
                      </tr>
                      <tr>
                        <td className={styles.name}>手机号码：</td>
                        <td><Input ref="phone" size="small" style={{width: 200}} placeholder="请输入11位手机号"/></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <button onClick={() => this.saveAddress()}>确认地址</button>
                          <button className={styles.cancel} onClick={() => this.addAddress()}>取消</button>
                        </td>
                      </tr>
                    </table>
                }
              </div>
            </div>
            <div className={styles.goodsList}>
              <h1>2、商品清单</h1>
              <table>
                <thead>
                <tr>
                  <th></th>
                  <th>商品</th>
                  <th>数量</th>
                  <th>单价</th>
                  <th>小计</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.state.chooseProducts.map((ele, index) => {
                    return (<tr key={index}>
                      <td className={styles.checkbox}>
                        <Checkbox onChange={e => this.checkboxOnChange(index, e)} checked={ele.checked}/>
                      </td>
                      <td className={styles.goods}>
                        <img alt="" src={ele.image}/>
                        <div className={styles.text}>
                          <h2>{ele.name}</h2>
                          <span>颜色：</span>
                          <span>{ele.colour[0].col} </span>
                          <span> 规格：</span>
                          <span>{ele.size}</span>
                        </div>
                      </td>
                      <td>
                        <InputNumber min={1} max={10} defaultValue={1}
                                     onChange={(num) => this.numberOnChange(index, num)}/>
                      </td>
                      <td>¥{ele.price}</td>
                      <td>¥{ele.price * ele.count}</td>
                    </tr>)
                  })
                }
                </tbody>
              </table>
            </div>
            <div className={styles.shopList}>
              <table>
                <tr>
                  <td>共<i> {balancePro.length} </i>件商品，商品总金额：</td>
                  <td className={styles.price}>¥ {sumPrice.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>总运费：</td>
                  <td className={styles.price}>¥ {sumPrice === 0 ? 0 : 10}</td>
                </tr>
                <tr>
                  <td>应该付总额：</td>
                  <td className={styles.price}>¥ {(sumPrice === 0 ? 0 : sumPrice + 10).toFixed(2)}</td>
                </tr>
              </table>
            </div>
            <div className={styles.buyButton}>
              <p>总计: <span> <i>¥ </i>{(sumPrice === 0 ? 0 : sumPrice + 10).toFixed(2)}</span></p>
              <button onClick={() => this.setState({fukuanVisible: true})}>立即付款</button>
              <Modal
                // width={1220}
                closable={false}
                footer={null}
                visible={this.state.fukuanVisible}
                onCancel={() => this.setState({fukuanVisible: false})}>
                <div className={styles.payment}>
                  <div className={styles.payMoney}>
                    <span>实付金额：</span>
                    <span>¥ {(sumPrice === 0 ? 0 : sumPrice + 10).toFixed(2)}</span>
                  </div>
                  <div className={styles.QRCode}>
                    <img src={QRCode} alt="付款二维码"/>
                    <div className={styles.reminder}>
                      <p>打开手机支付宝</p>
                      <p>点击扫一扫付款</p>
                    </div>
                  </div>
                </div>
              </Modal>
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
