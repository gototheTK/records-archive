# Basic_Command

---

---

<br/>

---

<br/>

## Baic_Command:

<br/>

### mkdir: 폴더 만들기 띄어쓰기를 통해 여러개 만드는게 가능

<br/>

### mkdir -p : 하위 폴더까지 생성가능한 명령어

<br/>

### touch: 파일 만들기 띄어쓰기를 통해 여러개 만드는게 가능

<br/>

### ls -l : 권한 생성/수정날짜등의 자세한 속성값들을 표시

<br/>

### ls -a : 숨겨진파일 폴더 등 모두 표시

<br/>

### ls -F : 폴더 끝에 \표시

<br/>

### ls -R : 폴더의 하위경로 모두 표시

<br/>

### alias : 명령어 설정가능

<br/>

### cat : 파일 내용 전체 표시

<br/>

### cat -n : 파일 내용 앞줄에 줄넘버표시

<br/>

### head -숫자 : 맨 위에서 숫자만큼 줄표시, 미지정시 : 10

<br/>

### tail -숫자 : 맨 끝에서 숫자만큼 줄표시, 미지정시 : 10

<br/>

### tail -f : 끝줄 계속 갱신

<br/>

### more : 파일 내용을 문자 엔터나 스페이스로 페이지 혹은 1줄씩 보는게 가능하다.

<br/>

### more -숫자 : 맨 아래에서 숫자만큼 줄표시, 미지정시 : 10

<br/>

---

<br/>

## vi 편집기:

<br/>

### i:커서위치부터 ,a:커서의 다음 문자부터,o:밑줄부터 입력

<br/>

### vi에서 Command 모드의 key이동

<br/>

### G: 가장 마지막줄 이동

<br/>

### gg: 첫번째 줄 이동

<br/>

### [n]G: n번째 줄로 이동

<br/>

### $: 커서가 위치한 줄의 맨 끝으로 이동

<br/>

### 0: 커서가 위치한 줄의 맨 앞으로 이동

<br/>

### w: 커서가 한 단어씩 오른쪽 이동

<br/>

### b: 커서가 한 단어씩 왼쪽이동

<br/>

---

<br/>

## 삭제

<br/>

### x: 한문자 삭제 또는 Edit모드에서 백스페이스나 딜리트키

<br/>

### dd: 커서가 위치한 줄을 삭제 정확히는 잘라내기

<br/>

### d[커서이동]:커서 이동하는 만큼 삭제 정확히는 잘라내기

<br/>

### d+11G, dw, db, d$, d0

<br/>

---

<br/>

## 수정

<br/>

### r:커서가 위치한 문자 하나를 입력하는 문자로 대체

<br/>

### u:작업취소

<br/>

---

<br/>

## 복사 및 붙여넣기

<br/>

### yy: 커서가 위치한 한줄 복사

<br/>

### y[커서이동]: 커서 이동하는 만큼 복사

<br/>

### p: 커서 밑(줄)이나 커서 다음(다음)에 붙여넣기

<br/>

### vi에서 라스트 라인모드

<br/>

### 편집기 상태 변경

<br/>

### :set nu 라인 넘버 표시

<br/>

### :set nonu 라인 넘버 표시안함

<br/>

### :set ic 검색할 때 대소문자 무시

<br/>

### :set noic 검삭할 때 대소문자 구분

<br/>

---

<br/>

## 검색 및 변환

### /[내용]: 검색, n다음으로 이동, N이전으로 이동

<br/>

### :%s/[찾을 내용]/[바꿀 내용]/g : 한번에 모든 내용 바꾸기

<br/>

### :%s/[찾을 내용]/[바꿀 내용]/i : 하나씩 바꾸기

<br/>

### 저장 및 종료

<br/>

### :w 저장

<br/>

### :q 종료

<br/>

### :wq 저장 및 종료

<br/>

### :w! 강제로 저장

<br/>

### :q! 강제로 종료

<br/>

### :wq! 저장 및 강제 종료

<br/>

---

<br/>

## 사용자 관리

<br/>

### useradd

<br/>

### 유저 생성시 기본파일 생성 : /etc/skel

<br/>

### useradd -D : 유저 생성시의 기본 설정 보여줌

<br/>

### useradd -D -s : 기본쉘

<br/>

### 패스워드 정책설정 파일

<br/>

### /etc/security/pwquality.conf

<br/>

### dicpath : 금지 단어 목록

<br/>

### authconfig : 패스워드 정책설정 명령어

<br/>

### /etc/login.defs : 패스워드생성시의 /etc/shadow, /etc/passwd등의 기본 세팅

<br/>

### ex) root:::0:99999:7:::

<br/>

### PASS_MAX_DAYS 9999

<br/>

### PASS_MIN_DAYS 0

<br/>

### PASS_MIN_LEN 5

<br/>

### PASS_WARN_AGE 7

<br/>

### UID

<br/>

### GID

<br/>

### CREATE_HOME

<br/>

### UMASK

<br/>

---

<br/>

## 다른 사용자 로그인 관련 명령어

<br/>

### su [-] [사용자명]

<br/>

### su - [사용자명] : 입력한 사용자의 사용자 초기파일 적용

<br/>

### su [사용자명] : 현재 사용자의 환경을 유지, 사용자 초기파일 적용X

<br/>

### who 명령어 : 로그인 한 사용자 확인

<br/>

### who : 접속 정보

<br/>

### who am i : 현재 터미널에 대한 접속 정보

<br/>

### whoami : 로그인명

<br/>

### last 명령어 : /var/log/wtmp파일을 참조해서 로그인했던 정보를 출력해주는 명령어(자신의 시스템에 접속한 정보를 확인할 수 있다.(IP 확인가능)

<br/>

---

<br/>

## PAM(Pluggable Authentication Modules) 모듈

<br/>

### 접속 및 권한이나 보안에 대한 인증모듈

<br/>

---

<br/>

## 리눅스 전통적인 부팅 과정

<br/>

### 부팅과정

<br/>

### - 전원 켜기 -> 2. POST(Power On Self Test) -> BIOS 단계 -> 부탕 장치 검색 → 부트 로더 실행(Grub 실행) -> 실행 할 커널 선택 -> 커널 로드 및 PID 1번 실행 -> 기타 필수 프로그램 실행 -> 부팅완료

<br/>

### 부팅할 때 나오는 메시지

### - /var/log/boot.log

<br/>

### 런 레벨 : 시스템의 상태를 나타낸다.

<br/>

### - 런 레벨은 숫자 또는 문자로 표현된 시스템의 상태

<br/>

### - 런 레벨은 서비스와 사용자가 사용할 수 있는 자원들에 대해 정의하고 있음

<br/>

### - 런 레벨의 상태

<br/>

### 0 : halt(시스템 종료) :: Run-level을 0으로 변경하면 시스템 종료

<br/>

### - 1 : Single User Model :: 시스템 복원 모드 :: 기본적으로 “관리자 권한”을 획득 (주로 파일 시스템 점검, 패스워드 분실 했을 때 또는 복구 할 때 사용)

<br/>

### - 2 : Multi User Mode without NFS(Notwork File System :: 공유파일) :: 네트워크를 사용치 않는 텍스트 유저 모드

<br/>

### - 3 : Full multi User Mode :: 거의 모든 자원 사용 가능한 텍스트 유저 모드

<br/>

### - 4 : Unused(사용X)

<br/>

### - 5 : level 3와 비슷하나 X윈도우가 실행된 그래픽 유저 모드

<br/>

### - 6 : Reboot(시스템 재부팅) :: Run-level을 6으로 변경하면 시스템 재부팅

<br/>

---

<br/>

## 관련 명령어

<br/>

### who -r : 현재 및 이전 런 레벨을 확인하는 명령어

<br/>

### init [number] : 런 레벨 스크립트를 실행

<br/>

### 구버전 센토스 런레벨 스크립트 경로 : /etc/rc/rc?.d {wsl경우 /etc/rc?.d}

<br/>

### K~ : 관련 프로세스 종료

<br/>

### S~ : 관련 프로세스 시작

<br/>