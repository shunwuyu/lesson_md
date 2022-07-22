const fetch = require("node-fetch");
// 搜索推荐
const URL_SUGGEST = "https://s.search.bilibili.com/main/suggest";
// 首页轮播
const URL_ROUND_SOWING = "https://api.bilibili.com/x/web-show/res/loc?pf=7&id=1695";

const fetchSuggest = (w) => {
    const params = [
        "func=suggest",
        "suggest_type=accurate",
        "sub_type=tag",
        "main_ver=v1",
        "bangumi_acc_num=3",
        "tag_num=10",
        "highlight=",
        `term=${w}`
    ];
    console.log(URL_SUGGEST + "?" + params.join("&"), '')
    return fetch(URL_SUGGEST + "?" + params.join("&"))
        .then(res => res.json())
        .then(json => json)
}

const fetchRoundSowing = () => {
    return fetch(URL_ROUND_SOWING)
      .then(res => res.json())
      .then(json => json);
}
module.exports = {
    fetchSuggest,
    fetchRoundSowing
}