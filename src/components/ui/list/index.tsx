import styled, { css } from "styled-components";
import { Flex } from "../../primitives/box";

export const ListComponent = styled(Flex)`
  height: 100%;
  flex-direction: column;
  border-right: 1px solid #ebeced;
`;

export const ListHeaderComponent = styled.header`
  height: 44px;
  border-bottom: 1px solid #ebeced;
  padding: 4px 8px;
`;

export const ListContentComponent = styled.ul`
  margin: 0;
  padding: 0;
  list-style: 0;
`;

export const ListItemComponent = styled.li<{active: boolean}>`
  padding: 16px;
  border-bottom: 1px solid #ebeced;
  ${props => props.active && css`
    background: red;
    color: white;
  `}
`;
