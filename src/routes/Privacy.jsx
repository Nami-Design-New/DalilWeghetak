import useGetSettings from "../hooks/useGetSettings";

export default function Privacy() {
  const { settings } = useGetSettings();
  return (
    <section className="privacy-policy-page py-5">
      <div
        className="container"
        dangerouslySetInnerHTML={{ __html: settings?.privacy }}
      ></div>
    </section>
  );
}
