# 📖 TRENDB README

<img width="654" alt="image" src="https://github.com/user-attachments/assets/9b518f95-a34f-491a-8ff5-2370fa3da076">


- 배포 URL : 
- Test ID : 
- Test PW : 

<br>

## 프로젝트 소개
- 원하는 주제의 트렌드를 요약해주는 서비스 ###TRENDB
<br>

## 팀원 구성

<div align="center">

| **김세현** | **송가은** | 
| :------: |  :------: | 
| [<img src="https://github.com/user-attachments/assets/0ec92cc1-539d-4717-baf8-b8dfb4ef6303" height=150 width=150> <br/> @sehyun0518](https://github.com/sehyun0518) | [<img src="https://github.com/user-attachments/assets/b6343692-50fe-4073-941d-7d73d00c36b4" height=150 width=150> <br/> @gn-ioeo](https://github.com/gn-ioeo) | 

</div>

<br>

## 1. 개발 환경

- Front : React/Typescript, vanila-extract, Zustand
- Back-end : 백엔드 레포 참고
- 버전 및 이슈관리 : Jira
- 협업 툴 : Discord, Notion
- 서비스 배포 환경 : 
- 디자인 : [Figma](https://www.figma.com/file/fAisC2pEKzxTOzet9CfqML/README(oh-my-code)?node-id=39%3A1814)
- Jira : [Jira](https://vino-private.atlassian.net/jira/software/projects/DF/boards/3)
- Notion : [Notion](https://learned-leo-6ad.notion.site/DB-fis-11136a22fce78030ac6ff9ddbdb55e3d?pvs=4)
- Code/Pull Request review: Sonar clound, LlamaPReview
<br>

## 2. 채택한 개발 기술과 브랜치 전략

### React/TS, vanila-extract

- React/TS
    - react v18.3.1을 사용
    - typescript v5.4.3을 사용(트러블 슈팅 관련)
- vanila-extract
    - zero-runtime css
    - recipe
    - sprinkles
    
### Zustand

### eslint v9, prettier

- 정해진 규칙에 따라 자동적으로 코드 스타일을 정리해 코드의 일관성을 유지하고자 했습니다.
- 코드 품질 관리는 eslint에, 코드 포맷팅은 prettier에 일임해 사용했습니다.
- eslint의 경우 내장된 추천 규칙을 사용하고 prettier 규칙은 팀원들과 협의 후 최소한의 내용으로 작성하고 추가하는 방식으로 진행하였습니다.
- 협업 시 매번 컨벤션을 신경 쓸 필요 없이 빠르게 개발하는 데에 목적을 두었습니다.
- Husky 라이브러리를 적용해 스크립트 형태로 Git hook을 활용하여 prettier 및 eslint 실수를 방지해두고 진행하였습니다.

### 브랜치 전략
- Git-flow 전략을 기반으로 develop 브랜치와 feature 보조 브랜치를 운용했습니다.
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
공통 컴포넌트 제작
- Box
- Text
- Button
- Popup
- Toast
페이지 개발
### 송가은
공통 컴포넌트 제작
- sideBar
페이지
- 추적(tracking)
- 
<br>

## 5. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2024.12.31 -
- UI 구현 : 2024.02.01 - 
- 기능 구현 : 2024.03.01 -

<br>

### 작업 관리


## 6. 신경 쓴 부분
사용자 경험(UX)
- 활용 라이브러리들 중 사용자의 경험을 최대화하기 위해 비교적 작은 사이즈의 상태 관리 라이브러리(Zustand)와 zero-runtime css(vanilla-extract)를 통해 해당 웹 애플리케이션을 사용하는 사용자들에게 보다 나은 경험을 제공할 수 있도록 노력했습니다.
효율적인 구조
- FSD 아키텍쳐를 채택하여 관련 기능들만을 관리하고 확장 가능성을 넓히고 유지보수성을 높일 수 있도록 하였습니다.
<br>

## 7. 페이지별 기능

<br>

## 8. 트러블 슈팅
- eslint, prettier 미 적용 실수 해결(git issues)
- useNavigate 활용 시 rendering 문제(git issues)

<br>

## 9. 개선 목표
- CSR기반으로 불필요한 렌더링을 최소화하는 프로그래밍을 지향하고자 노력한다.
<br>
