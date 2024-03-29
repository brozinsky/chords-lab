import React from "react";

// Define a type for ButtonOrLink's props
type ButtonOrLinkProps = {
  href?: string; // Make href optional since you check its existence to decide between rendering a span or a button
  onClick?: () => void;
  children: React.ReactNode;
  [x: string]: any; // Allows any other prop
};

// Adjust ButtonOrLink to use the defined type
const ButtonOrLink: React.FC<ButtonOrLinkProps> = ({
  href,
  children,
  ...props
}) => {
  const isLink = typeof href !== "undefined";
  const Element = isLink ? "a" : "button"; // Assuming you want an anchor tag for links

  return (
    <Element href={href} {...props}>
      {children}
    </Element>
  );
};

export default ButtonOrLink;
