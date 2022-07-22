import { AnyAction } from "redux";
import * as ActionTypes from "./action-types";

export function setBanners(banners: Array<any>): AnyAction {
    return { type: ActionTypes.SET_BANNERS, banners };
}

export function setOneLevelPartitions(oneLevelPartitions: Array<any>): AnyAction {
    return { type: ActionTypes.SET_ONE_LEVEL_PARTITIONS, oneLevelPartitions};
}