import React from "react";
import { Row, Col } from "react-bootstrap";
import AisLogo from "../../public/asset/images/ais_bottom_logo.webp";
import AisLogo2x from "../../public/asset/images/ais_bottom_logo@2x.webp";
import AisLogo3x from "../../public/asset/images/ais_bottom_logo@3x.webp";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const NavBottom = () => {
  const { t } = useTranslation("common");

  return (
    <div className="serviceWrapper">
      <Row className="bottomWrapper">
        <Row>
          <Col lg={5} md={4} sm={12}>
            <img
              src={AisLogo}
              srcSet={`${AisLogo2x} 2x, ${AisLogo3x} 3x`}
              alt={t("nav.home")}
            />
          </Col>
          <Col lg={7} md={8} className="menuWrapper">
            <Row>
              <Col lg={3} md={3} sm={12}>
                <div>
                  <p className="menuTitle">{t("nav.home")}</p>
                  {/* <Link smooth href={`/home#`}>
                    <a>{t("footer.aisAbout")}</a>
                  </Link>
                  <Link smooth href={`/${t.language}/home#aisVision`}>
                    <a>{t("footer.aisVision")}</a>
                  </Link>
                  <Link smooth href={`/${t.language}/home#aisHistory`}>
                    <a>{t("footer.aisHistory")}</a>
                  </Link>
                  <Link smooth href={`/${t.language}/home#aisNews`}>
                    <a>{t("footer.aisNews")}</a>
                  </Link>
                  <Link smooth href={`/${t.language}/home#aisLocation`}>
                    <a>{t("footer.aisLocation")}</a>
                  </Link> */}
                </div>
              </Col>
              <Col lg={3} md={3} sm={12}>
                <div>
                  <p className="menuTitle">{t("nav.service")}</p>
                  {/* <Link smooth href={`/${t.language}/service#`}>
                    <a>{t("nav.service")}</a>
                  </Link> */}
                </div>
              </Col>
              <Col lg={3} md={3} sm={12}>
                <div>
                  <p className="menuTitle">{t("nav.carrer")}</p>
                  {/* <Link smooth href={`/${t.language}/career#`}>
                    <a>{t("footer.aisAbout")}</a>
                  </Link>
                  <Link smooth href={`/${t.language}/career#aisCulture`}>
                    <a>{t("footer.culture")}</a>
                  </Link>
                  <Link smooth href={`/${t.language}/career#aisWelfare`}>
                    <a>{t("footer.welfare")}</a>
                  </Link> */}
                </div>
              </Col>
              <Col lg={3} md={3} sm={12}>
                <div>
                  <p className="menuTitle">{t("nav.support")}</p>
                  {/* <Link smooth href={`/${t.language}/support#`}>
                    <a>{t("nav.support")}</a>
                  </Link> */}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="hr" />
        <div className="logoText">
          <p className="aisText">{t("navBottom.ais")}</p>
          <p className="aisInfotext">
            {t("navBottom.busuiness")}
            <br />
            {t("navBottom.hosting")}
            <br />
            {t("navBottom.address")}
            <br />
          </p>
          <div className="aisTerms">
            {/* <Link smooth href="/terms/service#">
              <a className="aisTermsMenu">{t("navBottom.serviceTerms")}</a>
            </Link>
            <Link smooth href="/terms/info#">
              <a className="aisTermsMenu">{t("navBottom.privacyTerms")}</a>
            </Link> */}
          </div>
        </div>
      </Row>
    </div>
  );
};

export default NavBottom;
