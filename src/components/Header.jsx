import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import Button from "./Button";
import business from "../data/business.json";
import navigation from "../data/navigation.json";
import { getButtonLabel } from "../utils/theme";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const ctaLabel = getButtonLabel(navigation.headerCta.labelKey || "reserveTable");

  const handleNavClick = (link) => {
    setOpen(false);

    if (link.type === "route") {
      navigate(link.path);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (location.pathname !== "/") {
      navigate(`/${link.path}`);
      return;
    }

    const targetId = link.path.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (link) => {
    if (link.type === "route") {
      return location.pathname === link.path;
    }
    return false;
  };

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__brand" onClick={() => setOpen(false)}>
          <span className="site-header__logo" aria-hidden="true">
            <UtensilsCrossed size={18} />
          </span>
          <span className="site-header__name">{business.name}</span>
        </Link>

        <nav className="site-header__nav" aria-label="Main navigation">
          {navigation.links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link)}
              className={`site-header__link ${isActive(link) ? "site-header__link--active" : ""}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="site-header__cta">
          <Button variant="accent">{ctaLabel}</Button>
        </div>

        <button
          type="button"
          className="site-header__toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="site-header__mobile">
          {navigation.links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link)}
              className="site-header__mobile-link"
            >
              {link.label}
            </button>
          ))}
          <Button variant="accent" className="site-header__mobile-cta">
            {ctaLabel}
          </Button>
        </div>
      )}
    </header>
  );
}
