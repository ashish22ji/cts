export default function CTA({
  text,
  variant = "primary",
  href,
  target = "_self",
}) {
  const CtaElement = href ? "a" : "button";
  return (
    <CtaElement
      href={href}
      target={href ? target : undefined}
      type={!href ? "button" : undefined}
      className={`btn btn-${variant} w-fit hover:shadow-lg`}
    >
      {text}
    </CtaElement>
  );
}
