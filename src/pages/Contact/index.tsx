import { motion as m } from "framer-motion";
import Seo from "../../components/Seo";
import ContactForm from "./ContactForm";
import { contactData } from "../../constants/data";

export default function Contact() {
  return (
    <m.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Seo title="Erin Kahn | Contact" url="https://erin-kahn.com/contact" />

      <div className="contact-container">
        <div className="contact-columns">
          <div className="contact-headline-col">
            <h1 className="contact-headline">
              Say
              <br />
              Hello.
            </h1>
          </div>

          <div className="contact-content-col">
            <p className="contact-blurb">{contactData.blurb}</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </m.div>
  );
}
