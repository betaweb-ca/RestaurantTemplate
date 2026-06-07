export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignClass = align === "center" ? "section-heading--center" : "";

  return (
    <div className={`section-heading ${alignClass}`}>
      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}
