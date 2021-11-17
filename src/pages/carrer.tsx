import React, { useEffect, useState, useCallback } from "react";

// i18
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// response
import { useMediaQuery } from "react-responsive";

import * as Carrers from "../styles/carrer";

import AOS from "aos";
import "aos/dist/aos.css";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const Carrer = () => {
  const isPc = useMediaQuery({
    query: "(min-width:1280px)",
  });

  const { t } = useTranslation("common");

  const [isRendering, setisRendering] = useState(false);

  useEffect(() => {
    setisRendering(true);

    AOS.init({
      duration: 2000,
    });
  }, []);

  const [bgOpacity, setbgOpacity] = useState(0.3);
  const [mainTitleOpacity, setMainTitleOpacity] = useState(1);
  const [subTitleOpacity, setSubTitleOpacity] = useState(0);
  const [bgScale, setBgScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const height = useWindowDimensions();

  const handleScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY < height) {
        setbgOpacity(window.scrollY * 0.5 * (1 / height)); // 투명도 (rgab(0,0,0, (0.3 -> 0.6))) 스크롤에 맞춰서 투명도 조정
        setMainTitleOpacity(1 - window.scrollY * 4 * (1 / height)); // 첫번째 텍스트 opacity 스크롤에 맞춰서 투명도 조정 (스크롤의 3배 속도)
        setSubTitleOpacity(window.scrollY * 4 * (1 / height));
        setBgScale(1 + window.scrollY * 4 * (0.1 / height));
        setOpacity(1);
      } else if (window.scrollY < height * 4) {
        setOpacity(1 / (window.scrollY * (1 / height)));
      } else {
        setOpacity(0);
      }
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
          <main className="wrap">
            <Carrers.CarrerMainImageSectionWrapper
              style={{ opacity: `${opacity}` }}
            >
              <Carrers.CarrerMainImage
                style={{ transform: `scale(${bgScale})` }}
              />
              <Carrers.CarrerMainImageOpacity
                style={{ opacity: `${bgOpacity}` }}
              />
              <Carrers.CarrerMainTitle
                style={{ opacity: `${mainTitleOpacity}` }}
              >
                {t("carrer.topTitle1")}
              </Carrers.CarrerMainTitle>
              <Carrers.CarrerMainSubTitle1
                style={{ opacity: `${subTitleOpacity}` }}
              >
                {t("carrer.topTitle2")}
                <br />
                {t("carrer.topTitle3")}
                <br />
                {t("carrer.topTitle4")}
                <br />
                {t("carrer.topTitle5")}
              </Carrers.CarrerMainSubTitle1>
            </Carrers.CarrerMainImageSectionWrapper>
            <Carrers.CarrerSectionWrapper
              style={
                isPc
                  ? { paddingTop: `calc(${height} * 5px)` }
                  : { paddingTop: `calc(${height} * 4.5px)` }
              }
            >
              <Carrers.CarrerContentsWrapper>
                <Carrers.CarrerSectionImageWrapper>
                  <Carrers.CarrerSectionImage
                    src={"../../asset/images/carrer_section_image_1.webp"}
                    alt="AIS 채용 섹션 이미지"
                  />
                </Carrers.CarrerSectionImageWrapper>
                <Carrers.CarrerContentWrapper>
                  <Carrers.CarrerSectionColTitle>
                    {t("carrer.supportTitle1")}
                  </Carrers.CarrerSectionColTitle>
                  <Carrers.CarrerSectionColContent>
                    {t("carrer.supportContent1")}
                  </Carrers.CarrerSectionColContent>
                </Carrers.CarrerContentWrapper>
              </Carrers.CarrerContentsWrapper>
              <Carrers.CarrerContentsWrapper>
                <Carrers.CarrerSectionImageWrapper>
                  <Carrers.CarrerSectionImage
                    src={"../../asset/images/carrer_section_image_2.webp"}
                    alt="AIS 채용 섹션 이미지"
                  />
                </Carrers.CarrerSectionImageWrapper>
                <Carrers.CarrerContentWrapper>
                  <Carrers.CarrerSectionColTitle>
                    {t("carrer.supportTitle2")}
                  </Carrers.CarrerSectionColTitle>
                  <Carrers.CarrerSectionColContent>
                    {t("carrer.supportContent2")}
                  </Carrers.CarrerSectionColContent>
                </Carrers.CarrerContentWrapper>
              </Carrers.CarrerContentsWrapper>
              <Carrers.CarrerContentsWrapper>
                <Carrers.CarrerSectionImageWrapper>
                  <Carrers.CarrerSectionImage
                    src={"../../asset/images/carrer_section_image_3.webp"}
                    alt="AIS 채용 섹션 이미지"
                  />
                </Carrers.CarrerSectionImageWrapper>
                <Carrers.CarrerContentWrapper>
                  <Carrers.CarrerSectionColTitle>
                    {t("carrer.supportTitle3")}
                  </Carrers.CarrerSectionColTitle>
                  <Carrers.CarrerSectionColContent>
                    {t("carrer.supportContent3")}
                  </Carrers.CarrerSectionColContent>
                </Carrers.CarrerContentWrapper>
              </Carrers.CarrerContentsWrapper>
              <hr />
            </Carrers.CarrerSectionWrapper>
            <Carrers.CarrerSectionWrapper>
              <Carrers.CarrerMoreTitle>
                {t("carrer.carrerTitle1")}
                <br />
                {t("carrer.carrerContent1")}
              </Carrers.CarrerMoreTitle>
              {/* grid start */}
              <Carrers.CarrerTable>
                <Carrers.CarrerTableContentWrapper>
                  <Carrers.CarrerTableTitle>
                    {t("carrer.carrerList1")}
                  </Carrers.CarrerTableTitle>
                  <Carrers.CarrerTableImgWrapper>
                    <Carrers.CarrerTableImg
                      src={"../../asset/images/carrer_table_icon_1.svg"}
                      alt={t("carrer.carrerList1")}
                    />
                  </Carrers.CarrerTableImgWrapper>
                </Carrers.CarrerTableContentWrapper>
                <Carrers.CarrerTableContentWrapper>
                  <Carrers.CarrerTableTitle>
                    {t("carrer.carrerList2")}
                  </Carrers.CarrerTableTitle>
                  <Carrers.CarrerTableImgWrapper>
                    <Carrers.CarrerTableImg
                      src={"../../asset/images/carrer_table_icon_2.svg"}
                      alt={t("carrer.carrerList2")}
                    />
                  </Carrers.CarrerTableImgWrapper>
                </Carrers.CarrerTableContentWrapper>
                <Carrers.CarrerTableContentWrapper>
                  <Carrers.CarrerTableTitle>
                    {t("carrer.carrerList3")}
                  </Carrers.CarrerTableTitle>
                  <Carrers.CarrerTableImgWrapper>
                    <Carrers.CarrerTableImg
                      src={"../../asset/images/carrer_table_icon_3.svg"}
                      alt={t("carrer.carrerList3")}
                    />
                  </Carrers.CarrerTableImgWrapper>
                </Carrers.CarrerTableContentWrapper>
                <Carrers.CarrerTableContentWrapper>
                  <Carrers.CarrerTableTitle>
                    {t("carrer.carrerList4")}
                  </Carrers.CarrerTableTitle>
                  <Carrers.CarrerTableImgWrapper>
                    <Carrers.CarrerTableImg
                      src={"../../asset/images/carrer_table_icon_4.svg"}
                      alt={t("carrer.carrerList4")}
                    />
                  </Carrers.CarrerTableImgWrapper>
                </Carrers.CarrerTableContentWrapper>
                <Carrers.CarrerTableContentWrapper>
                  <Carrers.CarrerTableTitle>
                    {t("carrer.carrerList5")}
                  </Carrers.CarrerTableTitle>
                  <Carrers.CarrerTableImgWrapper>
                    <Carrers.CarrerTableImg
                      src={"../../asset/images/carrer_table_icon_5.svg"}
                      alt={t("carrer.carrerList5")}
                    />
                  </Carrers.CarrerTableImgWrapper>
                </Carrers.CarrerTableContentWrapper>
                <Carrers.CarrerTableContentWrapper>
                  <Carrers.CarrerTableTitle>
                    {t("carrer.carrerList6")}
                  </Carrers.CarrerTableTitle>
                  <Carrers.CarrerTableImgWrapper>
                    <Carrers.CarrerTableImg
                      src={"../../asset/images/carrer_table_icon_6.svg"}
                      alt={t("carrer.carrerList6")}
                    />
                  </Carrers.CarrerTableImgWrapper>
                </Carrers.CarrerTableContentWrapper>
                <Carrers.CarrerTableContentWrapper>
                  <Carrers.CarrerTableTitle>
                    {t("carrer.carrerList7")}
                  </Carrers.CarrerTableTitle>
                  <Carrers.CarrerTableImgWrapper>
                    <Carrers.CarrerTableImg
                      src={"../../asset/images/carrer_table_icon_7.svg"}
                      alt={t("carrer.carrerList7")}
                    />
                  </Carrers.CarrerTableImgWrapper>
                </Carrers.CarrerTableContentWrapper>
                <Carrers.CarrerTableContentWrapper>
                  <Carrers.CarrerTableTitle>
                    {t("carrer.carrerList8")}
                  </Carrers.CarrerTableTitle>
                  <Carrers.CarrerTableImgWrapper>
                    <Carrers.CarrerTableImg
                      src={"../../asset/images/carrer_table_icon_8.svg"}
                      alt={t("carrer.carrerList8")}
                    />
                  </Carrers.CarrerTableImgWrapper>
                </Carrers.CarrerTableContentWrapper>
                <Carrers.CarrerTableContentWrapper>
                  <Carrers.CarrerTableTitle>
                    {t("carrer.carrerList9")}
                  </Carrers.CarrerTableTitle>
                  <Carrers.CarrerTableImgWrapper>
                    <Carrers.CarrerTableImg
                      src={"../../asset/images/carrer_table_icon_9.svg"}
                      alt={t("carrer.carrerList9")}
                    />
                  </Carrers.CarrerTableImgWrapper>
                </Carrers.CarrerTableContentWrapper>
              </Carrers.CarrerTable>
            </Carrers.CarrerSectionWrapper>
            <Carrers.CarrerButtonWrapper>
              <Carrers.CarrerButton
                onClick={() =>
                  window.open(
                    "https://aiskorea.notion.site/AIS-KOREA-0d87c52f37ae4f8ab137368a44b79806",
                    "_blank"
                  )
                }
              >
                <h3>에이아이에스 채용공고 보러가기</h3>
              </Carrers.CarrerButton>
            </Carrers.CarrerButtonWrapper>
          </main>
        </>
      )}
    </>
  );
};

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return height;
  }
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

export default Carrer;
