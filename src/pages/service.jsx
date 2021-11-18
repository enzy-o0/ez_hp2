import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import * as Style from "../styles/service";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const Service = () => {
  const { t, i18n } = useTranslation("common");
  const [isRendering, setisRendering] = useState(false);

  const DiffData = Style.setData(t);
  useEffect(() => {
    setisRendering(true);
  }, []);

  return (
    <main>
      <Style.JumboContainer>
        <Style.JumboTitle lng={i18n.language}>
          <Style.JumboHighliteTitle1>
            {t("service.headerTitleFirst")}
          </Style.JumboHighliteTitle1>
          <Style.JumboHighliteTitle1>
            {t("service.headerTitleLast")}
          </Style.JumboHighliteTitle1>
          <Style.JumboHighliteContainer>
            <Style.JumboHighliteTitle2 lng={i18n.language}>
              <strong>{t("service.headerTitleSub")}</strong>
            </Style.JumboHighliteTitle2>
            <Style.JumboDonwloadButton lng={i18n.language} jumbo={true}>
              <Style.JumboDonwloadIcon
                src={"/asset/images/wellgrowerIcon.png"}
                alt="잘키움 로고"
              />
              <Style.JumboDonwloadTitle>
                {t("service.appDownload")}
              </Style.JumboDonwloadTitle>
            </Style.JumboDonwloadButton>
          </Style.JumboHighliteContainer>
        </Style.JumboTitle>
      </Style.JumboContainer>
      <Style.ServiceInfoContainer>
        <Style.ServiceInfoTitle highlight={true}>
          <b>{t("service.introTitleStrong1")}</b>
          {t("service.introTitleSub1")} <b>{t("service.introTitleStrong2")}</b>
          {t("service.introTitleSub2")} <br />
          {t("service.introTitleSub3")}
        </Style.ServiceInfoTitle>
        <Style.ServiceInfosubTitle>
          {t("service.introContent1")}
          <br />
          {t("service.introContent2")}
        </Style.ServiceInfosubTitle>
      </Style.ServiceInfoContainer>
      <Style.ServiceInfoContentContainer>
        <Style.ServiceInfoContent>
          {[1, 2, 3, 4].map((e, idx) => {
            return (
              <Style.ServiceInfoContentItem>
                <Style.ServiceInfoContentItemImg
                  src={`/asset/images/service_grid_${e}.png`}
                  srcSet={`/asset/images/service_grid_${e}@2x.png 2x, /asset/images/service_grid_${e}@3x.png 3x`}
                  alt={t(`service.imgTitle${e}`)}
                />
                <Style.ServiceInfoContentItemTitle>
                  {t(`service.imgTitle${e}`)}
                </Style.ServiceInfoContentItemTitle>
                <Style.ServiceInfoContentItemContent>
                  {t(`service.imgContent${e}`)}
                </Style.ServiceInfoContentItemContent>
              </Style.ServiceInfoContentItem>
            );
          })}
        </Style.ServiceInfoContent>
        <Style.ServiceInfoScreenContainer>
          <Style.ServiceInfoScreen>
            <Style.ServiceInfoScreenText>
              <Style.ServiceInfoScreenTitle>
                {t("service.containTitle1")}
              </Style.ServiceInfoScreenTitle>
              <Style.ServiceInfoScreensubTitle>
                {t("service.containContent1")}{" "}
                <span> {t("service.containContentStrong1")}</span>
                {t("service.containContent2")}
              </Style.ServiceInfoScreensubTitle>
            </Style.ServiceInfoScreenText>
            <Style.ServiceInfoScreenImg
              src={"/asset/images/wellgrower1.svg"}
              alt={"잘키움 상세이미지"}
            ></Style.ServiceInfoScreenImg>
          </Style.ServiceInfoScreen>
          <Style.ServiceInfoScreen>
            <Style.ServiceInfoScreenImg
              src={"/asset/images/wellgrower2.svg"}
              alt={"잘키움 상세이미지"}
            ></Style.ServiceInfoScreenImg>
            <Style.ServiceInfoScreenText>
              <Style.ServiceInfoScreenTitle>
                {t("service.containTitle2")}
              </Style.ServiceInfoScreenTitle>
              <Style.ServiceInfoScreensubTitle>
                {t("service.containContent3")}{" "}
                <span> {t("service.containContentStrong2")}</span>
                {t("service.containContent4")}
                <span>
                  {i18n.language === "en" && t("service.containContentStrong3")}
                </span>
              </Style.ServiceInfoScreensubTitle>
            </Style.ServiceInfoScreenText>
          </Style.ServiceInfoScreen>
          <Style.ServiceInfoScreen column={true}>
            <Style.ServiceInfoScreenText column={true}>
              <Style.ServiceInfoScreenTitle>
                {t("service.simpleTitle1")}
                <br />
                {t("service.simpleTitle2")}
              </Style.ServiceInfoScreenTitle>
              <Style.ServiceInfoScreensubTitle>
                {i18n.language === "ko" ? (
                  <>
                    {t("service.simpleContent1")}{" "}
                    <span> {t("service.simpleContentStrong")}</span> <br />
                    {t("service.simpleContent2")} {t("service.simpleContent3")}
                  </>
                ) : (
                  <>
                    {t("service.simpleContent1")}
                    {t("service.simpleContent2")}{" "}
                    <span> {t("service.simpleContentStrong")}</span> <br />
                    {t("service.simpleContent3")}
                  </>
                )}
              </Style.ServiceInfoScreensubTitle>
            </Style.ServiceInfoScreenText>
            <Style.ServiceInfoScreenImg
              column={true}
              src={"/asset/images/wellgrower3.gif"}
              alt={"wellgrowerImage"}
            ></Style.ServiceInfoScreenImg>
          </Style.ServiceInfoScreen>
        </Style.ServiceInfoScreenContainer>
        <Style.ServiceInfoScreenContainer textCenter={true}>
          <Style.ServiceInfoTitle highlight={true}>
            {i18n.language === "ko" ? (
              <>
                {t("service.farmTitle1")}
                <br />
                <b>{t("service.farmTitleStrong")}</b>
                {t("service.farmTitle2")}
              </>
            ) : (
              <>
                {t("service.farmTitle1")}
                <b>{t("service.farmTitleStrong")}</b>
                {t("service.farmTitle2")}
                <br />
                {t("service.farmTitle3")}
              </>
            )}
          </Style.ServiceInfoTitle>
          <Style.JumboDonwloadButton lng={i18n.language}>
            <Style.JumboDonwloadIcon
              src={"/asset/images/wellgrowerIcon.png"}
              alt="잘키움 로고"
            />
            <Style.JumboDonwloadTitle>
              {t("service.appDownload")}
            </Style.JumboDonwloadTitle>
          </Style.JumboDonwloadButton>
        </Style.ServiceInfoScreenContainer>
      </Style.ServiceInfoContentContainer>
      <Style.ServiceInfoDiffContainer>
        {DiffData.map((e, idx) => {
          return (
            <Style.ServiceInfoDiff type={e.icon} key={idx}>
              <Style.ServiceInfoDiffTitleContainer>
                <Style.ServiceInfoDiffTextContainer>
                  <h4>{e.title}</h4>
                  <Style.ServiceInfoDiffsubTitle>
                    {e.subTitle}
                  </Style.ServiceInfoDiffsubTitle>
                  <Style.ServiceInfoDiffLine></Style.ServiceInfoDiffLine>
                </Style.ServiceInfoDiffTextContainer>
                <Style.ServiceInfoDiffTitleIcon
                  src={`/asset/images/farm${e.icon}.png`}
                  alt="아이콘"
                ></Style.ServiceInfoDiffTitleIcon>
              </Style.ServiceInfoDiffTitleContainer>
              <ul>
                {e.list.map((e, idx) => {
                  return (
                    <Style.ServiceInfoDiffContent key={idx}>
                      <Style.ServiceInfoDiffContentImg
                        src={`/asset/images/${e.check}.png`}
                        alt="아이콘"
                      />
                      <Style.ServiceInfoDiffContentText>
                        {i18n.language === "en" && e.listTitleEng
                          ? e.listTitleEng
                          : e.listTitle}
                      </Style.ServiceInfoDiffContentText>
                    </Style.ServiceInfoDiffContent>
                  );
                })}
              </ul>
            </Style.ServiceInfoDiff>
          );
        })}
      </Style.ServiceInfoDiffContainer>
    </main>
  );
};

export default Service;
