let gbs = { 
  host:'',
};

let cbs = {
 /**
  * ajax请求成功，返回的状态码不是200时调用
  * @param  {object} err 返回的对象，包含错误码和错误信息
  */
 statusError(err) {
   if (err.status !== 404) {
     this.$message({
       showClose: true,
       message: '返回错误：' + err.msg,
       type: 'error'
     });
   } else {
     this.$store.dispatch('remove_userinfo').then(() => {
       this.$alert(err.status + ',' + err.msg + '！', '登录错误', {
         confirmButtonText: '确定',
         callback: action => {
           this.$router.push('/login');
         }
       });
     });
   }
 },

 /**
  * ajax请求网络出错时调用
  */
 requestError(err) {
   console.log(err);
   this.$message({
     showClose: true,
     message: '请求错误：Internal Server Error',
     type: 'error'
   });
 }
};



export {
 gbs,
 cbs
}