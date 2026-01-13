import { useRef } from "react";
import glassStyles from "../../glass.module.css";
import styles from "./GlassDiv.module.css";

export default function GlassDiv({
  children,
  layout = true,
  textStyle = true,
  as: Component = "div",
  className = "",
  onMouseEnter,
  onMouseLeave,
  tabIndex,
  ...props
}) {
  const scrollContentRef = useRef(null);
  const isUsingKeyboardRef = useRef(false);

  const classes = [
    glassStyles.glass,
    styles.container,
    layout && styles.layout,
    textStyle && styles.textStyle,
    className
  ].filter(Boolean).join(" ");

  const handleMouseEnter = (e) => {
    const el = e.currentTarget;
    const isScrollable = el.scrollHeight > el.clientHeight;

    if (isScrollable) {
      swiper.mousewheel.disable();
      onMouseEnter?.(e); 
      el.tabIndex = 0;
    }
  };

  const handleMouseLeave = (e) => {
    const el = e.currentTarget;
    const wasScrollable = el.scrollHeight > el.clientHeight;

    if (wasScrollable) {
      swiper.mousewheel.enable();
      onMouseLeave?.(e); 
      if (!isUsingKeyboardRef.current) {
        el.blur();
      }
      el.tabIndex = -1;
    }
  };

  const handleFocus = (e) => {
    isUsingKeyboardRef.current = true;
  };

  const handleBlur = () => {
    isUsingKeyboardRef.current = false;
  };

  const handleMouseDown = () => {
    isUsingKeyboardRef.current = false;
  };

  return (
    <Component
      className={classes}
      {...props}
    >
      <div 
        ref={scrollContentRef}
        className={styles.scrollContent}
        tabIndex={-1}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseDown={handleMouseDown}
      >
        {children}
      </div>
    </Component>
  );
}