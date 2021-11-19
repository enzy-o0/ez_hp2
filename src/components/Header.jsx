import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import AisLogo from "../../public/asset/images/ais_top_logo.webp";
import AisLogo2x from "../../public/asset/images/ais_top_logo@2x.webp";
import AisLogo3x from "../../public/asset/images/ais_top_logo@3x.webp";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Headers from "../styles/Header";

// i18
import { useTranslation } from "next-i18next";
import { AboutFlex } from "../styles/companyInfo";

const Header = (props) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  // const [menuActive, setMenuActive] = useState(
  //   router.pathname ? router.pathname : "home"
  // );
  // const [expanded, setExpanded] = useState(null);

  // const pathArray = router.pathname.split("/");

  // useEffect(() => {
  //   setMenuActive(pathArray[2]);
  // }, [pathArray]);

  // const changeLanguage = (lng) => {
  //   // t.changeLanguage(lng, () => {
  //   //   const newUrl = `/${lng}/${menuActive}`;
  //   //   props.history.push(newUrl);
  //   // });
  //   setExpanded(false);
  // };

  // const menuClick = (menu) => {
  //   setMenuActive(menu);
  //   setExpanded(false);
  // };

  return (
    <>
      {typeof window !== "undefined" && (
        <header>
          <Headers.HeaderWrapper>
            <Headers.HeaderH1>에아이이에스</Headers.HeaderH1>
            <Headers.HeaderNav>
              <Headers.HeaderNavWrapper>
                <Headers.HeaderNavContentWrapper>
                  <Headers.HeaderNavMenuWrapper>
                    <Link href="/">
                      <Headers.HeaderNavLogoWrapper>
                        <Headers.HeaderStyledLink>
                          <img
                            src={"/asset/images/ais_top_logo.webp"}
                            alt="logo"
                          />
                        </Headers.HeaderStyledLink>
                      </Headers.HeaderNavLogoWrapper>
                    </Link>
                    <div>
                      <Headers.HeaderNavMenu>
                        <Headers.HeaderNavItem>
                          <Link href="/">
                            <Headers.HeaderStyledLink>
                              {t("nav.home")}
                            </Headers.HeaderStyledLink>
                          </Link>
                        </Headers.HeaderNavItem>
                        <Headers.HeaderNavItem>
                          <Link href="/support">
                            <Headers.HeaderStyledLink>
                              {t("nav.support")}
                            </Headers.HeaderStyledLink>
                          </Link>
                        </Headers.HeaderNavItem>
                        <Headers.HeaderNavItem>
                          <Link href="/carrer">
                            <Headers.HeaderStyledLink>
                              {t("nav.carrer")}
                            </Headers.HeaderStyledLink>
                          </Link>
                        </Headers.HeaderNavItem>
                        <Headers.HeaderNavItem>
                          <Link href="/support">
                            <Headers.HeaderStyledLink>
                              {t("nav.support")}
                            </Headers.HeaderStyledLink>
                          </Link>
                        </Headers.HeaderNavItem>
                      </Headers.HeaderNavMenu>
                    </div>
                  </Headers.HeaderNavMenuWrapper>
                  <div>
                    <Headers.HeaderNavMenu>
                      <Headers.HeaderNavItem>
                        <Link href="/" locale="ko">
                          <Headers.HeaderStyledLink>
                            KOR
                          </Headers.HeaderStyledLink>
                        </Link>
                      </Headers.HeaderNavItem>
                      <Headers.HeaderNavItem>
                        <span>|</span>
                      </Headers.HeaderNavItem>
                      <Headers.HeaderNavItem>
                        <Link href="/" locale="en">
                          <Headers.HeaderStyledLink>
                            ENG
                          </Headers.HeaderStyledLink>
                        </Link>
                      </Headers.HeaderNavItem>
                    </Headers.HeaderNavMenu>
                  </div>
                </Headers.HeaderNavContentWrapper>
              </Headers.HeaderNavWrapper>
            </Headers.HeaderNav>
          </Headers.HeaderWrapper>
        </header>
      )}
    </>
  );
};

export default Header;
