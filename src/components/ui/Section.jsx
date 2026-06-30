import Container from "./Container";

export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}) {
  return (
    <section id={id} className={className}>
      <Container className={`py-24 ${containerClassName}`}>
        {children}
      </Container>
    </section>
  );
}