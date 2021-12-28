## node를 이용하여 `sass` 설치 및 실행(prepros대용)

> node는 js기반의 어떤것을 개발하기위한 세팅 프로그램
>
> nodejs 내부에는 기능을 가진 앱스토어(실행프로그램모음)가 있다. -> npm

1. node js 설치 여부 확인

   - git bash 에  `node -v && npm -v` 로 버전 올라오는지 확인
   - 버전 안올라올시 nodejs사이트에서 설치하기

2.   `npm install --global sass` 로 sass 설치 (mac는 관리자 권한을 위해 `sudo` 붙일것)

3.   `sass --version` 으로 설치버전 확인 제대로 버전 올라오면 정상

4.  정상 동작하는지 확인 `sass --watch scss:css`  (앞은 동작 , 뒤는 scss를 css로 옮긴다)

   > 무조건 사용하고자 하는 디렉토리에서 실행

5.  종료하고 싶으면 무조건 git bash를 ctrl-c 로 스탑하고 종료해야됨 

