---
date: '2023-09-02'
title: 'BOJ 1051. 숫자 정사각형'
category: 'algorithm'
summary: '알고리즘짱 도전기 / BOJ 1051. 숫자 정사각형 - JS'
thumbnail: './image/algorithm.png'
tags: ['# algorithm', '# javascript', '# boj']
---

## 문제

[https://www.acmicpc.net/problem/1051](https://www.acmicpc.net/problem/1051)

## 풀이

N < 50, M < 50이므로 반복문을 사용할 수 있을 거라 생각했습니다. 주어진 배열을 차례로 순회하며 현재 위치에서 한 변의 길이가 k인 정사각형의 꼭짓점의 값을 검사합니다.

## 소스코드

```js
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
let answer = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    let k = 1;

    while (i + k < N && j + k < M) {
      if (
        input[i][j] === input[i + k][j] &&
        input[i][j] === input[i][j + k] &&
        input[i][j] === input[i + k][j + k]
      ) {
        answer = Math.max(answer, (k + 1) ** 2);
      }
      k++;
    }
  }
}

console.log(answer);
```

## 개선

배열을 순회할 때마다 k를 1로 초기화하는 것은 불필요한 연산을 야기했습니다. 조건을 만족하는 정사각형이 존재하더라도, 정사각형의 넓이가 최대가 아니라면 정답이 될 수 없기 때문입니다. 따라서 max라는 변수를 두고 매 순회마다 k의 값을 max로 초기화합니다. max는 현재까지 발견한 조건을 만족하는 가장 큰 정사각형의 크기를 의미합니다. 이제 넓이가 최대가 아닌 정사각형을 찾는 불필요한 과정을 줄일 수 있기 때문에 시간 복잡도가 줄어들 것으로 예상했습니다.

```js
let max = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    for (let k = max + 1; i + k < N && j + k < M; k++) {
      if (
        input[i][j] === input[i + k][j] &&
        input[i][j] === input[i][j + k] &&
        input[i][j] === input[i + k][j + k]
      ) {
        max = k;
      }
    }
  }
}

console.log((max + 1) ** 2);
```

실제로 첫번째 방법을 통해 계산했을 때의 소요 시간은 188ms였고, 위 방법으로 계산했을 때는 128ms가 소요되어 약 60ms만큼의 시간을 절약할 수 있었습니다.
