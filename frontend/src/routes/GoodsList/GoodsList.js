/**
 * Created by 黄晶晶 on 2018-05-11.
 */
import React, {Component} from 'react';
import { connect } from 'dva';
import styles from './GoodsList.less';
import  Header from '../../components/Header';
import SideRight from "../../components/SideRight";
import Footer from '../../components/Footer';
import Goods from '../../components/Goods';
import { otherData } from "../../mock/data.js";
import { Breadcrumb, Menu, Dropdown, Icon} from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">底妆</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">眼妆</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">唇妆</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">其他</a>
    </Menu.Item>
  </Menu>
);

class GoodsList extends Component{

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
  }

  render () {
    return (
      <div className={styles.normal}>
        <SideRight/>
        <Header nowActiveKey="key8"/>
        <div className={styles.breadcrumb}>
          <Breadcrumb>
            <Breadcrumb.Item><a href="">首页</a></Breadcrumb.Item>
            <Breadcrumb.Item><a href="">今日优选</a></Breadcrumb.Item>
            <Breadcrumb.Item>
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                  其他 <Icon type="down" />
                </a>
              </Dropdown>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles.content}>
          {
            otherData.map((elem,index)=>{
              return (
                <Goods key={index} goodsData={otherData[index]}/>
              )
            })
          }
        </div>
        <Footer/>
      </div>
    );
  }
}

GoodsList.propTypes = {
};

export default connect()(GoodsList);
