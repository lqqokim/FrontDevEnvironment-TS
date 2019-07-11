const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    // mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'awesome-typescript-loader' },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { enforce: 'pre', test: /\.ts$/, loader: 'tslint-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: false
        })
    ],
    resolve: {
        extensions: ['.ts', '.js', '.json']
    }
}

module.exports = config;

/**
  @desc
  webpack.config.js 설정

    1. Entry(진입점)
        - 페이지 시작의 첫번째 파일로, Entry는 의존성 관계 파악 및 그룹핑을 위한 위치 정보를 알려주는 기능을 한다.

    2. Output
        - 그룹핑된 코드를 어디 위치 시킬지 webpack에게 알려준다.
        - output.filename과 output.path프로퍼티는 웹팩에게 묶음의 이름과, 결과물 생성 위치를 알려준다.

    3. Loaders
        - 웹팩의 로더는 다른 리소스를 순수 JavaScript로 변환하고, css, html, scss, jpg 등을 종속성 정보에 추가함으로서 모듈로서 관리한다.
        - Loader의 설정은 rules 프로퍼티를 통해 이루어지는데, rules 프로퍼티에는 두가지 속성이 있다.
            - test : require() / import 문에서 ‘.txt’파일로 해석되는 경로를 발견하면,
            - use or loader : 로더의 종류를 입력.

    4. Resolve
        - extensions를 등록해두면, import시에 확장자 생략이 가능하다.

    5. Plugins
        - 플러그인을 통해 컴파일이나, chunks 과정에서 사용자 정의 기능을 수행하는데 사용
        - 단순히 require() 키워드로 불러와서, plugins 속성에 추가하면 된다.
*/