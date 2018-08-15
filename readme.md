## 启动
1. 分别 cd 到 web-bridge, web-server 目录下
2. 输入下列命令安装依赖(`package.json` 已经约束好了相应版本, 安装完成后会生成 yarn.lock 和 node_modules)
```bash
yarn install
```
3. 安装完成后, 命令行 cd web-bridge 目录下, 并输入
```bash
node bridge.server.js
```
4. 安装完成后, 命令行 cd web-server 目录下, 并输入
```bash
node app.js
```
5. 打开 `chrome`, 输入 `localhost:3300`, 右键打开 console 终端
6. 查看终端显示
