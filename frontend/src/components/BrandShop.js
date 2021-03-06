/**
 * Created by 黄晶晶 on 2018-04-17.
 */

import React from 'react';
import { Link } from 'dva/router'
import styles from './BrandShop.less';

const BrandShop = ({brandShopData,index}) => {
  return (
    <div className={styles.wrap}>
      <Link to={{
        pathname: '/goodsList',
        state: {
          source:"brand",
          type: index,
        }
      }}>
        <div className={styles.image}>
          <img alt="" src={brandShopData.image}/>
        </div>
      </Link>
      <div className={styles.bottom}>
        <div className={styles.text}>
          <h2>{brandShopData.name}</h2>
          <h3>{brandShopData.description}新艺术彩妆品牌</h3>
          <p><label>惠</label><span>{brandShopData.activity}</span></p>
        </div>
        <div className={styles.logo}>
         <img alt="" src={brandShopData.logo}/>
        </div>
      </div>
    </div>
  );
};

BrandShop.propTypes = {
};

export default BrandShop;
