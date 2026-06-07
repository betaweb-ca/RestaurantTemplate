import ImageWithFallback from "./ImageWithFallback";
import Badge from "./Badge";

export default function DishCard({ dish }) {
  return (
    <article className="dish-card">
      <div className="dish-card__media">
        <ImageWithFallback
          src={dish.image}
          fallback={dish.imageFallback}
          alt={dish.name}
          className="dish-card__image"
        />
        {dish.badge && (
          <div className="dish-card__badge">
            <Badge variant="accent">{dish.badge}</Badge>
          </div>
        )}
      </div>
      <div className="dish-card__body">
        <div className="dish-card__header">
          <h3 className="dish-card__name">{dish.name}</h3>
          <span className="dish-card__price">{dish.price}</span>
        </div>
        <p className="dish-card__description">{dish.description}</p>
      </div>
    </article>
  );
}
