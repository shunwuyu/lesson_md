function b() {
    // 分号不全机制   return;
    return
    {
        a: 'a'
    };
}
// undefined 
console.log(b());