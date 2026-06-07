import { Link } from "react-router-dom";
import {
  ArrowRight,
  Leaf,
  ShoppingBag,
  Heart,
  Users,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import DishCard from "../components/DishCard";
import CtaBanner from "../components/CtaBanner";
import ImageWithFallback from "../components/ImageWithFallback";
import homepage from "../data/homepage.json";
import menu from "../data/menu.json";
import business from "../data/business.json";
import contact from "../data/contact.json";
import { getButtonLabel } from "../utils/theme";

const highlightIcons = {
  leaf: Leaf,
  "shopping-bag": ShoppingBag,
  heart: Heart,
  users: Users,
};

export default function Home() {
  const { hero, highlights, featuredDishes, about, menuPreview, gallery, ctaBanner } =
    homepage;

  return (
    <main>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <p className="hero__eyebrow">{hero.eyebrow}</p>
            <h1 className="hero__title">{hero.headline}</h1>
            <p className="hero__subtitle">{hero.subheadline}</p>
            <div className="hero__actions">
              <Link to={hero.primaryCta.path}>
                <Button variant="accent">
                  {getButtonLabel(hero.primaryCta.labelKey)} <ArrowRight size={16} />
                </Button>
              </Link>
              <Button variant="outline">
                {getButtonLabel(hero.secondaryCta.labelKey)}
              </Button>
            </div>
            <div className="hero__proof">
              <div className="hero__avatars" aria-hidden="true">
                {Array.from({ length: hero.socialProof.avatarCount }).map((_, index) => (
                  <span key={index} className="hero__avatar" />
                ))}
              </div>
              <p className="hero__rating">
                <strong>{hero.socialProof.rating}</strong> {hero.socialProof.text}
              </p>
            </div>
          </div>

          <div className="hero__media">
            <div className="hero__image-wrap">
              <ImageWithFallback
                src={hero.image}
                fallback={hero.imageFallback}
                alt={hero.special.title}
                className="hero__image"
              />
            </div>
            <div className="hero__special">
              <p className="hero__special-eyebrow">{hero.special.eyebrow}</p>
              <p className="hero__special-title">{hero.special.title}</p>
              <p className="hero__special-subtitle">{hero.special.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights">
        <div className="container highlights__grid">
          {highlights.map(({ icon, label }) => {
            const Icon = highlightIcons[icon];
            return (
              <div key={label} className="highlights__item">
                <span className="highlights__icon">
                  {Icon && <Icon size={16} />}
                </span>
                <span>{label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={featuredDishes.eyebrow}
            title={featuredDishes.title}
            subtitle={featuredDishes.subtitle}
          />
          <div className="dish-grid">
            {featuredDishes.items.map((dish) => (
              <DishCard key={dish.name} dish={dish} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section section--muted">
        <div className="container about__grid">
          <div className="about__media">
            <ImageWithFallback
              src={about.image}
              fallback={about.imageFallback}
              alt={about.title}
              className="about__image"
            />
          </div>
          <div className="about__content">
            <p className="section-heading__eyebrow">{about.eyebrow}</p>
            <h2 className="about__title">{about.title}</h2>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="about__text">
                {paragraph}
              </p>
            ))}
            <Button variant="outline" className="about__cta">
              {getButtonLabel(about.cta.labelKey)}
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={menuPreview.eyebrow}
            title={menuPreview.title}
            subtitle={menuPreview.subtitle}
          />
          <div className="menu-preview">
            {menuPreview.categories.map((category) => {
              const items = menu.items
                .filter((item) => item.category === category)
                .slice(0, menuPreview.itemsPerCategory);

              return (
                <div key={category} className="menu-preview__group">
                  <h3 className="menu-preview__category">{category}</h3>
                  {items.map((item) => (
                    <div key={item.name} className="menu-preview__row">
                      <span>{item.name}</span>
                      <span className="menu-preview__leader" aria-hidden="true" />
                      <span className="menu-preview__price">{item.price}</span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
          <div className="menu-preview__cta">
            <Link to={menuPreview.cta.path}>
              <Button variant="primary">
                {getButtonLabel(menuPreview.cta.labelKey)} <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="gallery" className="section section--muted">
        <div className="container">
          <SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} />
          <div className="gallery">
            {gallery.images.map((image, index) => (
              <div
                key={image.src}
                className={`gallery__item ${image.featured ? "gallery__item--featured" : ""}`}
              >
                <ImageWithFallback
                  src={image.src}
                  fallback={image.fallback}
                  alt={`${gallery.title} ${index + 1}`}
                  className="gallery__image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <SectionHeading title={contact.sectionHeading} eyebrow={contact.sectionTitle} />
          <div className="contact__grid">
            <div className="contact__card">
              <div className="contact__item">
                <span className="contact__icon">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="contact__label">{contact.labels.address}</p>
                  <p className="contact__value">
                    {business.address.line1}
                    <br />
                    {business.address.line2}
                  </p>
                </div>
              </div>
              <div className="contact__item">
                <span className="contact__icon">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="contact__label">{contact.labels.phone}</p>
                  <p className="contact__value">
                    <a href={`tel:${business.phone.replace(/\D/g, "")}`}>{business.phone}</a>
                  </p>
                </div>
              </div>
              <div className="contact__item">
                <span className="contact__icon">
                  <Clock size={18} />
                </span>
                <div>
                  <p className="contact__label">{contact.labels.hours}</p>
                  <div className="contact__value">
                    {business.hours.map((entry) => (
                      <p key={entry.days}>
                        {entry.days} · {entry.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="contact__map">
              {contact.map.embedUrl ? (
                <iframe
                  title="Location map"
                  src={contact.map.embedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="contact__map-placeholder">
                  <MapPin size={40} />
                  <p>{contact.map.placeholderTitle}</p>
                  <p>{contact.map.placeholderSubtitle}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="container section section--compact">
        <CtaBanner content={ctaBanner} />
      </div>
    </main>
  );
}
