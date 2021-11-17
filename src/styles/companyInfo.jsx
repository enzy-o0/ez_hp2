import styled from "styled-components";

// 공통 스타일
export const AboutSection = styled.section`
  padding-top: 2.875em;
`;

export const AboutFlex = styled.div`
  display: flex;
`;

// jumbotron

export const JumbotronWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: url(/asset/images/jumbotron.png) no-repeat center center;
  height: 100vh;
  background-size: cover;

  @media ${(props) => props.theme.laptop} {
    padding: 0;
  }

  @media ${(props) => props.theme.tablet} {
    padding: 0;
  }
`;

export const JumbotronTitleWrapper = styled.div`
  margin-left: 3em;
`;

export const JumbotronTitleStrong = styled.strong`
  color: #050;
`;

//ais

export const AisWrapper = styled.div`
  width: 70%;
  margin: 3em auto;

  @media ${(props) => props.theme.laptop} {
    width: 80%;
    margin: auto;
  }

  @media ${(props) => props.theme.tablet} {
    width: 80%;
    padding: 3.875em 0 0px 0;
  }

  @media ${(props) => props.theme.mobile} {
    width: 90%;
    padding: 3.875em 0 0px 0;
  }
`;

export const AisTitle = styled.h3`
  text-align: center;
  width: 100%;
  margin: auto auto 3em;

  @media ${(props) => props.theme.laptop} {
    width: 100%;
    margin: 3em auto;
  }

  @media ${(props) => props.theme.tablet} {
    margin-bottom: 3.875em;
    width: 100%;
  }

  @media ${(props) => props.theme.mobile} {
    margin-bottom: 3.875em;
    width: 100%;
  }
`;

export const AisImgWrapper = styled.div`
  width: 50%;

  @media ${(props) => props.theme.laptop} {
    width: 100%;
  }

  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

export const AisImgItem = styled.img`
  width: 100%;
  height: 100%;
`;

export const AisContentWrapper = styled(AboutFlex)`
  width: 90%;
  margin: auto;
  margin-bottom: 3.125em;
  border: solid 0.5px #c4c4c4;
  border-radius: 27px;

  &:last-child {
    flex-direction: row-reverse;
    text-align: end;
    margin-bottom: 0em;
  }

  @media ${(props) => props.theme.laptop} {
    display: block;
    width: 100%;
    border: none;

    &:last-child {
      margin-bottom: 3.125em;
    }
  }

  @media ${(props) => props.theme.tablet} {
    display: block;
    width: 100%;
    border: none;

    &:last-child {
      margin-bottom: 3.125em;
    }
  }

  @media ${(props) => props.theme.mobile} {
    display: block;
    width: 100%;
    border: none;

    &:last-child {
      margin-bottom: 3.125em;
    }
  }
`;

export const AisContent = styled.div`
  width: 50%;
  margin: auto 0;
  padding: 1em;

  @media ${(props) => props.theme.laptop} {
    width: 100%;
    text-align: center;
    margin-top: 1.125em;
  }

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    text-align: center;
    margin-top: 1.125em;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    text-align: center;
    margin-top: 1.125em;
  }
`;

// vision

export const VisionWrapper = styled(AboutFlex)`
  position: relative;
  margin: 3rem auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  @media ${(props) => props.theme.laptop} {
    display: block;
    height: auto;
    margin: 3.875em auto 0;
  }

  @media ${(props) => props.theme.tablet} {
    display: block;
    height: auto;
    margin: 3.875em auto 0;
  }

  @media ${(props) => props.theme.mobile} {
    display: block;
    height: auto;
    margin: 3.875em auto;
  }
`;

export const VisionOuterWrapper = styled.div`
  background: url(/asset/images/visionbg.png) no-repeat center center;
  width: 100%;
  height: 20.156em;
  position: relative;
  background-size: cover;
`;

export const VisionInnerWrapper = styled.div`
  width: 70%;
  background: #ffffff;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
  text-align: center;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
`;

export const VisionTitle = styled.h3`
  margin: 2em auto;

  &::after {
    content: "";
    display: block;
    width: 10%;
    margin: auto;
    border-bottom: 2px solid #005500;
    margin-bottom: 2px;
  }

  @media ${(props) => props.theme.laptop} {
    margin: 2em auto;
  }

  @media ${(props) => props.theme.tablet} {
    margin: 2em auto;
  }
`;

export const VisionTitle2 = styled.h3`
  color: #005500;
  text-align: center;
  margin-top: 1.688em;
  margin-bottom: 1em;
  font-weight: 600;
  font-size: 2rem;

  @media ${(props) => props.theme.laptop} {
    width: 70%;
    margin: auto;
  }

  @media ${(props) => props.theme.tablet} {
    width: 80%;
    margin: auto;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    margin: auto;
  }
`;

export const VisionContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75em;

  @media ${(props) => props.theme.laptop} {
    width: 60%;
    display: block;
    margin: auto;
    margin-bottom: 1rem;
  }

  @media ${(props) => props.theme.tablet} {
    width: 60%;
    display: block;
    margin: auto;
    margin-bottom: 1rem;
  }

  @media ${(props) => props.theme.mobile} {
    width: 60%;
    display: block;
    margin: auto;
    margin-bottom: 1rem;
  }
`;

export const VisionContent = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #005500;
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
`;

//histroy

export const HistoryWrapper = styled.section`
  width: 100%;
  text-align: center;

  @media ${(props) => props.theme.laptop} {
    margin-top: 3.875em;
  }

  @media ${(props) => props.theme.tablet} {
    margin-top: 3.875em;
  }

  @media ${(props) => props.theme.mobile} {
    margin-top: 3.875em;
  }
`;

export const HistoryOuterWrapper = styled.div`
  background: url(/asset/images/historybg.png) no-repeat center center;
  background-size: cover;
`;

export const HistoryTitleWrapper = styled.h2`
  width: 70%;
  margin: 1em auto 2em;
  text-align: center;
  line-height: 1.5;

  @media ${(props) => props.theme.laptop} {
    width: 80%;
  }

  @media ${(props) => props.theme.tablet} {
    width: 80%;
  }

  @media ${(props) => props.theme.mobile} {
    width: 80%;

    &::before {
      width: 20px;
      height: 20px;
    }
  }
`;

export const HistoryInnerWrapper = styled.div`
  width: 80%;
  margin: auto;
  padding: 5% 10%;

  @media ${(props) => props.theme.laptop} {
    padding: 5%;
  }

  @media ${(props) => props.theme.tablet} {
    padding: 5%;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 5%;
  }
`;

export const HistoryItems = styled.div`
  position: relative;
  padding: 0 0 0 48px;
  text-align: left;

  &:first-child {
    &::before {
      top: 25px;
      height: calc(100%-10px);
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 13px;
    top: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(to bottom, #ffffff, #ffffff);
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;

    &::before {
      left: 8px;
    }
  }
`;

export const HistoryYear = styled.h3`
  position: relative;
  color: #fff;
  text-align: left;
  padding-left: 20px;

  &::before {
    content: "";
    position: absolute;
    left: -48px;
    top: 50%;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background: #fff;
    transform: translateY(-50%);
  }

  @media ${(props) => props.theme.mobile} {
    padding-left: 0px;

    &::before {
      width: 20px;
      height: 20px;
    }
  }
`;

export const HistoryContents = styled.ol`
  padding: 20px 0 74px;
  text-align: left;
  margin-bottom: 0;
  font-size: 1rem;
  padding-left: 20px;
  word-break: keep-all;

  @media ${(props) => props.theme.mobile} {
    padding: 0 0 50px;
  }
`;

export const HistoryContent = styled.li`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 0.5em;
`;

//news

export const NewsWrapper = styled.div``;

export const NewsTitle = styled.h3`
  text-align: center;
  margin: 2rem auto;
  padding-top: 3rem;
`;

export const NewsSlide = styled.h3`
  background: rgba(0, 85, 0, 0.03);
  padding: 2.625em 3em;

  @media ${(props) => props.theme.laptop} {
    padding: 2.625em;
  }

  @media ${(props) => props.theme.tablet} {
    padding: 2.625em;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 1em;
  }
`;

export const NewsItem = styled.div`
  background: #ffffff;
  height: 527px;
  border: solid 0.8px rgba(0, 0, 0, 0.5);
  margin: 0 0.469em;

  @media ${(props) => props.theme.laptop} {
    height: 527px;
  }

  @media ${(props) => props.theme.tablet} {
    height: 527px;
  }

  @media ${(props) => props.theme.mobile} {
    height: 263px;
  }
`;

export const NewsImgWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const NewsContentWrapper = styled.div`
  width: 100%;
  height: 30%;
  background: #ffffff;
  bottom: 0;
  padding: 0.938em 0.625em 0.875em;
`;
export const NewsContent = styled.p`
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

//location

export const LocationWrapper = styled.div`
  @media ${(props) => props.theme.laptop} {
    margin-bottom: 3.875rem;
  }

  @media ${(props) => props.theme.tablet} {
    margin-bottom: 3.875rem;
  }

  @media ${(props) => props.theme.mobile} {
    margin-bottom: 3rem;
  }
`;

export const AddressWrapper = styled.div`
  width: 50%;
  margin: auto;

  @media ${(props) => props.theme.laptop} {
    width: 100%;
    margin: auto;
    margin-top: 1.25em;
  }

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    margin: auto;
    margin-top: 1.25em;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    margin: auto;
    margin-top: 1.25em;
  }
`;

export const LocationTitle = styled.h3`
  text-align: center;
  margin: 2em auto 1em;
  padding-top: 3rem;
`;

export const LocationAddress = styled.address`
  text-align: center;
  word-break: keep-all;
  margin-bottom: 1rem;

  @media ${(props) => props.theme.laptop} {
    width: 80%;
    margin: auto;
  }

  @media ${(props) => props.theme.tablet} {
    width: 80%;
    margin: auto;
  }

  @media ${(props) => props.theme.mobile} {
    width: 80%;
    margin: auto;
  }
`;
