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
import { faceData, lipsData, otherData, eyesData, brandShopData } from "../../mock/data.js";
import { Breadcrumb, Menu, Dropdown, Icon} from 'antd';
const sumArrData = faceData.concat(lipsData,otherData,eyesData,brandShopData[0].goods,brandShopData[1].goods,brandShopData[2].goods,brandShopData[3].goods,brandShopData[4].goods,brandShopData[5].goods);

class GoodsList extends Component{

  constructor(props) {
    super(props);
    const { source, type } = this.props.location.state||{};
    this.homeMenu = (
      <Menu onClick={(type)=>this.onClickMenu(type,source)}>
        <Menu.Item key="face">
          <a href="javascript:">底妆</a>
        </Menu.Item>
        <Menu.Item key="eyes">
          <a href="javascript:">眼妆</a>
        </Menu.Item>
        <Menu.Item key="lips">
          <a href="javascript:">唇妆</a>
        </Menu.Item>
        <Menu.Item key="other">
          <a href="javascript:">其他</a>
        </Menu.Item>
      </Menu>
    );
    this.remenMenu = (
      <Menu onClick={(type)=>this.onClickMenu(type,source)}>
        <Menu.Item key="bb">
          <a href="javascript:">BB霜</a>
        </Menu.Item>
        <Menu.Item key="geli">
          <a href="javascript:">隔离霜</a>
        </Menu.Item>
        <Menu.Item key="jiemao">
          <a href="javascript:">睫毛膏</a>
        </Menu.Item>
        <Menu.Item key="kouhong">
          <a href="javascript:">口红</a>
        </Menu.Item>
        <Menu.Item key="saihong">
          <a href="javascript:">腮红</a>
        </Menu.Item>
        <Menu.Item key="yanying">
          <a href="javascript:">眼影</a>
        </Menu.Item>
        <Menu.Item key="qita">
          <a href="javascript:">其他</a>
        </Menu.Item>
      </Menu>
    );
    this.brandMenu = (
      <Menu onClick={(type)=>this.onClickMenu(type,source)}>
        <Menu.Item key={0}>
          <a href="javascript:">悦诗风吟</a>
        </Menu.Item>
        <Menu.Item key={1}>
          <a href="javascript:">阿芙</a>
        </Menu.Item>
        <Menu.Item key={2}>
          <a href="javascript:">兰芝</a>
        </Menu.Item>
        <Menu.Item key={3}>
          <a href="javascript:">自然堂</a>
        </Menu.Item>
        <Menu.Item key={4}>
          <a href="javascript:">美肤宝</a>
        </Menu.Item>
        <Menu.Item key={5}>
          <a href="javascript:">一叶子</a>
        </Menu.Item>
      </Menu>
    );
    this.Menu = this.getMenu(source);
    this.state = {
      nowGoodsList:this.getData(source,type)
    };
  }

  onClickMenu(type='face',source='homePage'){
    this.setState({
      nowGoodsList:this.getData(source,type.key)
    })
  }

  getData(source='homePage',type='face'){
    if(source==="homePage"){
      switch(type){
        case "lips":return lipsData;
        case "eyes":return eyesData;
        case "face":return faceData;
        case "other":return otherData;
      }
    }
    if(source==="remen"){
      return sumArrData.filter((elem,index)=>{
        return elem.belongTo === type;
      });
    }
    if(source==="brand"){
      return brandShopData[type].goods
    }
  }

  componentDidMount(){
    document.documentElement.scrollTop = document.body.scrollTop = 0
  }

  getMenu(source='homePage'){
    if(source==="homePage"){
      return this.homeMenu
    }
    if(source==="remen"){
      return this.remenMenu
    }
    if(source==="brand"){
      return this.brandMenu
    }
  }

  render () {
    return (
      <div className={styles.normal}>
        <SideRight/>
        <Header nowActiveKey="key8"/>
        <div className={styles.breadcrumb}>
          <Breadcrumb>
            <Breadcrumb.Item><a href="">首页</a></Breadcrumb.Item>
            <Breadcrumb.Item>
              <Dropdown overlay={this.Menu}>
                <a className="ant-dropdown-link" href="javascript:;">
                  选择类型<Icon type="down" />
                </a>
              </Dropdown>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles.content}>
          {
            this.state.nowGoodsList.map((elem,index)=>{
              return (
                <Goods key={index} goodsData={elem}/>
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
