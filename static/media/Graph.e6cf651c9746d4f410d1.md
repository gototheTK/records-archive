# Graph

---

---

<br/>

---

## Graph란?
정점과 간선으로 이루어진 자료구조

---

<br/>

---

## 그래의 종류

<br/>

### 완전 그래프
서로 다른 정점이 반드시 간선으로 연결되어 있는 그래프

<br/>

### 무방향 그래프
두 정점을 연결하는 간선에 방향이 없는 그래프

<br/>

### 방향 그래프
두 정점을 연결하는 간선에 방향이 있는 그래프

<br/>

### 가중치 그래프
간선에 가중치가 있는 그래프

---

<br/>

---

## 차수

<br/>

### 그래프의 차수
정점에 연결되어있는 간선의 수. 방향 그래프에서는 차수는 IN 차수 + OUT 차수이다.

<br/>

### 방향 그래프의 IN 차수
정점으로 들어오는 간선의 개수

<br/>

### 방향 그래프의 OUT 차수

정점에서 나가는 간선의 개수

---

<br/>

---


## 그래프의 표현방법

<br/>

### 인접행렬
O(V^2)의 크기를 가지는 행렬로 그래프를 표현한다. 인덱스를 정점으로 삼고, 0이 아닌 값으로 간선의 유무와 가중치를 식별한다.

<br/>

### 인접리스트
O(V+E)의 크기를 가지는 리스트로 그래프를 표현한다. 노드를 정점과 간선으로 삼아서, 정점끼리 연결되어있으면 해당 간선의 노드를 추가하여준다.

---

<br/>

---

## 경로 탐색법

<br/>

### DFS(깊이우선탐색)
방문한 정점에서 가까운 정점을 방문한다.

<br/>

### BFS(너비우선탐색)
방문한 정점에서 가까운 정점들을 차례대로 계속 방문한다.


---

## 최소신장그래프

---

<br/>

### 신장 그래프
순환하지 않고, 모든 정점을 잇는 그래프

<br/>

### 최소 신장 그래프
최소비용의 신장그래프

<br/>

### 절단
정점집합인 그래프와 그래프를 분리하는 행위 또는 상태

<br/>

### 교차
절단하는 절단선이 간선을 가로지르는 행위 또는 상태

<br/>

### 존중
교차하지 않는 간선들의 집합 혹은 그래프의 상태

<br/>

### 경량 간선
그래프와 그래프를 잇는 최소비용의 간선

<br/>

### 안전 간선
순환하지않는 그래프를 이루는 경량간선

<br/>

### 루프 불변성
초기조건, 유지조건, 종료건에 따라 반복되어도 계속 유지되는 성질

<br/>

### 최소신장 일반 알고리즘
1. 안전간선을 찾는다.
2. 안전간선을 추가한다.
3. 1~2번을 반복한다.

<br/>

### 크루스칼 알고리즘
먼저 간선을 우선순위에 따라 정렬하여, 안전간선을 찾아 추가하는 최소 신장 일반 알고리즘. 참고로 서로소 집합인 포리스트를 형성한다.

<br/>

### 프림 알고리즘
방문한 정점의 인접 간선들을 우선순위큐에 추가하고 정렬하여서, 큐에서 하나씩 꺼내 안전간선을 추가하는 최소 신장 알고리즘. 크루스칼과 다르게 하나의 신장그래프만을 가지고 최소 신장 그래프를 형성한다.

<br/>

#### 프림 알고리즘
1. 정점을 방문하여 인접 간선들을 우선순위큐에 추가한다.
2. 큐에서 하나씩 꺼내서 순환하는지 확인하고, 순환하지 않으면 안전간선으로 추가한다. 그리고 멈춘다.
3. 1~2번을 최소 신장 그래프를 형성할때까지 반복한다.