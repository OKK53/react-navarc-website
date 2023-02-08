import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "Bu alan doldurulması zorunlu alandır.",
  },
  string: {
    min: "Bu alan minimum ${min} karakter olmalıdır.",
    max: "Bu alan ${max} karakter olmalıdır.",
    email: "Geçerli bir e-mail adresi giriniz.",
  },
});
export default Yup;
