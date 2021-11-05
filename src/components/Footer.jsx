import React from "react";
import { Row, Col } from "react-bootstrap";
import AisLogo from "../../public/asset/images/ais_bottom_logo.webp";
import AisLogo2x from "../../public/asset/images/ais_bottom_logo@2x.webp";
import AisLogo3x from "../../public/asset/images/ais_bottom_logo@3x.webp";
import { useTranslation } from "next-i18next";

const NavBottom = () => {
  const { i18n } = useTranslation("common");

  return (
    <div className="serviceWrapper">
      <Row className="bottomWrapper">
        <Row>
          <Col lg={5} md={4} sm={12}>
            <img
              src={AisLogo}
              srcSet={`${AisLogo2x} 2x, ${AisLogo3x} 3x`}
              alt={i18n("nav.home")}
            />
          </Col>
          <Col lg={7} md={8} className="menuWrapper">
            <Row>
              <Col lg={3} md={3} sm={12}>
                <div>
                  <p className="menuTitle">{i18n("nav.home")}</p>
                  <Link smooth href={`/${i18n.language}/home#`}>
                    <a>{i18n("footer.aisAbout")}</a>
                  </Link>
                  <Link smooth href={`/${i18n.language}/home#aisVision`}>
                    <a>{i18n("footer.aisVision")}</a>
                  </Link>
                  <Link smooth href={`/${i18n.language}/home#aisHistory`}>
                    <a>{i18n("footer.aisHistory")}</a>
                  </Link>
                  <Link smooth href={`/${i18n.language}/home#aisNews`}>
                    <a>{i18n("footer.aisNews")}</a>
                  </Link>
                  <Link smooth href={`/${i18n.language}/home#aisLocation`}>
                    <a>{i18n("footer.aisLocation")}</a>
                  </Link>
                </div>
              </Col>
              <Col lg={3} md={3} sm={12}>
                <div>
                  <p className="menuTitle">{i18n("nav.service")}</p>
                  <Link smooth href={`/${i18n.language}/service#`}>
                    <a>{i18n("nav.service")}</a>
                  </Link>
                </div>
              </Col>
              <Col lg={3} md={3} sm={12}>
                <div>
                  <p className="menuTitle">{i18n("nav.recruit")}</p>
                  <Link smooth href={`/${i18n.language}/career#`}>
                    <a>{i18n("footer.aisAbout")}</a>
                  </Link>
                  <Link smooth href={`/${i18n.language}/career#aisCulture`}>
                    <a>{i18n("footer.culture")}</a>
                  </Link>
                  <Link smooth href={`/${i18n.language}/career#aisWelfare`}>
                    <a>{i18n("footer.welfare")}</a>
                  </Link>
                </div>
              </Col>
              <Col lg={3} md={3} sm={12}>
                <div>
                  <p className="menuTitle">{i18n("nav.inquiry")}</p>
                  <Link smooth href={`/${i18n.language}/support#`}>
                    <a>{i18n("nav.inquiry")}</a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="hr" />
        <div className="logoText">
          <p className="aisText">{i18n("navBottom.ais")}</p>
          <p className="aisInfotext">
            {i18n("navBottom.busuiness")}
            <br />
            {i18n("navBottom.hosting")}
            <br />
            {i18n("navBottom.address")}
            <br />
          </p>
          <div className="aisTerms">
            <Link smooth to="/terms/service#">
              <a className="aisTermsMenu">{i18n("navBottom.serviceTerms")}</a>
            </Link>
            <Link smooth to="/terms/info#">
              <a className="aisTermsMenu">{i18n("navBottom.privacyTerms")}</a>
            </Link>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default NavBottom;
