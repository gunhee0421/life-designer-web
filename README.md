# 라디-Web
## 개요
- 앱 링크: https://play.google.com/store/apps/details?id=dorun.com.life_designer_client&hl=ko
- 앱 서비스 라디의 홍보 페이지

## 개발내용
- tailwind의 sm, md, lg, xl, 2xl를 이용한 반응형 디자인
- next + tailwind + ts
- SEO 최적화 적용
- lightHouse 최적화를 위해 .png, .svg파일을 next에서 제공하는 .webp보다 압축률이 좋은 .avif파일로 변환
- IntersectionObserver를 이용한 화면 인터렉션 적용
- aws ec2로 배포, nginx로 포트포워딩, docker로 컨테이너 관리
- 도메인 연결 및 https 인증 설정
  
![Image](https://github.com/user-attachments/assets/2cc822ae-f992-49a3-8a4e-6379ba9469af)


## 사용한 라이브러리 및 폰트
```
next
tailwindcss
typescript
react-slick
slick-carousel
lucide-react

Noto-Sans-KR (Google Font 무료폰트)
Pretendard (눈누사이트 무료폰트)
```
