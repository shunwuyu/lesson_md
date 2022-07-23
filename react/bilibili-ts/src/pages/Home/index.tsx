import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { TopWrapper } from './style'
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import { PartitionType } from "@/models";
import getIndexContent  from '@/store/async-actions';
import { Dispatch, AnyAction } from 'redux';

interface HomeProps {
  oneLevelPartitions: PartitionType[];
  getIndexContentDispatch: () => void;
}                                                                                                                  

const Index: React.FC<HomeProps> = (props) => {
  const { oneLevelPartitions } = props
  const { getIndexContentDispatch } = props
  // console.log(oneLevelPartitions);
  const tabBarData = [{ id: 0, name: "首页"} as PartitionType]
      .concat(oneLevelPartitions);
  tabBarData.push(new PartitionType(-1, "直播"));
  
  useEffect(() => {
    getIndexContentDispatch()
  }, [])

  const handleClick = (tab: any) => {
    console.log(tab, '-------------');
  }
  return (
    <div className="index">
      <TopWrapper>
        <Header />
        <div className="partition">
          <div className="tab-bar">
          <TabBar data={tabBarData} type={"indicate"} onClick={handleClick} />
          </div>
        </div>
      </TopWrapper>
    </div>
  )
}
const mapStateToProps = (state: { oneLevelPartitions: any; }) => ({
  oneLevelPartitions: state.oneLevelPartitions
})

const mapDispatchToProps = (dispatch: (arg0: (dispatch: Dispatch<AnyAction>) => Promise<void>) => void) => ({
  getIndexContentDispatch(){
    dispatch(getIndexContent())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);
