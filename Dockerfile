# 빌드 스테이지
FROM node:21-alpine AS builder

WORKDIR /app

# 의존성 설치
COPY package*.json ./
RUN npm install

# Next.js 소스 파일 복사 및 빌드
COPY . .
RUN npm run build

# 프로덕션 스테이지
FROM node:21-alpine AS production

WORKDIR /app

# 빌드된 파일 복사
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

EXPOSE 3000

CMD ["npm", "start"]