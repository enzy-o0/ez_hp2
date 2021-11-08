import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import Footer from "../components/Footer";
import styles from "../styles/ServiceInfo.module.css";
const AOS = dynamic(import("aos"), {
  ssr: false,
});

// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

import titleBg from "../../public/asset/images/header.jpg";
import { useTranslation, appWithTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// const MySwal = withReactContent(Swal);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const alert = () => {
  // MySwal.fire({
  //   icon: "warning",
  //   title: i18n.t("serviceInfo.appDownAlert"),
  //   showConfirmButton: false,
  //   timer: 1500,
  // });
};

const ServiceInfo = () => {
  const { t, i18n } = useTranslation("common");
  const [isRendering, setisRendering] = useState(false);

  useEffect(() => {
    setisRendering(true);

    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      {isRendering && (
        <>
          <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <header className={`${styles.main} ${styles.grayscale_wash}`}>
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className={styles.headerWrapper}
              >
                {i18n.language === "ko" ? (
                  <>
                    <p>
                      {t("serviceInfo.headerTitleFirst")}
                      <br />
                      {t("serviceInfo.headerTitleLast")}
                    </p>
                    <div className={styles.wellgrowerWrapper}>
                      <h1 id={styles.titleWellgrower}>
                        <span>{t("serviceInfo.headerTitleSub1")}</span>
                        <span>{t("serviceInfo.headerTitleSub2")}</span>
                        <span>{t("serviceInfo.headerTitleSub3")}</span>
                      </h1>
                      <button className={styles.appDownloadBtn} onClick={alert}>
                        <div className={styles.wellgrowerIcon}>
                          <img
                            src={
                              require("../../public/asset/images/wellgrowerIcon.png")
                                .default
                            }
                            alt="wellgrowerIcon"
                            id={styles.wellgrowerIcon}
                          />
                        </div>
                        <div
                          className={`${styles.primary_p_900} ${styles.appDownloadText}`}
                        >
                          {t("serviceInfo.appDownload")}
                        </div>
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className={styles.headerContent}>
                      {t("serviceInfo.headerTitleFirst")}
                      <br />
                      {t("serviceInfo.headerTitleLast")}
                    </p>
                    <div className={styles.wellgrowerWrapperEng}>
                      <h1
                        id={styles.titleWellgrower}
                        className={styles.titleWellgrowerEng}
                      >
                        <span>{t("serviceInfo.headerTitleSub1")}</span>
                      </h1>
                      <button
                        className={`${styles.appDownloadBtn} ${styles.appDownloadBtnEng}`}
                        onClick={alert}
                      >
                        <div className={styles.wellgrowerIcon}>
                          <img
                            src={
                              require("../../public/asset/images/wellgrowerIcon.png")
                                .default
                            }
                            alt="wellgrowerIcon"
                            id={styles.wellgrowerIcon}
                          />
                        </div>
                        <div
                          className={`${styles.primary_p_900} ${styles.appDownloadText}`}
                        >
                          {t("serviceInfo.appDownload")}
                        </div>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </header>
            <main style={{ width: "100%", height: "100%" }}>
              <div className={styles.serContainer}>
                <h2 className={styles.introTitle}>
                  {i18n.language === "ko" ? (
                    <>
                      <strong className={styles.primary_p_900}>
                        {t("serviceInfo.introTitleStrong1")}
                      </strong>
                      {t("serviceInfo.introTitleSub1")}{" "}
                      <strong className={styles.primary_p_900}>
                        {t("serviceInfo.introTitleStrong2")}
                      </strong>
                      {t("serviceInfo.introTitleSub2")}
                      <br />
                      {t("serviceInfo.introTitleSub3")}{" "}
                    </>
                  ) : (
                    <>
                      {t("serviceInfo.introTitleSub3")}
                      {t("serviceInfo.introTitleSub1")}
                      <strong className={styles.primary_p_900}>
                        {t("serviceInfo.introTitleStrong1")}
                      </strong>
                      {t("serviceInfo.introTitleSub2")}
                      <strong className={styles.primary_p_900}>
                        {t("serviceInfo.introTitleStrong2")}
                      </strong>
                    </>
                  )}
                </h2>
                <p
                  className={`${styles.introPara} ${styles.grayscale_secondary_text}`}
                >
                  {t("serviceInfo.introContent")}
                </p>
              </div>
              <div
                id={styles.imgWrapper}
                className={`${styles.serContainer} ${styles.bg_img} ${styles.imgWrapper}`}
              >
                <div className={styles.serviceRow}>
                  <div className={styles.imgItem}>
                    <div className={styles.imgBox}>
                      <img
                        src={
                          require("../../public/asset/images/environment.png")
                            .default
                        }
                        alt={t("serviceInfo.imgTitle1")}
                      />
                    </div>
                    <div
                      className={`${styles.bg_grayscale_wash} ${styles.imgInfo}`}
                    >
                      <div className={styles.imgTitle}>
                        {t("serviceInfo.imgTitle1")}
                      </div>
                      <p
                        className={`${styles.imgPara} ${styles.grayscale_secondary_text}`}
                      >
                        {t("serviceInfo.imgContent1")}
                      </p>
                    </div>
                  </div>
                  <div className={styles.imgItem}>
                    <div className={styles.imgBox}>
                      <img
                        src={
                          require("../../public/asset/images/custom.png")
                            .default
                        }
                        alt={t("serviceInfo.imgTitle2")}
                      />
                    </div>
                    <div
                      className={`${styles.bg_grayscale_wash} ${styles.imgInfo}`}
                    >
                      <div className={styles.imgTitle}>
                        {t("serviceInfo.imgTitle2")}
                      </div>
                      <p
                        className={`${styles.imgPara} ${styles.grayscale_secondary_text}`}
                      >
                        {t("serviceInfo.imgContent2")}
                      </p>
                    </div>
                  </div>
                  <div className={styles.imgItem}>
                    <div className={styles.imgBox}>
                      <img
                        src={
                          require("../../public/asset/images/drone.png").default
                        }
                        alt={t("serviceInfo.imgTitle3")}
                      />
                    </div>
                    <div
                      className={`${styles.bg_grayscale_wash} ${styles.imgInfo}`}
                    >
                      <div className={styles.imgTitle}>
                        {t("serviceInfo.imgTitle3")}
                      </div>
                      <p
                        className={`${styles.imgPara} ${styles.grayscale_secondary_text}`}
                      >
                        {t("serviceInfo.imgContent3")}
                      </p>
                    </div>
                  </div>
                  <div className={styles.imgItem}>
                    <div className={styles.imgBox}>
                      <img
                        src={
                          require("../../public/asset/images/operation.png")
                            .default
                        }
                        alt={t("serviceInfo.imgTitle4")}
                      />
                    </div>
                    <div
                      className={`${styles.bg_grayscale_wash} ${styles.imgInfo}`}
                    >
                      <div className={styles.imgTitle}>
                        {t("serviceInfo.imgTitle4")}
                      </div>
                      <p
                        className={`${styles.imgPara} ${styles.grayscale_secondary_text}`}
                      >
                        {t("serviceInfo.imgContent4")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.serContainer}>
                <div className={styles.animaWrapper}>
                  <div
                    className={styles.left}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
                    <h2
                      className={`${styles.containTitle} ${styles.grayscale_primary_text}`}
                    >
                      {t("serviceInfo.containTitle1")}
                    </h2>
                    <p
                      className={`${styles.grayscale_primary_text} ${styles.containPara}`}
                    >
                      {t("serviceInfo.containContent1")}{" "}
                      <span className={styles.highlighter}>
                        {" "}
                        {t("serviceInfo.containContentStrong1")}
                      </span>
                      {t("serviceInfo.containContent2")}
                    </p>
                  </div>
                  <div
                    className={styles.right}
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
                    {i18n.language === "ko" ? (
                      <>
                        <img
                          src={
                            require("../../public/asset/images/wellgrower1.svg")
                              .default
                          }
                          alt="phoneImg"
                        />
                      </>
                    ) : (
                      <>
                        <img
                          src={
                            require("../../public/asset/images/wellgrowerEng1.svg")
                              .default
                          }
                          alt="phoneImg"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className={styles.animaWrapper}>
                  <div
                    className={styles.left}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
                    {i18n.language === "ko" ? (
                      <>
                        <img
                          src={
                            require("../../public/asset/images/wellgrower2.svg")
                              .default
                          }
                          alt="phoneImg"
                        />
                      </>
                    ) : (
                      <>
                        <img
                          src={
                            require("../../public/asset/images/wellgrowerEng2.svg")
                              .default
                          }
                          alt="phoneImg"
                        />
                      </>
                    )}
                  </div>
                  <div
                    className={styles.right}
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
                    <h2
                      className={`${styles.containTitle} ${styles.grayscale_primary_text}`}
                    >
                      {t("serviceInfo.containTitle2")}
                    </h2>
                    <p
                      className={`${styles.grayscale_primary_text} ${styles.containPara}`}
                    >
                      {t("serviceInfo.containContent3")}{" "}
                      <span className={styles.highlighter}>
                        {t("serviceInfo.containContentStrong2")}
                      </span>
                      {t("serviceInfo.containContent4")}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.serContainer} ${styles.bg_img} ${styles.imgWrapper}`}
              >
                <div id={styles.whenFarmWrapper}>
                  <h2
                    className={`${styles.containTitle} ${styles.grayscale_primary_text}`}
                  >
                    {t("serviceInfo.simpleTitle1")}
                    <br />
                    {t("serviceInfo.simpleTitle2")}
                  </h2>
                  <p
                    className={`${styles.grayscale_primary_text} ${styles.containPara}`}
                  >
                    {t("serviceInfo.simpleContent1")}{" "}
                    <span className={styles.highlighter}>
                      {t("serviceInfo.simpleContentStrong")}
                    </span>{" "}
                    {t("serviceInfo.simpleContent2")}
                    <br />
                    {t("serviceInfo.simpleContent3")}
                  </p>
                </div>
                <div className={styles.wellgrowerImgWrapper}>
                  {i18n.language === "ko" ? (
                    <>
                      <img
                        src={
                          require("../../public/asset/images/wellgrower3.gif")
                            .default
                        }
                        alt="phoneImg"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={
                          require("../../public/asset/images/wellgrowerEng3.gif")
                            .default
                        }
                        alt="phoneImg"
                      />
                    </>
                  )}
                </div>
              </div>
              <div className={`${styles.serContainer} ${styles.findFarmLists}`}>
                <div className={styles.farmFindWrapper}>
                  <h2 className={styles.farmFindTitle}>
                    {t("serviceInfo.farmTitle1")}{" "}
                    <strong className={styles.primary_p_900}>
                      {t("serviceInfo.farmTitleStrong")}
                    </strong>
                    {t("serviceInfo.farmTitle2")}
                  </h2>
                  {i18n.language === "ko" ? (
                    <>
                      <button className={styles.appDownloadBtn} onClick={alert}>
                        <div className={styles.wellgrowerIcon}>
                          <img
                            src={
                              require("../../public/asset/images/wellgrowerIcon.png")
                                .default
                            }
                            alt="wellgrowerIcon"
                            id={styles.wellgrowerIcon}
                          />
                        </div>
                        <div
                          className={`${styles.primary_p_900} ${styles.appDownloadText}`}
                        >
                          {" "}
                          {t("serviceInfo.farmAppDownload")}
                        </div>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className={styles.appDownloadBtnEng}
                        onClick={alert}
                      >
                        <div className={styles.wellgrowerIcon}>
                          <img
                            src={
                              require("../../public/asset/images/wellgrowerIcon.png")
                                .default
                            }
                            alt="wellgrowerIcon"
                            id={styles.wellgrowerIcon}
                          />
                        </div>
                        <div
                          className={`${styles.primary_p_900} ${styles.appDownloadText}`}
                        >
                          {" "}
                          {t("serviceInfo.farmAppDownload")}
                        </div>
                      </button>
                    </>
                  )}
                </div>
                <div className={styles.farmFindLists}>
                  <div id={styles.farmEntry} className={styles.farmLeft}>
                    <div>
                      <div className={styles.farmTitleWrapper}>
                        <div>
                          <h3
                            className={`${styles.grayscale_primary_text} ${styles.farmTitle}`}
                          >
                            {t("serviceInfo.farmListTitle1")}
                          </h3>
                          <p className={styles.farmPara}>
                            {" "}
                            {t("serviceInfo.farmListTitleSub1")}
                          </p>
                          <div className={styles.farmLine}></div>
                        </div>
                        <div className={styles.farmEntryImgWrapper}>
                          <img
                            src={
                              require("../../public/asset/images/farmEntry.png")
                                .default
                            }
                            className={styles.farmEntryImg}
                            alt={t("serviceInfo.farmEntryImg")}
                          />
                        </div>
                      </div>
                      <div className={styles.farmListWrapper}>
                        <ul>
                          <li className={styles.farmList}>
                            <img
                              className={styles.checkImg}
                              src={
                                require("../../public/asset/images/check.png")
                                  .default
                              }
                              alt="checkImg"
                            />
                            {t("serviceInfo.farmList1")}
                            {t("serviceInfo.farmList1_1")}
                          </li>
                          <li className={styles.farmList}>
                            <img
                              className={styles.checkImg}
                              src={
                                require("../../public/asset/images/check.png")
                                  .default
                              }
                              alt="checkImg"
                            />
                            {t("serviceInfo.farmList2")}
                          </li>
                          <li className={styles.farmList}>
                            <img
                              className={styles.checkImg}
                              src={
                                require("../../public/asset/images/check.png")
                                  .default
                              }
                              alt="checkImg"
                            />
                            {t("serviceInfo.farmList3")}
                          </li>
                          <li className={styles.farmList}>
                            <img
                              className={styles.checkImg}
                              src={
                                require("../../public/asset/images/check.png")
                                  .default
                              }
                              alt="checkImg"
                            />
                            {t("serviceInfo.farmList4")}
                          </li>
                          <li className={styles.none}>
                            <img
                              className={styles.noneCheckImg}
                              src={
                                require("../../public/asset/images/none_check.png")
                                  .default
                              }
                              alt="noneCheckImg"
                            />
                            {t("serviceInfo.farmList5")}
                          </li>
                          <li className={styles.none}>
                            <img
                              className={styles.noneCheckImg}
                              src={
                                require("../../public/asset/images/none_check.png")
                                  .default
                              }
                              alt="noneCheckImg"
                            />
                            {t("serviceInfo.farmList6")}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div id={styles.farmCustomized} className={styles.farmRight}>
                    <div>
                      <div className={styles.farmTitleWrapper}>
                        <div>
                          <h3
                            className={`${styles.farmTitle}  ${styles.primary_p_900}`}
                          >
                            {" "}
                            {t("serviceInfo.farmListTitle2")}
                          </h3>
                          <p
                            className={`${styles.primary_p_900} ${styles.farmPara}`}
                          >
                            {" "}
                            {t("serviceInfo.farmListTitleSub2")}
                          </p>
                          <div className={styles.farmLine}></div>
                        </div>
                        <div className={styles.farmCustomizedImgWrapper}>
                          <img
                            src={
                              require("../../public/asset/images/farmCustomized.png")
                                .default
                            }
                            className={styles.farmCustomizedImg}
                            alt={t("serviceInfo.farmEntryImg")}
                          />
                        </div>
                      </div>
                      <div className={styles.farmListWrapper}>
                        <ul>
                          <li
                            className={`${styles.farmList} ${styles.primary_dark}`}
                          >
                            <img
                              className={styles.checkImg}
                              src={
                                require("../../public/asset/images/check.png")
                                  .default
                              }
                              alt="checkImg"
                            />
                            {i18n.language === "ko" ? (
                              <>
                                {t("serviceInfo.farmList1")}
                                <span className={styles.highlighter}>
                                  {" "}
                                  <strong>
                                    {" "}
                                    {t("serviceInfo.farmGoodList1Strong")}
                                  </strong>{" "}
                                  {t("serviceInfo.farmList1_1")}
                                </span>
                              </>
                            ) : (
                              <>
                                <span className={styles.highlighter}>
                                  {" "}
                                  <strong>
                                    {" "}
                                    {t("serviceInfo.farmGoodList1Strong")}
                                  </strong>{" "}
                                </span>
                                {t("serviceInfo.farmList1_1")}
                                {t("serviceInfo.farmGoodList1")}
                              </>
                            )}
                          </li>
                          <li
                            className={`${styles.farmList} ${styles.primary_dark}`}
                          >
                            <img
                              className={styles.checkImg}
                              src={
                                require("../../public/asset/images/check.png")
                                  .default
                              }
                              alt="checkImg"
                            />
                            <strong className={styles.highlighter}>
                              {" "}
                              {t("serviceInfo.farmGoodList2Strong")}
                            </strong>{" "}
                            {t("serviceInfo.farmList2")}
                          </li>
                          <li
                            className={`${styles.farmList} ${styles.primary_dark}`}
                          >
                            <img
                              className={styles.checkImg}
                              src={
                                require("../../public/asset/images/check.png")
                                  .default
                              }
                              alt="checkImg"
                            />
                            {i18n.language === "ko" ? (
                              <>
                                <strong className={styles.highlighter}>
                                  {" "}
                                  {t("serviceInfo.farmGoodList3Strong")}
                                </strong>{" "}
                                {t("serviceInfo.farmList3")}
                              </>
                            ) : (
                              <>
                                {t("serviceInfo.farmList3")}
                                <strong className={styles.highlighter}>
                                  {" "}
                                  {t("serviceInfo.farmGoodList3Strong")}
                                </strong>{" "}
                              </>
                            )}
                          </li>
                          <li
                            className={`${styles.farmList} ${styles.primary_dark}`}
                          >
                            <img
                              className={styles.checkImg}
                              src={
                                require("../../public/asset/images/check.png")
                                  .default
                              }
                              alt="checkImg"
                            />
                            {t("serviceInfo.farmList4")}
                          </li>
                          <li
                            className={`${styles.farmList} ${styles.primary_dark}`}
                          >
                            <img
                              className={styles.checkImg}
                              src={
                                require("../../public/asset/images/check.png")
                                  .default
                              }
                              alt="checkImg"
                            />
                            <strong>{t("serviceInfo.farmList5")}</strong>
                          </li>
                          <li
                            className={`${styles.farmList} ${styles.primary_dark}`}
                          >
                            <img
                              className={styles.checkImg}
                              src={
                                require("../../public/asset/images/check.png")
                                  .default
                              }
                              alt="checkImg"
                            />
                            <strong>{i18n.t("serviceInfo.farmList6")}</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default ServiceInfo;
