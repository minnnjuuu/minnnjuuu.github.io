# minnnjuuu portfolio

정적 HTML/CSS/JavaScript로 구성된 개인 포트폴리오 사이트입니다.

## 실행 방법

별도의 빌드 과정이나 의존성 설치 없이 `index.html`을 브라우저에서 열면 됩니다.

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

로컬 서버로 확인하려면 아래 명령어를 사용할 수 있습니다.

```bash
python3 -m http.server 8000
```

실행 후 브라우저에서 `http://localhost:8000`으로 접속합니다.

## 개발 정보

### 기술 스택

- HTML5
- CSS3
- Vanilla JavaScript

### 파일 구조

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/

```

### 주요 파일

- `index.html`: 페이지 마크업과 섹션 구조
- `css/style.css`: 전체 스타일, 반응형 레이아웃, 애니메이션 스타일
- `js/script.js`: 터미널 타이핑 효과와 스크롤 진입 애니메이션
- `img/`: 프로젝트 이미지 리소스



