export const prefix = (url) => {
    if (url && url.startsWith('http')) {
        return url
    } else {
        url = `http://backend-api-01.newbee.ltd${url}`
        return url
    }
}