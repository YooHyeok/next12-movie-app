# *NextJS v12 설치*    
현재 최신버전 14버전이고, @12.0.7로 명시하더라도 CLI 설치환경만 적용될 뿐 최신버전으로 설치된다.    
따라서 12버전의 설치환경을 통해 인스톨 후 원하는 버전으로 직접 다시 인스톨해야한다.   

```bash
> npx create-next-app@12
```
`√ What is your project named? ... [프로젝트명 입력]`
```bash
> npm install next@12.0.7 react@17.0.2 react-dom@17.0.2
```
설치 후 개발자 모드로 구동
```bash
> npm run dev
```