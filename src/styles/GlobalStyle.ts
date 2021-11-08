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
