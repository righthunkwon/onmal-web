## 브랜치 가이드

- master : 운영 서버 배포 브랜치
- develop : 개발 서버 배포 브랜치
- feature/detail : 개발 중인 로컬 페이지(기능 별 생성)

### 개발 순서

1. feature/detail 로컬 개발
2. feature/detail → develop Merge
3. develop test
4. develop → master Merge

## 커밋 컨벤션

- ✨ feat: 새로운 기능을 추가하는 경우
- 🐞 fix: 버그를 고친경우
- 📚 docs: 문서를 수정한 경우
- 📝 style: 코드 포맷 변경, 세미콜론 누락, 코드 수정이 없는경우
- 🔨 refactor: 코드 리펙토링
- ☔ test: 테스트 코드. 리펙토링 테스트 코드를 추가했을 때
- 🧹 chore: 빌드 업무 수정, 패키지 매니저 수정
- 💄 design: CSS 등 사용자가 UI 디자인을 변경했을 때
- ✏️ rename: 파일명(or 폴더명) 을 수정한 경우
- 🗑️ remove: 코드(파일) 의 삭제가 있을 때
- 🌱 add: 파일 추가한 경우
- 🔀 merge: 브랜치 병합
