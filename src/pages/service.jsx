import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const Service = () => {
  const { t, i18n } = useTranslation("common");
  const [isRendering, setisRendering] = useState(false);

  useEffect(() => {
    setisRendering(true);
  }, []);

  return (
    <main>
      <JumboContainer>
        <JumboTitle lng={i18n.language}>
          <JumboHighliteTitle1>
            {t("service.headerTitleFirst")}
          </JumboHighliteTitle1>
          <JumboHighliteTitle1>
            {t("service.headerTitleLast")}
          </JumboHighliteTitle1>
          <JumboHighliteContainer>
            <JumboHighliteTitle2 lng={i18n.language}>
              <strong>{t("service.headerTitleSub")}</strong>
            </JumboHighliteTitle2>
            <JumboDonwloadButton lng={i18n.language} jumbo={true}>
              <JumboDonwloadIcon
                src={"/asset/images/wellgrowerIcon.png"}
                alt="잘키움 로고"
              />
              <JumboDonwloadTitle>
                {t("service.appDownload")}
              </JumboDonwloadTitle>
            </JumboDonwloadButton>
          </JumboHighliteContainer>
        </JumboTitle>
      </JumboContainer>
      <ServiceInfoContainer>
        <ServiceInfoTitle highlight={true}>
          <b>{t("service.introTitleStrong1")}</b>
          {t("service.introTitleSub1")} <b>{t("service.introTitleStrong2")}</b>
          {t("service.introTitleSub2")} <br />
          {t("service.introTitleSub3")}
        </ServiceInfoTitle>
        <ServiceInfosubTitle>{t("service.introContent")}</ServiceInfosubTitle>
      </ServiceInfoContainer>
      <ServiceInfoContentContainer>
        <ServiceInfoContent>
          <ServiceInfoContentItem>
            <ServiceInfoContentItemImg
              src={"/asset/images/service_grid_1.png"}
              srcSet={`/asset/images/service_grid_1@2x.png 2x, /asset/images/service_grid_1@3x.png 3x`}
              alt={t("service.imgTitle1")}
            />
            <ServiceInfoContentItemTitle>
              {t("service.imgTitle1")}
            </ServiceInfoContentItemTitle>
            <ServiceInfoContentItemContent>
              {t("service.imgContent1")}
            </ServiceInfoContentItemContent>
          </ServiceInfoContentItem>
          <ServiceInfoContentItem>
            <ServiceInfoContentItemImg
              src={"/asset/images/service_grid_2.png"}
              srcSet={`/asset/images/service_grid_2@2x.png 2x, /asset/images/service_grid_2@3x.png 3x`}
              alt={t("service.imgTitle2")}
            />
            <ServiceInfoContentItemTitle>
              {t("service.imgTitle2")}
            </ServiceInfoContentItemTitle>
            <ServiceInfoContentItemContent>
              {t("service.imgContent2")}
            </ServiceInfoContentItemContent>
          </ServiceInfoContentItem>
          <ServiceInfoContentItem>
            <ServiceInfoContentItemImg
              src={"/asset/images/service_grid_3.png"}
              srcSet={`/asset/images/service_grid_3@2x.png 2x, /asset/images/service_grid_3@3x.png 3x`}
              alt={t("service.imgTitle3")}
            />
            <ServiceInfoContentItemTitle>
              {t("service.imgTitle3")}
            </ServiceInfoContentItemTitle>
            <ServiceInfoContentItemContent>
              {t("service.imgContent3")}
            </ServiceInfoContentItemContent>
          </ServiceInfoContentItem>
          <ServiceInfoContentItem>
            <ServiceInfoContentItemImg
              src={"/asset/images/service_grid_4.png"}
              srcSet={`/asset/images/service_grid_4@2x.png 2x, /asset/images/service_grid_4@3x.png 3x`}
              alt={t("service.imgTitle4")}
            />
            <ServiceInfoContentItemTitle>
              {t("service.imgTitle4")}
            </ServiceInfoContentItemTitle>
            <ServiceInfoContentItemContent>
              {t("service.imgContent4")}
            </ServiceInfoContentItemContent>
          </ServiceInfoContentItem>
        </ServiceInfoContent>
        <ServiceInfoScreenContainer>
          <ServiceInfoScreen>
            <ServiceInfoScreenText>
              <ServiceInfoScreenTitle>
                {t("service.containTitle1")}
              </ServiceInfoScreenTitle>
              <ServiceInfoScreensubTitle>
                {t("service.containContent1")}{" "}
                <TextHighlighter>
                  {" "}
                  {t("service.containContentStrong1")}
                </TextHighlighter>
                {t("service.containContent2")}
              </ServiceInfoScreensubTitle>
            </ServiceInfoScreenText>
            <ServiceInfoScreenImg
              src={"/asset/images/wellgrower1.svg"}
              alt={"wellgrowerImage"}
            ></ServiceInfoScreenImg>
          </ServiceInfoScreen>
          <ServiceInfoScreen>
            <ServiceInfoScreenImg
              src={"/asset/images/wellgrower2.svg"}
              alt={"wellgrowerImage"}
            ></ServiceInfoScreenImg>
            <ServiceInfoScreenText>
              <ServiceInfoScreenTitle>
                {t("service.containTitle2")}
              </ServiceInfoScreenTitle>
              <ServiceInfoScreensubTitle>
                {t("service.containContent3")}{" "}
                <TextHighlighter>
                  {" "}
                  {t("service.containContentStrong2")}
                </TextHighlighter>
                {t("service.containContent4")}
              </ServiceInfoScreensubTitle>
            </ServiceInfoScreenText>
          </ServiceInfoScreen>
          <ServiceInfoScreen column={true}>
            <ServiceInfoScreenText column={true}>
              <ServiceInfoScreenTitle>
                {t("service.simpleTitle1")}
                <br />
                {t("service.simpleTitle2")}
              </ServiceInfoScreenTitle>
              <ServiceInfoScreensubTitle>
                {t("service.simpleContent1")}{" "}
                <TextHighlighter>
                  {" "}
                  {t("service.simpleContentStrong")}
                </TextHighlighter>{" "}
                {t("service.simpleContent2")}
                <br />
                {t("service.simpleContent3")}
              </ServiceInfoScreensubTitle>
            </ServiceInfoScreenText>
            <ServiceInfoScreenImg
              column={true}
              src={"/asset/images/wellgrower3.gif"}
              alt={"wellgrowerImage"}
            ></ServiceInfoScreenImg>
          </ServiceInfoScreen>
        </ServiceInfoScreenContainer>
        <ServiceInfoScreenContainer textCenter={true}>
          <ServiceInfoTitle highlight={true}>
            {t("service.farmTitle1")} <br />
            <b>{t("service.farmTitleStrong")}</b>
            {t("service.farmTitle2")}
          </ServiceInfoTitle>
          <JumboDonwloadButton lng={i18n.language}>
            <JumboDonwloadIcon
              src={"/asset/images/wellgrowerIcon.png"}
              alt="잘키움 로고"
            />
            <JumboDonwloadTitle>{t("service.appDownload")}</JumboDonwloadTitle>
          </JumboDonwloadButton>
        </ServiceInfoScreenContainer>
      </ServiceInfoContentContainer>
    </main>
  );
};

export default Service;

const JumboContainer = styled.section`
  color: ${(props) => props.theme.washTextColor};
  background-image: url("/asset/images/servicebg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  width: 100%;
  height: 28.75em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const JumboTitle = styled.h3`
  font-weight: normal;
  line-height: 1.4em;

  ${(props) =>
    props.lng === "ko"
      ? css`
          @media ${props.theme.desktop} {
            width: 45vw;
          }

          @media ${props.theme.laptop} {
            width: 60vw;
          }

          @media ${props.theme.tablet} {
            width: 70vw;
          }

          @media ${props.theme.mobile} {
            width: 80vw;
          }
        `
      : css`
          @media ${props.theme.desktop} {
            width: 80vw;
          }

          @media ${props.theme.laptop} {
            width: 90vw;
          }

          @media ${props.theme.tablet} {
            width: 90vw;
          }

          @media ${props.theme.mobile} {
            width: 95vw;
          }
        `}
`;

const JumboHighliteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const JumboHighliteTitle1 = styled.div`
  &:last-child {
    margin-top: 0.3em;
  }
`;

const JumboHighliteTitle2 = styled.h2`
  ${(props) =>
    props.lng === "ko" &&
    css`
      letter-spacing: 1rem;
    `}
`;

const JumboDonwloadButton = styled.div`
  background-color: ${(props) => props.theme.washTextColor};
  border-radius: 2em;
  display: flex;
  align-items: center;

  ${(props) =>
    props.lng === "en" &&
    css`
      @media ${props.theme.mobile} {
        padding: 0.05em;
      }
    `}

  ${(props) =>
    props.jumbo
      ? css`
          padding: 0.3em 0.8em;

          @media ${props.theme.desktop} {
            padding: 0.2em 1em;
          }
        `
      : css`
          box-shadow: 0 0 32px 0 rgba(255, 255, 255, 0.3),
            0 17px 30px 0 rgba(0, 0, 0, 0.1),
            inset 0 0 18px 0 rgba(0, 0, 0, 0.1);
          border: none;
          margin-top: 1em;
          padding: 1em 2.5em;
        `}
`;

const JumboDonwloadIcon = styled.img`
  width: 1.2em;
  height: 1em;
`;

const JumboDonwloadTitle = styled.p`
  color: ${(props) => props.theme.highlightTextColor};
  font-weight: bold;
  margin-left: 0.667em;
  margin-top: 0;
  margin-bottom: 0;
`;

const ServiceInfoContainer = styled.section`
  padding-top: 3.333em;
  margin: auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ServiceInfoTitle = styled.h4`
  line-height: 1.29;
  font-weight: normal;
  letter-spacing: normal;
  color: ${(props) => props.theme.mainTextColor};

  b {
    font-weight: normal;
    color: ${(props) => props.theme.highlightTextColor};
  }
`;

const ServiceInfosubTitle = styled.p`
  width: 70%;
  margin-top: 36px;
  line-height: 1.6;
  color: ${(props) => props.theme.subTextColor};
`;

const ServiceInfoContentContainer = styled.section`
  width: 100%;
  margin-top: 3.25em;
  background-color: ${(props) => props.theme.defaultBackgroundColor};
`;

const ServiceInfoContent = styled.div`
  width: 70%;
  margin: auto;
  display: grid;
  justify-items: center;
  align-items: flex-start;
  padding: 3.25em 0;
  grid-auto-rows: 1fr;

  @media ${(props) => props.theme.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media ${(props) => props.theme.laptop} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${(props) => props.theme.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${(props) => props.theme.mobile} {
    grid-template-columns: 1fr;
  }
`;

const ServiceInfoContentItem = styled.div`
  width: 95%;
  padding-bottom: 1em;
  overflow: hidden;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  text-align: center;
  background-color: ${(props) => props.theme.washTextColor};
  border: solid 0.5px ${(props) => props.theme.borderColor};
`;

const ServiceInfoContentItemImg = styled.img`
  width: 100%;
  object-fit: contain;
  object-position: top;
`;
const ServiceInfoContentItemTitle = styled.h4`
  margin: 0 0.8em;
  font-weight: normal;
  color: ${(props) => props.theme.mainTextColor};
  padding-top: 1em;
  padding-bottom: 0.729em;
  letter-spacing: -0.31px;
`;
const ServiceInfoContentItemContent = styled.p`
  color: ${(props) => props.theme.subTextColor};
  letter-spacing: -0.23px;
  padding: 0 0.2em;
`;

const ServiceInfoScreenContainer = styled.section`
  padding-top: 1em;
  padding-bottom: 10.292em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.washTextColor};

  ${(props) =>
    props.textCenter &&
    css`
      text-align: center;
    `}
`;

const ServiceInfoScreen = styled.div`
  width: 60%;
  display: flex;

  ${(props) =>
    props.column
      ? css`
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `
      : css`
          justify-content: space-between;
          align-items: center;
        `}
`;

const ServiceInfoScreenText = styled.div`
  ${(props) =>
    props.column
      ? css`
          width: 100%;
          margin-top: 3.667em;
        `
      : css`
          width: 45%;
        `}
  display: flex;
  flex-direction: column;
`;

const ServiceInfoScreenTitle = styled.h4``;

const ServiceInfoScreensubTitle = styled.p``;

const ServiceInfoScreenImg = styled.img`
  object-fit: contain;
  margin-top: 0.667em;

  ${(props) =>
    props.column
      ? css`
          width: 12.583em;
          height: 24.167em;
        `
      : css`
          width: 45%;
          height: auto;
        `}
`;

const TextHighlighter = styled.span`
  background: linear-gradient(to top, #c9f227 50%, transparent 50%);
`;
