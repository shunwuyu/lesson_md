interface ResInfoListItem {
    id: number;
    num: number;
    time: string;
}
export interface ResInfoList {
    hu_num: number;
    yun_num: number;
    ce_num: number;
    create_time: number;
    online_num: number;
    total_num: number;
    seven_days: ResInfoListItem[];
}