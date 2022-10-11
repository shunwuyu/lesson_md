import { combineReducers, AnyAction } from 'redux';
import * as ActionTypes from "./action-types";

const initialState = {
    oneLevelPartitions: [],
    ranking: {
        rankingPartitions: [], // 排行榜分类列表
        rankingVideos: [], // 排行榜视频
    } // 排行榜
}

function combineOneLevelPartitions(oneLevelPartitions = 
    initialState.oneLevelPartitions,
    action: AnyAction) {
    switch (action.type) {
        case ActionTypes.SET_ONE_LEVEL_PARTITIONS:
        return action.oneLevelPartitions;
        default:
        return oneLevelPartitions;
    }
}

function combineRanking(state = initialState.ranking, action: AnyAction) {
    switch (action.type) {
        case ActionTypes.SET_RANKING_VIDEOS:
        return {
            ...state,
            rankingVideos: action.data
        }
        break;
        case ActionTypes.SET_RANKING_PARTITIONS:
            console.log('????????????????', action)
            return {
                ...state,
                rankingPartitions: action.data
            } 
        break;
        default:
        return state;
    }
}

export default combineReducers({
    oneLevelPartitions: combineOneLevelPartitions,
    ranking: combineRanking
})