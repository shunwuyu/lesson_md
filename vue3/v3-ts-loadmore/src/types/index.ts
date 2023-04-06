interface ListProps<P> {
    [id: string]: P;
}
export interface UserProps {
    isLogin: boolean;
    nickName?: string;
    _id?: string;
    column?: string;
    email?: string;
    description?: string;
    avatar?: ImageProps;
  }

export interface ColumnProps {
    _id: string;
    title: string;
    avatar?: ImageProps;
    description: string;
}

export interface ImageProps {
    _id?: string;
    url?: string;
    fitUrl?: string;
    createdAt?: string;
  }

export interface LoadedPostProps {
    columnId?: string;
    currentPage?: number;
    total?: number;
}
export interface PostProps {
    _id?: string;
    title: string;
    excerpt?: string;
    content?: string;
    image?: ImageProps | string;
    column: string;
    author?: string | UserProps;
    createdAt?: string;
    isHTML?: boolean;
  }


export interface GlobalDataProps {
    token: string,
    columns: {
        data: ListProps<ColumnProps>;
        currentPage: number;
        total: number;
    };
    posts: {
        data: ListProps<PostProps>;
        loadedColumns: ListProps<LoadedPostProps>;
    };
    user: UserProps;
}