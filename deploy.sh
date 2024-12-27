#!/bin/bash

# 서비스 중지
sudo systemctl stop backend.service

echo "Deployment completed!"

# 서비스 시작
sudo systemctl start backend.service