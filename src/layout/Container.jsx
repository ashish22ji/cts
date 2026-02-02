import CTA from "../components/CTA";

export default function Container({
  id,
  title,
  subtitle,
  data = [],
  columns = 1,
  // position="center",
  spacing = "normal",
  bg = "",
  className = "",
  renderItem,
  children,
  gap = "normal",
  ctaProps={},
  ctaProps2={}
}) {
  const gridMap = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5",
    6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-6",
  };

  const spacingMap = {
    none: "py-0",
    small: "py-8",
    normal: "py-16",
    medium: "py-20",
    large: "py-24",
  };

    // NEW
  const gapMap = {
    none: "gap-0",
    small: "gap-6",
    normal: "gap-8",
    medium: "gap-12",
    large: "gap-16",
    xl: "gap-20",
  };

  const alignMap = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};
const hasCTA = !!ctaProps?.text;
const hasCTA2 = !!ctaProps2?.text;

const {
  text,
  align = "center",
  variant = "primary",
  ...restCTA
} = ctaProps;
const {
  text2,
  variant2 = "primary",
  ...restCTA2
} = ctaProps2;

  const ctaAlignClass = alignMap[align];

  const colsClass = gridMap[columns] || gridMap[3];
  const spaceClass = spacingMap[spacing] || spacingMap.normal;
  const gapClass = gapMap[gap] || gapMap.normal;

  return (
    <section
      id={id}
      className={`${spaceClass} ${bg} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-4xl font-bold">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/*Apply grid even for children */}
        <div className={`grid ${colsClass} ${gapClass} items-center`}>
          {data.length > 0 && renderItem
            ? data.map((item, index) => <div key={index}>{renderItem(item)}</div>)
            : children}
        </div>
        {(hasCTA || hasCTA2) && (
  <div className={`flex gap-2 ${(children || data.length > 0)?"mt-10":"" } ${ctaAlignClass}`}>
    <CTA text={text} variant={variant} {...restCTA} />
    <CTA text={text2} variant={variant2} {...restCTA2} />
  </div>
)}

      </div>
    </section>
  );
}
