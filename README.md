<br/>

# React
Meta(Facebook)이 개발한 오픈소스 Javascript 라이브러리. <br/>
대규모 웹 서비스의 UI를 더 편하게 개발하기 위해 만들어진 기술. <br/>
<br/>
 
## React 특징
- **_컴포넌트_** 를 기반으로 UI를 표현한다.
- 화면 업데이트 구현이 쉽다. 
  - React => **_선언형 프로그래밍._**
  - Javascript => 명령형 프로그래밍.
- 화면 업데이트가 빠르게 처리된다. 
  - 동시에 발생한 업데이트들을 모아서 <br/>
  **_DOM 수정 횟수를 최소화하는 작업을 자동으로 처리_** 해줌. <br/>
  React는 **_Virtual DOM_** 이라는 가상의 DOM을 이용하고 있기 때문. <br/>

> * **_Virtual DOM 이란?_** <br/>
> DOM을 자바스크립트 객체로 흉내낸 것으로 일종의 복제판이라고 생각하면 된다. <br/>
> React는 업데이트가 발생하면 실제 DOM을 수정하기 전에 <br/>
  이 가상의 복제판 DOM에 먼저 반영해본다. <br/>
> 
> [업데이트가 다 모인 Virtual DOM] -> [모인 업데이트를 Actual DOM에 한번에 반영.] <br/>
> (Actual DOM은 1회만 수정.) <br/>

<br/><br/>

## Visual Studio Code 및 확장 설치 
- Live Server 
- Prettier - Code formatter 
- Korean Language Pack for Visual Studio Code 
- Material Icon Theme 
- ESLint 
<br/><br/>

## Node.js
범용적으로 사용할 수 있는 JavaScript의 실행 환경(Run Time, 구동기)이다. <br/>
매우 유연하게 설계되어 있고, 생산성이 높은 자바스크립트를 웹 브라우저 밖에서도 사용하기 위해 만들어졌음. <br/>
(자바스크립트로 웹 서버, 모바일 앱, 데스크톱 앱 등을 만들 수 있게 되었다.) <br/>
<br/>
Node.js는 단일 스레드지만, <br/>
비동기 처리는 내부적으로 **_"이벤트 루프 + 백그라운드 스레드(쓰레드풀)"_** 로 처리한다. <br/>

### 1. Node.js는 왜 단일 스레드인가?
Node.js는 기본적으로 JavaScript 엔진(V8) 위에서 작동하며, 메인 실행 스레드는 단 하나이다. <br/>
이 메인 스레드에서는 사용자 코드, 이벤트 루프, 콜백 처리 등을 담당한다. <br/>

### 2. 비동기는 어떻게 처리하나?
Node.js는 libuv라는 라이브러리를 사용한다. 이 libuv가 핵심이다. <br/>

~~~
JS 코드 (단일 스레드)
     ↓
Event Loop (이벤트 루프)
     ↓
libuv 쓰레드 풀에서 I/O 비동기 작업 처리
     ↓
완료되면 콜백 큐에 전달 → 이벤트 루프가 실행
~~~

#### [예시]
~~~
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  console.log('파일 읽기 완료:', data);
});

console.log('다음 작업 계속 진행...');
~~~

이 코드의 흐름: <br/>
- fs.readFile() 호출 → 실제 파일 읽기는 libuv의 백그라운드 스레드풀(기본 4개)에서 처리됨.
- 메인 스레드는 멈추지 않고 '다음 작업' 출력.
- 파일 읽기 완료 → 콜백 큐에 넣음.
- 이벤트 루프가 콜백 큐를 확인하고, 콜백 실행 → '파일 읽기 완료' 출력.

<br/><br/>

## Node.js 설치
https://nodejs.org/ko/download 에서 패키지 다운로드 후 설치. <br/>

#### [Node.js 버전 확인]
짝수의 버전이 LTS 버전이다. <br/>
~~~
% node -v
v22.17.0
~~~

Node.js와 함께 설치되는 NPM(Node Package Manager)도 잘 설치되었는지 확인한다. <br/>
(NPM은 Node.js의 프로젝트 단위인 패키지를 관리해 주는 도구이다.) <br/>
새로운 패키지를 생성하거나 외부 라이브러리를 설치/삭제하는 유용한 기능들을 제공한다. <br/>
(NPM이 제대로 설치되지 않은 경우, Node.js가 제대로 설치되지 않았을 가능성이 크므로 재설치 과정이 필요하다.) <br/>

#### [NPM 버전 확인]
~~~
% npm -v
10.9.2
~~~
<br/><br/>

## 새로운 패키지 생성 

> * **_패키지_** <br/>
> Node.js 에서 사용하는 프로젝트(프로그램) 단위. <br/>

~~~
% cd section03
% npm init 
~~~

~~~
% npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (section03) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/mac/Desktop/react/section03/package.json:

{
  "name": "section03",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}


Is this OK? (yes) 

npm notice
npm notice New major version of npm available! 10.9.2 -> 11.4.2
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.4.2
npm notice To update run: npm install -g npm@11.4.2
npm notice
mac@Mac-MacBook-Pro section03 % 
mac@Mac-MacBook-Pro section03 % 
~~~

<br/><br/>

## Node.js 실행
index.js 파일 생성 후 아래와 같이 명령을 입력한다. <br/>
(아래와 같이 node + 파일명을 입력해서 자바스크립트 코드를 간단하게 실행시켜 볼 수 있다.) <br/>
~~~
% cd section03 
% node index.js
안녕 Node.js
~~~
파일이 늘어남에 따라 계속 이런 방식으로 실행시킬 수 없으므로 <br/>
아래와 같이 package.json 파일의 'scripts' 내에 시작할 경로를 설정해 준다. <br/>
그럼 start 명령으로만으로도 실행을 할 수 있다. (일종의 매크로 역할.) <br/>
(이와 같이 긴 명령어의 경우 scripts에 설정해서 사용하면 된다.) <br/>
~~~
{
  .....
  "scripts": {
    .....
    "start": "node src/index.js"
  },
  .....
}
~~~
이제는 아래와 같이 start 명령만으로도 실행이 가능하다. <br/>
~~~
% cd section03 
% npm run start
~~~
<br/><br/>

## Node.js의 모듈 시스템 

> * **_모듈 시스템_** <br/>
> 모듈을 다루는 시스템. <br/>
> 회원 관리 기능, 장바구니 기능, 결제 기능 등을 <br/>
> 각각 user.js, cart.js, payment.js 파일로 나눈 것을 모듈이라 한다. <br/>
> (user 모듈, cart 모듈, payment 모듈 등으로 부른다.) <br/>
> 이런 모듈을 생성하고, 불러오고, 사용하는 등의 <br/>
> 모듈을 다루는 다양한 기능을 제공하는 시스템이 모듈 시스템이다. <br/>

### JavaScript의 모듈 시스템.
CJS, ESM이 보통 많이 사용되는 모듈 시스템이다. <br/>
이 두개를 같이 사용할 수 없다. <br/>
디폴트는 CJS이고, <br/>
ESM을 사용하려면 package.json에 "type": "module"를 추가한다. <br/>
- Common JS (CJS) **_*_**
  ~~~
  module.exports = {
    add,
    sub,
  }
  ~~~
  ~~~
  const {add, sub} = require("./math");
  console.log(add(1, 2));
  console.log(sub(1, 2));
  ~~~
- ES Module (ESM) **_*_**
  - package.json에 "type": "module" 추가 필요.
  ~~~
  export { add, sub };
  ~~~
  ~~~
  import { add, sub } from "./math.js";
  console.log(add(1, 2));
  console.log(sub(1, 2));
  ~~~
- AMD
- UMD

<br/><br/>

## Node.js 라이브러리 사용하기
npmjs.com 에 접속.

### randomcolor 라이브러리 사용해보기 
https://www.npmjs.com/package/randomcolor
~~~
% cd section03 
% npm i randomcolor
~~~
라이브러리를 추가하면 node_modules 디렉토리(실제 라이브러리가 저장되는 곳.)가 추가되고, <br/>
package-lock.json 파일(라이브러리 버전 정보.)이 추가된 것을 확인할 수 있다. <br/>
그리고 아래와 같이 package.json에 의존성이 추가된 것을 확인할 수 있다. <br/>
라이브러리 관련 파일들이 지워져도 'npm i' 또는 'npm install'을 실행하면 <br/>
아래 의존성 정보로 다시 자동으로 라이브러리를 설치해 준다. <br/>
(그래서 깃헙에도 node_modules 폴더는 올리지 않는다.) <br/>
~~~
.....
  "dependencies": {
    "randomcolor": "^0.6.2"
  }
~~~
('^' 갈매기 표시는 0점대 부터 1점대 이전까지 중 최신 버전을 설치하겠다라는 의미.) <br/>

<br/><br/>

## React App 생성하기
1. Node.js 패키지 생성 <br/>
2. React 라이브러리 설치 <br/>
3. 기타 도구 설치 및 설정 <br/>
(3의 설정이 복잡하여 Vite로 설치.) <br/>

> * **_Vite_** <br/>
> 차세대 프론트엔드 개발 툴. <br/>
> 기본 설정이 적용된 React App 생성 가능. <br/>
> (직접 모든 의존성 라이브러리들을 조사하고 설치하지 않아도 됨.) <br/>

~~~
% cd /REACT 
% npm create vite@latest 
Need to install the following packages:
create-vite@7.0.0
Ok to proceed? (y) y


> npx
> create-vite

│
◇  Project name:
│  section04
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Scaffolding project in /Users/mac/Desktop/react/section04...
│
└  Done. Now run:

  cd section04
  npm install
  npm run dev
~~~

section04/package.json 을 기반으로 라이브러리를 설치한다.
~~~
% cd section04
% npm i 
~~~
<br/><br/>

## React App 기본 구조
- public/ : 이미지나 정적 파일을 저장하는 곳.
- src/ : React 소스(.jsx 확장자) 파일을 저장하는 곳.

<br/><br/>

## React App 실행

#### [개발 버전으로 실행하기]
~~~
% npm run dev
  VITE v7.0.0  ready in 579 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
  h

  Shortcuts
  press r + enter to restart the server
  press u + enter to show server url
  press o + enter to open in browser
  press c + enter to clear console
  press q + enter to quit
~~~
http://localhost:5173/ 로 접속. <br/>
<br/><br/>

## React App 구동원리 
React App에는 Web Server가 내장되어 있고, <br/>
'npm run dev' 로 서버를 가동시키는 것. <br/>

<br/><br/>

## React 실습 준비하기

~~~
% npm create vite@latest

> npx
> create-vite

│
◇  Project name:
│  section05
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Scaffolding project in /Users/mac/Desktop/react/section05...
│
└  Done. Now run:

  cd section05
  npm install
  npm run dev
~~~
~~~
% npm i

added 153 packages, and audited 154 packages in 13s

33 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
~~~
~~~
% cd section05
% npm install 
% npm run dev

> section05@0.0.0 dev
> vite


  VITE v7.0.0  ready in 552 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
~~~
<br/><br/>

## React 컴포넌트
아래와 같이 함수에서 html 태그를 반환할 수 있으며, 이러한 함수를 컴포넌트라 부른다. <br/>
함수 컴포넌트를 부를 때에는 보통 함수 이름으로 부른다. <br/>
따라서 아래 컴포넌트는 App 컴포넌트라고 할 수 있다. <br/>
~~~
function App() {          // 부모 컴포넌트 혹은 루트 컴포넌트. 
  return (
    <>
      <Header />
      <h1>Hello World!</h1>
    </>
  );
}
~~~
아래와 같이 화살표 함수로 바꿔서 컴포넌트를 만들 수도 있다. <br/>
(클래스로 컴포넌트로 만들 수도 있지만, 복잡해서 보통은 이 두 방식을 사용.) <br/>
~~~
const Header = () => {    // 자식 컴포넌트. 
  return (
    <header>
      <h1>header</h1>
    </header>
  );
};
~~~

> * **_컴포넌트 이름의 첫글자는 반드시 대문자이어야 한다!_** <br/>
> 첫글자가 대문자가 아니면 컴포넌트로 인식하지 않는다. <br/>

> * **_최상위 컴포넌트는 루트 컴포넌트라고 부른다._** <br/>
> rener()의 인수로 전달되는 컴포넌트를 루트 컴포넌트라고 부른다. <br/>
> 보통은 루트 컴포넌트를 'App'으로 만들어서 사용한다. <br/>

> * **_JSX (JavaScript Extensions)_** <br/>
> 확장된 자바스크립트의 문법. <br/>
> 기존 자바스크립트 문법에서는 return()에 html 태그를 반환할 수 없음. <br/>
> JSX 문법을 사용하면 자바스크립트와 html을 혼용하여 사용 가능. <br/>

<br/><br/>

## Props로 데이터 전달하기
아래 예시와 같이 동일한 태그에 text, img 값만 달라지도록 구현하는 경우가 있다. <br/>
이 때 달라지는 값, 즉 전달할 수 있는 값을 Props라고 한다. <br/>
~~~
function App() {
  return (
    <>
      <Button text={"메일"} img={"main.png"} />
      <Button text={"카페"} img={"cafe.png"} />
      <Button text={"블로그"} img={"blog.png"} />
      .....
    </>
  );
}
~~~

<br/><br/>

## 이벤트 처리하기

> * **_이벤트 핸들링_** <br/>
> 이벤트가 발생했을 때 그것을 처리하는 것. <br/>
> ex) 버튼 클릭 시 경고창 노출. <br/>
> 
> * **_이벤트_** <br/>
> 웹 내부에서 발생하는 사용자의 행동. <br/>
> ex) 버튼 클릭, 메시지 입력, 스크롤 등. <br/>

<br/><br/>

## State(useState)로 상태 관리하기
State의 값에 따라 렌더링 되는 UI를 결정할 수 있다.
~~~
import './App.css';
import { useState } from "react";
// React 라이브러리 useState를 추가해준다.
// userState()는 2개의 요소를 받고, 반환하는 State를 새로 생성한다.
// 첫번째는 State의 현재 값이고, 두번째는 이 State를 변경시키는 상태 변화 함수이다.
// React에서는 State 값이 변경되었을 때에만 리렌더링을 해준다. 
// 때문에 화면에서 바로 변경사항이 적용되어야 할 때에는 일반 변수가 아닌 State를 사용해야 한다. 

function App() {
  // const state = useState(0);
  const [state, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  return (
    <>
      <div>
        <h1>{light}</h1>
        <button onClick={() => {
          setLight(light === 'ON' ? "OFF" : "ON")
        }}>전구 {light === "ON" ? "끄기" : "켜기"}</button>
      </div>
      <div>
        <h1>{state}</h1>
        <button onClick={() => {
          setCount(state + 1);
        }}>+</button>
      </div>
    </>
  );
}

export default App;
~~~

> * **_React에서 컴포넌트가 리렌더링되는 경우_** <br/>
> 1. 자신이 관리하는 State 값이 변경되었을 때. <br/>
> 2. 자신이 제공받는 props의 값이 변경되었을 때. <br/>
> 3. 부모 컴포넌트가 리렌더링되면 자식 컴포넌트도 리렌더링된다. <br/>
>
> 여러 State를 하나의 컴포넌트에서 사용하면, 불필요한 리렌더링이 발생할 수 있다. <br/>
> 때문에 서로 관련없는 State는 새로운 컴포넌트로 분리하는 것이 좋다. <br/>

아래와 같이 useState를 써야 리렌더 된다.
~~~
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1); // state 변경 → 리렌더 발생
  };

  return (
    <div>
      <p>{count}</p> {/* 여기가 자동으로 업데이트됨 */}
      <button onClick={handleClick}>+1</button>
    </div>
  );
}
~~~

<br/><br/>

## State(useState)로 사용자 입력 관리하기

#### [section05/Register.jsx]
~~~
import { useState } from "react";

// [State로 사용자 입력 관리하기]

// 간단한 회원가입 폼 
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개 

const Register = () => {
    // 이전(Register_bk.jsx)에는 여러개의 State로 나눠서 관리했던 
    // 4가지 데이터(name, birth, country, bio)를
    // 아래와 같이 객체 형태로 만들어서 하나의 State로 함께 관리할 수 있다. 
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    // 이벤트가 일어나는 target에 해당하는 name에 value를 설정해줌. 
    const onChange = (e) => {
        console.log(e.target.name, e.target.value);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <div><input name="name" value={input.name} onChange={onChange} placeholder={"이름"} /> {input.name}</div>
            <div><input name="birth" type="date" value={input.birth} onChange={onChange} /> {input.birth}</div>
            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option value="">선택</option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select> {input.country}
            </div>
            <div>
                <textarea name="bio" value={input.bio} onChange={onChange} /> {input.bio}
            </div>
        </div>
    );
}
    
export default Register;
~~~
<br/><br/>

## Reference(useRef) 변수 사용하기 
새로운 Reference 객체를 생성하는 기능. <br/>
~~~
const refObject = useRef()
~~~

컴포넌트 내부의 변수를 생성한다는 점이 useState와 비슷하지만, <br/>
값이 변경되면 컴포넌트 리렌더링을 하는 useState와 달리 <br/>
useRef는 **_어떤 경우에도 리렌더링을 유발하지 않음._** <br/>
**_렌더링에 영향을 미치고 싶지 않은 변수를 생성하고 싶은 경우_** 에 useRef를 사용. <br/>

- useRef: Reference 객체를 생성. (어떤 경우에도 리렌더링을 유발하지 않음.)
- useState: State를 생성. (그리고 값이 변경되면 컴포넌트 리렌더링.)

<br/>
useRef를 이용하면 컴포넌트가 렌더링하는 특정 DOM 요소에 접근할 수 있음. <br/>
그럼으로써 해당 요소를 조작하는 것도 가능. <br/>

~~~
const refObj = useRef();
console.log(refObj);
  // 이 레퍼런스 객체란 Current라는 프로퍼티에 
  // 현재 보관할 값을 담아두기만 하는 단순한 자바스크립트 객체. 

// const refObj = useRef(0);
// console.log(refObj.current);
// Current 프로퍼티에 0이라는 초기값을 저장하고 있는 
// 레퍼런스 객체가 출력이 되는 것을 확인할 수 있다. 
~~~
~~~
<div>
  <textarea
    ref={refObject}   // 해당 요소 조작 가능. (Focus 또는 스타일 변경 등..)
    name="bio"
    value={input.bio}
    onChange={onChange}
  />
</div>
~~~

만약, useRef가 아닌 그냥 변수로 사용한다면? <br/>

~~~
const Register = () => {
    // const countRef = useRef(0);
    let count = 0;
    .....
~~~

useRef 사용 안하고 이렇게 변수로 사용할 경우, <br/>
onChange 가 호출될 때마다 count 변수를 초기화하는 이 부분도 계속 호출되기 때문에 <br/>
결과 값은 계속 1만 출력됨. <br/>
**_useState, useRef 같은 경우에는 값이 다시 리셋되지 않도록 내부적으로 설계되어 있음._** <br/>
<br/><br/>

## React Hooks
클래스 컴포넌트의 기능(State, Ref 등.)을 함수 컴포넌트에서도 사용할 수 있도록 도와주는 메서드들. <br/>
이름 앞에 동일한 접두사 'use'가 붙음. <br/>
(useState, useRef, useEffect, useReducer 등. 대략 20개 정도 있음.) <br/>

- useState: State 기능을 낚아채오는 Hook.
- useRef: Reference 기능을 낚아채오는 Hook.

함수 컴포넌트 내부에서만 호출 가능. <br/>
~~~
const Register = () => {
  const [input, setInput] = useState({  // 이와 같이 함수 컴포넌트 내부에서만 호출. 
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
~~~

조건문, 반복문 내부에서는 호출 불가. <br/>
~~~
if (true) {
  const [state, setState] = useState(); // 사용 X.
}
~~~

커스텀 Hook도 제작 가능. <br/>
~~~
function useInput() {
  // input 값을 관리하는 Custom Hook. 
}
~~~
<br/><br/>

## 카운터 앱 만들기 
'section06' 프로젝트를 생성한다. <br/>

~~~
cd ~/IdeaProjects/react-study
npm create vite@latest

Ok to proceed? (y) y
◇  Project name:
│  section06
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
└  Done. Now run:

  cd section06
  npm install
  npm run dev
~~~

아래와 같이 설정해 준다. <br/>

##### [eslint.config.js]
~~~
    rules: {
      'no-unused-vars': 'off', // 사용되지 않는 변수가 있으면 경고 또는 오류를 내는 규칙.
      'react/prop-types': 'off', // PropTypes를 안 써도 ESLint가 경고하지 않음.
                                // (PropTypes는 컴포넌트가 받는 props의 타입을 체크하는 도구.)
    },
~~~

사용하지 않는 파일 및 코드들을 삭제해서 초기화 한다.
- public/vite.svg 파일 삭제.
- src/assets/react.svg 파일 삭제. 
- 'src/App.jsx' 파일의 App() 리턴문 내용 삭제.
- 'src/App.css', 'src/index.css' 파일 내용 삭제.
- 'src/main.jsx' 파일 내용 중 <StrictMode> 태그 삭제.
<br/><br/>

> #### State Lifting (State 끌어 올리기)
> State를 위로 끌어올려서 하위의 컴포넌트들이 모두 공유할 수 있도록 하는 방법. <br/>
> 하나의 State를 여러 컴포넌틑에서 사용할 경우, <br/>
> State는 반드시 공통 부모가 되는 컴포넌트에 두어야 한다. <br/>
> **_데이터들은 항상 위에서 아래로 하나의 방향으로만 흐름._** (단방향 데이터 흐름.) <br/>

<br/><br/>

## 리액트 컴포넌트의 라이프사이클
Mount -> Update -> UnMount <br/>
useEffect를 사용하여 라이프사이클을 제어한다. <br/>

- Mount
  - 컴포넌트가 탄생하는 순간.
  - 화면에 처음 렌더링 되는 순간.
- Update 
  - 컴포넌트가 다시 렌더링 되는 순간.
  - 리렌더링 될 때를 의미. 
- UnMount 
  - 컴포넌트가 화면에서 사라지는 순간.
  - 렌더링에서 제외되는 순간을 의미.

<br/><br/>

## useEffect 
리액트 컴포넌트의 '사이드 이펙트'를 제어하는 새로운 React Hook. <br/>

- 사이드 이펙트
  - 어떠한 동작에 따른 부수적인 효과, 파생되는 효과.
  - 컴포넌트 내부의 값 변경 (동작) -> 콘솔에 변경된 값 출력 (사이드 이펙트)

~~~
useEffect(() => {}, []);
// 두번째 인수로 전달한 배열의 값이 바뀌면, 사이드 이펙트로서 첫번째 인수인 콜백 함수가 실행된다.
~~~

(예시)
~~~
useEffect(() => {}, [count]);
// 'count' state 값이 바뀔 때마다, 첫번째 인수로 전달한 콜백 함수를 실행시키게 된다.  
~~~
~~~
useEffect(() => {
  console.log(`count: ${count}`);
}, [count]);
// 이 배열을 '의존성 배열'(deps, dependency array)라고 부른다. 
~~~
<br/><br/>

## useEffect로 라이프사이클 제어하기 

#### 1. 마운트를 useEffect로 제어하는 방법. 
빈 배열을 두번째 인수로 주면, 값이 변경 될 일이 없기 때문에 최초 마운트 될 때에만 첫번째 인수의 콜백 함수가 실행된다. <br/>

~~~
useEffect(() => {
  console.log("mount");
}, []); // 빈 배열을 두번째 인수로 전달한다. 
~~~
<br/>

#### 2. 업데이트를 useEffect로 제어하는 방법. 
두번째 인수를 생략하면, 컴포넌트가 리렌더링 될 때마다 계속 콜백 함수가 실행된다. <br/>

~~~
useEffect(() => {
  console.log("update"); 
}); // 두번째 인수를 생략한다. 
~~~

꼭 마운트 실행되고 나서 업데이트 될 때에만 콜백 함수를 실행하고 싶을 경우에는 <br/>
마운트가 되었는지 안되었는지 여부를 저장하는 변수를 useRef를 이용해서 만들어 준다. <br/>

~~~
import { useState, useEffect, useRef } from "react";

const isMount = useRef(false);

useEffect(() => {
    if(!isMount.current) {
        isMount.current = true;
        return;
    }
    console.log("update");
});
~~~
<br/>

#### 3. 언마운트를 useEffect로 제어하는 방법.
아래와 같이 Even(짝수) 컴포넌트를 추가해 준다. <br/>

~~~
import { useEffect } from "react";

const Even = () => {
    useEffect(() => {
        // useEffect의 콜백 함수에서 반환하는 함수를 '클린업', '정리함수'라고 부른다.
        // 이 정리함수는 useEffect가 끝날 때 실행이 된다.
        // 두번째 인수가 빈 배열이기 때문에 mount가 될 때 이 useEffect가 실행이 되고,
        // 끝날 때(즉, unmount 될 때) 아래 정리함수가 실행이 된다.
        return () => {
            console.log("unmount");
        };
    }, []);
    return <div>짝수입니다.</div>;
};

export default Even;
~~~

새로 생성한 Even 컴포넌트를 App에서 count 값이 짝수인 경우에만 보이도록 추가해 준다. <br/>

~~~
function App() {
    return (
        <div className="App">
            <h1>Simple Counter</h1>
            .....
            {count % 2 === 0 ? <Even /> : null}
            .....
    );
~~~

화면에서 count 값을 홀수로 바꾸면, 콘솔 로그에 "unmount"가 출력되는 것을 확인할 수 있다. <br/><br/>

> #### 라이프 사이클 제어를 응용하기 
> 컴포넌트가 마운트될 때 특정 데이터를 불러오거나, <br/>
> 업데이트 되었을 때 데이터가 정상적인 값인지를 확인하거나, <br/>
> 컴포넌트가 언마운트될 때 해당 컴포넌트에서 쓰고 있던 메모리를 해제하려는 경우 등 <br/>
> 응용해서 사용할 수 있다. <br/>

<br/><br/>

## React 개발자 도구 사용하기
chrome 웹 스토어에서 'React Development Tools' 확장 프로그램 추가. <br/>
'파일 URL에 대한 액세스 허용' 옵션을 활성화한다. <br/>
아래와 같이 개발자 도구에서 컴포넌트와 Props 상태를 확인할 수 있다. <br/>

<img src="./images/react_development_tool_01.png" width="70%" /><br/>

톱니바퀴 버튼을 누른 후, <br/>
'Highlight updates when components render' 옵션을 체크하면 <br/>
컴포넌트가 리렌더링되었을 때 하이라이팅이 되는 것을 확인할 수 있다. <br/>

<img src="./images/react_development_tool_02.png" width="70%" /><br/>

<br/><br/>







<br/><br/><br/><br/>

