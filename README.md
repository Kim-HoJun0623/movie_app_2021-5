# 김호준 201740211
## [12월8일]

### 리스트와 Key
<br>
배열의 값을 반환할 때는 map()함수를 사용한다. 변환하여 반환하는 것도 가능하다

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
// [2, 4, 6, 8, 10]을 출력
```
console에서 확인해 본다.
<br>

### 여러개의 엘리먼트 렌더링 하기
예제는 배열로 부터 항목을 꺼네 li 엘리먼트에 넣어 저장하고, 이 것을 ul 엘리먼트 안에 포함시켜 DOM에 렌더링한다.
<hr>

### 기본 리스트 컴포넌트 
이번에는 8-1의 예제를 number배열을 props로 받아서 순서 없는 엘리먼트 리스트를 출
력하는 컴포넌트로 리팩토링 한다.

- 먼저 예제를 codePen에서 실행해보자.
- 그런데 이 예제를 실행하면 key를 넣어야 한다는 경고가 표시된다.
- 우리가 알고 있는 key props를 넣어 주면된다.
- 꼭 스트링으로 변환해 줘야 하는 것은 아니다.

<br>

### Key

- Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다
- key는 엘리먼트에 고유성을 부여하기 위해 배열 내부의 요소에 지정해야 한다
- 일반적으로 항목이 고정적일 경우는 배열의 index값을 사용한다.
- 다만 항목의 순서가 바뀔 수 있는 경우는 index사용을 권장하지 않는다.
- 이 것 때문에 성능이 저하되거나 컴포넌트의 state와 관련된 문제가 발생할 수 있기 때문이다.
## [11월24일]
<hr>

- react는 처음부터 점진적으로 적용할 수 있도록 설계되었으며 필요한 만큼 react를 사용할 수 있습니다.
- 온라인 코드 편집기를 사용하여 간편하게 리액트를 경험할 수 있다.
- codesandbox는 create-react-app으로 생성된 프로젝트와 동일한 환경에서 테스트가 가능하다,
- cdn방식으로 간편하게 테스트를 할 수 있도록 html코드를 제공하고 있다.
- react문서가 어렵게 느껴진다면. tania rascia가 쓴 react 개요를 먼저 학습하는 것이 도움이 된다,
- 개발을 통해 react를 학습하고 싶다면 자습서를 추천한다.

틱택톡 게임 만들기 > react 공부

## 엘리트먼트 렌더링
<hr>

엘리먼트는 화면에 표시할 내용을 기술합니다.
```js
const element = <h1>Hello, world</h1>;
```
브라우저 DOM 엘리먼트와 달리 React 엘리먼트는 일반 객체이며(plain object) 쉽게 생성할 수 있습니다. React DOM은 React 엘리먼트와 일치하도록 DOM을 업데이트합니다.

<br>

>주의
더 널리 알려진 개념인 “컴포넌트”와 엘리먼트를 혼동할 수 있습니다. 다음 장에서 컴포넌트에 대해 소개할 예정입니다. 엘리먼트는 컴포넌트의 “구성 요소”이므로 이번 장을 읽고 나서 다음 장으로 넘어갈 것을 권합니다.

## DOM에 엘리먼트 렌더링하기
<hr>
HTML 파일 어딘가에 <div>가 있다고 가정해 봅시다.

```js
  <div id="root"></div>
```
<br >

>이 안에 들어가는 모든 엘리먼트를 React DOM에서 관리하기 때문에 이것을 “루트(root)” DOM 노드라고 부릅니다.

>React로 구현된 애플리케이션은 일반적으로 하나의 루트 DOM 노드가 있습니다. React를 기존 앱에 통합하려는 경우 원하는 만큼 많은 수의 독립된 루트 DOM 노드가 있을 수 있습니다.

>React 엘리먼트를 루트 DOM 노드에 렌더링하려면 둘 다 ReactDOM.render()로 전달하면 됩니다.

```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```
위 코드를 실행하면 화면에 “Hello, world”가 보일 겁니다.

## [11월17일]
<hr>

## [TodoList]
>TodoApp과 TodoList 두개의 컴포넌트로 구성한다.<br>
handleChange는 모든 키보드 입력마다 React의 state를 갱신해서 보여준다.
(element)확인가능하다.<br>

#### 시간순으로 보면 다음과 같이 동작함!

- 유저입력 > handleChange >React의 state 갱신 > form element가 React state
를 참조한다.
-  유저 입력을 강제로 대문자로 변경할 경우에도 사용한다

## [TodoListComponent]
- TodoList class를 생성한다.
- ul 안에 추가된 task를 li로 출력한다.
- 앞서 저장한 id값은 key props로 사용한다.
- 마지막으로 ReactDOM으로 랜더링만 하면 끝난다.

## [key props의 역활]

>key는 props의 안정적으로 사용할 수 있도록 고유성을 부여하기 위해 필요하다.<br>
React가 어떤 props를 변경, 추가 또는 삭제할지 식별하는 것을 도와준다.<br>
반드시 date를 사용하지 않아도된다. 배열의 index값을 사용해도 된다.<br>
유일한 값이라면 그 값이 무엇이든 상관없다.

## [Remarkable사용하기]

1. creat-react-app으로 markdown-editor 프로젝트를 생성한다.

2. 정상 동작을 확인하다.
3. App.js에 있는 필요없는 코드를 삭제 및 코드 복사해 넣어준다.
4. component의 이름을 App으로 수정한다.
5. rendering은 index.js에 위임한다.
6. Remarkable을 설치한다.
7. React와 Remarkable을 import한다.
8. 동작확인!!



## [11월10일]
## git hub 페이지


>"homepage": "https://Kim-HoJun0623.github.io/movie_app_2021-5"

  git hub에서 지원하는 페이지로 올려주기 위해
  <br>
  package.json에다가 홈페이지 주소를 적어줍니다.


 -   "predeploy": "npm run build",
 -   "deploy": "gh-pages -d build"

  package.json에 script 부분에 적어줍니다
    <br>
 - npm install gh-pages  <br>

github 페이지를 만들기 위해서 터미널 작성
- npm run deploy

## CDN링크 
-React와 ReactDOM 모두 CDN을 통해 사용할 수 있습니다.

```js
<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
```
<br>

-react와 react-dom의 특정 버전을 로딩하려면 17을 사용하고자 하는 버전 넘버로 대체하면 됩니다.



## [11월03일]
 Navigation 컴포넌트 만들기

 ```js
import { Link } from "react-router-dom"
import './Navigation.css'
function Navigation(){
    return(
    <div className='nav'>
       <Link to="/">HOME</Link>
       <Link to="/about">About</Link>
    </div>
    )
}

export default Navigation

 ```
Navigation.js 생성하여 HOME과 About 버튼을 만들고 <br>
눌렀을떄 각각의 화면 표출!!
<hr>
App.js에 등록하기

```js 
  function App(){
  return(
   <HashRouter> 
      <Navigation />
      <Route path='/'exact={true}  component={Home}/>
      <Route path='/about' component={About}/>
   </HashRouter>
  )
}

```
이런식으로 Navigation 을 불러와 Navigation버튼을 넣어준다.!
<br>
Navigation을 사용하여 HOME버튼을 누를시  HOME컴포넌트를 불러오고
About 버튼을 누를시 About컴포넌트를 가져와 화면에 보여준다!!

## [10월27일]

### Slice함수

 slice는 
```js
  <p className='movie-summary'>
{summary.slice(0, 180)}...
</p>
```
slice(0,n) 글자 수를 n 만큼 표시해줍니다.
글자수 만큼 출력후 끊키기에 자연스래
...을 사용해서 부드럽게 만들어 줍니다.

### Router 

Router 설치방법
```javascript
npm install react-router-dom
```
라우터는 사용자가 입력한 URL을 통해 특정 컴포넌트를 불러준다.<br>
ex) loclahost:3000/about
#### About.js
```js
import './About.css'
console.log("about");
function About(){
    return(
        <div className='about-container'>
           <span> <h1>Hello About</h1></span>
        </div>
    )
}

export default About

```
<br>
이렇게 코드를 입력후 /about을 App.js에 HashRouter,Route를 사용하여Route컴포넌트에 전달한 path props를보고 componentprops에  지정한 About컴포넌트를 그려준것이다.
<br>
<br>
>localhost:3000에 접속하면기본 컴포넌트 <br>
>뒤에 /about를하면 전달받아 About.js를 보여주게되는것이다

  ![ex.image](./1030.png)

  ※ About.css적용이 되어있습니다!


## [10월13일]
<dr>

### Movie컴포넌트 만들기

```js

import PropTypes from 'prop-types'
function Movie(){
    return <h1>Hello</h1>
}

Movie.propTypes = {}

export default Movie
```
<br>

>yts-proxy.now.sh/list_movies.json 접속
>필요한 데이터 가져오기

Movie.propTypes 필요한 값을 써준다.

```javascript

  Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
```
axios.get()에 yts-proxy.now.sh/list_movies.json?sort_by=rating 전달
``` javascript
await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')//sort_by=rating을 통해여전달 및 정렬

```
Movie 컴포넌트에서 props 추가및출력

```js
function Movie({year,title,summary,poster}){
    return <h3>{title}</h3>//title 정보를 받아와 출력해준다
}
```
로딩 완료 후 실행 자리에 movies.map() 사용하여 함수전달

```js
  render(){
    const{inLoading, movies} = this.state
    return<div>{isLoading? 'Loading...' : movies.map()}
  }
```
map()함수에 컴포넌트 반환함수 전달

```js
    {isLoading
    ?'Loading...' 
    : movies.map((movie)=>{
      console.log(movie)
      return
    })}
```
App.js에Movie컴포넌트를 import하여movies.map()가 <Movie/>를 반환할 수 있도록 한다 

```js
  import Movie from './Movie'


  movies.map((movie)=>{
       <Movie 
             key = {movie.id}
             id = {movie.id}
             year = {movie.year}
             title = {movie.title}
             summary = {movie.summary}
             poster = {movie.medium_cover_image}
             genres ={movies.genres}/>
      return
    })}
```
Movie컴포넌트에 props전달!



## [10월06일]
<dr>

## axios 설치
TERMINAL(터미널)
```
npm install axios
```
<br>

>Json 주소를 입력
  https://yts.mx/api/v2/list_movies.json
>
접속시 min 방식이라 보기 불편하다.
<br>

크롬 웹스토어에서 
### JSON Viewer 설치
다시 Json주소로 접속해준다. 

>1. status : 응답상태 메세지
>2. data : 영화 데이터
>3. mobie_count : API가 보내준 영화 데이터 개수
>4. limit : 보내준  데이터의 개수
>5. movies키 서브키로(id,url,imdb_code,title)등 제공
<hr >

### getMovies()에 async 붙이고, axios.get()에 await붙이기
```javascript
  getMovies = async () =>{
    const movies = await axios.get('https://yts.ms/api/v2/list_movies.json')
  }
  
  componnetDidMount(){
    this.getMovies()
  }
```
console 로 출력해보기

~~~javascript

  getMovies = async () =>{
    const movies = await axios.get('https://yts.ms/api/v2/list_movies.json')
    console.log(movies)
  }
  
 ~~~
  ![ex.image](./1006.png)

<br>

## [09월29일]

Prop-Types 도입
---
prop-Types을 도입하면 
<br>
>Picture Props에{dish.image}가 아닌{true}를 전달할경우 이를 검사해준다.
<br><br>

Prop-Types 다운
---
터미널에서  명령어 입력
```javascript
  npm install prop-types
```
prop-types등록하여 컴포넌트가 전달받은 props가 원하는 값인 확인해준다.
<br><br>

State 사용하기
---
>class를 `React.Component'로 상속받는다.
<br>
'React.Component'클래스는 500줄이 넘는 코드로 여러가지 구현을 가져와 사용할 수 있다.

<br>
class 형 컴포넌트에서 바로 return을 바로 사용할 수 없기에 render()함수 내에서 return문을 사용해준다.

```javascript
  import React,{Component} from 'react'
  
  class Appst extends Component{
      render(){
        return(
          <h1> Hello React <h1/>
        )
      }
  }
  export default Appst
```
출력 ->Hello React


<br>
 

## [09월15일]
Map 함수
----
>선언형 프로그래밍으로써 map 함수를 사용하여 받은 값을 하나하나 보여준다.
```javascript
  const friends = ["a","b","c"]
  
  friends.map(foo =>{
    console.log(foo);
    return 0;
  })

```
이결과 콘솔창에 map함수로 인하여 정렬되는것을 확인하실수있습니다.

![ex_imgage](./0915.png)

이렇게 정렬되어 하나하나 보여준다.
<hr>

## 저번주 활용 - Potato.js 를 만들어 react 화면에 표출 

<br>
Potato.js 

```javascript
    function Potato(bar){
        return<h1>I love {bar.fav}</h1>
       }
        export default Potato;
```
App.js
```javascript
import Potato from "./Potato";

function App() {
  return (
    <Potato fav="potato"/>
  )

export default App;
```
Potato.js를 function을 App.js에 import 후 ```<Potato>```를 return하면 index.js에서 Potato.js의 값을 react화면에 보여준다

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

리액트 서버 실행 
-------
<br>
npm start

App.js
-----

```javaScript

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
```javaScript
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(

    <App/>,
  document.getElementById('root')
);

```
### index.js 에서 정보를 받고 그정보를 index.html 한테  보내주어서 화면으로 표출해준다.
index.html

``` html
<div id="root"></div>
```
