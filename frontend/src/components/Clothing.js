/**
 * Created by 黄晶晶 on 2018-04-11.
 */
import React from 'react';
import styles from './Clothing.less';
import  {Link} from "dva/router"

const Clothing = ({activeNum,clothData}) => {
  return (

    <div className={styles.wrap}>
    	<Link to={{
        pathname: '/collocation',
        state: {
          activeNum: activeNum
        }}}>
	      <div className={styles.image}>
	        <img alt="" src={clothData.image}/>
	        <label className={styles.tag}>{clothData.tag}</label>
	      </div>
      </Link>
    </div>
  );
};

Clothing.propTypes = {
};

export default Clothing;