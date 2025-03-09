# 파라메타
- 배포 주소 : http://34.64.157.30:8080

## 프로젝트 개요
React 와 Spring Boot를 활용한 Full-Stack 웹 게백 프로젝트입니다.
- 사용자 로그인 및 관리 기능 구현
- 대시보드에서 데이터 시각화 제공
- RESTful API 기반 백업 구축 및 프론트엔드 연동
- CI/CD 자동화 적용을 통해 배포 효율성 향상

## 개발 일정
| 단계 | 일정 |
|------|------|
| 프로젝트 시작 | 2024-11-25 |
| 제안서 작성 | 1주 |
| 요구사항 분석 | 1주 |
| 개발 후기 구성 | 4주 |
| 화면 설계 | 2주 |
| 테이블 설계 | 2주 |
| 프로토타입 개발 | 4주 |
| 테스트 & 배포 | 1주 |
| **완료 예정일** | 2025-04-30 |

## 개발 인원
- **개발자** : 1명 (경력 2년)

## 사용 기술
### **Frontend**
- React, TypeScript, JavaScript, jQuery, HTML, CSS
- UI 라이브러리 : Ant Design

### **Backend**
- Java, Spring Boot, Spring, MyBatis, JPA, H2

### **DevOps & Deployment**
- **CI/CD** : GitHub Actions
- **Containerization** : Docker, Docker Compose
- **Orchestration** : Kubernetes (적용 예정)
- **Database** : PostgreSQL (경복 환경: H2)
- **Cloud** : GCP (VM 배포)

## 프로젝트 실행 방법

### 1️⃣ **로컴 경복 환경 실행**
#### 🔹 **프론트엔드 (React) 실행**
```bash
cd my-app
npm install
npm start
```

#### 🔹 **백업 (Spring Boot) 실행**
```bash
cd backend
./gradlew clean build --refresh-dependencies
./gradlew bootrun
```

### 2️⃣ **배포 환경 (Docker 기반 실행)**
#### 🔹 **도커 컨테이너 빌드 & 실행**
```bash
docker-compose up --build -d
```

#### 🔹 **컨테이너 종료**
```bash
docker-compose down
```

## CI/CD 및 배포 방식
1. **GitHub Actions**를 사용하여 코드 푸쉬 시 자동으로 빌드 및 배포 진행
2. **Docker 컨테이너화**하여 소리포 배포 가능
3. **GCP VM 환경에서 Nginx 리버스 프로크시를 활용한 배포**
4. **(추가 예정)** Kubernetes를 활용한 클러스터 환경 구성

## 폴더 구조
```bash
프로젝트 목록
📦 project-root
 ┣ 📂 my-app          # Frontend (React)
 ┣ 📂 backend         # Backend (Spring Boot)
 ┣ 📂 infra           # DevOps 관련 설정 (CI/CD, Docker, Kubernetes)
 ┣ 📂 docs            # 프로젝트 문서
 ┣ 📜 docker-compose.yml  # 컨테이너 실행 설정
 ┣ 📜 README.md       # 프로젝트 소개 파일
```

## 경부 게시 (토지 확장 예정)
- [ ] Kubernetes 배포 설정 추가
- [ ] Grafana & Prometheus를 활용한 모니터링 도입
- [ ] PostgreSQL로 데이터베이스 변경 (H2 → PostgreSQL)
