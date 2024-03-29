import React from "react";

type TProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  [x: string]: any;
};

const ButtonOrLink = ({ href, children, ...props }: TProps) => {
  const isLink = typeof href !== "undefined";
  const Element = isLink ? "a" : "button";

  return (
    <Element href={href} {...props}>
      {children}
    </Element>
  );
};

export default ButtonOrLink;
