# __FrontDevEnvironment-TS__

## __Webpack4__
### __Webpack의 개념__
>“Webpack은 모듈 번들러로서, Entry 코드 파일에서부터 시작해서 Loader/Rules라는 트럭을 타고 다니며, 연결되어있는 모든 말초 모듈들까지 다 묶어서 하나의 Output을 내어줍니다.”

- Webpack의 핵심은 최신 자바 스크립트 애플리케이션을위한 정적 모듈 번들러 
- Webpack은 애플리케이션을 처리할 때 내부적으로 프로젝트에 필요한 모든 모듈을 매핑하고 하나 이상의 번들을 생성 하는 종속성 그래프 를 작성

### __Webpack의 등장배경__
1. 기하급수적으로 증가한 JS 코드

    서버 사이드 템플릿 시대를 지나 단일 페이지 애플리케이션(Single Page Application, SPA) 개발이 점차 인기를 얻으면서 자바스크립트의 코드량이 과거에 비해 기하급수적으로 증가하게 되었습니다. 많게는 수천, 수만 줄이나 하는 자바스크립트 코드에서 특정 코드를 찾아 수정하기란 쉽지 않은 일입니다. 그래서, 개발 초기 단계에서 API 기능과 UI 컴포넌트에 맞게 자바스크립트 코드를 분리하게 되었습니다. 하지만, 분리해 놓은 여러개의 자바스크립트 파일들을 한 개씩 따로 불러온다면 웹 페이지 로딩시 속도 저하 문제가 발생할 수 있습니다. 그렇기 때문에 Webpack을 사용하여 수 많은 자바스크립트 파일들을 하나의 js 파일로 번들링하는 작업이 필요하게 됨
    
    출처: [Webpack-입문-가이드편-html-css-사용기](https://medium.com/@shlee1353/%EC%9B%B9%ED%8C%A9-%EC%9E%85%EB%AC%B8-%EA%B0%80%EC%9D%B4%EB%93%9C%ED%8E%B8-html-css-%EC%82%AC%EC%9A%A9%EA%B8%B0-75d9fb6062e6)
2. HTTP요청의 비효율

    현대 웹사이트는 접속시에 html, js, css 파일 외에도, 웹폰트, 이미지, json 데이터 등등 수 많은 파일들을 받아와야 한다. http/2에서는 하나의 커넥션에 동시에 여러 파일들을 요청할 수 있지만 아직 보편화되어있지 않기 때문에 현재 주로 사용하는 http/1.1에서는 커넥션 하나를 열어 하나씩 요청을 보내야한다. 하나의 요청이 끝나야 다음 요청을 보낼 수 있기 때문에 요청이 많을수록 비효율 적이다. http/2는 아직은 무리고(IE에서 지원하지 않습니다) http/1은 너무 느리다면 어떻게 해야 할까? 바로 요청 수를 줄이는 것인데 그래서 이미지는 스프라이트로 만들어 한 번에 받고, Gulp, Grunt 같은 번들러로 js파일이나 css파일을 하나로 합치곤 했다. 그러다가 이제 여러가지 기능을 갖춘 번들러 끝판왕 Webpack이 나오게 되었다.

    출처: [Webpack4(Webpack) 설정하기](https://www.zerocho.com/category/Webpack/post/58aa916d745ca90018e5301d)

### __Webpack의 장점__
- 다양한 모듈 포멧(AMD, UMD, ES6 Module .. ) 에 대한 모듈 번들링 작업을 수행한다.
    - 방대한 JS 모듈에 대한 의존성에 대한 관리를 하여 하나의 JS 로 합친다.
- npm과 조합하면 사용하기에 따라서 gulp나 grunt같은 taskrunner까지 대체한다. 
- 하나로 합치면서 크로스 브라우징 대응
- 소스 압축

### __Webpack.config.js 설정__
> __Entry(진입점)__

페이지 시작의 첫번째 파일로, Entry는 의존성 관계 파악 및 그룹핑을 위한 위치 정보를 알려주는 기능을 한다.
 
> __Output__

- 그룹핑된 코드를 어디 위치 시킬지 Webpack에게 알려준다.
- output.filename과 output.path프로퍼티는 Webpack에게 묶음의 이름과, 결과물 생성 위치를 알려준다.
   
> __Loaders__

- Webpack의 로더는 다른 리소스를 순수 JavaScript로 변환하고, css, html, scss, jpg 등을 종속성 정보에 추가함으로서 모듈로서 관리한다.
- Loader의 설정은 rules 프로퍼티를 통해 이루어지는데, rules 프로퍼티에는 두가지 속성이 있다.
    - test : require() / import 문에서 ‘.txt’파일로 해석되는 경로를 발견하면,
    - use or loader : 로더의 종류를 입력.
    
> __Resolve__ 

extensions를 등록해두면, import시에 확장자 생략이 가능하다.
    
> __Plugins__
- 플러그인을 통해 컴파일이나, chunks 과정에서 사용자 정의 기능을 수행하는데 사용
- 단순히 require() 키워드로 불러와서, plugins 속성에 추가하면 된다.