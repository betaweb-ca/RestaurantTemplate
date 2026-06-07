import { Phone } from "lucide-react";
import Button from "./Button";
import business from "../data/business.json";
import { getButtonLabel } from "../utils/theme";

export default function CtaBanner({ content }) {
  const primaryLabel = getButtonLabel(content.primaryCta.labelKey);
  const secondaryLabel = getButtonLabel(content.secondaryCta.labelKey);

  return (
    <section className="cta-banner">
      <p className="cta-banner__eyebrow">{content.eyebrow}</p>
      <h2 className="cta-banner__title">{content.title}</h2>
      <p className="cta-banner__subtitle">{content.subtitle}</p>
      <div className="cta-banner__actions">
        <Button variant="accent">{primaryLabel}</Button>
        <Button variant="outline-light">{secondaryLabel}</Button>
      </div>
      <p className="cta-banner__phone">
        <Phone size={15} aria-hidden="true" />
        {content.phonePrefix} {business.phone}
      </p>
    </section>
  );
}
