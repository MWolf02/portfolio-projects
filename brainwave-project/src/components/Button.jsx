import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  white,
}) /*destructure the properties*/ => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${
    className || ""
  }`; /* Additional reusable classes to the button component */
  const spanClasses =
    "relative z-10"; /* Additional classes to change the text within the buttons  */

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>{" "}
      {/* this span renders the children */}
      {ButtonSvg(white)} {/* ButtonSvg component */}
    </button>
  ); /* Subfunction */

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}{" "}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
