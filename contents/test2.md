---
date: '2020-07-29'
title: 'Test2'
category: 'Web'
summary: '홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자.'
thumbnail: './test.png'
tags: ['#Web', '#React', '#Vite']
---

## 📌Hooks

리액트를 활용하여 프론트 개발을 할 때, 두 가지 방법을 사용할 수 있다. 하나는 **클래스형 컴포넌트**를 사용하는 것이고, 다른 하나는 **함수형 컴포넌트**를 사용하는 것이다. 과거에는 클래스형 컴포넌트를 주로 사용했지만, 현재는 리액트 공식문서에서 함수형 컴포넌트와 **`Hook`**을 함께 사용할 것을 권장하고 있다.

`Hook`은 `React v16.8`에 새로 도입된 기능으로, 기존 클래스형 컴포넌트를 사용하던 리액트의 단점을 보완하기 위해 도입되었다.

> **클래스형 컴포넌트의 단점**
>
> • 코드의 재사용성과 어려운 구성
> • `this`나 이벤트 핸들러 등, 기본적인 `JS` 문법 숙지의 필요성
> • 축소가 어렵고, 깨지기 쉽고 신뢰하기 어려운 `reloading` > <br />
>
> 위의 이유로, 리액트의 최신 기술을 클래스형 컴포넌트에는 효과적으로 적용할 수 없었다. 함수형 컴포넌트는 이런 문제들을 보완할 수는 있었지만, `state`의 사용이나 `life cycle`을 직접 다루는 등의 기능은 사용할 수 없다는 점이 여전히 문제였다. `Hook`은 이러한 함수형 컴포넌트의 단점을 해결하여 함수형 컴포넌트와 클래스형 컴포넌트의 장점만을 취할 수 있도록 하였다.
>
> 모든 `Hook`은 리액트 패키지에서 함수를 `import`하는 방식으로 사용할 수 있다.

<br />

### 1. useState()

`useState()`는 리액트 컴포넌트의 상태 관리를 위해 제공되는 `Hook`으로, 사용법은 다음과 같다.

```jsx
import { useState } from "react";

function App() {
  /*
  const nameState = useState("seongminn");
  const name = nameState[0];
  const setName = nameState[1];
  */
  const [name, setName] = useState("seongminn");

  return <div>{name}<div>
}
```

`ES6`에 새롭게 도입된 기능인 **객체 구조 분해 할당** 방식을 사용하면 보다 간결하게 코드를 작성할 수 있다.

`useState()`를 호출하면 배열을 하나 반환하는데, 배열의 첫번째 원소는 **현재 상태 값**을 담고 있는 변수이고, 두번째 원소는 **상태 값을 갱신하는 함수**, 즉 `setter` 함수이다.

괄호 안의 값은 상태의 초기 값을 의미한다.

`setter` 함수를 사용하는 이유는 리액트의 **불변성**과 관련이 있다. 불변성을 지킨다는 것은 메모리 영역 내의 값을 변경할 수 없는 것, 즉 기존 객체를 복사하여 새로운 객체에 업데이트 작업을 하는 것을 말한다. 이렇게 불변성을 지켜주었을 때, 리액트가 컴포넌트의 상태가 변경되었음을 감지할 수 있고, 필요한 부분만 리랜더링 할 수 있다.

그렇기 때문에 컴포넌트의 상태 을 변경하기 위해서는 직접 변수를 다른 값으로 할당하는 것이 아니라, 꼭 **상태 값 변경 함수**를 사용해야 한다.
<br />

### 2. useEffect()

`useEffect()`는 리액트의 `side effect` 처리를 위해 사용된다.

> **side effect란?**
>
> `React`의 컴포넌트가 화면에 랜더링된 후 비동기로 처리되어야 하는 부수적인 효과들을 `side effect`라고 일컫는다.
>
> `Hooks`가 등장하기 이전에는 클래스 컴포넌트의 `componentDidMount()`나 `componentDidUpdate()` 함수를 사용해서 `side effect`를 처리했다. 하지만 복잡한 클래스형 컴포넌트에 대해 개발자들은 점점 불만을 갖기 시작했고, 함수형 컴포넌트를 사용하기 시작하면서 `React`에서는 `Hook`을 제공하였고, 그 중에서 `useEffect()` 함수를 통해 `side effect`를 처리할 수 있도록 하였다.

`useEffect()`는 컴포넌트가 랜더링 될 때마다 특정 작업을 실행할 수 있도록 한다. 크게 3가지로, **컴포넌트가 마운트 됐을 때**, **컴포넌트가 언마운트 됐을 때**, 그리고 **컴포넌트가 업데이트 됐을 때**로 나뉜다.

기본 형태는 다음과 같다.

```jsx
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('Hi');
  }, []);

  return; // ...
}
```

`useEffect(function, deps)`

`useEffect()`는 두 개의 인자를 갖는다. 하나는 컴포넌트가 랜더링 되었을 때 실행하고자 하는 작업이다. 컴포넌트가 화면에 가장 처음 랜더링 되었을 때만 함수를 실행하고자 한다면, 위와 같이 `deps`에 빈 배열을 넣는다.

이 때, `deps`는 의존성 배열`(dependency)`이라고 하고, 의존성 배열에 존재하는 값이 바뀔 때마다 첫번째 인자로 넘겨 받은 함수를 실행한다.

그래서 컴포넌트가 업데이트 될 때에도 함수를 실행하고자 할 때는 다음과 같이 사용할 수 있다.

```jsx
useEffect(() => {
  console.log(myName);
  console.log('update');
}, [myName]);
```

`myName`의 값이 변경될 때마다 함수 내부의 내용을 실행하게 될 것이다. 이 때, `myName`이 변경될 때만 실행하는 것이 아니라, 가장 처음 컴포넌트가 랜더링 될 때에도 실행한다.

마지막으로 컴포넌트가 사라질 때는 `useEffect()` 함수 내부에 `cleanup` 함수라고도 부르는 **뒷정리 함수**를 반환시켜준다.

```jsx
useEffect(() => {
  console.log('unmount');

  return () => {
    console.log('clean up');
  };
}, []);
```

이 때 컴포넌트가 언마운트 될 때만 함수를 실행하고자 한다면 `deps`에 빈 배열을 전달한다. 만약 특정 값이 업데이트 되기 직전에 함수를 실행하고 싶을 땐 `deps`에 검사하고자 하는 값을 넣어준다.

<br />

### 3. useCallback()

`useCallback()`은 함수를 `Memoization`하기 위해 사용한다. 첫번째 인자로는 함수를 넘겨 받고, 두번째 인자로는 배열을 넘겨 받는다. 배열 내의 값이 변경될 때까지 함수를 저장해놓고 재사용할 수 있도록 한다.

다음과 같이 호출할 수 있다.

```js
const memoizedCallback = useCallback(function, deps);
```

`React` 컴포넌트 안에 함수가 선언되어 있다면, 이 함수는 해당 컴포넌트가 랜더링 될 때마다 새로 생성된다. 이 때, `useCallback()`을 사용하면 컴포넌트가 랜더링 되더라도 의존성 배열에서 참조하는 값이 변경되지 않는 한 새롭게 생성되는 것을 막을 수 있다.

예를 들어 다음과 같은 함수가 존재한다고 가정하자.

```js
const addInt = () => a + b;
```

이를 `useCallback()`을 사용한다면 다음과 같이 수정할 수 있다.

```js
const addInt = useCallback(() => a + b, [a, b]);
```

이제 이 함수는 의존하는 값 `a`와 `b`가 변경되지 않는 한 새로 생성되지 않고, 기존 함수를 계속해서 반환한다.

하지만, 사실 자바스크립트에서 함수를 새로 선언하는 것이 브라우저 실행 성능에 큰 영향을 미치지는 않는다. 그렇다면 `useCallback()`을 언제 사용해야 의미있게 사용할 수 있을까?
<br />

**자바스크립트 함수 동등성**
먼저 자바스크립트의 함수 간 동등성에 대해 알 필요가 있다. 자바스크립트에서는 함수 역시 객체로 취급이 되어 메모리 주소의 참조 비교가 일어난다. 따라서 다음과 같은 결과를 확인할 수 있다.

```js
const add1 = () => a + b; // undefined
const add2 = () => a + b; // undefined

console.log(add1 === add2); // false
```

이러한 자바스크립트의 특성은 `React` 컴포넌트 함수 내에서 어떤 함수를 다른 함수의 인자로 넘기거나 자식 컴포넌트의 `prop`으로 넘길 때 예기치 못한 성능 문제로 이어질 수 있다.

따라서 `React`에서는 자식 컴포넌트의 불필요한 랜더링을 줄여 위와 같은 오류의 발생을 최소화하는 것이 중요하다.

<br />

**React.memo와 사용하기**
`useCallback()`과 `React.memo`를 함께 사용한다면 컴포넌트를 최적화하고 불필요한 랜더링을 줄일 수 있다.

다음의 예시 코드를 살펴보자.

```jsx
import { useState } from 'react';

const CounterBtn = function ({ onClicks, count }) {
  console.log('카운터 버튼 렌더링');
  return <button onClick={onClicks}>{count.num}</button>;
};

function Counter() {
  const [count1, setCount1] = useState({ num: 0 });
  const [count2, setCount2] = useState({ num: 0 });

  const increament1 = () => {
    setCount1({ num: count1.num + 1 });
  };

  const increament2 = () => {
    setCount2({ num: count2.num + 1 });
  };

  return (
    <div className="App">
      <div>{count1.num}</div>
      <div>{count2.num}</div>
      <CounterBtn onClicks={increament1} count={count1} />
      <CounterBtn onClicks={increament2} count={count2} />
    </div>
  );
}

export default Counter;
```

해당 예제에서 `CounterBtn`을 클릭하면 `increment` 함수의 `setCount`에 의해 `count`가 변경된다. `state`가 변경되었으니 부모 컴포넌트는 리랜더링 되고 자식 컴포넌트에 새로운 `props`를 넘겨 주어 자식 컴포넌트 역시 리랜더링 된다.

결국 해당 예시 코드에서 `CounterBtn`은 두 번 랜더링 되는 것이다.

이 때, `increment` 함수에 `useCallback()`을 사용하고, 컴포넌트 전체를 `React.memo()`로 감싸주면 컴포넌트가 최적화되어 불필요한 랜더링을 막을 수 있다.

```jsx
import { useCallback, useState } from 'react';

// ...

const increament1 = useCallback(() => {
  setCount1({ num: count1.num + 1 });
}, [count1]);

// ...

export default React.memo(Counter);
```

> **React.memo**
>
> 부모 컴포넌트가 리랜더링 되어도 자식 컴포넌트의 `props`가 이전과 동일한 결과를 랜더링 한다면, `React.memo()`를 호출한다. `React.memo`는 컴포넌트를 메모이징하도록 래핑하여 마지막으로 랜더링된 컴포넌트를 재사용할 수 있도록 한다.
>
> 그렇다면 `useCallback()`과 `React.memo`를 함께 사용하는 이유는 무엇인가?
>
> `React.memo`는 **얕은 비교**를 수행한다. 그런데 앞서 말했듯이 자바스크립트는 함수 역시 객체로 취급하기 때문에 `useCallback()`을 사용하지 않는다면 `increment` 함수는 랜더링 될 때마다 재생성되어 주소값이 달라지고, 결국 `React.memo`는 다른 값을 참조하고 있다고 판단하여 올바른 수행을 하지 못하고 리랜더링을 하게 된다.

<br />

### 4. useRef()

**4-1. 변수 관리**
리액트 컴포넌트는 기본적으로 내부 상태가 변할 때마다 **리랜더링**한다. 이 때, 컴포넌트가 다시 렌더링 되면, 즉 컴포넌트 함수가 새로 호출되면 컴포넌트 내부의 변수들이 모두 초기화되고, 함수의 모든 로직이 다시 실행된다.

하지만 때로는 컴포넌트가 리렌더링 되더라도 기존에 참조하고 있던 함수 내부의 값을 보존해야 하는 경우가 있다. 예를 들어 버튼을 이용하여 타이머를 시작하거나 멈추고 싶은 경우가 있다. 다음과 같이 프로그램을 작성해볼 수 있다.

```jsx
import { useState } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  let intervalId;

  const startCount = () => {
    intervalId = setInterval(() => setTime(prev => prev + 1), 1000);
  };

  const stopCount = () => {
    clearInterval(intervalId);
  };

  return (
    <>
      <p>자동 카운트: {time}</p>
      <button onclick={startCount}>시작</button>
      <button onclick={stopCount}>정지</button>
    </>
  );
}
```

하지만 위의 경우에 `time`의 상태값이 변경될 때마다 `Timer` 컴포넌트가 호출되고, 내부의 변수가 초기화되면서 `intervalId`의 값도 새로운 값으로 바뀔 것이다. 결국 브라우저에는 정리되지 못한 `intervalId`들이 1초에 하나씩 쌓여가게 될 것이다.

과거 클래스 컴포넌트를 사용할 때에는 이러한 문제를 해결하기 위해 `instance` 변수에 값을 저장했다. 하지만 대부분 함수형 컴포넌트를 사용하는 지금은 `useRef()`을 사용하여 문제를 해결할 수 있다.

`useRef()`는 `current` 속성을 포함한 객체를 반환한다. 이 때, 인자로 넘어온 초기값을 `current` 속성에 할당한다. 이 속성은 값을 변경해도 컴포넌트가 초기화되지 않고, 반대의 경우에도 마찬가지로 컴포넌트가 리렌더링 되어도 `current` 속성의 값은 유실되지 않는다.

`useRef()`의 이런 성질을 활용하여 다음과 같이 코드를 수정할 수 있다.

```jsx
import { useState, useRef } from "react";

function Timer() {

  // ...

  const intervalId = useRef(null);

  const startCount = () => {
    intervalId.current = setInterval(() => setTime(prev => prev + 1), 1000)
  }

  const stopCount = () => {
    clearInterval(intervalId.current)
  }

  return (
    // ...
  )
}
```

이제 `time`의 상태값이 변경되어 컴포넌트가 리렌더링 되어도 `interval.current`의 값은 변경되지 않고, 정지 버튼을 통해 정상적으로 진행 중이던 타이머를 종료할 수 있다.

**4-2. DOM 요소에 접근**
`Javascript`에서는 `DOM` 객체에 접근하기 위해 `querySelector`나 `getElementById` 같은 `DOM selector` 함수를 사용한다. `React`에서도 `DOM`을 직접 선택해야 할 상황이 존재하는데, 이 경우에도 `useRef()`를 사용할 수 있다.

먼저 `useRef()`를 사용하여 `Ref` 객체를 생성하고, 이를 선택하고자 하는 `DOM` 요소의 `ref` 속성값으로 설정한다. 이제 `Ref` 객체의 `.current` 값은 선택하고자 하는 `DOM` 요소를 가리킨다.

예시를 통해 확인해보자.

```jsx
import { useEffect, useRef } from 'react';

function Focus() {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef) // {current: input.sc-iBkjds.gXslCC}
    inputRef.current.focus();
  }, [])

  const loginAlert = () => {
    alert("환영합니다~")
    inputRef.current.focus()
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="id"
      <button onclick={loginAlert}>Login</button>
    </div>
  );
}
```

`useEffect()`를 활용하여 컴포넌트가 렌더링된 직후에만 `input` 태그에 `focus`가 잡히도록 했고, 로그인 버튼을 클릭할 때마다 알림창이 뜬 후 `input` 태그에 다시 포커싱을 적용했다.

### 5. Custom Hooks

사용자가 직접 `Hooks`를 만들어 사용할 수도 있다. 일반적으로는 반복되는 로직이 발생하는 경우에 `Custom Hooks`를 사용한다.

사용하는 방법은 간단하다. `useState()`, `useEffect()` 등 기존의 `Hooks`를 이용하여 원하는 기능을 구현해주고, 이를 `export` 해주면 된다. 이제 직접 만든 `Hook`이 필요할 때마다 `import`하여 손쉽게 사용할 수 있다.

`Custom Hook`을 사용하여 `API`를 요청하는 방법을 알아보자. 먼저 `Custom Hook`이 여러개 존재하는 경우 용이한 관리를 위해 `src` 폴더에 `hooks` 폴더를 생성하고, `useFetch.js` 파일을 생성한다.

참고로 `Custom Hook`을 만들 때, 파일명은 보통 **`use`**라는 키워드로 시작한다.

```jsx
import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => setData(data));
  }, [url]);

  return data;
}

export default useFetch;
```

위 코드는 `url` 정보를 인자로 받아 요청한 데이터를 넘겨주는 코드이다. `useEffect()`를 사용하여 `url`이 변경될 때마다 새롭게 함수를 실행해주도록 했다.

그렇다면 위 `Custom Hook`을 직접 사용해보도록 하자.

사용하고자 하는 컴포넌트에서 `useFetch()`를 `import`하고 이를 변수에 할당하여 사용할 수 있다.

```jsx
import useFetch from './../hooks/useFetch';

function App() {
  const words = useFetch(`API LINK/Words`);
  const days = useFetch(`API LINK/Days`);

  return (
    <div>
      {words.map(word => (
        <p>word</p>
      ))}
    </div>
  );
}
```

<br />

### 6. 이외의 Custom Hooks

리액트에서는 다른 개발자들이 만든 `Custom Hook`도 라이브러리로 설치하여 사용할 수 있다. 아래는 개발자들이 만든 다양한 `Custom Hook`를 확인할 수 있는 링크이다.

- https://nikgraf.github.io/react-hooks/
- https://github.com/rehooks/awesome-react-hooks
  <br />

---

#### 참고 사이트

- 🙇🏻‍♂️ 김 민준, 리액트를 다루는 기술<br />
- 🙇🏻‍♂️ 김 민준, [벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/)<br />
- 🙇🏻‍♂️ https://www.daleseo.com/<br />
- 🙇🏻‍♂️ https://itprogramming119.tistory.com/entry/React-useRef-%EC%82%AC%EC%9A%A9%EB%B2%95-%EB%B0%8F-%EC%98%88%EC%A0%9C<br />
