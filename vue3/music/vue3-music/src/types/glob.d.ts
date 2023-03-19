declare interface PlayListItem {
    id: number;
    name: string;
    picUrl: string;
    playCount: number | string;
    nickName: string;
    copywriter?: string;
    [propName: string]: any;
}

declare interface OwnerSendItem {
    id: number;
    name: string;
    picUrl: string;
    [propName: string]: any;
}