# 📖 TRENDB README

<img width="654" alt="image" src="https://github.com/user-attachments/assets/9b518f95-a34f-491a-8ff5-2370fa3da076">


- 배포 URL : 
- Test ID : 
- Test PW : 

<br>

## 프로젝트 소개
- 

<br>

## 팀원 구성

<div align="center">

| **김세현** | **송가은** | 
| :------: |  :------: | 
| [<img src="https://github.com/user-attachments/assets/0ec92cc1-539d-4717-baf8-b8dfb4ef6303" height=150 width=150> <br/> @sehyun0518](https://github.com/sehyun0518) | [<img src="https://github.com/user-attachments/assets/b6343692-50fe-4073-941d-7d73d00c36b4" height=150 width=150> <br/> @gn-ioeo](https://github.com/gn-ioeo) | 

</div>

<br>

## 1. 개발 환경

- Front : React/Typescript, vanila-extract, Recoil
- Back-end : 백엔드 레포 참고
- 버전 및 이슈관리 : Jira
- 협업 툴 : Discord, Notion
- 서비스 배포 환경 : 
- 디자인 : [Figma](https://www.figma.com/file/fAisC2pEKzxTOzet9CfqML/README(oh-my-code)?node-id=39%3A1814)
- Jira :
- Notion :
- CI : code review(Sonar clound, LlamaPReview)
<br>

## 2. 채택한 개발 기술과 브랜치 전략

### React/TS, vanila-extract

- React/TS
    - 
- vanila-extract
    - zero-runtime css
    
### Recoil

### eslint, prettier

- 정해진 규칙에 따라 자동적으로 코드 스타일을 정리해 코드의 일관성을 유지하고자 했습니다.
- 코드 품질 관리는 eslint에, 코드 포맷팅은 prettier에 일임해 사용했습니다.
- eslint의 경우 내장된 추천 규칙을 사용하고 prettier 규칙은 팀원들과 협의 후 최소한의 내용으로 작성하고 추가하는 방식으로 진행하였습니다.
- 협업 시 매번 컨벤션을 신경 쓸 필요 없이 빠르게 개발하는 데에 목적을 두었습니다. -> Husky 라이브러리를 적용해 스크립트 형태로 Git hook을 강제하여 

### 브랜치 전략
- Git-flow 전략을 기반으로 main, develop 브랜치와 feature 보조 브랜치를 운용했습니다.
- main, develop, feat 브랜치로 나누어 개발을 하였습니다.
    - **main** 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
    - **develop** 브랜치는 개발 단계에서 git-flow의 master 역할을 하는 브랜치입니다.
    - **Feat** 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하고 merge 후 각 브랜치를 삭제해주었습니다.

<br>

## 3. 프로젝트 구조

```
├── README.md
├── .husky/_
├── .yarn/.vscode
├── .yarn/releases
├── .pnp.cjs
├── .pnp.loader.mjs
├── .yarnrc.yml
├── eslint.config.js
├── prettier.config.js
├── index.html
├── .gitignore
├── .prettierrc.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.json
├── yarn.lock
│
└── src
     ├── App.jsx
     ├── index.jsx
     ├── api
     │     └── 
     ├── asset
     │     ├── icon
     ├── atoms
     │     ├── 
     ├── common
     │     ├── 
     ├── pages
     │     ├── // feature pages
     └── styles
           └── 
```

<br>

## 4. 역할 분담

### 김세현
### 송가은

<br>

## 5. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2024.12.31 -
- UI 구현 : 
- 기능 구현 : 

<br>

### 작업 관리


## 6. 신경 쓴 부분

<br>

## 7. 페이지별 기능

<br>

## 8. 트러블 슈팅
- eslint, prettier 미 적용 실수 해결

<br>

## 9. 개선 목표

<br>
