import styled from "styled-components";
import { Grid } from "../primitives/box";

export const DasboardLayout = styled(Grid)`
  font-size: 14px;
  line-height: 24px;
  min-height: 100vh;
  width: auto;
  max-width: 100%;

  grid-template-columns: 0.25fr 0.35fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: stretch;
  align-items: stretch;
  & > div {
    height: 100vh;
    overflow: hidden;
  }
`;
