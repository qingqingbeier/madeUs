/**
 * Created by 黄晶晶 on 2018-04-11.
 */
import React from 'react';
import styles from './Clothing.less';

const Clothing = ({clothData}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.image}>
        <img alt="" src={clothData.image}/>
        <label className={styles.tag}>{clothData.tag}</label>
      </div>
    </div>
  );
};

Clothing.propTypes = {
};

export default Clothing;
