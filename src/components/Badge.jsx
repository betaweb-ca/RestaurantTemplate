import theme from "../data/theme.json";

export default function Badge({ children, variant = "neutral" }) {
  const dietBadge = theme.dietBadges[variant];

  if (dietBadge) {
    return (
      <span
        className="badge"
        style={{ background: dietBadge.background, color: dietBadge.color }}
      >
        {children}
      </span>
    );
  }

  return <span className={`badge badge--${variant}`}>{children}</span>;
}
