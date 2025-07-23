import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function ContactInfo() {
  const { t } = useTranslation();
  const contactInfo = [
    {
      icon: "fa-regular fa-location-dot",
      title: t("contact.info.location.title"),
      description: t("contact.info.location.description"),
      linkText: t("contact.info.location.linkText"),
      linkUrl: "https://maps.app.goo.gl/MUZLHJg29LWAKg7a9",
      bgClass: "bg-location",
      iconBgClass: "icon-location",
    },
    {
      icon: "fa-regular fa-phone-volume",
      title: t("contact.info.phone.title"),
      description: t("contact.info.phone.description"),
      linkText: t("contact.info.phone.linkText"),
      linkUrl: "tel:+201001234567",
      bgClass: "bg-phone",
      iconBgClass: "icon-phone",
    },
    {
      icon: "fa-regular fa-envelope",
      title: t("contact.info.email.title"),
      description: t("contact.info.email.description"),
      linkText: t("contact.info.email.linkText"),
      linkUrl: "mailto:support@yourcompany.com",
      bgClass: "bg-email",
      iconBgClass: "icon-email",
    },
    {
      icon: "fa-regular fa-share-alt",
      title: t("contact.info.social.title"),
      description: t("contact.info.social.description"),
      subLinks: [
        {
          link: "https://facebook.com/yourpage",
          icon: "fa-brands fa-facebook-f",
        },
        {
          link: "https://twitter.com/yourhandle",
          icon: "fa-brands fa-twitter",
        },
        {
          link: "https://instagram.com/yourprofile",
          icon: "fa-brands fa-instagram",
        },
        {
          link: "https://linkedin.com/yourprofile",
          icon: "fa-brands fa-linkedin-in",
        },
      ],
      bgClass: "bg-social",
      iconBgClass: "icon-social",
    },
  ];

  return (
    <div className="row">
      {contactInfo.map((item, index) => (
        <div key={index} className="col-lg-3 col-md-6 col-12 p-2">
          <div className={`contact_info ${item.bgClass}`}>
            <div className={`icon ${item.iconBgClass}`}>
              <i className={item.icon}></i>
            </div>

            <h6>{item.title}</h6>
            <p>{item.description}</p>

            {item.linkText && item.linkUrl && (
              <Link to={item.linkUrl} target="_blank" rel="noopener noreferrer">
                {item.linkText}
              </Link>
            )}

            {item.subLinks && (
              <div className="social-media">
                <h6>{t("contact.info.social.followUs")}</h6>
                <div className="social-media-links">
                  {item.subLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <i className={link.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
