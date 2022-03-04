# Reproduction

1. 安装 master, slave 和 slave-window 的依赖
2. 执行 master, slave 和 slave-window 的 start
3. 打开 http://localhost:8848/ , http://localhost:8848/slave , http://localhost:8848/slave-window
4. http://localhost:8848/slave 会报错
5. http://localhost:8848/slave-window 不会报错

slave-window 对 .umirc.ts 做的修改：

```js
  chainWebpack(memo) {
    // use qiankun with requirejs
    memo.output.libraryTarget('window');

    // use this will not auto run
    // memo.output.umdNamedDefine(true);
  },
```

