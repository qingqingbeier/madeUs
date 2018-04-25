/**
 * Created by 黄晶晶 on 2018-04-11.
 */

import React from 'react';
import styles from './Brand.less';

const Brand = ({brandData}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.image}>
        <img alt="" src={brandData.image}/>
      </div>
      <div className={styles.back}>
        <h3>{brandData.name}</h3>
        <a href="http://www.alafortanfoni.com/" target="_blank" rel="noopener noreferrer">Bağlantı</a>
      </div>
    </div>
  );
};

Brand.propTypes = {
};

export default Brand;
