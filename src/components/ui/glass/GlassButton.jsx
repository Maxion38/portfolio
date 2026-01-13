import glassStyles from "../../glass.module.css";
import styles from "./GlassButton.module.css";

export default function GlassButton({
  children,
  layout = true,
  textStyle = true,
  as: Component = "div",
  className = "",
  ...props
}) {
  const classes = [
    glassStyles.glassButton,
    layout && styles.layout,
    textStyle && styles.textStyle,
    className
  ].filter(Boolean).join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
