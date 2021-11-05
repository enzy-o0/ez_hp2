import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import { send } from "emailjs-com";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

import styles from "../styles/inquiry.module.css";

import i18n from "./asset/lang/i18n";
import { withTranslation, useTranslation } from "react-i18next";

import ReactHelmet from "../components/common/ReactHelmet";

import inquiryMainImg from "/asset/images/inquiry_main.png";

import AOS from "aos";
import "aos/dist/aos.css";

// const MySwal = withReactContent(Swal);

const alert = () => {
  // MySwal.fire({
  //   icon: "success",
  //   title: i18n.t("inquiry.alertSuccess"),
  //   showConfirmButton: false,
  //   timer: 1500,
  // });
};

const errorAlert = () => {
  // MySwal.fire({
  //   icon: "error",
  //   title: i18n.t("inquiry.alertFail"),
  //   showConfirmButton: true,
  // });
};

const emailAlert = () => {
  // MySwal.fire({
  //   icon: "error",
  //   title: i18n.t("inquiry.alertEmail"),
  //   showConfirmButton: true,
  // });
};

const Inquiry = () => {
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

  const { i18n } = useTranslation();
  const [isRendering, setisRendering] = useState(false);

  useEffect(() => {
    setisRendering(true);

    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <ReactHelmet
        keywords={
          i18n.language === "ko"
            ? "에이아이에스, 잘키움, 문의"
            : "AIS Korea, 잘키움, Support"
        }
        description={
          i18n.language === "ko"
            ? "에이아이에스에 문의할 것이 생기셨나요? 문의사항을 남겨주세요"
            : "If you have any questions, please send AIS Korea."
        }
        title={
          i18n.language === "ko"
            ? "에이아이에스 | 고객문의"
            : "AIS Korea | Support"
        }
        image={inquiryMainImg}
        url={
          i18n.language === "ko"
            ? "www.aiskorea.co.kr/ko/support"
            : "www.aiskorea.co.kr/en/support"
        }
      />
      {isRendering && (
        <>
          <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <section className={styles.inquiryMain}>
              <h1
                className={styles.mainTitle}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                {i18n.t("inquiry.inquiryMainTitle1")}
              </h1>
              <h2
                data-aos="fade-up"
                data-aos-duration="2000"
                className={styles.mainTitle}
              >
                {i18n.t("inquiry.inquiryMainTitle2")}
              </h2>
            </section>
            <section className={styles.inquiry}>
              <h2>{i18n.t("inquiry.inquiryContent")}</h2>
              <form onSubmit={onSubmitForm}>
                <input
                  name="title"
                  placeholder={i18n.t("inquiry.inquiryPlaceholderTitle")}
                  className={styles.inquiryInput}
                  value={title}
                  onChange={onChange}
                  spellCheck="false"
                  required
                  maxLength="30"
                ></input>
                <input
                  name="email"
                  placeholder={i18n.t("inquiry.inquiryPlaceholderEmail")}
                  className={styles.inquiryInput}
                  value={email}
                  ref={inputRef}
                  required
                  onChange={onChange}
                  spellCheck="false"
                ></input>
                <textarea
                  name="message"
                  placeholder={i18n.t("inquiry.inquiryPlaceholderMessage")}
                  className={styles.inquiryInput}
                  value={message}
                  onChange={onChange}
                  required
                  spellCheck="false"
                ></textarea>
                <button type="submit">
                  {isSending
                    ? i18n.t("inquiry.inquirySubmitting")
                    : i18n.t("inquiry.inquirySubmit")}
                </button>
              </form>
            </section>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default withTranslation()(Inquiry);
