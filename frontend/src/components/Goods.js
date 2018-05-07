/**
 * Created by 黄晶晶 on 2018-04-09.
 */
import React, {Component} from "react";
import {connect} from "dva";
import {Link} from "dva/router";
import styles from "./Goods.less";
import {Icon} from "antd";

class Goods extends Component {

  constructor(props, context) {
    super(props);
    this.state = {
      nowId: 1
    }
  }

  addToCart(goodsData) {
    this.props.dispatch({
      type: "shopCart/addToCart",
      payload: {
        goodsData: goodsData
      }
    })
  }

  addActiveStyle() {
    this.refs.collect.style.color="#EF2751"
  }

  render() {
    const {goodsData} = this.props;
    return (
      <div className={styles.wrap}>
        <Link to={{
          pathname: '/detail/id=' + goodsData.id,
          state: {
            data: goodsData
          }
        }}>
          <div className={styles.image}>
            <img alt="" src={goodsData.image}/>
          </div>
        </Link>
        <p className={styles.name}>{goodsData.name}</p>
        <div className={styles.button}>
          <span className={styles.price}><label>¥</label>{goodsData.price}
            <del className={styles.originalPrice}> ¥{goodsData.originalPrice}</del>
          </span>
          <button className={styles.buy} onClick={() => this.addToCart(goodsData)}>
            <Icon type="heart-o" ref="collect" className={styles.collect} style={{color: '#EF2751', fontSize: '16px'}} onClick = {() => this.addActiveStyle()}/>
             <Icon type="shopping-cart" style={{color: '#EF2751', fontSize: '20px'}}/>
          </button>
        </div>
      </div>
    );
  }
}
;

Goods.propTypes = {};
function mapStateToProps({shopCart}) {
  return shopCart
}
export default connect(mapStateToProps)(Goods);
