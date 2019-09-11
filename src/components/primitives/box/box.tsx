import { Box as BoxReakit } from "reakit";
import styled, { css } from "styled-components";

type TBox = {
  bg?: string;
};

export const Box = styled(BoxReakit)`
  ${(p: TBox) =>
    p.bg &&
    css`
      background: ${p.bg};
    `}
`;

export const Flex = styled(Box)`
  display: flex;
`;

export const Grid = styled(Box)`
  display: grid;
`;
