interface ListProps<P> {
    [id: string]: P;
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

export interface GlobalDataProps {
    columns: {
        data: ListProps<ColumnProps>;
        currentPage: number;
        total: number;
    };
}