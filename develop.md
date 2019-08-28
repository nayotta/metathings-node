## 目录

```
+-- lib     // 主目录
    |-- helpers // 一些辅助函数
    |-- modules // 对 编译好的文件 的一层封装
    |-- proto   // 已编译好的 `**pb.js` 文件
    |-- example-modules.js  // 使用 modules 的示例 
    |-- example-proto.js    // 使用 proto 的示例 
```

## 开发

- clone proto
  ```
  git clone https://github.com/bingliu221/metathings-proto.git ./sources/proto
  ```
- 修改 sources/proto 中目录层级至需要的层级，并修改对应的引用路径
  > 暂时对于层级的处理为放在同级，即对应 metathings 的结构
- 执行编辑
  ```
  npm run generate
  ```