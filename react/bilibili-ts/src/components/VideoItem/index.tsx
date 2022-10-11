import React from 'react'
import { Video } from "../../models";
import { VideoWrapper } from './style'
import { Link } from 'react-router-dom'
import tv from "@/assets/images/tv.png";
import LazyLoad from "react-lazyload";
import { formatTenThousand } from "@/util/string";

interface VideoItemProps {
    video: Video;
    showStatistics: boolean;
}

const VideoItem:React.FC<VideoItemProps> = (props) => {
    const { video, showStatistics } =  props;
    return (
        <VideoWrapper>
            <Link to={"/video/av" + video.aId} className="video-link">
                <div className="image-container">
                    <div className="image-wrapper">
                        <img src={tv} alt="" className="tv" />
                        {
                            video.pic ? (
                                <LazyLoad height={"100%"} offset={100}>
                                    <img src={video.pic} className="pic" alt={video.title} 
                                    onLoad={(e) => {
                                        (e.currentTarget as HTMLImageElement)
                                        .style.opacity = "1"}} />
                                </LazyLoad>
                            ) : null
                        }
                        <div className="cover" />
                        {
                            showStatistics === true ? (
                            <div className="info">
                                <span className={`play-icon icon-play-count`} />
                                <span className="play-count">
                                {
                                    video.playCount ? formatTenThousand(video.playCount) : "0"
                                }
                                </span>
                                <span className="barrageIcon icon-barrage-count" />
                                <span className="barrage-count">
                                {
                                    video.barrageCount ? formatTenThousand(video.barrageCount) : "0"
                                }
                                </span>
                            </div>
                            ):null
                        }
                    </div>
                </div>
                <div className="title">
                {video.title}
                </div>
            </Link>
        </VideoWrapper>
    )
}

export default VideoItem