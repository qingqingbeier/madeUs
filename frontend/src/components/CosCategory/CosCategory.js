/**
 * Created by 黄晶晶 on 2018-04-16.
 */

import React from 'react'
import styles from './CosCategory.less'
import bb from './image/bb.jpg'
import geli from './image/geli.jpg'
import jiemaog from './image/jiemaog.jpg'
import kouh from './image/kouh.jpg'
import meifen from './image/meifen.jpg'
import saih from './image/saih.jpg'
import sanfen from './image/sanfen.jpg'
import xiur from './image/xiur.jpg'
import yany from './image/yany.jpg'
import taozh from './image/taozh.jpg'
import hufu from './image/hufu.jpg'
// import qita from './image/qita.jpg'
// import jiemian from './image/jiemian.jpg'
import shuazi from './image/shuazi.jpg'

const CosCategory = ({cosCategoryData}) => {
  return (
    <div className={styles.wrap}>
      <ul>
        <li>
          <div className={styles.image}>
            <img alt="" src={bb}/>
          </div>
          <h3>BB霜/粉底液</h3>
          <h4 className={styles.description}>foundation</h4>
        </li>
        <li>
          <div className={styles.image}>
            <img alt="" src={geli}/>
          </div>
          <h3>妆前乳/隔离</h3>
          <h4 className={styles.description}>SunBlock</h4>
        </li>
        <li>
          <div className={styles.image}>
            <img alt="" src={jiemaog}/>
          </div>
          <h3>眼线/睫毛膏</h3>
          <h4 className={styles.description}>Mascara</h4>
        </li>
        <li>
          <div className={styles.image}>
            <img alt="" src={kouh}/>
          </div>
          <h3>口红/唇膏</h3>
          <h4 className={styles.description}>Lipstick</h4>
        </li>
        <li>
          <div className={styles.image}>
            <img alt="" src={saih}/>
          </div>
          <h3>胭脂/腮红</h3>
          <h4 className={styles.description}>Blush</h4>
        </li>
        <li>
          <div className={styles.image}>
            <img alt="" src={sanfen}/>
          </div>
          <h3>粉饼/散粉</h3>
          <h4 className={styles.description}>Powder</h4>
        </li>
      </ul>
      <ul>
        <li>
          <div className={styles.image}>
            <img alt="" src={meifen}/>
          </div>
          <h3>眉笔/眉粉</h3>
          <h4>Eyebrow</h4>
        </li>
        <li>
          <div className={styles.image}>
            <img alt="" src={xiur}/>
          </div>
          <h3>高光/修容</h3>
          <h4>contour</h4>
        </li>
        <li>
          <div className={styles.image}>
            <img alt="" src={yany}/>
          </div>
          <h3>眼影</h3>
          <h4>eyelids</h4>
        </li>
        <li>
          <div className={styles.image}>
            <img alt="" src={taozh}/>
          </div>
          <h3>彩妆套装</h3>
          <h4>Complete</h4>
        </li>
        {/*<li>*/}
          {/*<div className={styles.image}>*/}
            {/*<img alt="" src={jiemian}/>*/}
          {/*</div>*/}
          {/*<h3>洁面洗护</h3>*/}
          {/*<h4>Cleansing</h4>*/}
        {/*</li>*/}
        <li>
          <div className={styles.image}>
            <img alt="" src={hufu}/>
          </div>
          <h3>水乳护肤</h3>
          <h4>skincare</h4>
        </li>
        <li className={styles.other}>
          <div className={styles.image}>
            <img alt="" src={shuazi}/>
          </div>
          <h3>其它</h3>
          <h4>other</h4>
        </li>
      </ul>
    </div>
  );
};

CosCategory.propTypes = {
};

export default CosCategory;

