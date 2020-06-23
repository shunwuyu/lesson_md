var array = [1, 1, '1', '1', null, null, undefined, undefined, new String('1'), new String('1'), /a/, /a/, NaN, NaN];

双层 for 循环	[1, "1", null, undefined, String, String, /a/, /a/, NaN, NaN]	对象和 NaN 不去重

Array.sort()加一行遍历冒泡	[/a/, /a/, "1", 1, String, 1, String, NaN, NaN, null, undefined]	对象和 NaN 不去重 数字 1 也不去重

Array.filter()加 indexOf	[1, "1", null, undefined, String, String, /a/, /a/]	对象不去重 NaN 会被忽略掉