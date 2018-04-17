/**
 * Created by 黄晶晶 on 2018-04-12.
 */
import React, {Component} from 'react';
import { connect } from 'dva';
import styles from './MakeUpKit.less';
import  Header from '../components/Header';
import  VideoMdl from '../components/VideoMdl';
import Footer from '../components/Footer';
import { videoData } from '../mock/data';
import Swiper from 'swiper'

class IndexPage extends Component{

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  componentDidMount(){
    var elem = this.refs.swiperContainer;
    this.swiper = new Swiper(elem, {
      direction : 'vertical',
      mousewheel: true,
    });
  }

  render () {
    return (
      <div className={styles.normal}>
        <div className= {styles.head}> <Header/> </div>
        <div className={styles.swiper_container} ref="swiperContainer">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><VideoMdl videoData={videoData[2]}/></div>
            <div className="swiper-slide"><VideoMdl videoData={videoData[0]}/></div>
            <div className="swiper-slide"><VideoMdl videoData={videoData[1]}/></div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
