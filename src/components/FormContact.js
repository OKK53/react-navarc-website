import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Form, Formik } from "formik";
import Input from "./form/Input";
import Textarea from "./form/Textarea";
import { ContactShema } from "validations";
import { useLanguage } from "context/LanguageContext";

function FormContact() {
  const { language } = useLanguage();
  const titleSend =
    language === "tr" ? "Bize mesaj gönderin" : "Send a message";
  const textSend = language === "tr" ? "Gönder" : "Send";
  const formjs = useRef();
  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_imctfde",
        "template_4bkq9kb",
        formjs.current,
        "RfxASZQL9Rw-heJiC"
      )
      .then(
        (result) => {
          //console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="flex flex-col m-2">
      <h1 className="grid text-2xl antialiased grid-cols-1 items-center text-center">
        {titleSend}
      </h1>
      <hr />
      <Formik
        initialValues={{
          fname: "",
          lname: "",
          mail: "",
          message: "",
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            sendEmail();
            actions.setSubmitting(false);
            actions.resetForm();
          }, 3000);
        }}
        validationSchema={ContactShema}
      >
        {({ values, isSubmitting }) => (
          <Form
            ref={formjs}
            className="mx-3 my-2 flex flex-col items-start text-start transition-all"
          >
            <Input
              label={language === "tr" ? "Ad" : "FirstName"}
              name="fname"
            ></Input>
            <Input
              label={language === "tr" ? "Soyad" : "LastName"}
              name="lname"
            ></Input>
            <Input label="Email" name="mail" type="email"></Input>
            <Textarea
              label={language === "tr" ? "Mesaj" : "Message"}
              name="message"
            ></Textarea>
            <button
              disabled={isSubmitting}
              type="submit"
              className="mt-2 w-40 h-10 bg-zinc-800 hover:bg-orange-500 rounded-md text-lg text-white disabled:opacity-40"
            >
              {textSend}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormContact;
