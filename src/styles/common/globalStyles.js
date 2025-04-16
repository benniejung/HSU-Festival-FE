import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
${reset}
    @font-face {
        font-family: 'Ownglyph_meetme-Rg';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
        
    :root {
        --vh: 100%;
        --font-family: 'Noto Sans', sans-serif;
    }
        
    body {
        touch-action: manipulation;
        background-size: 100%;
        background-repeat: repeat;
    }

    * {
        box-sizing: border-box;
    } 
    
    /* 빅테스크탑 */
    html {
        font-family: var(--font-family);
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        scroll-behavior: smooth;
        font-size: 62.5%;
        
    }
    
    @media screen and (max-width:1799px) {
        /* 데스크탑 */
        html{
            font-size: 50%;
        }
        
    }

    @media screen and (max-width:1199px) {
        /* 데스크탑 */
        html{
            font-size: 45%;
        }
    }

    @media screen and (max-width:991px) {
        /* 타블렛 */
        html{
            font-size: 40%;
        }
    }

    @media screen and (max-width:767px) {
        /* 모바일 */
        html{
            font-size: 30%;
        }
    }

    @media screen and (max-width:424px) {
        /* 모바일 */
        html{
            font-size: 25%;
        }
    }

    @media screen and (max-width:374px) {
        /* 모바일 */
        html{
            font-size: 20%;
        }
    }
    
    ul, li {
        padding-left: 0rem;
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    input, button {
        outline: none; 
        border: none;
        background-color: transparent;
        font-family: var(--font-family);
    }
    button {
        cursor: pointer;
        padding: 0;
    }
    input {
        appearance: none;
        
        &:focus {
            outline: none;
        }
    }

    select{
        border: none;

        &:focus {
            outline: none;
        }
    }

    .scroll::-webkit-scrollbar {
        display: none;
    }

    .scroll {
        -ms-overflow-style: none; /* 인터넷 익스플로러 */
        scrollbar-width: none; /* 파이어폭스 */
    }

    .pageContainer {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default GlobalStyle;
