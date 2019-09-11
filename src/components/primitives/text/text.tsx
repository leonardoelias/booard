import React from "react";
import TextStyled, { Props as TextProps } from "./textStyle";

export type Props = {
  $as?: string;
} & TextProps &
  React.HTMLAttributes<HTMLElement>;

export const Text: React.FC<Props> = ({
  children,
  color,
  fontSize,
  $as,
  ...otherProps
}) => (
  <TextStyled
    {...{
      color,
      fontSize
    }}
    as={$as}
    {...otherProps}
  >
    {children}
  </TextStyled>
);
