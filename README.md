# 두번째 | Web & Mobile App Front-end 개발자 채용 과제

Front-end 개발자 채용 과제로 제시된 요구사항 구현

## 페이지별 주요 기능

- 홈(`/`)

  - 주문목록 페이지로 이동가능

- 주문목록(`/order`)

  - 헤더는 상단, 총 주문내역은 하단에 고정
  - 아이템을 불러오기 전까지 로딩상태 표시
  - 주문 아이템개수 조작 가능
    - 최소주문수량 1개, 최대주문수량 999개까지 주문 가능(합계 수량이 0일경우 주문 불가)
    - 각 아이템의 가격과 총 가격, 수량이 일치
  - 주문 수량이 1개 이상인 경우 아이템 배경생 변경 바꾸기
  - 주문하기 클릭후 로딩중인 상태 하단 버튼에 표시

- 성공(`/complete`), 실패(`/error`)
  - 일정 시간 (3초) 경과 후 자동으로 주문목록 페이지로 이동

## 기술스택

- React(Create React App) + Typescript
- Zustand
- styled-components
- eslint, prettier

## 프로젝트 설치 및 실행 방법

```bash
git clone https://github.com/kcjfgnl9205/houstep-project.git .
npm install
npm run server
npm run start
```
