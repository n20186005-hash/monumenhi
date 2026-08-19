# 完整归档清单

此归档包用于离线保存并重新运行 Monumen Selamat Datang Guide。解压后，网站源文件、已构建的静态产物、运行配置、依赖锁定文件、照片、品牌图标与视觉主图均包含在同一目录树内。

| 类别 | 归档位置 | 内容 |
| --- | --- | --- |
| 网站源码 | `client/src/` | React 页面、双语文案、交互逻辑、样式、JSON-LD 与 GA4 同意逻辑。 |
| 运行配置 | 根目录 | `package.json`、`pnpm-lock.yaml`、TypeScript/Vite 配置与 `server/` 静态服务入口。 |
| 可直接部署产物 | `dist/` | 已验证的生产构建结果。 |
| 本地视觉素材 | `client/public/assets/` | 6 项图片，包括 1 枚品牌图标、3 张生成视觉图和 2 张经许可的真实景点照片。 |
| 来源与授权 | `client/DELIVERY.md`、`research-notes.md` | 图像归属、CC BY-SA 4.0 许可和资料来源说明。 |
| 运行说明 | `README.md` | 安装、开发与生产构建步骤。 |

## 解压后运行

在项目根目录运行 `pnpm install --frozen-lockfile`，然后运行 `pnpm build`。如需本地预览，可运行 `pnpm dev`。归档内的页面源码已经改为从 `client/public/assets/` 引用本地视觉素材；无需依赖原网站的静态存储链接。

## 视觉素材清单

| 文件 | 角色 | 来源 / 许可 |
| --- | --- | --- |
| `monumen-selamat-datang-logo.png` | 网站 Logo 与 favicon | 为本项目生成的无文字图形标识。 |
| `lingkar-kota-hero-art.jpg` | 首页主视觉 | 为本项目生成的编辑式城市主视觉。 |
| `lingkar-kota-map-art.jpg` | 周边区域插图 | 为本项目生成的编辑式城市地图插图。 |
| `lingkar-kota-fountain-detail.jpg` | 叙事章节视觉 | 为本项目生成的喷泉细节视觉。 |
| `bundaran-hi-adisurahman.jpg` | 真实景点航拍图 | Adisurahman，CC BY-SA 4.0。 |
| `bundaran-hi-2023-baqotun0023.jpg` | 真实景点天际线图 | Baqotun0023，CC BY-SA 4.0。 |
