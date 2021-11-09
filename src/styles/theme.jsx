const screenSize = {
  mobile: "767px",
  tablet_min: "768px",
  tablet_max: "991px",
  desktop: "992px",
};

const color = {
  mainTextColor: "rgba(5, 7, 9, 0.9)",
  subTextColor: "rgba(5,7,9, 0.58)",
  washTextColor: "#fefefe",
  highlightDarkTextColor: "#002b00",
  highlightTextColor: "#005500",
  disableTextColor: "rgba(153, 153, 153, 0.4)",
  underLineColor: "#c9f227",
};

const theme = {
  ...color,
  mobile: `(max-width: ${screenSize.mobile})`,
  tablet: `(min-width: ${screenSize.tablet_min}) and (max-width: ${screenSize.tablet_max})`,
  desktop: `(min-width: ${screenSize.desktop})`,
};

export default theme;

// 사용 예시

// const MainWrap = styled.main`
//   width: 1200px;

//   @media ${(props) => props.theme.tablet} {
//     width: 100%;
//     margin: 0 auto;
//   }
// `;

// // 색상
// const MainText = styled.div`
//   color: ${(props) => props.theme.mainColor};
// `;
