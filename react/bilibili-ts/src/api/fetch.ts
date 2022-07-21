import fetch from "cross-fetch";

export function getJSON(url: string, data:any) {
    let param = "";
    if (data) {
        const datas = [];
        for (const k in data) {
            if (k) {
                datas.push(`${k}=${data[k]}`);
            }
        }
        if (datas.length > 0) {
            param = "?" + datas.join("&");
        }
    }
    // console.log(url)
    return fetch(url + param)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(res.statusText);
        })
}