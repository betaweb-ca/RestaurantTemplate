import theme from "../data/theme.json";

export function applyTheme() {
  const root = document.documentElement;
  const { colors, fonts } = theme;

  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });

  root.style.setProperty("--font-sans", fonts.sans);
  root.style.setProperty("--font-display", fonts.display);
}

export function getButtonLabel(labelKey) {
  return theme.buttons[labelKey] ?? labelKey;
}

export function getDietBadge(dietKey) {
  return theme.dietBadges[dietKey];
}
