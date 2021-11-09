// styled Component Global style
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
        font-family: Noto Sans, Noto Sans KR;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
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

    /* header */
    header {
        height: 100vh;
        font-size: 56px;
        font-weight: 500;
        background: url(../../public/asset/images/header.jpg) center center / cover no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 96px;
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
`;

export default GlobalStyle;

// // /* 모바일 위주 */
// /* logo */
// h1 {
//     font-size: 32px;
//   }

//   /* main title */
//   h2 {
//     font-size: 28px;
//   }

//   /* title */
//   h3 {
//     font-size: 20px;
//   }

//   /* content */
//   p,
//   address {
//     font-size: 15px;
//   }

//   /* 지원과 보상 */
//   지원.title {
//     font-size: 22px;
//   }

//   /* 태블릿 버전 */
//   /* main title */
//   h2 {
//     font-size: 50px;
//   }

//   /* title */
//   h3 {
//     font-size: 40px;
//   }

//   /* content */
//   p,
//   address {
//     font-size: 30px;
//   }

//   /* 랜딩 */
//   다운로드 (점보에만) {
//     font-size: 26px;
//   }

//   /* 브라우저 버전 */
//   /* main title */
//   h2 {
//     font-size: 66px;
//   }

//   /* title */
//   h3 {
//     font-size: 32px;
//   }

//   /* content */
//   p,
//   address {
//     font-size: 24px;
//   }

//   /* main */
//   vision,
//   채용 2번째 텍스트 {
//     font-size: 48px;
//   }

//   /* 랜딩 */
//   다운로드 (점보에만) {
//     font-size: 26px;
//   }
