import useGetSettings from "../hooks/useGetSettings";

const Terms = () => {
  const { settings } = useGetSettings();
  return (
    <section className="terms-section py-5">
      <div
        className="container"
        dangerouslySetInnerHTML={{ __html: settings?.terms }}
      ></div>
    </section>
  );
};

export default Terms;
