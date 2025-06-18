<div align="center" style="display: flex; align-items: center; gap: 20px;">

  <img src="https://github.com/user-attachments/assets/fa7b8c00-9f60-4dc6-975e-2aa54bc575b8" alt="festival logo" width="200" />

  <div>
    <h1 style="margin: 0;">2025 HSU Festival</h1>
    <p style="margin: 4px 0 0;">2025 한성대 대동제 웹사이트 프론트엔드 레포지토리</p>
  </div>

</div>

## 🎉 서비스 소개

**2025 HSU Festival**은 컴퓨터공학부 4명, 미디어디자인트랙 1명이 함께 진로탐색학점제 프로젝트로 제작된 웹사이트입니다.<br>
대동제 정보가 여러 SNS(에브리타임, 인스타그램)에 흩어져있는 불편함을 해소하고자 제작되었습니다.

## ✨ 주요 기능
- 메인 홈(타임테이블)
- 공지사항, 사이트 정보
- 챗봇
- 커뮤니티
- 부스정보(부스, 푸드트럭, 프로모션)
<img width="1456" alt="image" src="https://github.com/user-attachments/assets/aa955219-fdd7-4c10-ae56-62aca778cd9a" />
<img width="1025" alt="image" src="https://github.com/user-attachments/assets/6bcff2d3-2ceb-48b7-82bd-dc6f83ca8226" />
<img width="1041" alt="image" src="https://github.com/user-attachments/assets/c689d036-6cb4-49b4-a173-01994b44ce91" />
<img width="1045" alt="image" src="https://github.com/user-attachments/assets/14f114fd-dd03-435a-97f0-506a50168377" />
<img width="1050" alt="image" src="https://github.com/user-attachments/assets/c384f47d-239d-4278-a5a6-1d16d9fb48fb" />



## 🧑‍💻 팀원 소개
| 임혜정 | 김혜진 | 김건우 | 정예빈 |
|:---:|:---:|:---:|:---:|
| <img src="https://github.com/frombunny.png" width="200"> | <img src="https://github.com/khyaejin.png" width="200"> | <img src="https://github.com/kmgnw.png" width="200"> | <img src="https://github.com/benniejung.png" width="200"> | 
| [@frombunny](https://github.com/frombunny) | [@khyaejin](https://github.com/khyaejin) | [@kmgnw.png](https://github.com/kmgnw.png) | [@benniejung](https://github.com/benniejung) |
| BE 개발(부스정보, 커뮤니티) | BE 개발(공지사항, 챗봇) | FE 개발(커뮤니티, 챗봇) | FE 개발(메인화면, 공지사항, 부스 정보) |
</br>


## 📁 프로젝트 폴더 구조

```bash
HSU-Festival-FE/
├── public/
├── src/
│   ├── api/             # 백엔드 API 요청 함수 정리
│   ├── assets/          # 이미지 및 기타 리소스
│   ├── components/      # 공통 컴포넌트
│   ├── hooks/           # 커스텀 훅
│   ├── layouts/         # 페이지 공통 레이아웃 컴포넌트 (예: Header, Footer 포함 레이아웃)
│   ├── pages/           # 페이지 단위 컴포넌트
│   ├── shared/          # 공용 타입, 상수, 유틸 함수 등
│   ├── stores/          # 전역 상태 관리 (Zustand)
│   ├── styles/          # 스타일링
│   └── App.jsx
├── .gitignore
├── package.json
└── README.md
```

## 🛠 기술 스택
| 역할                  | 종류                                                                                                                                                                                       |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Library**         | ![React](https://img.shields.io/badge/React-61DAFB?logo=react\&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite\&logoColor=white)                             |
| **Language**        | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript\&logoColor=black)                                                                                           |
| **Styling**         | ![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?logo=styled-components\&logoColor=white)                                                                     |
| **Data Fetching**   | ![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios\&logoColor=white) |
| **Formatting**      | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint\&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier\&logoColor=black)              |
| **Package Manager** | ![npm](https://img.shields.io/badge/npm-CB3837?logo=npm\&logoColor=white)                                                                                                                |
| **Version Control** | ![Git](https://img.shields.io/badge/Git-F05032?logo=git\&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github\&logoColor=white)                             |
| **Deploy**          | ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify\&logoColor=white)                                                                                                    |
                                                                                                   

## 📏 컨벤션
<details>
<summary>Git Convention</summary>

### 🌐 Git Flow
- **main**: 프로젝트가 최종적으로 배포되는 브랜치  
- **develop**: 다음 출시 버전을 개발하는 브랜치  
- **feature**: 기능을 개발하는 브랜치
  
### 📌 Git branch 규칙
> 1. **개인 작업은 꼭 feature 브랜치에서 하기**
> 2. **모든 작업 시작 전 develop에서 pull을 받은 후, feature 브랜치에서 작업 시작**
> 3. **개인 작업 마치면 feature 브랜치로 pull request를 통해 develop에 merge하기**
> 4. **프로젝트 완료 후 main으로 merge**
<br>

### 📝 Feature branch
> 1. **브랜치명은 아래의 형식으로 작성합니다. (feature/이름-기능제목#이슈번호)**
>    - 팀원 sheepyis의 브랜치명: `feature/sheepyis-login#1`
> 
> 2. **Feature branch -> develop branch로 merge하기 전 PR에서 reviewers 설정하여 팀원 1명 이상에게 approve 받기**
> 
> 3. **PR 후 팀원들에게 공지하기**

### 🎯 Commit Convention
> 1. **커밋 메시지의 형식은 아래처럼 통일해 주세요.**
>    - ✨feat: 로그인 페이지 UI 개발
>
> 3. **깃모지를 사용해 주세요.**
> 
> <li> 🎉 Start: Start New Project [:tada]
> <li> ✨ Feat: 새로운 기능을 추가 [:sparkles]
> <li> 🐛 Fix: 버그 수정 [:bug]
> <li> 🎨 Design: CSS 등 사용자 UI 디자인 변경 [:art]
> <li> ♻️ Refactor: 코드 리팩토링 [:recycle]
> <li> 🔧 Settings: Changing configuration files [:wrench]
> <li> 🗃️ Comment: 필요한 주석 추가 및 변경 [:card_file_box]
> <li> ➕ Dependency/Plugin: Add a dependency/plugin [:heavy_plus_sign]
> <li> 📝 Docs: 문서 수정 [:memo]
> <li> 🔀 Merge: Merge branches [:twisted_rightwards_arrows:]
> <li> 🚀 Deploy: Deploying stuff [:rocket]
> <li> 🚚 Rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 [:truck]
> <li> 🔥 Remove: 파일을 삭제하는 작업만 수행한 경우 [:fire]
> <li> ⏪️ Revert: 전 버전으로 롤백 [:rewind]

<br>




</details>




