import styled from "styled-components";

export const SupportMainWrapper = styled.section`
  width: 100%;
`;

export const SupportMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  background: url(/asset/images/inquiry_main.png) no-repeat;
  background-position: 0% 0%;
  height: 100vh;
  background-size: cover;
  color: #ffffff;
`;

export const SupportTitle = styled.h2`
  width: 70%;
  font-weight: 600;
  margin-bottom: 1rem;

  @media ${(props) => props.theme.laptop} {
    width: 95%;
  }

  @media ${(props) => props.theme.tablet} {
    width: 95%;
  }

  @media ${(props) => props.theme.mobile} {
    width: 95%;
  }
`;

export const SupportSubTitle = styled.h3`
  width: 70%;
  font-weight: 600;

  @media ${(props) => props.theme.laptop} {
    width: 95%;
  }

  @media ${(props) => props.theme.tablet} {
    width: 95%;
  }

  @media ${(props) => props.theme.mobile} {
    width: 95%;
  }
`;

export const SupportContentWrapper = styled.div`
  width: 80%;
  padding: 4.75em 0;
  margin: auto;
`;

export const SupportContentTitle = styled.h3`
  width: 70%;
  text-align: center;
  margin: auto;
  margin-bottom: 2.5em;
  font-weight: 600;

  @media ${(props) => props.theme.laptop} {
    width: 95%;
  }

  @media ${(props) => props.theme.tablet} {
    width: 95%;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

export const SupportContentForm = styled.form`
  width: 70%;
  margin: auto;

  @media ${(props) => props.theme.laptop} {
    width: 95%;
  }

  @media ${(props) => props.theme.tablet} {
    width: 95%;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

export const SupportContentInput = styled.input`
  width: 100%;
  padding: 1em;
  margin-bottom: 1em;
  border: 1px solid rgba(5, 7, 9, 0.58);
  font-size: 1rem;
`;

export const SupportContentTextarea = styled.textarea`
  width: 100%;
  height: 15em;
  padding: 1em;
  font-size: 1rem;
`;

export const SupportContentSubmit = styled.button`
  display: block;
  width: 100%;
  margin: auto;
  margin-top: 1em;
  color: #ffffff;
  background-color: #005500;
  font-weight: 900;
  text-align: center;
  padding: 30px;
  border: none;
  outline: 0;
  font-size: 1rem;

  @media ${(props) => props.theme.laptop} {
    padding: 10px;
  }

  @media ${(props) => props.theme.tablet} {
    padding: 10px;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 10px;
  }
`;
