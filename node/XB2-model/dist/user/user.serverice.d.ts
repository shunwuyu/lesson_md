import { UserModel } from './user.model';
export declare const createUser: (user: UserModel) => Promise<import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader")>;
export declare const getUser: (condition: string) => (param: string | number, options?: GetUserOptions) => Promise<any>;
export declare const getUserByName: (param: string | number, options?: GetUserOptions) => Promise<any>;
interface GetUserOptions {
    password?: boolean;
}
export {};
