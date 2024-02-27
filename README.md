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
<br>

# *Page Router*
NextJS 프레임워크에서 지원하는 파일시스템 기반 라우팅 방식이다.
pages 폴더에 생성한 js 컴포넌트 파일의 파일명이 곧 URL이 된다.
(컴포넌트 이름은 URL에 영향을 주지 않는다.)

<br>

# *static Pre Render & Hydration*

일반적인 React Application은 Client에서 컴포넌트를 Rendering한다.   
만약 인터넷 속도가 느리다면? 
브라우저가 React코드가 들어있는 Javascript를 로딩하기 전까지 화면에 아무것도 출력되지 않을것이다.   
또한 데이터를 Fetch가 완료되기 전까지, 해당 데이터를 구성하는 JSX를 렌더링 하지 못한다.

NextJS에서는 위 두가지 특성으로 사용자(브라우저)가 Javascript코드를 로딩한 뒤 React가 실행되기를 기다리지 않아도 된다.    

## *`static Pre Rendering`*
브라우저에서 Javascript 코드를 로드하기 전에 미리 JSX를 먼저 읽어들여 랜더링부터 해 준다

## *`Hydration`*
만약 컴포넌트에서 React의 Interactive한 기능을 사용한다면 (useState, useEffect 등)    
앞서 static pre render에 의해 JSX를 먼저 렌더링 한 뒤   
브라우저에서 ReactJS로딩이 완료되면 React APP으로 적용되는것을 말한다.    
(Pre Render에 의해 컴포넌트로부터 JSX만 렌더링되어 이미 출력된 HTML에 Javscript 로딩완료 후 적용되어 리액트 기능을 사용하는것을 말함.)

<br>


# *Route - Link*

Link태그에는 어떠한 props도 전달할 수 없다. 
style이라던지, className이라던지 설정도 불가능하다.
```js
<Link href="/" className="maerong">Maerong</Link>
```

Link태그 하위에 anchor태그를 중첩으로 넣어 className 혹은 style Props를 부여할 수 있다.
```js
<Link href="/">
  <a className="maerong">
    Maerong
  </a>
</Link>
```
위와같이 적용하면 anchor태그에 href className이 같이 적용된다.

# *Route - useRoute*
현재 컴포넌트 기준 location 정보를 제공해주는 Next 훅이다.

# *.module.css 여러 클래스 적용*

- ### `${Tepmlate Literal}` 백틱 + 표현식 사용
  ```js
  <a className={`${styles.link} ${styles.anchor}`}>Home</a>
  ```

- ### Array & join() 활용
  ```js
  <a className={[styles.link, styles.anchor].join(" ")}>Home</a>
  ```

# Style JSX
 
module.css와 같이 랜덤한 문자열 결합으로 이루어져있어 클래스명 중복에 대한 문제를 해결 해주며, 컴포넌트 내 독립적으로 적용된다.
부모 컴포넌트가 동일한 클래스명을 사용한다고 하더라도, 자식 컴포넌트의 클래스이름과 동일하지 않기 때문에 적용되지 않는다.

```js
  <style jsx>{`
        .nav {
          background-color: tomato;
        }
        a{
          text-decoration: none;
        }
    `}</style>
```
위와같이 일반적인 HTML문서 내에서 사용하는 style 태그를 선언하고 jsx라는 props를 지정해준다.  
style태그 사이에 {``} 중괄호 백틱을 선언하고 그 안에 css문장을 넣으면 된다.

```js
  <nav className="nav">
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>about</a>
    </Link>
  </nav>
  <style jsx>{`
        .nav {
          background-color: tomato;
        }
        a{
          text-decoration: none;
        }
    `}</style>
```
```css
  .nav.jsx-hashcode {
    background-color: tomato;
  }
  a.jsx-hashcode {
    background-color: tomato;
  }
```

위와 같은 형태로 CSS가 적용된다.    
jsx뒤에 붙는 hashcode는 컴포넌트별로 값이 달라진다.

```js
export default function Example(props) {
const color = null;
return <script jsx>{`
  .acvive {
    color : ${color != null ? color : props.color}
  }
`}<script>
}
```
기본적으로 {중골호} 내의 백틱 문자열 안에서 시작하기 때문에 위와 같이 조건식을 사용하여 동적으로 사용할 수 있다.

### Styled JSX Global
현재 컴포넌트 기준 모든 하위 컴포넌트에도 적용할 수 있는 전역 스타일 옵션이다.
```js
<style jsx global>{`
  a {
    color: white;
  }
`}</style>
```
위와 같이 gloabl이라는 props를 부여하한다.

# Custom App
 서버가 실행될때 특정 작업을 수행하는 Middleware와 유사한 매커니즘이다.   
 라우터에 의해 컴포넌트 교체가 발생할 때 App 컴포넌트에서 해당 페이지를 초기화한다.   
 따라서 Custom App컴포넌트에서 헤더, 푸터, 네비바 등에 해당하는 공통 레이아웃 혹은 전역 CSS등을 설정한다.

 _app.js 라는 이름으로 파일을 생성해줘야하며, pages 디렉토리에 존재해야한다.

App 컴포넌트에는 2개의 Props가 존재한다.
하나는 Route된 Component와 다른 하나는 page

 ```js
 import NavBar from "../components/NavBar";
import "../styles/globals.css"

export default function App({Component, pageProps}) {
  return <>
    <NavBar/>
    <Component {...pageProps} />;
    <style jsx global>{`
      a {
        color: white;
      }
      `}</style>
    </>
}
```
***global.css*** *는 _app.js인 App 컴포넌트외에는 import 할 수 없다.*
*(해당 예외 발생시 에러 출력됨)*
