import GlobalStyled from "../styles/GlobalStyle";
// import "../styles/Footer.css";
// import "../styles/Header.css";
// import "../styles/companyInfo.css";
// import "../styles/policy.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "aos/dist/aos.css";
import { appWithTranslation } from "next-i18next";
import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        {/* <Header /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
