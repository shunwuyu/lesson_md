import { AnyAction, Dispatch } from "redux";
import { getPartitionsRequest } from "@/api/request"
import { createPartitionTypes, createVideoByRanking } from "../../models";
import { setRankingPartitions, setRankingVideos } from "../actions";
import {
    setOneLevelPartitions,
} from "../actions";
import { 
    getRankingRequest,     
    getRankingPartitionsRequest
} from "@/api/request";

export const getPartitions = () => {
    return (dispatch: Dispatch<AnyAction>) => {
        try {
            getPartitionsRequest().then(data => {
                dispatch(setOneLevelPartitions(data))
            })   
        } catch(e) {
            console.log(e)
        }
    }
}

export function getRankingVideoList(rId: number) {
    return (dispatch: Dispatch<AnyAction>) => {
        return Promise.all([
            getRankingPartitionsRequest(),
            getRankingRequest(rId)
        ]).then(([result1, result2]) => {
            console.log(result1.code, '/////');
            if (result1.code == 1) {
                // console.log(result1.data)
                let partitions = createPartitionTypes(result1.data);
                // 过滤掉 番剧，电影，电视剧，纪录片
                partitions = partitions.filter((partition) => [13, 23, 11
                    , 177].indexOf(partition.id) === -1);
                dispatch(setRankingPartitions(partitions));
            }
            if (result2.code === "1") {
                const list = result2.data.list;
                const rankingVideos = list.map((data) => createVideoByRanking(data));
                dispatch(setRankingVideos(rankingVideos.splice(0, 30)));
            }
        })
    }
}
