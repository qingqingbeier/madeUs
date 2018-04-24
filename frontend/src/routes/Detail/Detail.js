/**
 * Created by 黄晶晶 on 2018-04-24.
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './Detail.less';
import {face_01, face_01_specs_01, face_01_specs_02, face_01_detail} from "../../mock/data";
import  Header from '../../components/Header';
import Footer from '../../components/Footer';
import { InputNumber, Tabs } from 'antd';

const TabPane = Tabs.TabPane;

function onChange(value) {
  console.log('changed', value);
}

function callback(key) {
  console.log(key);
}

class Detail extends Component{

  componentWillMount(){
    // console.log(this.props.location.state.goodId);
  }

  render() {
    return (
      <div>
        <Header/>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.left}>
              <img src={face_01}/>
            </div>
            <div className={styles.right}>
              <h1>玛丽黛佳气垫BB霜 持久保湿遮瑕提亮肤色裸妆学生粉底液cc霜正品</h1>
              <h2>买就送唇釉3支装 领券立减20</h2>
              <div className={styles.price}>
                <p><strong>199</strong>
                  <del>¥299</del>
                </p>
                <p><label>满减</label><span>满298元减80元,上不封顶</span></p>
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
                  <div className={styles.item + " " + styles.active}>
                    <img src={face_01_specs_01}/>
                    <span>01亮肤色</span>
                  </div>
                  <div className={styles.item} onClick = {()=>colourCheck()}>
                    <img src={face_01_specs_02}/>
                    <span>02自然色</span>
                  </div>
                </li>
                <li className={styles.size}>
                  <h3>规格</h3>
                  <div className={styles.item + " " + styles.active}>20g</div>
                </li>
                <li className={styles.size}>
                  <h3>数量</h3>
                  <InputNumber min={1} max={10} defaultValue={3} onChange={onChange}/>
                </li>
                <li className={styles.button}>
                  <h3></h3>
                  <button>立即购买</button>
                  <button>加入购物车</button>
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
                  <h2>品牌名称：<span>MARIE DALGAR/玛丽黛佳</span></h2>
                  <table>
                    <thead>
                    <th>产品参数：</th>
                    </thead>
                    <tbody>
                    <tr>
                      <td>产品名称：</td>
                      <td>MARIE DALGAR/玛丽黛佳 无感大师底妆水域亮肤气垫霜</td>
                      <td>功效：</td>
                      <td>美白,均匀肤色,遮瑕,保湿,提亮肤色</td>
                    </tr>
                    <tr>
                      <td>颜色分类：</td>
                      <td>01亮肤(1+1) 02自然(1+1)</td>
                      <td>净含量：</td>
                      <td>20g</td>
                    </tr>
                    <tr>
                      <td>适合肤质</td>
                      <td>任何肤质</td>
                      <td>保质期：</td>
                      <td>3年</td>
                    </tr>
                    <tr>
                      <td>上市时间：</td>
                      <td>2017</td>
                      <td>是否进口：</td>
                      <td>否</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <img src={face_01_detail}/>
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

Detail.propTypes = {
};

export default connect()(Detail)
