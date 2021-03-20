import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as actionTypes from './store/actionCreators';

function Recommend (props) {
  console.log(props, '+++++111');
  const { getBannerDataDispatch } = props;
  const { bannerList } = props;
  // console.log(bannerList, '222');
  useEffect (() => {
    getBannerDataDispatch ();
    //eslint-disable-next-line
  }, []);
  
  console.log(bannerList, '222')
  return (
    <div>Recommend</div>
  )
}

const mapStateToProps = (state) => () => {
  return {
    bannerList: state.recommend.bannerList
  }
}

// const mapStateToProps = (state) => {
//   return {
//     bannerList: state.recommend.bannerList
//   }
// }



const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch () {
      dispatch (actionTypes.getBannerList ());
    }
  }
};

export default connect (mapStateToProps, mapDispatchToProps)(React.memo (Recommend));
// export default React.memo (Recommend);