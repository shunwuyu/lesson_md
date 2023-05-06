import { AxiosResponse, Canceler } from 'axios';
import { Ref } from 'vue';

// 后台返回的数据类型
export interface Response<T> {
    code: number;
    data: T;
    msg: string;
}

// 为了使用方便，对 AxiosResponse 默认添加我们公用的 Response 类型
export type AppAxiosResponse<T = any> = AxiosResponse<Response<T>>;

// 为了 useRequest 使用封装的类型
export interface RequestResponse<T> {
    instance: Promise<AppAxiosResponse<T>>;
    cancel: Ref<Canceler | undefined>;
}


