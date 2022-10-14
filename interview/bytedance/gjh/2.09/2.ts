// never 的行为与 unknown 相反，never 是 TypeScript 中的 Bottom Type。
// let a: never = undefined
// let b : bigint = a;

interface Foo {
  type: 'foo'
}

interface Bar {
  type: 'bar'
}

interface Baz {
  type: 'baz'
}
// 先加
type All = Foo | Bar
// type All = Foo | Bar | Baz

function handleValue(val: All) {
  switch (val.type) {
    case 'foo':
      // 这里 val 被收窄为 Foo
      break
    case 'bar':
      // val 在这里是 Bar
      break
    default:
      // val 在这里是 never 不可能执行 兜底
      const exhaustiveCheck: never = val
      break
  }
}
