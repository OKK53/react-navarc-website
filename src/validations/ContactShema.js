// import * as Yup from "yup"
import Yup from "./validation_tr";

export const ContactShema = Yup.object().shape({
  fname: Yup.string().required().min(3),
  lname: Yup.string().required(),
  mail: Yup.string().required().email(),
  message: Yup.string().required(),
});
