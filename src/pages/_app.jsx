import GlobalStyled from "../styles/GlobalStyle";
import "../styles/Footer.css";
import "../styles/Header.css";
import "../styles/companyInfo.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyled />
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}

export default appWithTranslation(MyApp);
