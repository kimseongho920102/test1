# Project Title

React 와 Srping boot를 활용한 웹 개발 포트폴리오 용 프로젝트

## 개발일정

- 시작일 : 2024-11-25
- 제안서 : 1주
- 요구사항 분석 : 1주
- 개발 기본 환경 구성 : 4주
- 화면 설계 : 2주
- 테이블 설계 : 2주
- proto Type 개발 : 4주
- test and packaging : 1주
- 프로젝트 완료 예정일 : 2025-04-30

## 개발 인원 현황
1명 - 개발 경력 2년

## 사용 기술
- Front End
    - React, TypeScript, JavaScript, Jquery, Html, Css

- Back End
    - java, spring, spring boot, Mybatis, H2, JPA

- API
    - Highchart - 차트 
    - DataTable - 그리드




## Daily Logs

### 제안서작성
- [2024-11-29](dailyReadMe/2024-11-29.md)

### 요구사항 분석
- [2024-12-06](dailyReadMe/2024-12-06.md)

### 개발 기본 환경 구성
 - [2024-12-13](dailyReadMe/2024-12-13.md)
 
### 화면 설계
 - [2024-12-20](dailyReadMe/2024-12-20.md)
### 테이블 설계

### proto Type 개발

### test and packaging



## etc

my-app : front
프론트 개발 순서 빌드 - 배포 - 리액트 기동
npm run build
cp -r build/* ../backend/src/main/resources/static/
npm start

backend : backend
백엔드 개발 순서 클린 빌드 - 스프링 부트 기동
./gradlew clean build --refresh-dependencies
./gradlew bootrun