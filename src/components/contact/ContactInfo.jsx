import { Link } from "react-router";

export default function ContactInfo() {
  const contactInfo = [
    {
      icon: "fa-regular fa-location-dot",
      title: "موقعنا",
      description: "تجدنا في السعودية .",
      linkText: "عرض الموقع على الخريطة",
      linkUrl: "https://maps.app.goo.gl/MUZLHJg29LWAKg7a9",
    },
    {
      icon: "fa-regular fa-phone-volume",
      title: "اتصل بنا",
      description: "تواصل معنا مباشرة عبر الهاتف للرد على استفساراتك.",
      linkText: "+20-100-123-4567",
      linkUrl: "tel:+201001234567",
    },
    {
      icon: "fa-regular fa-envelope",
      title: "الدعم الفني",
      description: "لأي استفسار أو دعم بخصوص خدماتنا، راسلنا عبر البريد.",
      linkText: "support@yourcompany.com",
      linkUrl: "mailto:support@yourcompany.com",
    },
    {
      icon: "fa-regular fa-share-alt",
      title: "تابعنا على مواقع التواصل",
      description: "ابقَ على تواصل معنا من خلال حساباتنا الرسمية.",
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
    },
  ];

  return (
    <div className="row">
      {contactInfo.map((item, index) => (
        <div key={index} className="col-lg-3 col-md-6 col-12 p-2">
          <div className="contact_info">
            <div className="icon">
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
                <h6>تابعنا</h6>
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
