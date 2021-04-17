<!-- typescript你都用过哪些类型 -->
undefined | null | boolean | number | bigint | string | symbol | void | object | unknown | never | any

undefined | null | boolean | number | bigint | string | symbol | void 是原始类型 (primitive type)

object 代表了所有非原始类型（non-primitive type）

unknown | never 则是类型论中顶和底类型，

any 则代表了动态类型

unknown type 是 TypeScript 中的 Top Type。
就是任何类型都是 unknown 的子类型
