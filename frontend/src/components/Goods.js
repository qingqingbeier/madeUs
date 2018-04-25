/**
 * Created by 黄晶晶 on 2018-04-09.
 */
import React, {Component} from "react";
import { Link } from "dva/router";
import styles from "./Goods.less";

class Goods extends Component {

  constructor(props, context) {
    super(props);
    this.state = {
      nowId: 1
    }
  }

  render() {
    const {goodsData} = this.props;
    return (
      <div className={styles.wrap}>
        <Link to={{
          pathname: '/detail/'+goodsData.id,
          state:{
            data:goodsData
          }
        }}>
          <div className={styles.image}>
            <img src={goodsData.image}/>
          </div>
        </Link>
        <p className={styles.name}>{goodsData.name}</p>
        <div className={styles.button}>
          <span className={styles.price}><label>¥</label>{goodsData.price}</span>
          <button className={styles.buy}>加入购物车</button>
        </div>
      </div>
    );
  }
};

Goods.propTypes = {};

export default Goods;
