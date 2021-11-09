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

    span {
        word-break: keep-all;
    }

    ul,
    li {
        list-style: none;
        padding: 0;
    }

    h1 {
        font-size: 72px;
    }

    h1,
    h2,
    h3 {
        margin: 0;
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

    @media screen and (min-width: 992px) {
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
            font-size: 1.333rem;
        }

        /* content */
        p,
        address {
            font-size: 1rem;
        }

        /* main */
        .main.vision, .recruit.subTitle {
            font-size: 2rem;
        }

        /* 서비스 소개 - 점보에 있는 다운로드 버튼 텍스트 */
        .service.download {
            font-size: 1.083rem;
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
        .service.download {
            font-size: 0.867rem;
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
        .recruit.title {
            font-size: 1.467rem
;
        }
    }

`;

export default GlobalStyle;
