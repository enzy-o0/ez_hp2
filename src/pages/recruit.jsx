import React, { useEffect, useState, useCallback } from "react";
import Footer from "../components/Footer";
import RecruitSectionImg1 from "../../public/asset/images/recruit_section_image_1.webp";
import RecruitSectionImg12x from "../../public/asset/images/recruit_section_image_1@2x.webp";
import RecruitSectionImg13x from "../../public/asset/images/recruit_section_image_1@3x.webp";
import RecruitSectionImg2 from "../../public/asset/images/recruit_section_image_2.webp";
import RecruitSectionImg22x from "../../public/asset/images/recruit_section_image_2@2x.webp";
import RecruitSectionImg23x from "../../public/asset/images/recruit_section_image_2@3x.webp";
import RecruitSectionImg3 from "../../public/asset/images/recruit_section_image_3.webp";
import RecruitSectionImg32x from "../../public/asset/images/recruit_section_image_3@2x.webp";
import RecruitSectionImg33x from "../../public/asset/images/recruit_section_image_3@3x.webp";

import { Row, Col } from "react-bootstrap";

import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";

import styles from "../styles/Recruit.module.css";

const Recruit = () => {
  const { i18n } = useTranslation("common");
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
                    {i18n("recruit.topTitle1")}
                  </h1>
                  <span
                    className={`${styles.initText} ${styles.scrollText}`}
                    style={{ opacity: `${scrollTxtOpacity}` }}
                  >
                    {i18n("recruit.topTitle2")}

                    <br />
                    {i18n("recruit.topTitle3")}

                    <br />
                    {i18n("recruit.topTitle4")}

                    <br />
                    {i18n("recruit.topTitle5")}
                  </span>
                </div>
              </div>
            </div>
            <section
              className={styles.recruitSectionWrapper}
              style={{ paddingTop: `calc(${height} * 6px)` }}
            >
              <Row className="recruitSection" id="aisCulture">
                <Col
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Row
                    className={styles.recruitSectionRow}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-once="false"
                  >
                    <Col
                      className={styles.recruitSectionCol}
                      lg={6}
                      md={12}
                      sm={12}
                    >
                      <img
                        className={styles.sectionImage}
                        src={RecruitSectionImg1}
                        srcSet={`${RecruitSectionImg12x} 2x, ${RecruitSectionImg13x} 3x`}
                        alt="AIS 채용 섹션 이미지"
                      ></img>
                    </Col>
                    <Col
                      className={styles.recruitSectionCol}
                      lg={6}
                      md={12}
                      sm={12}
                    >
                      <div className={styles.recruitSectionColTitle}>
                        {i18n("recruit.inquiryTitle1")}
                      </div>
                      <span className={styles.recruitSectionColContent}>
                        {i18n("recruit.inquiryContent1")}
                      </span>
                    </Col>
                  </Row>
                  <Row
                    className={`${styles.recruitSectionRow} ${styles.recruitSection2}`}
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-once="false"
                  >
                    <Col
                      className={`${styles.recruitSectionCol} ${styles.recruitSectionText}`}
                      lg={6}
                      md={12}
                      sm={12}
                    >
                      <div className={styles.recruitSectionColTitle}>
                        {i18n("recruit.inquiryTitle2")}
                      </div>
                      <span className={styles.recruitSectionColContent}>
                        {i18n("recruit.inquiryContent2")}
                      </span>
                    </Col>
                    <Col
                      className={`${styles.recruitSectionCol} ${styles.recruitSectionImg}`}
                      lg={6}
                      md={12}
                      sm={12}
                    >
                      <img
                        className={styles.sectionImage}
                        src={RecruitSectionImg2}
                        srcSet={`${RecruitSectionImg22x} 2x, ${RecruitSectionImg23x} 3x`}
                        alt="AIS 채용 섹션 이미지"
                      ></img>
                    </Col>
                  </Row>
                  <Row
                    className={styles.recruitSectionRow}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-once="false"
                  >
                    <Col
                      className={styles.recruitSectionCol}
                      lg={6}
                      md={12}
                      sm={12}
                    >
                      <img
                        className={styles.sectionImage}
                        src={RecruitSectionImg3}
                        srcSet={`${RecruitSectionImg32x} 2x, ${RecruitSectionImg33x} 3x`}
                        alt="AIS 채용 섹션 이미지"
                      ></img>
                    </Col>
                    <Col
                      className={styles.recruitSectionCol}
                      lg={6}
                      md={12}
                      sm={12}
                    >
                      <div className={styles.recruitSectionColTitle}>
                        {i18n("recruit.inquiryTitle3")}
                      </div>
                      <span className={styles.recruitSectionColContent}>
                        {i18n("recruit.inquiryContent3")}
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr />
            </section>
            <section className={styles.recruitSectionWrapper}>
              <div className={styles.recruitMoreTitle} id="aisWelfare">
                {i18n("recruit.recruitTitle1")}
                <br />
                {i18n("recruit.recruitContent1")}
              </div>
              <div className={styles.recruitTable}>
                <Row
                  className={
                    i18n.language === "ko"
                      ? styles.recruitTableRow
                      : styles.recruitTableRowEng
                  }
                  style={{ height: "100%" }}
                >
                  <Col
                    className={`${styles.recruitTableTd} ${styles.recruitTableTdTablet}`}
                    lg={4}
                    md={6}
                    sm={12}
                  >
                    <div className={styles.recruitTableTitle}>
                      {" "}
                      {i18n("recruit.recruitList1")}
                    </div>
                    <div className={styles.recruitTableImgWrapper}>
                      <img
                        className={styles.recruitTableImg}
                        src={
                          require("../../public/asset/images/recruit_table_icon_1.svg")
                            .default
                        }
                        alt={i18n("recruit.recruitList1")}
                      ></img>
                    </div>
                  </Col>
                  <Col
                    className={`${styles.recruitTableTd} ${styles.recruitTableTdCenter}`}
                    lg={4}
                    md={6}
                    sm={12}
                  >
                    <div className={styles.recruitTableTitle}>
                      {" "}
                      {i18n("recruit.recruitList2")}
                    </div>
                    <div className={styles.recruitTableImgWrapper}>
                      <img
                        className={styles.recruitTableImg}
                        src={
                          require("../../public/asset/images/recruit_table_icon_2.svg")
                            .default
                        }
                        alt={i18n("recruit.recruitList2")}
                      ></img>
                    </div>
                  </Col>
                  <Col
                    className={`${styles.recruitTableTd} ${styles.recruitTableTdTablet}`}
                    lg={4}
                    md={6}
                    sm={12}
                  >
                    <div className={styles.recruitTableTitle}>
                      {" "}
                      {i18n("recruit.recruitList3")}
                    </div>
                    <div className={styles.recruitTableImgWrapper}>
                      <img
                        className={styles.recruitTableImg}
                        src={
                          require("../../public/asset/images/recruit_table_icon_3.svg")
                            .default
                        }
                        alt={i18n("recruit.recruitList3")}
                      ></img>
                    </div>
                  </Col>
                  <Col className={styles.recruitTableTd} lg={4} md={6} sm={12}>
                    <div className={styles.recruitTableTitle}>
                      {" "}
                      {i18n("recruit.recruitList4")}
                    </div>
                    <div className={styles.recruitTableImgWrapper}>
                      <img
                        className={styles.recruitTableImg}
                        src={
                          require("../../public/asset/images/recruit_table_icon_4.svg")
                            .default
                        }
                        alt={i18n("recruit.recruitList4")}
                      ></img>
                    </div>
                  </Col>
                  <Col
                    className={`${styles.recruitTableTd} ${styles.recruitTableTdCenter} ${styles.recruitTableTdTablet}`}
                    lg={4}
                    md={6}
                    sm={12}
                  >
                    <div className={styles.recruitTableTitle}>
                      {" "}
                      {i18n("recruit.recruitList5")}
                    </div>
                    <div className={styles.recruitTableImgWrapper}>
                      <img
                        className={styles.recruitTableImg}
                        src={
                          require("../../public/asset/images/recruit_table_icon_5.svg")
                            .default
                        }
                        alt={i18n("recruit.recruitList5")}
                      ></img>
                    </div>
                  </Col>
                  <Col className={styles.recruitTableTd} lg={4} md={6} sm={12}>
                    <div className={styles.recruitTableTitle}>
                      {i18n("recruit.recruitList6")}
                    </div>
                    <div className={styles.recruitTableImgWrapper}>
                      <img
                        className={styles.recruitTableImg}
                        src={
                          require("../../public/asset/images/recruit_table_icon_6.svg")
                            .default
                        }
                        alt={i18n("recruit.recruitList6")}
                      ></img>
                    </div>
                  </Col>
                  <Col
                    className={`${styles.recruitTableTd} ${styles.recruitTableTdWeb} ${styles.recruitTableTdTablet}`}
                    lg={4}
                    md={6}
                    sm={12}
                  >
                    <div className={styles.recruitTableTitle}>
                      {" "}
                      {i18n("recruit.recruitList7")}
                    </div>
                    <div className={styles.recruitTableImgWrapper}>
                      <img
                        className={styles.recruitTableImg}
                        src={
                          require("../../public/asset/images/recruit_table_icon_7.svg")
                            .default
                        }
                        alt={i18n("recruit.recruitList7")}
                      ></img>
                    </div>
                  </Col>
                  <Col
                    className={`${styles.recruitTableTd} ${styles.recruitTableTdWeb} ${styles.recruitTableTdCenter}`}
                    lg={4}
                    md={6}
                    sm={12}
                  >
                    <div className={styles.recruitTableTitle}>
                      {" "}
                      {i18n("recruit.recruitList8")}
                    </div>
                    <div className={styles.recruitTableImgWrapper}>
                      <img
                        className={styles.recruitTableImg}
                        src={
                          require("../../public/asset/images/recruit_table_icon_8.svg")
                            .default
                        }
                        alt={i18n("recruit.recruitList8")}
                      ></img>
                    </div>
                  </Col>
                  <Col
                    className={`${styles.recruitTableTd} ${styles.recruitTableTdWeb} ${styles.recruitTableTdTablet} ${styles.recruitTableTdTabletBottom}`}
                    lg={4}
                    md={6}
                    sm={12}
                  >
                    <div className={styles.recruitTableTitle}>
                      {" "}
                      {i18n("recruit.recruitList9")}
                    </div>
                    <div className={styles.recruitTableImgWrapper}>
                      <img
                        className={styles.recruitTableImg}
                        src={
                          require("../../public/asset/images/recruit_table_icon_9.svg")
                            .default
                        }
                        alt={i18n("recruit.recruitList9")}
                      ></img>
                    </div>
                  </Col>
                </Row>
              </div>
            </section>
          </div>
          <div className={styles.recruitButtonWrapper}>
            <button
              onClick={() =>
                window.open(
                  "https://aiskorea.notion.site/AIS-KOREA-0d87c52f37ae4f8ab137368a44b79806",
                  "_blank"
                )
              }
              className={styles.recruitButton}
            >
              {" "}
              <p>에이아이에스 채용공고 보러가기</p>
            </button>
          </div>
          <Footer />
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

export default Recruit;
