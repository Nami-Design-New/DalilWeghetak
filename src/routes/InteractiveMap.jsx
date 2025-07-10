import React from "react";

export default function InteractiveMap() {
  return (
 <section className="map-section mt-80 ">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6953844998495!2d46.675295315001!3d24.713551284116317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038758877ccf%3A0x9c7c94d5cbf4876d!2z2KfZhNio2YrYp9izINin2YTYo9mI2YjZhtipINmE2YTYs9mF2YjYsQ!5e0!3m2!1sar!2seg!4v1655227510684!5m2!1sar!2seg"
      width="100%"
      height="100%"
      style={{ minHeight: "600px", border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="الموقع"
    ></iframe>
</section>

  );
}
