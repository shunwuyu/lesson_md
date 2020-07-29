var webp=require('webp-converter');

webp.cwebp("bbb.jpg","bbb.webp","-q 80",function(status,error){
//if conversion successful status will be '100'
//if conversion fails status will be '101'
  console.log(status,error);
});