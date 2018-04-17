/**
 * Created by 黄晶晶 on 2018-04-09.
 */
import React from 'react';
import styles from './Goods.less';

const Goods = ({goodsData}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.image}>
        <img src={goodsData.image}/>
      </div>
      <p className={styles.description}>{goodsData.description}</p>
      <div className={styles.button}>
        <span className={styles.price}><label>¥</label>{goodsData.price}</span>
        <button className={styles.buy}>加入购物车</button>
      </div>
    </div>
  );
};

Goods.propTypes = {
};

export default Goods;
