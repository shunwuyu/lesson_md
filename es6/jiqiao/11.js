// 从 RGB 转换为 HEX
const rgbToHex = (r, g, b) => {
    const toHex = (num) => {
        const hex = num.toString(16)
        return hex.length === 1 ? `0${hex}` : hex
    }
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}
console.log(rgbToHex(46, 32, 67)) 