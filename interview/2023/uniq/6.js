function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    return [...new Set(arr)]
}
