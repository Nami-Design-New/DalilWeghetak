import InputField from "./../../ui/forms/InputField";

export default function ContactForm() {
  return (
    <div className="row">
      <div className="col-12 p-2 mt-5 mb-3">
        <h4 className="title">تواصل مع فريق الخبراء</h4>
        <p className="description">
          لديك استفسار أو تحتاج إلى مساعدة؟ فريقنا من الخبراء مستعد دائمًا
          لتقديم الحلول المناسبة لك.
        </p>
      </div>

      <div className="col-lg-6 col-12 p-2">
        <form className="form_ui d-flex flex-column gap-3">
          <InputField label="الاسم الكامل" placeholder="ادخل اسمك" />

          <InputField
            label="البريد الإلكتروني"
            type="email"
            placeholder="ادخل بريدك الإلكتروني"
          />

          <InputField label="الموضوع" placeholder="ادخل عنوان الموضوع" />

          <InputField
            as="textarea"
            label="رسالتك"
            placeholder="اكتب رسالتك هنا"
          />

          <button className="submit_btn mt-2">إرسال الرسالة</button>
        </form>
      </div>

      <div className="col-lg-6 col-12 p-2">
        <img
          src="/images/contact.jpg"
          alt="صورة تواصل"
          className="contact_img"
        />
      </div>
    </div>
  );
}
