const fetch = require("node-fetch");
// 搜索推荐
const URL_SUGGEST = "https://s.search.bilibili.com/main/suggest";

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

module.exports = {
    fetchSuggest
}