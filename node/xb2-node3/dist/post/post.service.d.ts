export interface GetPostsOptionsFilter {
    name: string;
    sql?: string;
    param?: string;
}
export interface GetPostsOptionsPagination {
    limit: number;
    offset: number;
}
interface GetPostsOptions {
    sort?: string;
    filter?: GetPostsOptionsFilter;
    pagination?: GetPostsOptionsPagination;
}
export declare const getPostsTotalCount: (options: GetPostsOptions) => Promise<any>;
export declare const getPosts: (options: GetPostsOptions) => Promise<import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader")>;
export {};
