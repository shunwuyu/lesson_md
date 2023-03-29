export interface UserProps {
    isLogin: boolean;
    nickName?: string;
    _id?: string;
    column?: string;
    email?: string;
    description?: string;
    avatar?: ImageProps;
}

export interface ImageProps {
    _id?: string;
    url?: string;
    fitUrl?: string;
    createdAt?: string;
}

export interface GlobalErrorProps {
    status: boolean;
    message?: string;
}

export interface GlobalDataProps {
    token: string;
    user: UserProps;
    loading: boolean;
    error: GlobalErrorProps;
}