## Simple React Template

基于 vite 打包构建的 react 项目模板，继承一些开发中常用的相关内容，方便使用

## 集成内容

### Base
- react
- typescirpt
- eslint
- prettier
- babel
  - @babel/preset-typescript
- husky
  - lint-staged
  - commitlint

### React
- react-router
  - react-router-dom
  - react-router-config

### Style
- sass

### Build
- vite
  - @vitejs/plugin-react

### Git hooks
- commit-msg
  - 通过 shell 对 commit-msg 的 type 进行修改，实现 [git-emoji](https://gitmoji.dev/) 效果
- pre-commit
  - 集成 lint-staged