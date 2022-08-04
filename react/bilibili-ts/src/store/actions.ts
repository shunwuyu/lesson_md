import { AnyAction } from "redux";
import * as ActionTypes from "./action-types";

export function setOneLevelPartitions(oneLevelPartitions: 
    Array<any>): AnyAction {
    return { type: ActionTypes.SET_ONE_LEVEL_PARTITIONS, 
        oneLevelPartitions};
}

export function setRankingPartitions(rankingPartitions: Array<any>)
: AnyAction {
    return { type: ActionTypes.SET_RANKING_PARTITIONS,
         data: rankingPartitions };
}

export function setRankingVideos(rankingVideos: Array<any>): AnyAction {
    return { type: ActionTypes.SET_RANKING_VIDEOS, data: rankingVideos };
}
  