import React, { useState, useEffect } from "react";

// i18
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
// response
import { useMediaQuery } from "react-responsive";
// slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";
import Prev from "../../public/asset/images/prev-arrow.svg";
import Next from "../../public/asset/images/next-arrow.svg";

import aisData from "../../public/asset/aisData.json";

import * as Ais from "../styles/companyInfo";

// import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

const Slider = dynamic(import("react-slick"), {
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

const Home = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:991px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-width:992px) and (max-width:1279px)",
  });

  const isPc = useMediaQuery({
    query: "(min-width:1280px)",
  });

  const aisDataToArr = [...aisData.news];
  const { t } = useTranslation("common");
  const [isRendering, setisRendering] = useState(false);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: <Next />,
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
        style={{
          ...style,
          display: "block",
          background: <Prev />,
        }}
        onClick={onClick}
      />
    );
  }

  function NaverMapAPI() {
    const navermaps = window.naver.maps;
    return (
      <>
        {typeof document !== "undefined" && (
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
        )}
      </>
    );
  }

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
      {isRendering && typeof window !== "undefined" && (
        <>
          <main className="wrap">
            {/* jumbotron */}
            <section>
              <Ais.JumbotronWrapper>
                <Ais.JumbotronTitleWrapper>
                  <h2>
                    {t("companyInfo.jumboTitleFirst")}
                    <br></br>
                    <Ais.JumbotronTitleStrong>
                      {t("companyInfo.jumboTitleStrong")}
                    </Ais.JumbotronTitleStrong>
                    {t("companyInfo.jumboTitleLast")}
                  </h2>
                </Ais.JumbotronTitleWrapper>
              </Ais.JumbotronWrapper>
            </section>
            {/* about */}
            <section>
              <Ais.AisWrapper>
                <Ais.AisTitle>{t("companyInfo.aisAboutTitle")}</Ais.AisTitle>
                <Ais.AisContentWrapper
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-once="false"
                >
                  {isPc && (
                    <Ais.AisImgWrapper>
                      <Ais.AisImgItem
                        src={"/asset/images/about1.png"}
                        alt="about"
                      />
                    </Ais.AisImgWrapper>
                  )}
                  {(isMobile || isLaptop || isTablet) && (
                    <Ais.AisImgWrapper>
                      <Ais.AisImgItem
                        src={"/asset/images/about1_t.png"}
                        alt="about"
                      />
                    </Ais.AisImgWrapper>
                  )}
                  <Ais.AisContent>
                    <h3>{t("companyInfo.aisAboutContentTitle1")}</h3>
                    <p>{t("companyInfo.aisAboutContentSub1")}</p>
                  </Ais.AisContent>
                </Ais.AisContentWrapper>
                <Ais.AisContentWrapper
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-once="false"
                >
                  {isPc && (
                    <Ais.AisImgWrapper>
                      <Ais.AisImgItem
                        src={"/asset/images/about2.png"}
                        alt="about"
                      />
                    </Ais.AisImgWrapper>
                  )}
                  {(isMobile || isLaptop || isTablet) && (
                    <Ais.AisImgWrapper>
                      <Ais.AisImgItem
                        src={"/asset/images/about2_t.png"}
                        alt="about"
                      />
                    </Ais.AisImgWrapper>
                  )}
                  <Ais.AisContent>
                    <h3>{t("companyInfo.aisAboutContentTitle2")}</h3>
                    <p>{t("companyInfo.aisAboutContentSub2")}</p>
                  </Ais.AisContent>
                </Ais.AisContentWrapper>
              </Ais.AisWrapper>
            </section>
            {/* vision */}
            <section>
              <Ais.VisionOuterWrapper>
                <Ais.VisionInnerWrapper>
                  <Ais.VisionTitle>vision</Ais.VisionTitle>
                  <Ais.VisionTitle2>
                    “{t("companyInfo.aisVisionTitle1")}
                    <br></br> {t("companyInfo.aisVisionTitle2")}”
                  </Ais.VisionTitle2>
                </Ais.VisionInnerWrapper>
              </Ais.VisionOuterWrapper>
              <Ais.VisionWrapper>
                <Ais.VisionContentWrapper>
                  <Ais.AisImgItem
                    src={"/asset/images/circle1.svg"}
                    alt="about"
                  />
                  <Ais.VisionContent>
                    {t("companyInfo.aisVisionContentScale1")}
                    <br></br> {t("companyInfo.aisVisionContentScale2")}
                  </Ais.VisionContent>
                </Ais.VisionContentWrapper>
                <Ais.VisionContentWrapper>
                  <Ais.AisImgItem
                    src={"/asset/images/circle2.svg"}
                    alt="about"
                  />
                  <Ais.VisionContent>
                    {t("companyInfo.aisVisionContentStabilization1")}
                    <br></br> {t("companyInfo.aisVisionContentStabilization2")}
                  </Ais.VisionContent>
                </Ais.VisionContentWrapper>
                <Ais.VisionContentWrapper>
                  <Ais.AisImgItem
                    src={"/asset/images/circle3.svg"}
                    alt="about"
                  />
                  <Ais.VisionContent>
                    {t("companyInfo.aisVisionContentSmart1")}
                    <br></br> {t("companyInfo.aisVisionContentSmart2")}
                  </Ais.VisionContent>
                </Ais.VisionContentWrapper>
              </Ais.VisionWrapper>
            </section>
            {/* history */}
            <Ais.HistoryWrapper>
              <div className="about-aisLogoWrapper">
                <img src={"/asset/images/aislogo.png"} alt="aislogo" />
              </div>
              <Ais.HistoryTitleWrapper
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                {t("companyInfo.aisHistoryTitle")}
              </Ais.HistoryTitleWrapper>
              <Ais.HistoryOuterWrapper>
                <Ais.HistoryInnerWrapper>
                  <Ais.HistoryItems>
                    <Ais.HistoryYear>2021</Ais.HistoryYear>
                    <Ais.HistoryContents>
                      <Ais.HistoryContent>
                        {t("companyInfo.aisHistoryContent20211")}
                      </Ais.HistoryContent>
                      <Ais.HistoryContent>
                        {t("companyInfo.aisHistoryContent20212")}
                      </Ais.HistoryContent>
                    </Ais.HistoryContents>
                  </Ais.HistoryItems>
                  <Ais.HistoryItems>
                    <Ais.HistoryYear>2020</Ais.HistoryYear>
                    <Ais.HistoryContents>
                      <Ais.HistoryContent>
                        {t("companyInfo.aisHistoryContent20201")}
                      </Ais.HistoryContent>
                      <Ais.HistoryContent>
                        {t("companyInfo.aisHistoryContent20202")}
                      </Ais.HistoryContent>
                      <Ais.HistoryContent>
                        {t("companyInfo.aisHistoryContent20203")}
                      </Ais.HistoryContent>
                    </Ais.HistoryContents>
                  </Ais.HistoryItems>
                  <Ais.HistoryItems>
                    <Ais.HistoryYear>2019</Ais.HistoryYear>
                    <Ais.HistoryContents>
                      <Ais.HistoryContent>
                        {t("companyInfo.aisHistoryContent20191")}
                      </Ais.HistoryContent>
                      <Ais.HistoryContent>
                        {t("companyInfo.aisHistoryContent20192")}
                      </Ais.HistoryContent>
                    </Ais.HistoryContents>
                  </Ais.HistoryItems>
                  <Ais.HistoryItems>
                    <Ais.HistoryYear>2018</Ais.HistoryYear>
                    <Ais.HistoryContents>
                      <Ais.HistoryContent>
                        {t("companyInfo.aisHistoryContent20181")}
                      </Ais.HistoryContent>
                      <Ais.HistoryContent>
                        {t("companyInfo.aisHistoryContent20182")}
                      </Ais.HistoryContent>
                      <Ais.HistoryContent>
                        {t("companyInfo.aisHistoryContent20183")}
                      </Ais.HistoryContent>
                    </Ais.HistoryContents>
                  </Ais.HistoryItems>
                  <Ais.HistoryItems>
                    <Ais.HistoryYear>2017</Ais.HistoryYear>
                    <Ais.HistoryContents>
                      <Ais.HistoryContent>
                        {t("companyInfo.aisHistoryContent20171")}
                      </Ais.HistoryContent>
                      <Ais.HistoryContent>
                        {t("companyInfo.aisHistoryContent20172")}
                      </Ais.HistoryContent>
                    </Ais.HistoryContents>
                  </Ais.HistoryItems>
                </Ais.HistoryInnerWrapper>
              </Ais.HistoryOuterWrapper>
            </Ais.HistoryWrapper>
            {/* new */}
            <section>
              <Ais.NewsTitle>{t("companyInfo.aisNewsTitle")}</Ais.NewsTitle>
              {typeof window !== "undefined" && (
                <Ais.NewsSlide className="about-news-slide">
                  <Slider {...settings}>
                    {aisDataToArr.reverse().map((item) => {
                      return (
                        <div key={item}>
                          <a href={item.link} target="_blank" rel="noreferrer">
                            <Ais.NewsItem>
                              <Ais.NewsImgWrapper
                                style={{
                                  backgroundImage: item.image
                                    ? `url(${item.image})`
                                    : `url("/asset/images/aislogo.png")`,
                                  backgroundSize: item.image
                                    ? "cover"
                                    : "contain",
                                }}
                              ></Ais.NewsImgWrapper>
                              <Ais.NewsContentWrapper>
                                <Ais.NewsContent>{item.title}</Ais.NewsContent>
                              </Ais.NewsContentWrapper>
                            </Ais.NewsItem>
                          </a>
                        </div>
                      );
                    })}
                  </Slider>
                </Ais.NewsSlide>
              )}
            </section>
            {/* location */}
            <Ais.LocationWrapper>
              <Ais.LocationTitle>
                {t("companyInfo.aisLocationTitle")}
              </Ais.LocationTitle>
              <Ais.LocationAddress>
                {t("companyInfo.aisLocationAddress")}
              </Ais.LocationAddress>
              <Ais.AddressWrapper>
                {/* {typeof document !== "undefined" && (
                  <RenderAfterNavermapsLoaded
                    ncpClientId={"wqw7xk67ax"}
                    error={<p>Maps Load Error</p>}
                    loading={<p>Maps Loading...</p>}
                  >
                    <NaverMapAPI />
                  </RenderAfterNavermapsLoaded>
                )} */}
              </Ais.AddressWrapper>
            </Ais.LocationWrapper>
          </main>
        </>
      )}
    </>
  );
};

export default Home;
