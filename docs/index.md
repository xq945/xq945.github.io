---
layout: doc
title: 简历
description: 张广的在线简历 — Java 后端开发工程师
outline: deep
sidebar: false
pageClass: resume-page
---

# 张广

<p class="resume-tagline">Java 后端开发工程师 · 2027 届本科 · 江西师范大学</p>

<div class="resume-contact">
  <span>男 · 21 岁</span>
  <span class="resume-dot">·</span>
  <span>198****5898</span>
  <span class="resume-dot">·</span>
  <a href="mailto:3059697831@qq.com">3059697831@qq.com</a>
  <span class="resume-dot">·</span>
  <a href="https://github.com/xq945" target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

## 个人简介

江西师范大学数据科学与大数据技术专业 2027 届本科生。熟悉 Java 与 Spring 生态，掌握 MySQL、Redis 的常见应用与优化；独立完成 AI 求职辅助平台与博客系统，实践了异步任务、认证授权、缓存设计与接口性能优化。

## 教育背景

### 江西师范大学 · 数据科学与大数据技术

<p class="resume-period">本科 · 2027 届</p>

## 实习经历

### 江西云牛科技 · 后端开发工程师

<p class="resume-period">2026.09 — 至今</p>

- 参与公司 AI Agent Skills 和知识库的维护，整理开发规范及组件文档。
- 参与公司官方网站的日常维护，根据需求完成页面内容更新、布局调整及样式优化。
- 使用公司自研低代码框架复刻一个 H5 网页应用。
- 完成“饶城生活”小程序后端物业公告模块的接口开发，覆盖元数据获取、条件分页查询、聚合统计、导出及增删。

## 项目经历

### [智能求职辅助平台](https://github.com/xq945/career-pilot-ai)

<p class="resume-period">2026.07 — 2026.10</p>

`Java 21` · `Spring Boot` · `Spring AI` · `Spring Security` · `MyBatis` · `MySQL` · `Redis` · `JWT`

**项目简介**：基于前后端分离架构开发的 AI 求职辅助平台，面向个人求职场景，覆盖简历与岗位管理、简历定向优化、人岗匹配、AI 模拟面试、求职智能体及面试日程管理。

**核心工作**：

1. 简历定向优化：解析简历与目标岗位后两次调用大模型生成定制化改写稿；将 25–80 秒的模型耗时改造为 Redis 异步队列，接口 54 毫秒返回，配未确认消息回收、超时定时补偿、版本代次校验三层兜底。
2. 所有用户数据在查询与修改前统一做归属校验，越权一律返回 404、不暴露资源存在性；上传文件经扩展名、内容类型、文件头魔数三重校验，随机命名存储防路径穿越。
3. 人岗匹配分由后端五维加权规则引擎计算（必备技能 45 / 相关性 25 / 经历 15 / 学历 10 / 加分 5），大模型只生成差距解释、不参与打分；技能术语经规范化、别名映射、词边界三级判定，避免 Java 误配 JavaScript。
4. 基于大模型工具调用实现求职智能体，挂载岗位推荐、简历诊断等 4 项业务工具；用户身份不进模型可见参数、请求前与工具内双层校验；单轮 5 次调用 / 120 秒双护栏，超限返回中文提示由模型收尾。

### [博客系统](https://github.com/xq945/NovaBlog)

<p class="resume-period">2025.09 — 2025.12</p>

`Java 17` · `Spring Boot` · `Spring Security` · `MyBatis` · `MySQL` · `Redis` · `JWT`

**项目简介**：基于前后端分离架构开发的博客系统，提供 Markdown 文章发布、两级嵌套评论、点赞互动、分类标签检索、后台管理与操作日志审计等功能。

**核心工作**：

1. 基于 Spring Security + JWT 实现无状态认证：Access（2h）/ Refresh（7d）双令牌每次刷新轮换，旧令牌入黑名单；多标签页并发刷新以宽限窗口复用同一新令牌，按会话 ID 支持整会话撤销、登出立即失效。
2. 浏览量、点赞等高频写操作由 Redis 承接（String 自增 / Set 去重），定时批量回写 MySQL、以分布式锁防多实例重复执行；基于 ZSet 按「浏览量×1 + 点赞×3」加权实现热门文章排行。
3. 基于 AOP + 注解实现操作日志与登录日志审计，并实现时间字段的注解自动填充。
4. 优化列表接口 N+1 问题：文章标签改为批量 IN 查询 + Map 分组回填，两级评论按「一级分页 + 子回复批量查询」组装。

## 专业技能

- **Java 基础**：熟悉面向对象、集合框架、泛型、异常处理及反射。
- **后端框架**：熟悉 Spring Boot、Spring MVC、Spring Security、MyBatis。
- **MySQL**：熟悉 MySQL 基础操作，了解索引、事务、锁及 SQL 优化。
- **Redis**：熟悉 Redis 常用数据结构、缓存应用场景。
- **开发工具**：IDEA、VSCode、Apifox、Git、Claude Code。

## 荣誉证书

- 计算机技术与软件专业技术资格：中级软件设计师。
- 2025 年睿抗机器人开发者大赛（RAICOM）：江西赛区编程技能竞赛项目三等奖。
- 第六届全国高校计算机能力挑战赛：C 语言科目全国决赛本研组三等奖。
- 第十六届蓝桥杯全国软件和信息技术专业人才大赛：C/C++ 程序设计大学 B 组二等奖。
- 第四届全国大学生 C 语言程序设计大赛：C 语言程序设计赛项本科组二等奖。
