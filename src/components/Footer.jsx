import { useNavigate } from "react-router-dom";
import {
  UtensilsCrossed,
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import business from "../data/business.json";
import navigation from "../data/navigation.json";

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
};

export default function Footer() {
  const navigate = useNavigate();

  const handleFooterLink = (link) => {
    if (link.type === "route") {
      navigate(link.path);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (link.type === "hash") {
      navigate(`/${link.path}`);
    }
  };

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <div className="site-footer__brand">
            <span className="site-footer__logo" aria-hidden="true">
              <UtensilsCrossed size={18} />
            </span>
            <span className="site-footer__name">{business.name}</span>
          </div>
          <p className="site-footer__tagline">{business.tagline}</p>
          <div className="site-footer__social">
            {business.social.map((item) => {
              const Icon = socialIcons[item.platform];
              if (!Icon) return null;
              return (
                <a
                  key={item.platform}
                  href={item.url}
                  className="site-footer__social-link"
                  aria-label={item.label}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="site-footer__heading">{navigation.footerQuickLinksTitle}</h4>
          <ul className="site-footer__list">
            {navigation.links.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className="site-footer__link"
                  onClick={() => handleFooterLink(link)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="site-footer__heading">Contact</h4>
          <ul className="site-footer__list site-footer__contact">
            <li>
              <MapPin size={16} aria-hidden="true" />
              <span>
                {business.address.line1}
                <br />
                {business.address.line2}
              </span>
            </li>
            <li>
              <Phone size={16} aria-hidden="true" />
              <a href={`tel:${business.phone.replace(/\D/g, "")}`}>{business.phone}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="site-footer__heading">Hours</h4>
          <ul className="site-footer__list site-footer__hours">
            {business.hours.map((entry, index) => (
              <li key={entry.days} className={index > 0 ? "site-footer__hours-line" : ""}>
                {index === 0 && <Clock size={16} aria-hidden="true" />}
                <span>
                  {entry.days} · {entry.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>{business.copyright}</p>
        <p>{business.footerLegal}</p>
      </div>
    </footer>
  );
}
