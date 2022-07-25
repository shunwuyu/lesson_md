import { combineReducers, AnyAction } from 'redux';
import * as ActionTypes from "./action-types";

const initialState = {
    banners: [],  // 轮播图
    oneLevelPartitions: [],
    shouldLoad: true,  // 客户端是否加载数据
}

function combineBanners(banners = initialState.banners, 
    action: AnyAction) {
    switch (action.type) {
        case ActionTypes.SET_BANNERS:
            return action.banners;
        default:
            return banners;
    }
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

function combineShouldLoad(shouldLoad = initialState.shouldLoad,
    action: AnyAction) {
   switch (action.type) {
       case ActionTypes.SET_SHOULD_LOAD:
           return action.shouldLoad;
       default:
           return shouldLoad;
   }
}

export default combineReducers({
    banners: combineBanners,
    oneLevelPartitions: combineOneLevelPartitions,
    shouldLoad: combineShouldLoad
})