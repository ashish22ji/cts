import CTA from "./CTA";

function BaseCard({ children, color = "card", className = "" }) {
  const bgClass = `bg-${color}`;
  const textClass = color === "card" ? "text-black" : "text-white";

  return (
    <div
      className={`rounded-xl shadow hover:shadow-lg transition p-6 ${bgClass} ${textClass} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Card({
  title,
  meta,
  description,
  image,
  color = "card",
  view = "default",
  ctaProps = {},
}) {
  const alignMap = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  const hasCTA = !!ctaProps?.text;

  const { text, align = "center", variant = "primary", ...restCTA } = ctaProps;

  const ctaAlignClass = alignMap[align];

  /* ------------- TESTIMONIAL VIEW ------------- */
  if (view === "testimonial") {
    return (
      <BaseCard color={color}>
        {/* Quote */}
        <p className="italic mb-6 leading-relaxed">“{description}”</p>

        {/* Author */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          {image && (
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              {image}
            </div>
          )}

          <div>
            {/* Name */}
            <p className="font-semibold">{title}</p>

            {/* Role */}
            {meta && <p className="text-sm opacity-70">{meta}</p>}
          </div>
        </div>

        {hasCTA && (
          <div className={`flex mt-4 ${ctaAlignClass}`}>
            <CTA text={text} variant={variant} {...restCTA} />
          </div>
        )}
      </BaseCard>
    );
  }

  /* ---------------- STATS VIEW ---------------- */
  if (view == "stats") {
    // Stats layout
    return (
      <BaseCard
        color={color}
        className="text-center flex flex-col items-center"
      >
        {image && (
          <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-primary/20">
            <span className="text-2xl text-primary">{image}</span>
          </div>
        )}

        <div className="text-2xl font-bold mb-2 text-primary">{meta}</div>
        <div className="text-lg text-muted">{title}</div>

        {hasCTA && (
          <div className={`flex mt-4 w-full ${ctaAlignClass}`}>
            <CTA text={text} variant={variant} {...restCTA} />
          </div>
        )}
      </BaseCard>
    );
  }

  /* ------------- DEFAULT VIEW ----------------- */
  return (
    <BaseCard color={color}>
      {image && <div className="text-3xl mb-4">{image}</div>}
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p>{description}</p>

      {hasCTA && (
        <div className={`flex mt-6 ${ctaAlignClass}`}>
          <CTA text={text} variant={variant} {...restCTA} />
        </div>
      )}
    </BaseCard>
  );
}
