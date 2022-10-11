const activities = [
    {start: 1, end: 4},
    {start: 3, end: 5},
    {start: 0, end: 6},
    {start: 5, end: 7},
    {start: 3, end: 9},
    {start: 5, end: 9},
    {start: 6, end: 10},
    {start: 8, end: 11},
    {start: 8, end: 12},
    {start: 2, end: 14},
    {start: 12, end: 16}
];

function chooseActivity(activities) {
    // 先按照结束时间从小到大排序
    activities.sort((act1, act2) => {
        if(act1.end < act2.end) {
            return -1;
        } else if(act1.end > act2.end) {
            return 1;
        }
        return 0;
    });

    const res = [];  // 接收结果的数组
    let lastEnd = 0; // 记录最后一个活动的结束时间

    for(let i = 0; i < activities.length; i++){
        const act = activities[i];
        if(act.start >= lastEnd) {
            res.push(act);
            lastEnd = act.end
        }
    }

    return res;
}

const result = chooseActivity(activities);
console.log(result);

  

  
