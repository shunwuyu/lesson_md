let baseUrl = ''; 
let routerMode = 'hash';
let baseImgPath;

if (process.env.NODE_ENV == 'development') {
	baseUrl = '';
  baseImgPath = '/img/';
}else{
	baseUrl = '//elm.cangdu.org';
    baseImgPath = '//elm.cangdu.org/img/';
}

export {
	baseUrl,
	routerMode,
	baseImgPath
}