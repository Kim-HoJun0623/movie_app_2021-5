# 김호준 201740211
<br> 
 
 ## [09월08일]
 <br>
 
 React란?
---------
> React는 facebook에서 제공해주는 프론트엔드 라이브러리라고 볼 수 있습니다.
싱글 페이지 애플리케이션이나 모바일 애플리케이션의 개발 시 토대로 사용될 수 있습니다.

React특징
--------
>React의 특징은 크게 다음과 같이 구분해보았습니다.
>1. Data Flow
>2. Component 기반 구조
>3. Virtual Dom
>4. Props and State
>5. JSX

리액트 생성
----------

<u>
npx create-react-app 프로젝트 폴더명
</u>


<br>
리액트 서버 실행 
----------
#### npm start

<br>
App.js
-----
```JavaScript

function App() {
  return (
    <div>
      Hello!! React
    </div>
  );
}


export default App;
```
### App 의 정보를  index.js로 보내준다.
Index.js
-------
``` JavaScript
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(

    <App/>,
  document.getElementById('root')
);

```
index.js 에서 정보를 받고 그정보를 index.html 한테  보내주어서 화면으로 표출해준다.
index.html
-----
``` html
<div id="root"></div>
```
