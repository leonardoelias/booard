import styled from "styled-components";
import { Text } from "../../primitives/text";
import { Flex } from "../../primitives/box";

export const MainComponent = styled(Flex)`
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainHeaderComponent = styled(Flex)`
  height: 44px;
  border-bottom: 1px solid #ebeced;
  padding: 4px 16px;
  align-items: center;
  justify-content: space-between;
`;

export const MainContent = styled(Flex)`
  flex: 1;
  overflow-y: scroll;
`;

export const MainFooter = styled(Flex)`
  height: 28px;
  border-top: 1px solid #ebeced;
  padding: 4px 16px;
`;
