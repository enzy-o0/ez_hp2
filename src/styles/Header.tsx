import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
`;

export const HeaderH1 = styled.h1`
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  position: absolute;
`;

export const HeaderNav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 50;
  left: 0;
  background-color: #fff;
`;

export const HeaderNavWrapper = styled.div`
  width: 90%;
  margin: auto;
`;

export const HeaderNavContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderNavMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderNavLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const HeaderStyledLink = styled.a`
  padding: 1rem;
`;

export const HeaderNavMenu = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const HeaderNavItem = styled.li`
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0 8px;
  cursor: pointer;

  &:hover {
    color: #005500;
  }
`;

export const HeaderLocaleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
