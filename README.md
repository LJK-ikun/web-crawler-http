# Web Crawler HTTP

一个用Node.js构建的简单而强大的网络爬虫，用于爬取和分析网页链接。

## 功能特性

- 🕷️ **网页爬取**: 递归爬取指定域名下的所有网页
- 🔗 **链接提取**: 从HTML中提取所有有效链接
- 📊 **链接统计**: 统计每个页面被引用的次数
- 📈 **排序报告**: 按引用次数生成排序报告
- 🧪 **单元测试**: 完整的测试覆盖
- 🛡️ **错误处理**: 完善的错误处理机制

## 安装

### 前提条件
- Node.js (v14.0 或更高版本)
- npm (通常随Node.js一起安装)

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/LJK-ikun/web-crawler-http.git
cd web-crawler-http
```

2. 安装依赖
```bash
npm install
```

## 使用方法

### 基本用法

```bash
node main.js <目标URL>
```

**示例:**
```bash
node main.js https://example.com
```

### 输出说明

爬虫会输出以下信息：
- 正在爬取的URL
- 爬取过程中的错误信息（如果有）
- 最终的链接统计报告，按引用次数降序排列

## 项目结构

```
web-crawler-http/
├── crawl.js          # 爬虫核心功能
├── main.js           # 主入口文件
├── report.js         # 报告生成功能
├── crawl.test.js     # 爬虫测试文件
├── report.test.js    # 报告测试文件
├── package.json      # 项目配置文件
├── README.md         # 项目说明文档
└── .gitignore        # Git忽略文件
```

## 核心功能

### crawl.js
- `crawlPage(baseURL, currentURL, pages)`: 主要爬虫函数
- `getURLsFromHTML(htmlBody, baseURL)`: 从HTML提取链接
- `normalizeURL(urlString)`: URL规范化处理

### report.js
- `sortPages(pages)`: 按引用次数排序页面
- `printReport(pages)`: 生成格式化报告

### main.js
- 命令行参数处理
- 爬虫流程控制
- 报告输出

## 测试

### 运行测试

```bash
npm test
```

### 测试覆盖

项目包含完整的单元测试：

- **crawl.test.js**
  - URL规范化测试
  - HTML链接提取测试

- **report.test.js**
  - 页面排序功能测试
  - 空数据处理测试

### 测试结果

```
Test Suites: 2 passed, 2 total
Tests:       4 passed, 4 total
```

## 技术栈

- **运行时**: Node.js
- **HTML解析**: JSDOM
- **测试框架**: Jest
- **HTTP请求**: Node.js内置fetch API

## 开发指南

### 添加新功能

1. 在相应的模块中添加新函数
2. 在对应的测试文件中添加测试用例
3. 运行测试确保功能正常
4. 更新README.md文档

### 代码规范

- 使用ES6+语法
- 遵循异步编程最佳实践
- 编写清晰的错误处理
- 保持函数单一职责原则

## 常见问题

### Q: 爬虫可以爬取外部网站吗？
A: 不可以。当前实现只爬取与起始URL相同域名的页面。

### Q: 如何处理登录保护的页面？
A: 当前版本不支持认证。如需爬取登录页面，需要添加cookie或认证头处理。

### Q: 爬取速度如何控制？
A: 当前版本没有实现延迟机制。如需控制爬取速度，可以在crawlPage函数中添加setTimeout。

## 贡献指南

欢迎提交Issue和Pull Request！

1. Fork本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

## 许可证

本项目采用 ISC 许可证。详情请参阅 [LICENSE](LICENSE) 文件。

## 联系方式

如有问题或建议，请通过以下方式联系：

- GitHub Issues: [提交问题](https://github.com/LJK-ikun/web-crawler-http/issues)
- 邮箱: [您的邮箱地址]

## 更新日志

### v1.0.0 (2024-01-16)
- 初始版本发布
- 实现基本爬虫功能
- 添加完整的测试覆盖
- 生成链接统计报告
