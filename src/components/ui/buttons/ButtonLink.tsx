import React from "react";
import ButtonOrLink from "./ButtonOrLink";

type TButtonLinkProps = {
  onClick?: () => void;
  children: React.ReactNode;
  href?: string;
  [x: string]: any;
}

export default function ButtonLink(props: TButtonLinkProps) {
  return (
    <ButtonOrLink
      onClick={props.onClick}
      {...props}
      role="link"
      className="cursor-pointer relative bg-[linear-gradient(#d7d7d8,#d7d7d8),linear-gradient(#6ee7b7,#6ee7b7)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px] text-neutral-100 font-medium hover:text-emerald-500 hover:no-underline"
    >
      {props.children}
    </ButtonOrLink>
  );
}
