## 目标
- 从 `cv.txt` 提取个人信息、教育背景、职业经历、项目经历，生成规范 JSON 数据。
- 将 JSON 数据接入现有 React 组件，替换硬编码内容，保持原有动效与视觉风格。

## 框架与集成点
- 技术栈：`Vite + React + TypeScript`，单页分区组件。
- 关键组件：
  - 主页与社交：`src/components/HeroSection.tsx:57–64`、`src/components/ContactSection.tsx:11–24`
  - 关于我：`src/components/AboutSection.tsx:53–61`
  - 教育：`src/components/EducationSection.tsx:6–21`
  - 工作经历：`src/components/ExperienceSection.tsx:6–43`
  - 项目：`src/components/ProjectsSection.tsx:10–65`
- 现有数据文件：`/Users/Peter/Documents/Projects/01_personal_website/cv_data.json`（目前未被引用，可复用）。

## 结构化数据（JSON）
- Schema（字段命名统一、日期使用 `YYYY-MM`）：
```
{
  "personal_info": {
    "name": string,
    "title": string,
    "phone": string,
    "email": string,
    "wechat": string,
    "github": string,
    "location": string | null
  },
  "education": [
    {
      "institution": string,
      "school": string,
      "degree": string,
      "major": string,
      "start": "YYYY-MM",
      "end": "YYYY-MM" | null,
      "courses": string[],
      "awards": string[]
    }
  ],
  "experience": [
    {
      "company": string,
      "department": string,
      "title": string,
      "start": "YYYY-MM",
      "end": "YYYY-MM" | null,
      "responsibilities": string[],
      "achievements": string[]
    }
  ],
  "projects": [
    {
      "name": string,
      "company": string,
      "start": "YYYY-MM",
      "end": "YYYY-MM",
      "description": string,
      "highlights": string[],
      "tech_stack": string[]
    }
  ],
  "other": {
    "skills": string[],
    "hobbies": string[]
  }
}
```
- 从 `cv.txt` 提取的规范数据：
```
{
  "personal_info": {
    "name": "赵熙",
    "title": "AI 产品经理",
    "phone": "186-2107-2212",
    "email": "xz3068@columbia.edu",
    "wechat": "zxpeter0508",
    "github": "https://github.com/zhaoxi1999",
    "location": null
  },
  "education": [
    {
      "institution": "哥伦比亚大学",
      "school": "工程学院/商学院",
      "degree": "硕士",
      "major": "商业分析",
      "start": "2021-09",
      "end": "2023-02",
      "courses": [
        "概率论","数理统计","分析工具 (Python, SQL)","数据分析 (数据可视, 爬虫)","最优化模型","商业分析","市场营销分析","机器学习","人工智能 (神经网络)","云端分析 (Scala)"
      ],
      "awards": []
    },
    {
      "institution": "上海财经大学",
      "school": "外国语学院",
      "degree": "学士",
      "major": "商务英语",
      "start": "2017-09",
      "end": "2021-06",
      "courses": [
        "机器学习入门","大数据分析 (R)","微积分","经济学原理","市场营销","货币银行学","经济管理中的计算机应用"
      ],
      "awards": ["人民奖学金一等奖","英才奖学金","优秀毕业生"]
    }
  ],
  "experience": [
    {
      "company": "美团",
      "department": "微贷风险管理部",
      "title": "贷前/贷中风控策略",
      "start": "2023-05",
      "end": null,
      "responsibilities": [
        "搭建贷前、贷中全流程指标体系并拆解异动指标",
        "制定消费贷、经营贷的借款准入、额度及定价策略",
        "负责多个 AI 在信贷风控领域的对内提效及线上决策项目"
      ],
      "achievements": []
    }
  ],
  "projects": [
    {
      "name": "微贷风险智能机器人",
      "company": "美团",
      "start": "2025-06",
      "end": "2025-10",
      "description": "面向微贷风险员工的智能问答机器人，降低新员工业务上手难度。",
      "highlights": ["3 个月内新员工简单问题解决率达 80%"],
      "tech_stack": ["知识库","RAG","Workflow","意图识别","生成追问","子 Agent"]
    },
    {
      "name": "智能 KYB 决策",
      "company": "美团",
      "start": "2025-06",
      "end": "2025-10",
      "description": "微贷风险大模型跑批平台，支撑额度定价场景的大模型决策测试。",
      "highlights": [
        "跑批平台将测试迭代周期从周缩短至天",
        "参与贷中额度与定价策略框架制定，项目于 9 月底上线测试"
      ],
      "tech_stack": ["Prompt 调优","Workflow","评测指标设计","批量推理","JSON 解析","数据处理分析"]
    },
    {
      "name": "客户案例分析平台",
      "company": "美团",
      "start": "2025-09",
      "end": "2025-10",
      "description": "集成人行征信、借贷行为、历史调额调价等数据，结合专家规则与 AI 的案例分析平台。",
      "highlights": [
        "显著提升案例分析效率",
        "降低人工观察带来的关键信息遗漏概率"
      ],
      "tech_stack": ["数据集成","可视化","专家规则","AI 总结"]
    },
    {
      "name": "微贷风险数据分析环境镜像",
      "company": "美团",
      "start": "2025-04",
      "end": "2025-05",
      "description": "风控统一分析平台，标准化镜像分发与自动化环境配置，提升员工效率。",
      "highlights": [
        "覆盖 100+ 风控策略团队成员",
        "环境配置时间从 2 天缩短至 10 分钟",
        "减少 Spark 错误导致的取数障碍"
      ],
      "tech_stack": ["美团 CloudIDE","Catpaw Agent","Python 环境标准化","取数工具"]
    }
  ],
  "other": {
    "skills": ["Python","R","SQL","Excel","Final Cut Pro","SPSS","Spark","Vibe Coding"],
    "hobbies": ["乒乓球","摄影","天文","钢琴"]
  }
}
```

## 修改方案（保持设计风格）
- 使用 `cv_data.json`：将上述 JSON 写入该文件，并在组件中 `import cv from '../../cv_data.json'`（按相对路径调整）。
- 类型约束：新增 `src/types/cv.ts` 定义接口，组件以类型驱动渲染（避免字段遗漏）。
- 组件替换硬编码为数据驱动：
  - 主页与社交：
    - `HeroSection.tsx` 用 `cv.personal_info.name` 替换姓名（`src/components/HeroSection.tsx:57–64`），将身份改为 `AI 产品经理`；社交链接使用 `cv.personal_info.github` 与 `mailto:cv.personal_info.email`。
    - `ContactSection.tsx` 用 `cv.personal_info.email`/`phone` 替换 `contactInfo`（`src/components/ContactSection.tsx:11–24`），可新增电话条目。
  - 教育：将 `educationItems` 替换为 `cv.education` 映射（`src/components/EducationSection.tsx:6–21`），按原样式展示学校、学位、时间与描述。
  - 工作经历：用 `cv.experience` 替换 `experienceItems`（`src/components/ExperienceSection.tsx:6–43`），`responsibilities` 渲染为要点，保留时间线视觉与动效。
  - 项目：用 `cv.projects` 替换 `projects`（`src/components/ProjectsSection.tsx:10–65`），`highlights` 作为成就列表；如无图片则保留现有占位图。
- 保持动效与样式：不改动现有 `motion`/`framer-motion` 动画与 `Card/Button` 等 UI 组件，仅替换数据来源。

## 验证与交付
- 本地验证：运行现有开发服务器，逐区检查渲染与控制台告警；确认锚点导航与动画正常。
- 字段校验：TypeScript 编译无误；对空值（如 `location`）做安全渲染（隐藏或显示占位）。
- 可选增强：主页新增“下载简历”按钮，链接 `cv.pdf`；在“关于我”增加精炼自我概述（基于上方提取）。

## 执行步骤
1) 写入 `cv_data.json` 为上述 JSON；新增 `src/types/cv.ts` 类型。
2) 分别改造 5 个组件为数据驱动，并映射字段。
3) 运行开发环境进行视觉与功能验证，修复潜在小问题。

请确认以上计划；确认后我将按该方案落地实现并完成验证。