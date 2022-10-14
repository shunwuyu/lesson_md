import { ApiCode } from '../constant/conf'

type HttpMethods = 'get' | 'GET' | 'post' | 'POST' | 'DELETE' | 'delete'

type FunType = (api: string, method: HttpMethods, loginCb?: () => void, data?: any) => Promise<any>

interface IResponse {
  status: ApiCode,
  data: any
}

const fetchData: FunType = (url: string, method: HttpMethods, ) => {
  return new Promise((resolve, reject) => {
    let data: any;
    if (method.toLowerCase() === 'get') {
      data = {
        method: 'GET',
      }
    } else if (method.toLowerCase() === 'delete') {
      data = {
        method: 'DELETE'
      }
    }
    // console.log(url);
    fetch(url, data).then(res => res.json())
      .then((response: IResponse) => {
        // console.log(response, '++++++++++++')
        resolve(response)
      });
  })
}


export {
  fetchData,
}