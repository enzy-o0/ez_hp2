import React, { useEffect, useState, useCallback } from "react";
import CarrerSectionImg1 from "../../asset/images/carrer_section_image_1.webp";
import CarrerSectionImg12x from "../../asset/images/carrer_section_image_1@2x.webp";
import CarrerSectionImg13x from "../../asset/images/carrer_section_image_1@3x.webp";
import CarrerSectionImg2 from "../../asset/images/carrer_section_image_2.webp";
import CarrerSectionImg22x from "../../asset/images/carrer_section_image_2@2x.webp";
import CarrerSectionImg23x from "../../asset/images/carrer_section_image_2@3x.webp";
import CarrerSectionImg3 from "../../asset/images/carrer_section_image_3.webp";
import CarrerSectionImg32x from "../../asset/images/carrer_section_image_3@2x.webp";
import CarrerSectionImg33x from "../../asset/images/carrer_section_image_3@3x.webp";

import { Row, Col } from "react-bootstrap";

import AOS from "aos";
import "aos/dist/aos.css";
import { withTranslation, useTranslation } from "react-i18next";

import ReactHelmet from "../../components/common/ReactHelmet";
import styles from "./Carrer.module.css";
import { Link } from "react-router-dom";

const Carrer = () => {
  const { i18n } = useTranslation();
  const [isRendering, setisRendering] = useState(false);

  useEffect(() => {
    setisRendering(true);

    AOS.init({
      duration: 2000,
    });
  }, []);

  const [bgOpacity, setbgOpacity] = useState(0);
  const [initTxtOpacity, setInitTextOpacity] = useState(1);
  const [scrollTxtOpacity, setScrollTextOpacity] = useState(0);
  const [bgScale, setBgScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const { height } = useWindowDimensions();

  const handleScroll = useCallback(() => {
    if (window.scrollY < height) {
      setbgOpacity(window.scrollY * 0.5 * (1 / height)); // 투명도 (rgab(0,0,0, (0.3 -> 0.6))) 스크롤에 맞춰서 투명도 조정
      setInitTextOpacity(1 - window.scrollY * 4 * (1 / height)); // 첫번째 텍스트 opacity 스크롤에 맞춰서 투명도 조정 (스크롤의 3배 속도)
      setScrollTextOpacity(window.scrollY * 4 * (1 / height));
      setBgScale(1 + window.scrollY * 4 * (0.1 / height));
      setOpacity(1);
    } else if (window.scrollY < height * 4) {
      setOpacity(1 / (window.scrollY * (1 / height)));
    } else {
      setOpacity(0);
    }
  }, [height]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <ReactHelmet
        keywords={
          i18n.language === "ko"
            ? "에이아이에스, AIS, 잘키움, 변화하는 환경, 현명한 농부"
            : "AIS, Wellgrower, changing environment, wise farmer"
        }
        description={
          i18n.language === "ko"
            ? "에이아이에스(AIS)와의 여정에 함께하실 여러분을 찾습니다"
            : "Looking for you, for our journey with AIS."
        }
        title={
          i18n.language === "ko"
            ? "에이아이에스(AIS) : 채용"
            : "에이아이에스(AIS) : Career"
        }
        image={CarrerSectionImg1}
        url={
          i18n.language === "ko"
            ? "www.aiskorea.co.kr/ko/career"
            : "www.aiskorea.co.kr/en/career"
        }
      />
      {isRendering && (
        <>
          <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <div
              style={{
                width: "100%",
                height: "100vh",
                position: "fixed",
                opacity: `${opacity}`,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  backgroundColor: `rgba(0,0,0, ${bgOpacity}`,
                  opacity: `${opacity}`,
                  position: "absolute",
                  zIndex: "100",
                }}
              ></div>
              <div
                className={styles.topImage}
                style={{ transform: `scale(${bgScale})` }}
              ></div>
              <div
                className={styles.topTextWapper}
                style={{ width: "100%", height: "100%" }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <h1
                    className={styles.initText}
                    style={{ opacity: `${initTxtOpacity}` }}
                  >
                    {i18n.t("carrer.topTitle1")}
                  </h1>
                  <span
                    className={`${styles.initText} ${styles.scrollText}`}
                    style={{ opacity: `${scrollTxtOpacity}` }}
                  >
                    {i18n.t("carrer.topTitle2")}

                    <br />
                    {i18n.t("carrer.topTitle3")}

                    <br />
                    {i18n.t("carrer.topTitle4")}

                    <br />
                    {i18n.t("carrer.topTitle5")}
                  </span>
                </div>
              </div>
            </div>
            <section
              className={styles.carrerSectionWrapper}
              style={{ paddingTop: `calc(${height} * 6px)` }}
            >
              <Row className="carrerSection" id="aisCulture">
                <Col
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Row
                    className={styles.carrerSectionRow}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-once="false"
                  >
                    <Col
                      className={styles.carrerSectionCol}
                      lg={6}
                      md={12}
                      sm={12}
                    >
                      <img
                        className={styles.sectionImage}
                        src={CarrerSectionImg1}
                        srcSet={`${CarrerSectionImg12x} 2x, ${CarrerSectionImg13x} 3x`}
                        alt="AIS 채용 섹션 이미지"
                      ></img>
                    </Col>
                    <Col
                      className={styles.carrerSectionCol}
                      lg={6}
                      md={12}
                      sm={12}
                    >
                      <div className={styles.carrerSectionColTitle}>
                        {i18n.t("carrer.inquiryTitle1")}
                      </div>
                      <span className={styles.carrerSectionColContent}>
                        {i18n.t("carrer.inquiryContent1")}
                      </span>
                    </Col>
                  </Row>
                  <Row
                    className={`${styles.carrerSectionRow} ${styles.carrerSection2}`}
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-once="false"
                  >
                    <Col
                      className={`${styles.carrerSectionCol} ${styles.carrerSectionText}`}
                      lg={6}
                      md={12}
                      sm={12}
                    >
                      <div className={styles.carrerSectionColTitle}>
                        {i18n.t("carrer.inquiryTitle2")}
                      </div>
                      <span className={styles.carrerSectionColContent}>
                        {i18n.t("carrer.inquiryContent2")}
                      </span>
                    </Col>
                    <Col
                      className={`${styles.carrerSectionCol} ${styles.carrerSectionImg}`}
                      lg={6}
                      md={12}
                      sm={12}
                    >
                      <img
                        className={styles.sectionImage}
                        src={CarrerSectionImg2}
                        srcSet={`${CarrerSectionImg22x} 2x, ${CarrerSectionImg23x} 3x`}
                        alt="AIS 채용 섹션 이미지"
                      ></img>
                    </Col>
                  </Row>
                  <Row
                    className={styles.carrerSectionRow}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-once="false"
                  >
                    <Col
                      className={styles.carrerSectionCol}
                      lg={6}
                      md={12}
                      sm={12}
                    >
                      <img
                        className={styles.sectionImage}
                        src={CarrerSectionImg3}
                        srcSet={`${CarrerSectionImg32x} 2x, ${CarrerSectionImg33x} 3x`}
                        alt="AIS 채용 섹션 이미지"
                      ></img>
                    </Col>
                    <Col
                      className={styles.carrerSectionCol}
                      lg={6}
                      md={12}
                      sm={12}
                    >
                      <div className={styles.carrerSectionColTitle}>
                        {i18n.t("carrer.inquiryTitle3")}
                      </div>
                      <span className={styles.carrerSectionColContent}>
                        {i18n.t("carrer.inquiryContent3")}
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr />
            </section>
            <section className={styles.carrerSectionWrapper}>
              <div className={styles.carrerMoreTitle} id="aisWelfare">
                {i18n.t("carrer.carrerTitle1")}
                <br />
                {i18n.t("carrer.carrerContent1")}
              </div>
              <div className={styles.carrerTable}>
                <Row
                  className={
                    i18n.language === "ko"
                      ? styles.carrerTableRow
                      : styles.carrerTableRowEng
                  }
                  style={{ height: "100%" }}
                >
                  <Col
                    className={`${styles.carrerTableTd} ${styles.carrerTableTdTablet}`}
                    lg={4}
                    md={6}
                    sm={12}
                  >
                    <div className={styles.carrerTableTitle}>
                      {" "}
                      {i18n.t("carrer.carrerList1")}
                    </div>
                    <div className={styles.carrerTableImgWrapper}>
                      <img
                        className={styles.carrerTableImg}
                        src={
                          require("../../asset/images/carrer_table_icon_1.svg")
                            .default
                        }
                        alt={i18n.t("carrer.carrerList1")}
                      ></img>
                    </div>
                  </Col>
                  <Col
                    className={`${styles.carrerTableTd} ${styles.carrerTableTdCenter}`}
                    lg={4}
                    md={6}
                    sm={12}
                  >
                    <div className={styles.carrerTableTitle}>
                      {" "}
                      {i18n.t("carrer.carrerList2")}
                    </div>
                    <div className={styles.carrerTableImgWrapper}>
                      <img
                        className={styles.carrerTableImg}
                        src={
                          require("../../asset/images/carrer_table_icon_2.svg")
                            .default
                        }
                        alt={i18n.t("carrer.carrerList2")}
                      ></img>
                    </div>
                  </Col>
                  <Col
                    className={`${styles.carrerTableTd} ${styles.carrerTableTdTablet}`}
                    lg={4}
                    md={6}
                    sm={12}
                  >
                    <div className={styles.carrerTableTitle}>
                      {" "}
                      {i18n.t("carrer.carrerList3")}
                    </div>
                    <div className={styles.carrerTableImgWrapper}>
                      <img
                        className={styles.carrerTableImg}
                        src={
                          require("../../asset/images/carrer_table_icon_3.svg")
                            .default
                        }
                        alt={i18n.t("carrer.carrerList3")}
                      ></img>
                    </div>
                  </Col>
                  <Col className={styles.carrerTableTd} lg={4} md={6} sm={12}>
                    <div className={styles.carrerTableTitle}>
                      {" "}
                      {i18n.t("carrer.carrerList4")}
                    </div>
                    <div className={styles.carrerTableImgWrapper}>
                      <img
                        className={styles.carrerTableImg}
                        src={
                          require("../../asset/images/carrer_table_icon_4.svg")
                            .default
                        }
                        alt={i18n.t("carrer.carrerList4")}
                      ></img>
                    </div>
                  </Col>
                  <Col
                    className={`${styles.carrerTableTd} ${styles.carrerTableTdCenter} ${styles.carrerTableTdTablet}`}
                    lg={4}
                    md={6}
                    sm={12}
                  >
                    <div className={styles.carrerTableTitle}>
                      {" "}
                      {i18n.t("carrer.carrerList5")}
                    </div>
                    <div className={styles.carrerTableImgWrapper}>
                      <img
                        className={styles.carrerTableImg}
                        src={
                          require("../../asset/images/carrer_table_icon_5.svg")
                            .default
                        }
                        alt={i18n.t("carrer.carrerList5")}
                      ></img>
                    </div>
                  </Col>
                  <Col className={styles.carrerTableTd} lg={4} md={6} sm={12}>
                    <div className={styles.carrerTableTitle}>
                      {i18n.t("carrer.carrerList6")}
                    </div>
                    <div className={styles.carrerTableImgWrapper}>
                      <img
                        className={styles.carrerTableImg}
                        src={
                          require("../../asset/images/carrer_table_icon_6.svg")
                            .default
                        }
                        alt={i18n.t("carrer.carrerList6")}
                      ></img>
                    </div>
                  </Col>
                  <Col
                    className={`${styles.carrerTableTd} ${styles.carrerTableTdWeb} ${styles.carrerTableTdTablet}`}
                    lg={4}
                    md={6}
                    sm={12}
                  >
                    <div className={styles.carrerTableTitle}>
                      {" "}
                      {i18n.t("carrer.carrerList7")}
                    </div>
                    <div className={styles.carrerTableImgWrapper}>
                      <img
                        className={styles.carrerTableImg}
                        src={
                          require("../../asset/images/carrer_table_icon_7.svg")
                            .default
                        }
                        alt={i18n.t("carrer.carrerList7")}
                      ></img>
                    </div>
                  </Col>
                  <Col
                    className={`${styles.carrerTableTd} ${styles.carrerTableTdWeb} ${styles.carrerTableTdCenter}`}
                    lg={4}
                    md={6}
                    sm={12}
                  >
                    <div className={styles.carrerTableTitle}>
                      {" "}
                      {i18n.t("carrer.carrerList8")}
                    </div>
                    <div className={styles.carrerTableImgWrapper}>
                      <img
                        className={styles.carrerTableImg}
                        src={
                          require("../../asset/images/carrer_table_icon_8.svg")
                            .default
                        }
                        alt={i18n.t("carrer.carrerList8")}
                      ></img>
                    </div>
                  </Col>
                  <Col
                    className={`${styles.carrerTableTd} ${styles.carrerTableTdWeb} ${styles.carrerTableTdTablet} ${styles.carrerTableTdTabletBottom}`}
                    lg={4}
                    md={6}
                    sm={12}
                  >
                    <div className={styles.carrerTableTitle}>
                      {" "}
                      {i18n.t("carrer.carrerList9")}
                    </div>
                    <div className={styles.carrerTableImgWrapper}>
                      <img
                        className={styles.carrerTableImg}
                        src={
                          require("../../asset/images/carrer_table_icon_9.svg")
                            .default
                        }
                        alt={i18n.t("carrer.carrerList9")}
                      ></img>
                    </div>
                  </Col>
                </Row>
              </div>
            </section>
          </div>
          <div className={styles.carrerButtonWrapper}>
            <button
              onClick={() =>
                window.open(
                  "https://aiskorea.notion.site/AIS-KOREA-0d87c52f37ae4f8ab137368a44b79806",
                  "_blank"
                )
              }
              className={styles.carrerButton}
            >
              {" "}
              <p>에이아이에스 채용공고 보러가기</p>
            </button>
          </div>
          <NavBottom />
        </>
      )}
    </>
  );
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default withTranslation()(Carrer);
