# minnnjuuu portfolio

Figma의 노트 디자인을 HTML, CSS, 바닐라 JavaScript로 구현한 포트폴리오입니다. 현재 사이트는 `main`과 `ver2` 브랜치에서 관리하며, 기존 버전은 `ver1` 브랜치에 보존합니다.

## 실행

별도의 빌드나 의존성 설치 없이 `index.html`을 브라우저에서 열 수 있습니다. 로컬 서버를 사용하려면 프로젝트 폴더에서 실행하세요.

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`으로 접속합니다. 폰트는 Google Fonts에서 불러옵니다.

## 구성

- `index.html`: 페이지와 섹션 구조
- `css/style.css`: 노트 테마와 반응형 레이아웃
- `js/script.js`: 프로젝트, 연도별 이야기, 대회 기록과 화면 인터랙션
- `img/ver2/`: Figma 디자인의 로고와 장식 리소스
