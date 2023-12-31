import React, { useState, useEffect, useRef } from "react";

// i18
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import * as Supports from "../styles/support";

import AOS from "aos";
import "aos/dist/aos.css";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

import { send } from "emailjs-com";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Support = () => {
  const [inputs, setInputs] = useState({
    title: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const { title, email, message } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;

    if (value.trim() === "") {
      setInputs({ ...inputs, [name]: "" });
    } else {
      setInputs({ ...inputs, [name]: value });
    }
  };

  const inputRef = useRef(null);

  const isEmail = (email) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return emailRegex.test(email);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (!isSending) {
      if (
        inputs.title.trim() !== "" &&
        inputs.email.trim() !== "" &&
        inputs.message.trim() !== ""
      ) {
        if (isEmail(inputs.email)) {
          setIsSending(true);
          send(
            "service_z4djt3c",
            "template_2zxf9yc",
            inputs,
            "user_VjxVse9v6fcv6mCXUA6rd"
          )
            .then((response) => {
              alert();
              setIsSending(false);
              setInputs({
                title: "",
                email: "",
                message: "",
              });
            })
            .catch((err) => {
              errorAlert();
              setIsSending(false);
            });
        } else {
          setInputs({ ...inputs, email: "" });
          inputRef.current.focus();
          emailAlert();
        }
      }
    }
  };

  const { t } = useTranslation("common");
  const [isRendering, setisRendering] = useState(false);

  useEffect(() => {
    setisRendering(true);

    AOS.init({
      duration: 2000,
    });
  }, []);

  const alert = () => {
    MySwal.fire({
      icon: "success",
      title: t("support.alertSuccess"),
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const errorAlert = () => {
    MySwal.fire({
      icon: "error",
      title: t("support.alertFail"),
      showConfirmButton: true,
    });
  };

  const emailAlert = () => {
    MySwal.fire({
      icon: "error",
      title: t("support.alertEmail"),
      showConfirmButton: true,
    });
  };

  return (
    <>
      {isRendering && (
        <>
          <main className="wrap">
            <Supports.SupportMainWrapper>
              <Supports.SupportMain>
                <Supports.SupportTitle
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  {t("support.supportMainTitle1")}
                </Supports.SupportTitle>
                <Supports.SupportSubTitle
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  {t("support.supportMainTitle2")}
                </Supports.SupportSubTitle>
              </Supports.SupportMain>
            </Supports.SupportMainWrapper>
            <Supports.SupportMainWrapper>
              <Supports.SupportContentWrapper>
                <Supports.SupportContentTitle>
                  {t("support.supportContent")}
                </Supports.SupportContentTitle>
                <Supports.SupportContentForm onSubmit={onSubmitForm}>
                  <Supports.SupportContentInput
                    name="title"
                    placeholder={t("support.supportPlaceholderTitle")}
                    value={title}
                    onChange={onChange}
                    spellCheck="false"
                    required
                    maxLength="30"
                  />
                  <Supports.SupportContentInput
                    name="email"
                    placeholder={t("support.supportPlaceholderEmail")}
                    value={email}
                    ref={inputRef}
                    required
                    onChange={onChange}
                    spellCheck="false"
                  />
                  <Supports.SupportContentTextarea
                    name="message"
                    placeholder={t("support.supportPlaceholderMessage")}
                    value={message}
                    onChange={onChange}
                    required
                    spellCheck="false"
                  />
                  <Supports.SupportContentSubmit type="submit">
                    {isSending
                      ? t("support.supportSubmitting")
                      : t("support.supportSubmit")}
                  </Supports.SupportContentSubmit>
                </Supports.SupportContentForm>
              </Supports.SupportContentWrapper>
            </Supports.SupportMainWrapper>
          </main>
        </>
      )}
    </>
  );
};

export default Support;
