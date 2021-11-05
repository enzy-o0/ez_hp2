import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

import mainBg from "../../public/asset/images/jumbotron.png";

import aisData from "../../public/asset/aisData.json";

import Slider from "react-slick";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

import AOS from "aos";
import "aos/dist/aos.css";

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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const CompanyInfo = () => {
  const { i18n } = useTranslation("common");
  const [isRendering, setisRendering] = useState(false);
  const aisDataToArr = [...aisData.news];

  useEffect(() => {
    setisRendering(true);
    AOS.init({
      duration: 2000,
    });
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
      {isRendering && (
        <>
          <div
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <section id="aisAbout" className={styles.jumbotron}>
              <div data-aos="fade-up" data-aos-duration="2000">
                {i18n.language === "ko" ? (
                  <>
                    <div className={styles.jumbotronTitle}>
                      <h1>
                        {i18n("companyInfo.jumboTitleFirst")}
                        <br></br>
                        <strong>{i18n("companyInfo.jumboTitleStrong")}</strong>
                        {i18n("companyInfo.jumboTitleLast")}
                      </h1>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.jumbotronTitleEng}>
                      <h1 className={styles.companyInfoTitleEng}>
                        {i18n("companyInfo.jumboTitleFirst")}
                        <br></br>
                        <strong>{i18n("companyInfo.jumboTitleStrong")}</strong>
                        {i18n("companyInfo.jumboTitleLast")}
                      </h1>
                    </div>
                  </>
                )}
              </div>
            </section>
            <section className={styles.aisAbout}>
              <h2 className={styles.aisAboutTitle}>
                {i18n("companyInfo.aisAboutTitle")}
              </h2>
              <div
                className={styles.aisAboutWrapper}
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-once="false"
              >
                <div className={styles.aisAboutImg}>
                  <img src={about} alt="about" />
                </div>
                <div className={styles.aisAboutImgT}>
                  <img src={aboutT} alt="about" />
                </div>
                <div className={styles.aisAboutContent}>
                  <h3>{i18n("companyInfo.aisAboutContentTitle1")}</h3>
                  <p>{i18n("companyInfo.aisAboutContentSub1")}</p>
                </div>
              </div>
              <div
                className={styles.aisAboutWrapper}
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-once="false"
              >
                <div className={styles.aisAboutImg}>
                  <img src={about2} alt="about2" />
                </div>
                <div className={styles.aisAboutImgT}>
                  <img src={about2T} alt="about2" />
                </div>
                <div className={styles.aisAboutContent}>
                  <h3>{i18n("companyInfo.aisAboutContentTitle2")}</h3>
                  <p>{i18n("companyInfo.aisAboutContentSub2")}</p>
                </div>
              </div>
            </section>
            <section id="aisVision">
              <div className={styles.outerVision}>
                <div className={styles.innerVision}>
                  <p className={styles.aisVision}>vision</p>
                  <h2 className={styles.aisVisionTitle}>
                    “{i18n("companyInfo.aisVisionTitle1")}
                    <br></br> {i18n("companyInfo.aisVisionTitle2")}”
                  </h2>
                </div>
              </div>
              <div className={styles.aisVisionsWrapper}>
                <div className={styles.aisVisionImg} id="scale">
                  <Circle1 alt="scale" />
                  <p className={styles.aisVisionContent}>
                    {i18n("companyInfo.aisVisionContentScale1")}
                    <br></br> {i18n("companyInfo.aisVisionContentScale2")}
                  </p>
                </div>
                <div className={styles.aisVisionImg} id="stabilization">
                  <img src={circle2} alt="stabilization" />
                  <p className={styles.aisVisionContent}>
                    {i18n("companyInfo.aisVisionContentStabilization1")}
                    <br></br>{" "}
                    {i18n("companyInfo.aisVisionContentStabilization2")}
                  </p>
                </div>
                <div className={styles.aisVisionImg} id="smart">
                  <img src={circle3} alt="smart" />
                  <p className={styles.aisVisionContent}>
                    {i18n("companyInfo.aisVisionContentSmart1")}
                    <br></br> {i18n("companyInfo.aisVisionContentSmart2")}
                  </p>
                </div>
              </div>
            </section>
            <section id="aisHistory" className={styles.historyWrapper}>
              <div className={styles.aisLogoWrapper}>
                <img src={aisLogo} alt="aislogo" />
              </div>
              <h2 data-aos="fade-up" data-aos-duration="2000">
                {i18n("companyInfo.aisHistoryTitle")}
              </h2>
              <div className={`${styles.history} history`}>
                <div className={styles.historyInner}>
                  <div className={styles.historyItem}>
                    <h3>2021</h3>
                    <ol>
                      <li>{i18n("companyInfo.aisHistoryContent20211")}</li>
                      <li>{i18n("companyInfo.aisHistoryContent20212")}</li>
                    </ol>
                  </div>
                  <div className={styles.historyItem}>
                    <h3>2020</h3>
                    <ol>
                      <li>{i18n("companyInfo.aisHistoryContent20201")}</li>
                      <li>{i18n("companyInfo.aisHistoryContent20202")}</li>
                      <li>{i18n("companyInfo.aisHistoryContent20203")}</li>
                    </ol>
                  </div>
                  <div className={styles.historyItem}>
                    <h3>2019</h3>
                    <ol>
                      <li>{i18n("companyInfo.aisHistoryContent20191")}</li>
                      <li>{i18n("companyInfo.aisHistoryContent20192")}</li>
                    </ol>
                  </div>
                  <div className={styles.historyItem}>
                    <h3>2018</h3>
                    <ol>
                      <li>{i18n("companyInfo.aisHistoryContent20181")}</li>
                      <li>{i18n("companyInfo.aisHistoryContent20182")}</li>
                      <li>{i18n("companyInfo.aisHistoryContent20183")}</li>
                    </ol>
                  </div>
                  <div className={styles.historyItem}>
                    <h3>2017</h3>
                    <ol>
                      <li>{i18n("companyInfo.aisHistoryContent20171")}</li>
                      <li>{i18n("companyInfo.aisHistoryContent20172")}</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <section id="aisNews" className={styles.news}>
              <h2>{i18n("companyInfo.aisNewsTitle")}</h2>
              <div className={styles.newsSlide}>
                <Slider {...settings}>
                  {aisDataToArr.reverse().map((item) => {
                    return (
                      <div key={item}>
                        <a href={item.link} target="_blank" rel="noreferrer">
                          <div className={styles.newsItem}>
                            <div
                              className={styles.newsImgWrapper}
                              style={{
                                backgroundImage: item.image
                                  ? `url(${item.image})`
                                  : `url(${aisLogo})`,
                                backgroundSize: item.image
                                  ? "cover"
                                  : "contain",
                              }}
                            ></div>
                            <div className={styles.newsContent}>
                              <p>{itemitle}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </section>
            <section id="aisLocation" className={styles.location}>
              <h2>{i18n("companyInfo.aisLocationTitle")}</h2>
              <address>{i18n("companyInfo.aisLocationAddress")}</address>
              <div className={styles.addressWrapper}>
                <RenderAfterNavermapsLoaded
                  ncpClientId={"wqw7xk67ax"}
                  error={<p>Maps Load Error</p>}
                  loading={<p>Maps Loading...</p>}
                >
                  <NaverMapAPI />
                </RenderAfterNavermapsLoaded>
              </div>
            </section>
          </div>
          <Footer />
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

export default CompanyInfo;
