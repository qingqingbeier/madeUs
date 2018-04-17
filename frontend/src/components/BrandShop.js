/**
 * Created by 黄晶晶 on 2018-04-17.
 */

import React from 'react';
import styles from './BrandShop.less';

const BrandShop = ({brandShopData}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.image}>
        <img src={brandShopData.image}/>
      </div>
      <div className={styles.bottom}>
        <div className={styles.text}>
          <h2>{brandShopData.name}</h2>
          <h3>{brandShopData.description}新艺术彩妆品牌</h3>
          <p><label>惠</label><span>{brandShopData.activity}</span></p>
        </div>
        <div className={styles.logo}>
         <img src={brandShopData.logo}/>
        </div>
      </div>
    </div>
  );
};

BrandShop.propTypes = {
};

export default BrandShop;
