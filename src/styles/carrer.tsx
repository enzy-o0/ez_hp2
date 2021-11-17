import styled from "styled-components";

export const CarrerMainImageSectionWrapper = styled.section`
  width: 100%;
`;

export const CarrerMainImage = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background-image: url(/asset/images/carrer_main_image_tablet.png);
  background-position: 45% 0;
  background-size: cover;
`;

export const CarrerMainImageOpacity = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: rgb(0, 0, 0);
`;

export const CarrerMainTitle = styled.h2`
  width: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  font-weight: bold;
  line-height: 89px;
  color: rgb(255, 255, 255);
`;

export const CarrerMainSubTitle1 = styled.h3`
  width: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  color: rgb(255, 255, 255);
  text-align: center;
  white-space: pre-line;
`;

export const CarrerMainImageTopImageWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export const CarrerMainImageTopImage = styled.img`
  width: 36px;
  height: auto;
`;

export const TopImage = styled.div`
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background-position: 45% 0%;
  background-size: cover;

  @media ${(props) => props.theme.laptop} {
    background-image: url(/asset/images/carrer_main_image_tablet.png);
    background-position: 0% 50%;
  }

  @media ${(props) => props.theme.tablet} {
    background-image: url(/asset/images/carrer_main_image_tablet.png);
    background-position: 0% 50%;
  }

  @media ${(props) => props.theme.mobile} {
    background-image: url(/asset/images/carrer_main_image_phone.png);
    background-position: 45% 45%;
  }
`;

export const InitText = styled.h2`
  width: 50%;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${(props) => props.theme.laptop} {
    width: 60%;
  }

  @media ${(props) => props.theme.tablet} {
    width: 60%;
  }

  @media ${(props) => props.theme.mobile} {
    width: 60%;
  }
`;

export const ScrollText = styled.h3`
  font-weight: 500;
`;

export const TopTextWapper = styled.div`
  z-index: 100;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CarrerContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  &:nth-child(2) {
    flex-direction: row-reverse;
    text-align: right;
  }

  &:nth-child(3) {
    margin-bottom: 5rem;
  }

  @media ${(props) => props.theme.laptop} {
    display: block;
    text-align: center;

    &:nth-child(2) {
      text-align: center;
    }
  }

  @media ${(props) => props.theme.tablet} {
    display: block;
    text-align: center;

    &:nth-child(2) {
      text-align: center;
    }
  }

  @media ${(props) => props.theme.mobile} {
    display: block;
    text-align: center;

    &:nth-child(2) {
      text-align: center;
    }
  }
`;

export const CarrerSectionImageWrapper = styled.div`
  margin-right: 30px;
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

export const CarrerSectionImage = styled.img`
  width: 100%;
`;

export const CarrerContentWrapper = styled.div`
  width: 50%;

  &:nth-child(2) {
    margin-right: 30px;
  }

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

export const CarrerTable = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 3rem;
  margin-bottom: 5em;

  @media ${(props) => props.theme.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CarrerTableContentWrapper = styled.div`
  padding: 1rem;
  border-right: 1px solid rgba(5, 7, 9, 0.58);
  border-bottom: 1px solid rgba(5, 7, 9, 0.58);

  &:nth-child(7),
  &:nth-child(8),
  &:nth-child(9) {
    border-bottom: none;
  }

  &:nth-child(3),
  &:nth-child(6),
  &:nth-child(9) {
    border-right: none;
  }

  @media ${(props) => props.theme.laptop} {
    border-bottom: 1px solid rgba(5, 7, 9, 0.58);

    &:nth-child(7),
    &:nth-child(8) {
      border-bottom: 1px solid rgba(5, 7, 9, 0.58);
    }

    &:nth-child(odd) {
      border-right: 1px solid rgba(5, 7, 9, 0.58);
    }

    &:nth-child(even) {
      border-right: none;
    }
  }

  @media ${(props) => props.theme.tablet} {
    border-bottom: 1px solid rgba(5, 7, 9, 0.58);

    &:nth-child(7),
    &:nth-child(8) {
      border-bottom: 1px solid rgba(5, 7, 9, 0.58);
    }

    &:nth-child(odd) {
      border-right: 1px solid rgba(5, 7, 9, 0.58);
    }

    &:nth-child(even) {
      border-right: none;
    }
  }

  @media ${(props) => props.theme.mobile} {
    border-bottom: none;
    border-right: none;
    margin-bottom: 1rem;
  }
`;

export const CarrerTableTitle = styled.p``;

export const CarrerTableImgWrapper = styled.div`
  width: 50%;
  float: right;
`;

export const CarrerTableImg = styled.img`
  width: 100%;
`;

export const CarrerSectionWrapper = styled.section`
  width: 60%;
  margin: 0 auto;

  @media ${(props) => props.theme.laptop} {
    width: 80%;
  }

  @media ${(props) => props.theme.tablet} {
    width: 80%;
  }

  @media ${(props) => props.theme.mobile} {
    width: 80%;
  }
`;

export const CarrerSectionColTitle = styled.h3`
  color: #00a52a;
  font-weight: 500;
  margin-bottom: 16px;
  word-break: keep-all;

  @media ${(props) => props.theme.laptop} {
    margin-top: 1rem;
  }

  @media ${(props) => props.theme.tablet} {
    margin-top: 1rem;
  }

  @media ${(props) => props.theme.mobile} {
    margin-top: 1rem;
  }
`;

export const CarrerSectionColContent = styled.p``;

export const CarrerMoreTitle = styled.h3`
  padding-top: 5rem;
  color: #000;
  font-weight: 500;
`;

export const CarrerButtonWrapper = styled.div`
  text-align: center;
  display: flex;
  padding-bottom: 3rem;
  z-index: 101;
`;

export const CarrerButton = styled.button`
  display: flex;
  justify-content: center;
  width: 50%;
  border: 1px solid #000;
  padding: 1rem;
  margin: 0 auto;
  background-color: #005500;
  z-index: 101;
  color: #fff;
  font-weight: bold;

  @media ${(props) => props.theme.laptop} {
    width: 80%;
  }

  @media ${(props) => props.theme.tablet} {
    width: 80%;
  }

  @media ${(props) => props.theme.mobile} {
    width: 90%;
  }
`;
