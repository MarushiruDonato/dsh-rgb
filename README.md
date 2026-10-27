# dsh-rgb

> DeepSeek Harness 的炫酷 RGB 动效增强插件。

为 DeepSeek Harness 提供全套平滑的高性能 RGB 灯效系统，包括对话输入框光环、侧边栏垂直流动光条、当前活动会话高亮光标以及品牌 Logo 矢量发光。

---

## ✨ 特性 (Features)

- 🌈 **消息输入框 RGB 光环 (Composer Ring)**
  - 环绕输入框周围的动态渐变边框，精准适配圆角。
  - 支持 **5 种灯效模式**：静态渐变 (Static)、光谱循环 (Spectrum)、呼吸渐变 (Breath)、呼吸流动 (Breath + Spectrum)、流动跑马灯 (Wave/Flow)、雷达扫描 (Scanner)。
  - 支持会话状态联动：推理中自动加速流动，待命中呈现柔和琥珀光，出错时警示红光。
  - 聚焦呼吸反馈：输入框获取焦点时自动提升亮度和对比度。

- ⚡ **侧边栏边缘垂直光条 (Sidebar Rail)**
  - 贴合侧边栏右缘的垂直动态光柱，支持独立开关与模式配置（流动/呼吸/静态）。

- 📌 **当前活动会话光标 (Active Session Indicator)**
  - 自动定位当前活跃会话条目，在左侧绘制优雅的垂直流动呼吸胶囊指示器。

- 🐳 **官方品牌 Logo 矢量无损发光 (Brand Logo)**
  - 通过 DeepSeek Harness 官方插槽 (`sidebar.brand.mark` / `sidebar.brand.name`) 替换小鲸鱼和品牌字标。
  - 采用精确提取的 SVG 矢量路径与渐变映射，彻底杜绝背景色差与边缘矩形色块。
  - 自适应浅色 / 深色主题：深色下柔和泛光，浅色下智能加深描边阴影，确保字标清晰锐利。

- 🎛️ **独立可视化设置面板 (Visual Settings)**
  - 内置于 Harness 原生设置界面（RGB Composer Ring）。
  - **丰富参数调节**：速度 (0~20s)、亮度 (20%~100%)、描边粗细 (1~5px)、外扩间距 (-4~8px)、顺/逆时针方向。
  - **多样配色方案**：彩虹 (Rainbow)、极光 (Aurora)、霓虹 (Neon)、日落 (Sunset)、单色拾色器 (Solid Color)、支持 2~6 色自由配置的自定义色盘 (Custom)。

---

## 🚀 安装与使用 (Installation)

### 方式一：本地插件加载 (Local Plugin)

1. 克隆本仓库到你的 Harness 工作区或指定目录：
   ```bash
   git clone https://github.com/MarushiruDonato/dsh-rgb.git
   ```

2. 在你的 Harness 配置文件中引入插件配置或通过软链接挂载至 `~/.dsh/profiles/<profile>/node_modules/@local/rgb-composer-ring`。

3. 重新加载或刷新 Harness 界面 (`Ctrl + R`) 即可生效。

---

## 📄 许可证 (License)

[MIT License](LICENSE)
