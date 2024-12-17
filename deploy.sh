#!/bin/bash

# 서버 정보
USER="akflsvkqpt"       # 서버 사용자 이름
HOST="34.47.125.186"             # 서버 IP 주소
SSH_KEY="~/.ssh/id_rsa"           # SSH 키 경로
APP_DIR="/home/$USER/app"         # 애플리케이션 배포 디렉토리
FRONTEND_DIR="$APP_DIR/my-app"    # 프론트엔드 디렉토리 경로
BACKEND_DIR="$APP_DIR/backend"    # 백엔드 디렉토리 경로

# 1. 서버에 필요한 디렉토리 준비
echo "Preparing server directories..."
ssh -i $SSH_KEY $USER@$HOST << EOF
    mkdir -p $FRONTEND_DIR $BACKEND_DIR
    exit
EOF

# 2. 프로젝트 파일 전송
echo "Transferring project files..."
rsync -avz -e "ssh -i $SSH_KEY" ./my-app/ $USER@$HOST:$FRONTEND_DIR
rsync -avz -e "ssh -i $SSH_KEY" ./backend/ $USER@$HOST:$BACKEND_DIR

# 3. 프론트엔드 빌드 및 배포
echo "Building and deploying frontend..."
ssh -i $SSH_KEY $USER@$HOST << EOF
    cd $FRONTEND_DIR
    npm install
    npm run build
    cp -r build/* $BACKEND_DIR/src/main/resources/static/
    exit
EOF

# 4. 백엔드 빌드 및 스프링 부트 실행
echo "Building and starting backend..."
ssh -i $SSH_KEY $USER@$HOST << EOF
    cd $BACKEND_DIR
    ./gradlew clean build --refresh-dependencies
    nohup ./gradlew bootrun > app.log 2>&1 &
    exit
EOF

echo "Deployment completed!"
