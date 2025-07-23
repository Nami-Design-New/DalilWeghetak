import { useTranslation } from "react-i18next";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <section className="contact_section ">
        <div className="container">
          <ContactInfo />
          <ContactForm />
        </div>

        <div className="map_container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.8532509245557!2d46.68363117518367!3d24.713551278048956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03360a64c7f9%3A0xa60ed90e2998878e!2z2KfZhNi52LHYqSDYp9mE2YPYp9iv2KfZhCDZgtin2YUg2KfZhNmF2YbYp9iqINin2YTYqtmI2KfZhtmK!5e0!3m2!1sar!2ssa!4v1720773774704!5m2!1sar!2ssa"
            width="100%"
            height="350"
            loading="lazy"
            title="موقع المكتب في الرياض"
          ></iframe>
        </div>
      </section>
    </>
  );
}
