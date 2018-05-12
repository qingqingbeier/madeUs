/**
 * Created by 黄晶晶 on 2018-04-16.
 */

import React from 'react'
import { Link } from "dva/router"
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
import shuazi from './image/shuazi.jpg'

const CosCategory = ({cosCategoryData}) => {
  return (
    <div className={styles.wrap}>
      <ul>
        <Link to={{
          pathname: '/goodsList',
          state: {
            source:"remen",
            type:"bb"
          }
        }}>
          <li>
            <div className={styles.image}>
              <img alt="" src={bb}/>
            </div>
            <h3>BB霜/粉底液</h3>
            <h4 className={styles.description}>foundation</h4>
          </li>
        </Link>
        <Link to={{
          pathname: '/goodsList',
          state: {
            source:"remen",
            type:"geli"
          }
        }}>
          <li>
            <div className={styles.image}>
              <img alt="" src={geli}/>
            </div>
            <h3>妆前乳/隔离</h3>
            <h4 className={styles.description}>SunBlock</h4>
          </li>
        </Link>
        <Link to={{
          pathname: '/goodsList',
          state: {
            source:"remen",
            type:"jiemao"
          }
        }}>
          <li>
            <div className={styles.image}>
              <img alt="" src={jiemaog}/>
            </div>
            <h3>眼线/睫毛膏</h3>
            <h4 className={styles.description}>Mascara</h4>
          </li>
        </Link>
        <Link to={{
          pathname: '/goodsList',
          state: {
            source:"remen",
            type:"kouhong"
          }
        }}>
          <li>
            <div className={styles.image}>
              <img alt="" src={kouh}/>
            </div>
            <h3>口红/唇膏</h3>
            <h4 className={styles.description}>Lipstick</h4>
          </li>
        </Link>
        <Link to={{
          pathname: '/goodsList',
          state: {
            source:"remen",
            type:"saihong"
          }
        }}>
          <li>
            <div className={styles.image}>
              <img alt="" src={saih}/>
            </div>
            <h3>胭脂/腮红</h3>
            <h4 className={styles.description}>Blush</h4>
          </li>
        </Link>
        <Link to={{
          pathname: '/goodsList',
          state: {
            source:"remen",
            type:"sanfen"
          }
        }}>
          <li>
            <div className={styles.image}>
              <img alt="" src={sanfen}/>
            </div>
            <h3>粉饼/散粉</h3>
            <h4 className={styles.description}>Powder</h4>
          </li>
        </Link>
      </ul>
      <ul>
        <Link to={{
          pathname: '/goodsList',
          state: {
            source:"remen",
            type:"meifen"
          }
        }}>
          <li>
            <div className={styles.image}>
              <img alt="" src={meifen}/>
            </div>
            <h3>眉笔/眉粉</h3>
            <h4>Eyebrow</h4>
          </li>
        </Link>
        <Link to={{
          pathname: '/goodsList',
          state: {
            source:"remen",
            type:"xiur"
          }
        }}>
          <li>
            <div className={styles.image}>
              <img alt="" src={xiur}/>
            </div>
            <h3>高光/修容</h3>
            <h4>contour</h4>
          </li>
        </Link>
        <Link to={{
          pathname: '/goodsList',
          state: {
            source:"remen",
            type:"yanying"
          }
        }}>
          <li>
            <div className={styles.image}>
              <img alt="" src={yany}/>
            </div>
            <h3>眼影</h3>
            <h4>eyelids</h4>
          </li>
        </Link>
        <Link to={{
          pathname: '/goodsList',
          state: {
            source:"remen",
            type:"taozh"
          }
        }}>
          <li>
            <div className={styles.image}>
              <img alt="" src={taozh}/>
            </div>
            <h3>彩妆套装</h3>
            <h4>Complete</h4>
          </li>
        </Link>
        <Link to={{
          pathname: '/goodsList',
          state: {
            source:"remen",
            type:"hufu"
          }
        }}>
          <li>
            <div className={styles.image}>
              <img alt="" src={hufu}/>
            </div>
            <h3>水乳护肤</h3>
            <h4>skincare</h4>
          </li>
        </Link>
        <Link to={{
          pathname: '/goodsList',
          state: {
            source:"remen",
            type:"qita"
          }
        }}>
          <li className={styles.other}>
            <div className={styles.image}>
              <img alt="" src={shuazi}/>
            </div>
            <h3>其它</h3>
            <h4>other</h4>
          </li>
        </Link>
      </ul>
    </div>
  );
};

CosCategory.propTypes = {
};

export default CosCategory;

