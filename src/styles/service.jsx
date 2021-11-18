import styled, { css } from "styled-components";

export const JumboContainer = styled.section`
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

export const JumboTitle = styled.h3`
  font-weight: normal;
  line-height: 1.4em;

  ${(props) =>
    props.lng === "ko"
      ? css`
          @media (min-width: 2000px) {
            width: 35vw;
          }

          @media (min-width: 1280px) and (max-width: 1999px) {
            width: 45vw;
          }

          @media ${props.theme.laptop} {
            width: 60vw;
          }

          @media ${props.theme.tablet} {
            width: 70vw;
          }

          @media (min-width: 460px and max-width: 767px) {
            width: 70vw;
          }

          @media (max-width: 459px) {
            width: 80vw;
          }
        `
      : css`
          @media (min-width: 2000px) {
            width: 40vw;
          }

          @media (min-width: 1280px) and (max-width: 1999px) {
            width: 70vw;
          }

          @media ${props.theme.laptop} {
            width: 75vw;
          }

          @media ${props.theme.tablet} {
            width: 90vw;
          }

          @media (min-width: 460px and max-width: 767px) {
            width: 50vw;
          }

          @media (max-width: 459px) {
            width: 90vw;
          }
        `}
`;

export const JumboHighliteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 369px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const JumboHighliteTitle1 = styled.div`
  &:last-child {
    margin-top: 0.3em;
  }
`;

export const JumboHighliteTitle2 = styled.h2`
  ${(props) =>
    props.lng === "ko" &&
    css`
      letter-spacing: 1rem;
    `}
`;

export const JumboDonwloadButton = styled.div`
  background-color: ${(props) => props.theme.washTextColor};
  border-radius: 2em;
  display: flex;
  align-items: center;

  ${(props) =>
    props.lng === "en" &&
    css`
      @media ${props.theme.mobile} {
        padding: 0.3em;
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
          padding: 1em 2.5em !important;
        `}
`;

export const JumboDonwloadIcon = styled.img`
  width: 1.2em;
  height: 1em;
`;

export const JumboDonwloadTitle = styled.p`
  color: ${(props) => props.theme.highlightTextColor};
  font-weight: bold;
  margin-left: 0.667em;
  margin-top: 0;
  margin-bottom: 0;
`;

export const ServiceInfoContainer = styled.section`
  padding-top: 3.333em;
  margin: auto;
  /* width: 70%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ServiceInfoTitle = styled.h4`
  line-height: 1.29;
  font-weight: normal;
  letter-spacing: normal;
  color: ${(props) => props.theme.mainTextColor};

  b {
    font-weight: normal;
    color: ${(props) => props.theme.highlightTextColor};
  }
`;

export const ServiceInfosubTitle = styled.p`
  margin-top: 36px;
  line-height: 1.6;
  color: ${(props) => props.theme.subTextColor};
`;

export const ServiceInfoContentContainer = styled.section`
  width: 100%;
  margin-top: 3.25em;
  background-color: ${(props) => props.theme.defaultBackgroundColor};
`;

export const ServiceInfoContent = styled.ul`
  margin: auto;
  display: grid;
  justify-items: center;
  align-items: flex-start;
  padding: 3.25em 0;
  grid-auto-rows: 1fr;
  grid-row-gap: 1.5em;

  @media ${(props) => props.theme.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 75%;
  }

  @media ${(props) => props.theme.laptop} {
    grid-template-columns: 1fr 1fr;
    width: 80%;
  }

  @media ${(props) => props.theme.tablet} {
    grid-template-columns: 1fr 1fr;
    width: 85%;
  }

  @media ${(props) => props.theme.mobile} {
    grid-template-columns: 1fr;
    width: 60%;
  }
`;

export const ServiceInfoContentItem = styled.li`
  width: 95%;
  padding-bottom: 1em;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  text-align: center;
  background-color: ${(props) => props.theme.washTextColor};
  border: solid 0.5px ${(props) => props.theme.borderColor};
`;

export const ServiceInfoContentItemImg = styled.img`
  object-fit: contain;
  object-position: top;
`;

export const ServiceInfoContentItemTitle = styled.h4`
  margin: 0 0.8em;
  font-weight: normal;
  color: ${(props) => props.theme.mainTextColor};
  padding-top: 1em;
  padding-bottom: 0.729em;
  letter-spacing: -0.31px;
`;

export const ServiceInfoContentItemContent = styled.p`
  color: ${(props) => props.theme.subTextColor};
  letter-spacing: -0.23px;
  padding: 0 0.2em;
`;

export const ServiceInfoScreenContainer = styled.section`
  padding-top: 5em;
  padding-bottom: 0em;
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

export const ServiceInfoScreen = styled.div`
  display: flex;

  ${(props) =>
    props.column
      ? css`
          flex-direction: column;
          justify-content: center;
          align-items: center;
          @media ${(props) => props.theme.desktop} {
            width: 55%;
          }

          @media ${(props) => props.theme.laptop} {
            width: 80%;
          }

          @media ${(props) => props.theme.tablet} {
            width: 80%;
          }

          @media ${(props) => props.theme.mobile} {
            width: 80%;
          }
        `
      : css`
          justify-content: space-between;
          align-items: center;
          @media ${(props) => props.theme.desktop} {
            width: 60%;
          }

          @media ${(props) => props.theme.laptop} {
            width: 80%;
          }

          @media ${(props) => props.theme.tablet} {
            width: 80%;
          }

          @media ${(props) => props.theme.mobile} {
            width: 90%;
          }
        `}
`;

export const ServiceInfoScreenText = styled.div`
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

export const ServiceInfoScreenTitle = styled.h4``;

export const ServiceInfoScreensubTitle = styled.p`
  margin-top: 0.667em;

  span {
    background: linear-gradient(to top, #c9f227 50%, transparent 50%);
  }
`;

export const ServiceInfoScreenImg = styled.img`
  object-fit: contain;
  margin-top: 3.083em;

  ${(props) =>
    props.column
      ? css`
          width: 35%;
          height: auto;
        `
      : css`
          width: 45%;
          height: auto;
        `}
`;

export const ServiceInfoDiffContainer = styled.section`
  margin: 3.396em auto;
  display: grid;
  justify-items: center;
  align-items: flex-start;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.desktop} {
    width: 60%;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4.958em;
  }

  @media (max-width: 1279px) {
    width: 65%;
    grid-template-columns: 1fr;
    grid-row-gap: 3.875em;
  }
`;

export const ServiceInfoDiff = styled.div`
  width: 98%;
  height: 100%;
  border-top: solid 0.5px ${(props) => props.theme.borderColor};
  border-bottom: solid 0.5px ${(props) => props.theme.borderColor};
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.type === "Customized" &&
    css`
      color: ${props.theme.highlightTextColor};
      li {
        color: ${props.theme.highlightDarkTextColor};
      }
    `}
`;

export const ServiceInfoDiffsubTitle = styled.p`
  margin: 0.333em 0;
`;

export const ServiceInfoDiffLine = styled.div`
  width: 2.167em;
  height: 0.333em;
  border-radius: 8px;
  background-color: ${(props) => props.theme.highlightTextColor};
`;

export const ServiceInfoDiffTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.979em;
  padding-bottom: 1.333em;
`;

export const ServiceInfoDiffTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServiceInfoDiffTitleIcon = styled.img`
  width: 5em;
  height: 5em;
`;

export const ServiceInfoDiffContent = styled.li`
  display: flex;
  margin-top: 0.667em;
  align-items: center;
`;

export const ServiceInfoDiffContentImg = styled.img`
  width: 1.333em;
  height: 1.333em;
`;

export const ServiceInfoDiffContentText = styled.p`
  margin-left: 0.667em;

  span {
    background: linear-gradient(to top, #c9f227 50%, transparent 50%);
  }
`;
