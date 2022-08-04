import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { TopWrapper, ContentWrapper } from './style'
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import Drawer from "@/components/Drawer";
import { PartitionType,  Video } from "@/models";
import { getPartitions, getRankingVideoList }  
from '@/store/async-actions';
import { Dispatch } from 'redux';
import { rootState } from '@/store/index';
import VideoItem from '@/components/VideoItem'
import { baseUrl} from '@/api/config'
interface HomeProps {
  rankingVideos: Video[];
  oneLevelPartitions: PartitionType[];
  getPartitionsDispatch: () => void;
  getRankingVideoListDispatch: (rId: number) => void;
}                                                                                                                  

const Index: React.FC<HomeProps> = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const { 
    oneLevelPartitions,
    rankingVideos
  } = props
  const { 
    getPartitionsDispatch, 
    getRankingVideoListDispatch
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

  const videoElements = rankingVideos.map((video) => {
    video.pic = `${baseUrl}/transfer/image?pic=${video.pic}@320w_200h.jpg`;
    console.log(video.pic)
    return <VideoItem video={video} key={video.aId} 
    showStatistics={true} />
  })

  useEffect(() => {
    getPartitionsDispatch()
    getRankingVideoListDispatch(1)
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
      </TopWrapper>
      <ContentWrapper>
        <div className="video-list clear">
          {videoElements}
        {/* {videoElements} */}
        </div>
      </ContentWrapper>
    </div>
  )
}
const mapStateToProps = (state: rootState) => ({
  oneLevelPartitions: state.oneLevelPartitions,
  rankingVideos: state.ranking.rankingVideos,
  rankingPartitions: state.ranking.rankingPartitions
})

const mapDispatchToProps = (dispatch :Dispatch) => ({
  getPartitionsDispatch(){
    dispatch(getPartitions() as any)
  },
  getRankingVideoListDispatch(rId: number) {
    console.log(rId, '///')
    dispatch(getRankingVideoList(rId) as any)
  }
})

export default connect(mapStateToProps, 
  mapDispatchToProps)(Index);
