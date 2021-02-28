// https://mp.weixin.qq.com/s/U8MFM3uqcYiVzGuPXhOMiA
function once (f) {
  let result
  let revoked = false
  
  return (...args) => {
    if (revoked) return result
    const r = f(...args)
    revoked = true
    result = r
    return r
  }
}

const f = () => {console.log('call'); return 3;}
// f ();
// f ();
// f ();

const once_f = once(f)

once_f()
// once_f()