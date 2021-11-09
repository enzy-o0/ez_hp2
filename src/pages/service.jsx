import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Service = () => {
  const { t, i18n } = useTranslation("common");
  const [isRendering, setisRendering] = useState(false);

  useEffect(() => {
    setisRendering(true);
  }, []);

  return <MainContatiner></MainContatiner>;
};

export default Service;

const MainContatiner = styled.main`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const SectionContainer = styled.section``;

const MainTitle = styled.h1`
  padding: 0.5em;
`;
