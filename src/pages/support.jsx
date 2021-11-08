import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

import Footer from "../components/Footer";
import { send } from "emailjs-com";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

import styles from "../styles/inquiry.module.css";

import { useTranslation } from "next-i18next";

import inquiryMainImg from "../../public/asset/images/inquiry_main.png";

const AOS = dynamic(import("aos"), {
  ssr: false,
});

// const MySwal = withReactContent(Swal);

const alert = () => {
  // MySwal.fire({
  //   icon: "success",
  //   title: i18n("inquiry.alertSuccess"),
  //   showConfirmButton: false,
  //   timer: 1500,
  // });
};

const errorAlert = () => {
  // MySwal.fire({
  //   icon: "error",
  //   title: i18n("inquiry.alertFail"),
  //   showConfirmButton: true,
  // });
};

const emailAlert = () => {
  // MySwal.fire({
  //   icon: "error",
  //   title: i18n("inquiry.alertEmail"),
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

  const { i18n } = useTranslation("common");
  const [isRendering, setisRendering] = useState(false);

  useEffect(() => {
    setisRendering(true);

    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      {isRendering && (
        <>
          <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <section className={styles.inquiryMain}>
              <h1
                className={styles.mainTitle}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                {i18n("inquiry.inquiryMainTitle1")}
              </h1>
              <h2
                data-aos="fade-up"
                data-aos-duration="2000"
                className={styles.mainTitle}
              >
                {i18n("inquiry.inquiryMainTitle2")}
              </h2>
            </section>
            <section className={styles.inquiry}>
              <h2>{i18n("inquiry.inquiryContent")}</h2>
              <form onSubmit={onSubmitForm}>
                <input
                  name="title"
                  placeholder={i18n("inquiry.inquiryPlaceholderTitle")}
                  className={styles.inquiryInput}
                  value={title}
                  onChange={onChange}
                  spellCheck="false"
                  required
                  maxLength="30"
                ></input>
                <input
                  name="email"
                  placeholder={i18n("inquiry.inquiryPlaceholderEmail")}
                  className={styles.inquiryInput}
                  value={email}
                  ref={inputRef}
                  required
                  onChange={onChange}
                  spellCheck="false"
                ></input>
                <textarea
                  name="message"
                  placeholder={i18n("inquiry.inquiryPlaceholderMessage")}
                  className={styles.inquiryInput}
                  value={message}
                  onChange={onChange}
                  required
                  spellCheck="false"
                ></textarea>
                <button type="submit">
                  {isSending
                    ? i18n("inquiry.inquirySubmitting")
                    : i18n("inquiry.inquirySubmit")}
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

export default Inquiry;
