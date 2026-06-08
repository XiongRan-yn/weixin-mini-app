# 微信小程序 - weixin-mini-app

## 📱 项目简介

这是一个基础的微信小程序项目模板，为新手开发者提供简单易懂的项目结构和代码示例。

## 🚀 快速开始

### 1. 环境要求
- 下载 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
- 注册微信小程序账号

### 2. 项目导入
1. 打开微信开发者工具
2. 点击"新建" → "小程序项目"
3. 选择本项目文件夹
4. 填写你的小程序AppID（在微信公众平台获取）
5. 点击"创建"即可

### 3. 运行项目
- 点击开发者工具顶部的"预览"按钮
- 用手机微信扫描二维码查看效果

## 📁 项目结构

```
weixin-mini-app/
├── pages/                  # 页面文件夹
│   ├── index/             # 首页
│   │   ├── index.js       # 首页逻辑
│   │   ├── index.wxml     # 首页模板
│   │   └── index.wxss     # 首页样式
│   └── about/             # 关于页面
│       ├── about.js       # 关于页面逻辑
│       ├── about.wxml     # 关于页面模板
│       └── about.wxss     # 关于页面样式
├── app.js                 # 应用程序主文件
├── app.json               # 应用配置文件
├── app.wxss               # 应用样式文件
├── sitemap.json           # 网站地图配置
└── README.md              # 项目说明文档
```

## 🎯 文件说明

### app.json（应用配置）
- 配置所有页面
- 设置导航栏样式
- 配置全局属性

### app.js（应用逻辑）
- 应用启动时执行
- 全局数据存储

### pages（页面文件）
每个页面包含三个文件：
- **.js** - 页面逻辑和数据处理
- **.wxml** - 页面模板（类似HTML）
- **.wxss** - 页面样式（类似CSS）

## 🔧 学习资源

- [微信小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/guide/)
- [微信小程序API文档](https://developers.weixin.qq.com/miniprogram/dev/api/)
- [WXML标签文档](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/)

## 💡 下一步

1. 修改 `app.json` 中的 `navigationBarTitleText` 改成你的小程序名称
2. 在 `pages/index/index.wxml` 中修改内容
3. 根据需要添加新的页面
4. 学习微信小程序API进行更复杂的开发

## 📝 开发小贴士

- 使用 `rpx` 单位而不是 `px`（rpx 会自动根据屏幕宽度适配）
- 在 `app.js` 中存储全局数据
- 使用 `wx.` 开头的API调用微信功能
- 定期保存文件并在开发者工具中预览

## ❓ 常见问题

Q: 如何添加新页面？
A: 
1. 在 `pages` 文件夹中创建新文件夹
2. 创建 `.js`、`.wxml`、`.wxss` 三个文件
3. 在 `app.json` 的 `pages` 数组中添加新页面路径

Q: 如何测试小程序？
A: 使用微信开发者工具的"预览"功能，用手机微信扫描二维码

## 📄 许可证

MIT License

---

**祝你开发愉快！** 🎉
