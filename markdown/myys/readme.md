## 数组去重怎么做
  提交代码前做一次check
  git diff
```diff
//数组去重
const unique = (arr) => {
-  return Arr.from(new Set(arr))
+  return [...new Set(arr)]
}

```

## TodoList

- [] 待完成
- [x] 已完成
- [ ] ~~未完成~~
