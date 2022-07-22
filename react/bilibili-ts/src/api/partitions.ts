import { getJSON } from "./fetch";
import { URL_PARTITION } from "./url";

/**
 * 获取分类
 */
export function getPartitions() {
    return getJSON(URL_PARTITION, null);
}
  
