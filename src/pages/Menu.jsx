import { useMemo, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import MenuItemRow from "../components/MenuItemRow";
import CtaBanner from "../components/CtaBanner";
import ImageWithFallback from "../components/ImageWithFallback";
import menu from "../data/menu.json";
import homepage from "../data/homepage.json";
import business from "../data/business.json";
import { getButtonLabel } from "../utils/theme";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menu.categories[0]);
  const { hero, chefSpecial, orderCards } = menu;

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return menu.items;
    return menu.items.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const groupedItems = useMemo(() => {
    const groups = {};
    filteredItems.forEach((item) => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  return (
    <main>
      <section className="menu-hero">
        <div className="container menu-hero__inner">
          <p className="menu-hero__eyebrow">{hero.eyebrow}</p>
          <h1 className="menu-hero__title">{hero.title}</h1>
          <p className="menu-hero__subtitle">{hero.subtitle}</p>
          <div className="menu-hero__actions">
            <Button variant="accent">
              {getButtonLabel(hero.cta.labelKey)} <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      <div className="menu-tabs">
        <div className="container menu-tabs__inner">
          {menu.categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`menu-tabs__button ${
                activeCategory === category ? "menu-tabs__button--active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <section className="menu-list section">
        <div className="container menu-list__inner">
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} className="menu-list__group">
              <div className="menu-list__group-header">
                <h2>{category}</h2>
                <span>
                  {items.length} {menu.itemsCountLabel}
                </span>
              </div>
              <div>
                {items.map((item) => (
                  <MenuItemRow key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHeading eyebrow={chefSpecial.eyebrow} title={chefSpecial.title} />
          <div className="chef-special">
            <div className="chef-special__media">
              <ImageWithFallback
                src={chefSpecial.image}
                fallback={chefSpecial.imageFallback}
                alt={chefSpecial.dishName}
                className="chef-special__image"
              />
            </div>
            <div className="chef-special__content">
              <p className="section-heading__eyebrow">{chefSpecial.availability}</p>
              <h3 className="chef-special__title">{chefSpecial.dishName}</h3>
              <p className="chef-special__description">{chefSpecial.description}</p>
              <div className="chef-special__pricing">
                <span className="chef-special__price">{chefSpecial.price}</span>
                <span className="chef-special__original">{chefSpecial.originalPrice}</span>
                <span className="chef-special__deal">{chefSpecial.dealLabel}</span>
              </div>
              <div className="chef-special__actions">
                <Button variant="accent">
                  {getButtonLabel(chefSpecial.primaryCta.labelKey)}
                </Button>
                <Button variant="outline">
                  {getButtonLabel(chefSpecial.secondaryCta.labelKey)}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="order-cards">
            <div className="order-cards__item">
              <h3>{orderCards.online.title}</h3>
              <p>{orderCards.online.description}</p>
              <Button variant="accent" className="order-cards__cta">
                {getButtonLabel(orderCards.online.cta.labelKey)} <ArrowRight size={16} />
              </Button>
            </div>
            <div className="order-cards__item order-cards__item--dark">
              <h3>{orderCards.reserve.title}</h3>
              <p>{orderCards.reserve.description}</p>
              <div className="order-cards__actions">
                <Button variant="accent">
                  {getButtonLabel(orderCards.reserve.primaryCta.labelKey)}
                </Button>
                <Button variant="outline-light">
                  <Phone size={15} /> {business.phone}
                </Button>
              </div>
            </div>
          </div>

          <div className="menu-page__cta">
            <CtaBanner content={homepage.ctaBanner} />
          </div>
        </div>
      </section>
    </main>
  );
}
