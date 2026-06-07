export default function Button({
  children,
  variant = "primary",
  className = "",
  as: Component = "button",
  ...props
}) {
  return (
    <Component className={`btn btn--${variant} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
