import styled, { css } from "styled-components";

export type Props = {
  fontSize?: number;
  as?: any;
  strong?: boolean;
};

export const defaultTypographyStyles = {
  em: css`
    font-style: italic;
  `
};

export type Variant = keyof typeof defaultTypographyStyles;

const getProperty = <T, K extends keyof T>(obj: T, key: K) => obj[key];

export default styled.p<Props>`
  ${(props: Props) => getProperty(defaultTypographyStyles, props.as)};
  margin: 0;
  font-stretch: normal;
  letter-spacing: normal;
  ${(props: Props) =>
    props.strong &&
    css`
      font-weight: 700;
    `}
  ${(props: Props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}px;
    `}
`;
