## 目录

```
+-- jsons   // pbjsons
+-- lib     // 主目录
    |-- helper // 一些辅助函数
    |-- DevicedService // deviced
    |-- EvaluatordService // evaluatord
    |-- Identityd2Service // identityd
    |-- MtpdService // mtpd
    |-- TagdService // tagd
    |-- Service // Service类
    |-- StreamCall // StreamCall类
```

## 开发

- clone proto

  - [https://github.com/nayotta/proto-to-json](https://github.com/nayotta/proto-to-json)

  - 最好能安装好 go 开发 `metathings` 的环境，克隆 `metathings` 库下来，然后安装好其protos所需要的依赖防止与`$GOPATH/src/github.com`下边；

  - 如果选择不去安装go的开发环境，可选择直接克隆metathings库到某处，然后在每一个proto的编译环境下添加对应的依赖文件，从而进行一一编译，但不推荐此方法；

- 执行编辑

  这里的编译脚本采用的是上边所说的第一种方式；

  ```
  npm run generate
  ```