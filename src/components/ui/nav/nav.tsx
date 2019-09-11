import styled from "styled-components";
import { Text } from "../../primitives/text";
import { Flex } from "../../primitives/box";

export const NavComponent = styled(Flex)`
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavItemComponent = styled(Flex)`
  padding: 8px;
  align-items: center;
`;

export const NavAvatarComponent = styled(Flex)`
  background: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  margin-right: 8px;
  border-radius: 6px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.02);
`;

export const NavTextComponent = styled(Text)``;
