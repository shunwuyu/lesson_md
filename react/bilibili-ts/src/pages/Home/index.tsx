import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { AnyAction, Dispatch } from 'redux';
import { TopWrapper } from './style'
import Header from '@/components/Header'
import { PartitionType } from "@/models";
import getIndexContent  from '@/store/async-actions';

interface HomeProps {
  oneLevelPartitions: PartitionType[];
}

const Index: React.FC<HomeProps> = (props) => {
  const { oneLevelPartitions } = props
  const { getIndexContentDispatch } = props
  // console.log(oneLevelPartitions);
  useEffect(() => {
    getIndexContentDispatch()
  }, [])
  return (
    <div className="index">
      <TopWrapper>
        <Header />
        <div className="partition">
          <div className="tabBar">

          </div>
        </div>
      </TopWrapper>
    </div>
  )
}
const mapStateToProps = (state) => ({
  oneLevelPartitions: state.oneLevelPartitions
})

const mapDispatchToProps = (dispatch) => ({
  getIndexContentDispatch() {
    dispatch(getIndexContent())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);
