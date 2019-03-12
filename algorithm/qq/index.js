let enc_qq = [6,3,1,7,5,8,9,2,4],
    qq = [],
    head = 0,
    tail = 9; //最后的下一个位置

while(head < tail) {
    qq.push(enc_qq[head]);
    head++;
    //先讲队首的数添加到队尾
    enc_qq[tail] = enc_qq[head];
    tail++;
    // 再将队首出队
    head++; 
}

console.log(qq);