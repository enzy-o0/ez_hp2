// styled Component Global style
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        padding: 0;
        margin: 0;
        font-family: Noto Sans, Noto Sans KR;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    span, p {
        line-height: 1.5;
        word-break: keep-all;
        margin: 0;
    }

    ul,
    li {
        list-style: none;
        padding: 0;
    }

    h1 {
        font-size: 72px;
    }

    h1, h2, h3, h4, p {
        word-break: keep-all;
    }

    h1,
    h2,
    h3,
    h4 {
        line-height: 1.5;
        margin: 0;
        /* display: inline-block; */
    }

    a {
        text-decoration: none;
    }

    main {
        overflow: hidden;
    }

    button {
        cursor: pointer;
    }

    section {
        padding: 0;
        margin: 0;
    }

    hr {
        width: 100%;
    }

    address {
        font-style: normal;
    }


    @media screen and (min-width: 1280px) {
        html {
            font-size: 24px;
        }

        /* 브라우저 버전 */
        /* main title */
        h2 {
            font-size: 2.75rem;
        }

        /* title */
        h3 {
            font-size: 2rem;
        }

        /* content */
        p,
        address {
            font-size: 1rem;
        }

        /* main */
        .main.vision, .carrer.subTitle {
            font-size: 2rem;
        }

        /* 서비스 소개 - 점보에 있는 다운로드 버튼 텍스트 */
        h4 {
            font-size: 1.333rem;
        }

    }

    @media screen and (min-width: 992px) and (max-width: 1279px) {
        html {
            font-size: 30px;
        }

          /* 태블릿 버전 */
        /* main title */
        h2 {
            font-size: 1.667rem;
        }

        /* title */
        h3 {
            font-size: 1.333rem;
        }

        /* content */
        p,
        address {
            font-size: 1rem;
        }

        /* 서비스 소개 - 점보에 있는 다운로드 버튼 텍스트 */
        h4 {
            font-size: 1rem;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        html {
            font-size: 30px;
        }

          /* 태블릿 버전 */
        /* main title */
        h2 {
            font-size: 1.667rem;
        }

        /* title */
        h3 {
            font-size: 1.333rem;
        }

        /* content */
        p,
        address {
            font-size: 1rem;
        }

        /* 서비스 소개 - 점보에 있는 다운로드 버튼 텍스트 */
        h4 {
            font-size: 1rem;
        }
    }

    @media screen and (max-width: 767px) {
        html, body {
            font-size: 15px;
        }

        /* main title */
        h2 {
            font-size: 1.867rem;
        }

        /* title */
        h3 {
            font-size: 1.333rem;
        }

        /* content */
        p,
        address {
            font-size: 1rem;
        }

        /* 지원과 보상 */
        .carrer.title {
            font-size: 1.467rem
;
        }
    }

`;

export default GlobalStyle;
