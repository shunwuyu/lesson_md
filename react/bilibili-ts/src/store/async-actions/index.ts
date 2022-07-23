import { AnyAction, Dispatch } from "redux";
import { getBanner } from "@/api/index";
import { getPartitions } from "@/api/partitions"
import { createPartitionTypes } from '@/models'
import {
    setOneLevelPartitions,
} from "../actions";

export const getBanners = () => {
    return (dispatch:Dispatch<AnyAction>) => {

    }
}

export default function getIndexContent() {
    // dispatch由thunkMiddleware传入
    return (dispatch: Dispatch<AnyAction>) => {
        const promises = [
            getPartitions()
        ]
        return Promise.all(promises).then(([result1,
             result2, result3]) => {
            if (result1.code === "1") {
                const partitions = result1.data["0"];
                let oneLevels =  createPartitionTypes(partitions);
                oneLevels = oneLevels.filter((partition) => 
                [13, 23, 11, 177].indexOf(partition.id) === -1);
                console.log(oneLevels)
                dispatch(setOneLevelPartitions(oneLevels));
            }
        })
    }
}