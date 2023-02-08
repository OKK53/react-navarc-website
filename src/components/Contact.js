import FormContact from "components/FormContact";
import ContactInfo from "./ContactInfo";
function Contact() {
  return (
    <div className="grid-cols-1 container mx-auto my-6 grid md:grid-cols-2 gap-x-10">
      <ContactInfo />
      <FormContact />
    </div>
  );
}

export default Contact;
