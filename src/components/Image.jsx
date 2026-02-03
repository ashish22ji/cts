import CTA from "./CTA";

export default function Image({
  title,
  src,
  description,
  rounded = true,
  ctaProps = {},
}) {
  const alignMap = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  const hasCTA = !!ctaProps?.text;

  const {
    text,
    align = "center",
    variant = "primary",
    href,
    ...restCTA
  } = ctaProps;

  const ctaAlignClass = alignMap[align];

  return (
    <div
      className={`relative aspect-[4/5] group overflow-hidden shadow hover:shadow-xl transition ${
        rounded ? "rounded-3xl" : ""
      }`}
    >
      {/* Image */}
      <img
        src={src}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />

      {(hasCTA || description) && (
        <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-5">
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          <div className="relative z-10 space-y-3">
            {description && (
              <p className="text-white font-semibold">{description}</p>
            )}

            {hasCTA && (
              <div className={`flex ${ctaAlignClass}`}>
                <CTA text={text} variant={variant} href={href} {...restCTA} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
