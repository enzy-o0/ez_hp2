import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import about from "../../public/asset/images/about1.png";
import aboutT from "../../public/asset/images/about1_t.png";
import about2 from "../../public/asset/images/about2.png";
import about2T from "../../public/asset/images/about2_t.png";
import Circle1 from "../../public/asset/images/circle1.svg";
import circle2 from "../../public/asset/images/circle2.svg";
import circle3 from "../../public/asset/images/circle3.svg";
import aisLogo from "../../public/asset/images/aislogo.png";
import prev from "../../public/asset/images/prev-arrow.svg";
import next from "../../public/asset/images/next-arrow.svg";

import aisData from "../../public/asset/aisData.json";
import styles from "../styles/Home.module.css";

const Slider = dynamic(import("react-slick"), {
  ssr: false,
});

const AOS = dynamic(import("aos"), {
  ssr: false,
});

const { RenderAfterNavermapsLoaded, NaverMap, Marker } = dynamic(
  import("react-naver-maps"),
  {
    ssr: false,
  }
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: next,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: prev }}
      onClick={onClick}
    />
  );
}

const Home = () => {
  const { t, i18n } = useTranslation("common");
  const [isRendering, setisRendering] = useState(false);
  const aisDataToArr = [...aisData.news];

  useEffect(() => {
    setisRendering(true);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "60px",
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "60px",
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      {isRendering && typeof window !== "undefined" && (
        <>
          <div className="wrap">
            <section id="aisAbout" className="about-jumbotron-wrapper">
              <div data-aos="fade-up" data-aos-duration="2000">
                {i18n.language === "ko" ? (
                  <>
                    <div className="about-jumbotron-title">
                      <h1 className="about-jumbotron-main-title">
                        {t("companyInfo.jumboTitleFirst")}
                        <br></br>
                        <strong>{t("companyInfo.jumboTitleStrong")}</strong>
                        {t("companyInfo.jumboTitleLast")}
                      </h1>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="about-jumbotron-title-eng">
                      <h1 className="about-company-title-eng">
                        {t("companyInfo.jumboTitleFirst")}
                        <br></br>
                        <strong>{t("companyInfo.jumboTitleStrong")}</strong>
                        {t("companyInfo.jumboTitleLast")}
                      </h1>
                    </div>
                  </>
                )}
              </div>
            </section>
            <section className="about-ais-wrapper">
              <h2 className="about-ais-title">
                {t("companyInfo.aisAboutTitle")}
              </h2>
              <div
                className="about-ais-content-wrapper"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-once="false"
              >
                <div className="about-ais-img">
                  <img src={about} alt="about" className="about-ais-img-item" />
                </div>
                <div className="about-ais-img-title">
                  <img
                    src={aboutT}
                    alt="about"
                    className="about-ais-img-item"
                  />
                </div>
                <div className="about-ais-content">
                  <h3 className="about-ais-content-title">
                    {t("companyInfo.aisAboutContentTitle1")}
                  </h3>
                  <p className="about-ais-content-content">
                    {t("companyInfo.aisAboutContentSub1")}
                  </p>
                </div>
              </div>
              <div
                className="about-ais-content-wrapper"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-once="false"
              >
                <div className="about-ais-img">
                  <img
                    src={about2}
                    alt="about2"
                    className="about-ais-img-item"
                  />
                </div>
                <div className="about-ais-img-title">
                  <img
                    src={about2T}
                    alt="about2"
                    className="about-ais-img-item"
                  />
                </div>
                <div className="about-ais-content">
                  <h3 className="about-ais-content-title">
                    {t("companyInfo.aisAboutContentTitle2")}
                  </h3>
                  <p className="about-ais-content-content">
                    {t("companyInfo.aisAboutContentSub2")}
                  </p>
                </div>
              </div>
            </section>
            <section id="aisVision">
              <div className="about-outer-vision">
                <div className="about-inner-vision">
                  <p className="about-ais-vision">vision</p>
                  <h2 className="about-ais-vision-title">
                    “{t("companyInfo.aisVisionTitle1")}
                    <br></br> {t("companyInfo.aisVisionTitle2")}”
                  </h2>
                </div>
              </div>
              <div className="about-ais-visions-wrapper">
                <div className="about-ais-vision-img" id="scale">
                  <Circle1 alt="scale" />
                  <p className="about-ais-vision-content">
                    {t("companyInfo.aisVisionContentScale1")}
                    <br></br> {t("companyInfo.aisVisionContentScale2")}
                  </p>
                </div>
                <div className="about-ais-vision-img" id="stabilization">
                  <img
                    src={circle2}
                    alt="stabilization"
                    className="about-ais-vision-img-item"
                  />
                  <p className="about-ais-vision-content">
                    {t("companyInfo.aisVisionContentStabilization1")}
                    <br></br> {t("companyInfo.aisVisionContentStabilization2")}
                  </p>
                </div>
                <div className="about-ais-vision-img" id="smart">
                  <img
                    src={circle3}
                    alt="smart"
                    className="about-ais-vision-img-item"
                  />
                  <p className="about-ais-vision-content">
                    {t("companyInfo.aisVisionContentSmart1")}
                    <br></br> {t("companyInfo.aisVisionContentSmart2")}
                  </p>
                </div>
              </div>
            </section>
            <section id="aisHistory" className="about-history-wrapper">
              <div className="about-aisLogoWrapper">
                <img src={aisLogo} alt="aislogo" />
              </div>
              <h2
                data-aos="fade-up"
                data-aos-duration="2000"
                className="about-history-wrapper-title"
              >
                {t("companyInfo.aisHistoryTitle")}
              </h2>
              <div className="history">
                <div className="about-history-inner">
                  <div className="about-history-item">
                    <h3 className="about-history-year">2021</h3>
                    <ol className="history-contents">
                      <li className="history-content">
                        {t("companyInfo.aisHistoryContent20211")}
                      </li>
                      <li className="history-content">
                        {t("companyInfo.aisHistoryContent20212")}
                      </li>
                    </ol>
                  </div>
                  <div className="about-history-item">
                    <h3 className="about-history-year">2020</h3>
                    <ol className="history-contents">
                      <li className="history-content">
                        {t("companyInfo.aisHistoryContent20201")}
                      </li>
                      <li className="history-content">
                        {t("companyInfo.aisHistoryContent20202")}
                      </li>
                      <li className="history-content">
                        {t("companyInfo.aisHistoryContent20203")}
                      </li>
                    </ol>
                  </div>
                  <div className="about-history-item">
                    <h3 className="about-history-year">2019</h3>
                    <ol className="history-contents">
                      <li className="history-content">
                        {t("companyInfo.aisHistoryContent20191")}
                      </li>
                      <li className="history-content">
                        {t("companyInfo.aisHistoryContent20192")}
                      </li>
                    </ol>
                  </div>
                  <div className="about-history-item">
                    <h3 className="about-history-year">2018</h3>
                    <ol className="history-contents">
                      <li className="history-content">
                        {t("companyInfo.aisHistoryContent20181")}
                      </li>
                      <li className="history-content">
                        {t("companyInfo.aisHistoryContent20182")}
                      </li>
                      <li className="history-content">
                        {t("companyInfo.aisHistoryContent20183")}
                      </li>
                    </ol>
                  </div>
                  <div className="about-history-item">
                    <h3 className="about-history-year">2017</h3>
                    <ol className="history-contents">
                      <li className="history-content">
                        {t("companyInfo.aisHistoryContent20171")}
                      </li>
                      <li className="history-content">
                        {t("companyInfo.aisHistoryContent20172")}
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <section id="aisNews" className="about-news">
              <h2 className="about-news-title">
                {t("companyInfo.aisNewsTitle")}
              </h2>
              {typeof window !== "undefined" && (
                <div className="about-news-slide">
                  <Slider {...settings}>
                    {aisDataToArr.reverse().map((item) => {
                      return (
                        <div key={item}>
                          <a href={item.link} target="_blank" rel="noreferrer">
                            <div className="about-news-item">
                              <div
                                className="about-news-img-wrapper"
                                style={{
                                  backgroundImage: item.image
                                    ? `url(${item.image})`
                                    : `url(${aisLogo})`,
                                  backgroundSize: item.image
                                    ? "cover"
                                    : "contain",
                                }}
                              ></div>
                              <div className="about-news-content-wrapper">
                                <p className="about-news-content">
                                  {item.title}
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              )}
            </section>
            <section id="aisLocation" className="about-location">
              <h2 className="about-location-title">
                {t("companyInfo.aisLocationTitle")}
              </h2>
              <address className="about-location-address">
                {t("companyInfo.aisLocationAddress")}
              </address>
              {typeof window !== "undefined" && (
                <div className="about-address-wrapper">
                  <RenderAfterNavermapsLoaded
                    ncpClientId={"wqw7xk67ax"}
                    error={<p>Maps Load Error</p>}
                    loading={<p>Maps Loading...</p>}
                  >
                    <NaverMapAPI />
                  </RenderAfterNavermapsLoaded>
                </div>
              )}
            </section>
          </div>
        </>
      )}
    </>
  );
};

function NaverMapAPI() {
  const navermaps = window.naver.maps;

  return (
    <NaverMap
      mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
      style={{
        width: "100%", // 네이버지도 가로 길이
        height: "400px", // 네이버지도 세로 길이
      }}
      defaultCenter={new navermaps.LatLng(37.5115437, 127.0478224)}
      zoomControl={false}
      defaultZoom={18} // 지도 초기 확대 배율
    >
      <Marker
        key={1}
        position={new navermaps.LatLng(37.5115437, 127.0478224)}
        animation={2}
      />
    </NaverMap>
  );
}

export default Home;
