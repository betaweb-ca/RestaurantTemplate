import ImageWithFallback from "./ImageWithFallback";
import Badge from "./Badge";
import { getDietBadge } from "../utils/theme";

export default function MenuItemRow({ item }) {
  return (
    <div className="menu-item-row">
      {item.image && (
        <div className="menu-item-row__thumb">
          <ImageWithFallback
            src={item.image}
            fallback={item.imageFallback}
            alt={item.name}
            className="menu-item-row__image"
          />
        </div>
      )}
      <div className="menu-item-row__content">
        <div className="menu-item-row__header">
          <h4 className="menu-item-row__name">{item.name}</h4>
          <span className="menu-item-row__leader" aria-hidden="true" />
          <span className="menu-item-row__price">{item.price}</span>
        </div>
        <p className="menu-item-row__description">{item.description}</p>
        {item.diet?.length > 0 && (
          <div className="menu-item-row__tags">
            {item.diet.map((dietKey) => {
              const badge = getDietBadge(dietKey);
              if (!badge) return null;
              return (
                <Badge key={dietKey} variant={dietKey}>
                  {badge.label}
                </Badge>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
