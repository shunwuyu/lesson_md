import { getJSON } from "./fetch";
import { URL_SEARCH_SUGGEST } from "./url";

/**
 * 获取提示内容
 */
export function getSuggests(keyword: string) {
    return getJSON(URL_SEARCH_SUGGEST, { w: keyword });
}