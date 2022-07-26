import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { TopWrapper } from './style'
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import Drawer from "@/components/Drawer";
import { PartitionType } from "@/models";
import getIndexContent  from '@/store/async-actions';
import { setShouldLoad } from '@/store/actions'
import { Dispatch, AnyAction } from 'redux';
import { rootState } from '@/store/index';

interface HomeProps {
  oneLevelPartitions: PartitionType[];
  shouldLoad: Boolean;
  getIndexContentDispatch: () => void;
  setShouldLoadDispatch: (load: Boolean) => void;
}                                                                                                                  

const Index: React.FC<HomeProps> = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const { oneLevelPartitions, shouldLoad } = props
  const { 
    getIndexContentDispatch,
    setShouldLoadDispatch
  } = props
  
  const tabBarData = [{ id: 0, name: "首页"} as PartitionType]
      .concat(oneLevelPartitions);
  tabBarData.push(new PartitionType(-1, "直播"));

  const handleClick = (tab: any) => {
    setShowDrawer(false)
  }
  const handleSwitchClick = () => {
    setShowDrawer(!showDrawer)
  }
  useEffect(() => {
    getIndexContentDispatch()
    setTimeout(() => {
      setShouldLoadDispatch(false)
      
    }, 5000)
  }, [])
  return (
    <div className="index">
      <TopWrapper>
        <Header />
        <div className="partition">
          <div className="tab-bar">
            <TabBar data={tabBarData} type={"indicate"} 
          onClick={handleClick} />
          </div>
          <div className="switch" onClick={handleSwitchClick}>
            <i className="icon-arrow-down" />
          </div>
        </div>
        <div className="drawer-position">
          <Drawer 
          show={showDrawer} data={tabBarData} onClick={handleClick} />
        </div>
        {shouldLoad && <div className="loading">
          加载中...
        </div>}
      </TopWrapper>
    </div>
  )
}
const mapStateToProps = (state: rootState) => ({
  oneLevelPartitions: state.oneLevelPartitions,
  shouldLoad: state.shouldLoad
})

const mapDispatchToProps = (dispatch :Dispatch) => ({
  getIndexContentDispatch(){
    dispatch(getIndexContent() as any)
  },
  setShouldLoadDispatch() {
    dispatch(setShouldLoad(false))
  }
})

export default connect(mapStateToProps, 
  mapDispatchToProps)(Index);
