import React, { FC } from "react";
import { AnchorProps } from "./types";

const Anchor: FC<AnchorProps> = ({
  className,
  href,
  target,
  rel,
  children,
}) => {
  return (
    <a href={href} target={target} rel={rel} className={className}>
      {children}
    </a>
  );
};

export default Anchor;
