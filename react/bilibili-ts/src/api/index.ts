import { getJSON } from "./fetch";
import { URL_ROUND_SOWING } from "./url";

// 获取首页轮播图
export function getBanner() {
    return getJSON(URL_ROUND_SOWING, null);
}