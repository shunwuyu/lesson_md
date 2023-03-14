var permutation = function (s) {
    function swap(i, j, a) { let t = a[i]; a[i] = a[j]; a[j] = t; }
        let res = []; let len = s.length;
        let c = s.split('');
    function dfs(x) {
        if (x == len - 1) {
            res.push(c.join('')); return;
        }
        let set = new Set();
        for (let i = x; i < len; i++) {
            //对于每种排列的位置x来说，i要从当前尚未安排字符的位置x到最后
            //每次迭代对于c[i]来说，只要它没在当前位置排过，就将其与c[x]交换位置
            //然后进入下一个位置层的递归
            if (set.has(c[i])) continue;    //当前位置x层已经安排过c[i]，剪枝
            set.add(c[i]);  //否则加入当前位置x层的set中以便后续判断
            swap(i, x, c);  //安排c[i]到位置x
            dfs(x + 1);     //进入下一层(x+1层)递归
            swap(x, i, c);  //回到当前位置x层，恢复原位
        }
    }
    dfs(0);
    return res;
};

console.log(permutation('baidu').includes('aidub'))