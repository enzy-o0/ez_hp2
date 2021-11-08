import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import AisLogo from "../../public/asset/images/ais_top_logo.webp";
import AisLogo2x from "../../public/asset/images/ais_top_logo@2x.webp";
import AisLogo3x from "../../public/asset/images/ais_top_logo@3x.webp";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Header = (props) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [menuActive, setMenuActive] = useState(
    router.pathname ? router.pathname : "home"
  );
  const [expanded, setExpanded] = useState(null);

  const pathArray = router.pathname.split("/");

  useEffect(() => {
    setMenuActive(pathArray[2]);
  }, [pathArray]);

  const changeLanguage = (lng) => {
    // t.changeLanguage(lng, () => {
    //   const newUrl = `/${lng}/${menuActive}`;
    //   props.history.push(newUrl);
    // });
    setExpanded(false);
  };

  const menuClick = (menu) => {
    setMenuActive(menu);
    setExpanded(false);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        variant="light"
        expand="lg"
        className="navbarWrapper"
        expanded={expanded}
      >
        <Container className="navbarContainer">
          {/* <Navbar.Brand
            as={Link}
            to={`/${t.language}/home#`}
            onClick={() => setMenuActive("home")}
          >
            <img
              src={AisLogo}
              srcSet={`${AisLogo2x} 2x, ${AisLogo3x} 3x`}
              alt="AIS 로고"
              className="navbarLogo"
            />
          </Navbar.Brand> */}
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="responsive-navbar-nav" expanded={expanded}>
            <Nav
              defaultActiveKey={router.pathname}
              className="me-auto"
              onSelect={() => setExpanded(false)}
            >
              {/* <Nav.Link
                smooth
                as={Link}
                to={`/${t.language}/home#`}
                onClick={() => menuClick("home")}
                className={menuActive === "home" ? "active" : ""}
              >
                {t("nav.home")}
              </Nav.Link>
              <Nav.Link
                smooth
                as={Link}
                to={`/${t.language}/service#`}
                onClick={() => menuClick("service")}
                className={menuActive === "service" ? "active" : ""}
              >
                {t("nav.service")}
              </Nav.Link>
              <Nav.Link
                smooth
                as={Link}
                to={`/${t.language}/career#`}
                onClick={() => menuClick("career")}
                className={
                  menuActive === "career" || menuActive === "recruit"
                    ? "active"
                    : ""
                }
              >
                {t("nav.recruit")}
              </Nav.Link>
              <Nav.Link
                smooth
                as={Link}
                to={`/${t.language}/support#`}
                onClick={() => menuClick("support")}
                className={menuActive === "support" ? "active" : ""}
              >
                {t("nav.inquiry")}
              </Nav.Link> */}
            </Nav>
            <Nav
              className="translate"
              defaultActiveKey={pathArray[1] === "en" ? "en" : "ko"}
            >
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#fff",
                  alignItems: "center",
                }}
              >
                {/* <Nav.Link
                  className="languageActive"
                  onClick={() => changeLanguage("ko")}
                  eventKey="ko"
                >
                  KOR
                </Nav.Link>
                <div style={{ color: "rgba(0,0,0,.55)" }}> | </div>
                <Nav.Link
                  className="languageActive"
                  onClick={() => changeLanguage("en")}
                  eventKey="en"
                >
                  ENG
                </Nav.Link> */}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
