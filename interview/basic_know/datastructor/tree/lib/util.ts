// 枚举类：定义比对返回值
export enum Compare {
    LESS_THAN = -1,
    BIGGER_THAN = 1,
    EQUALS = 0
}

// 默认的比对函数: 比对参数a和参数b的大小返回其相应的枚举值
export function defaultCompare<T>(a: T, b: T): number {
    if (a === b) {
        return Compare.EQUALS;
    } else if (a > b) {
        return Compare.BIGGER_THAN;
    } else {
        return Compare.LESS_THAN;
    }
}



// 定义比对函数的参数类型以及返回值类型
export type ICompareFunction<T> = (a: T, b: T) => number;