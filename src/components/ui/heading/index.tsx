import styled from "styled-components";
import { Text } from "../../primitives/text";

export const Heading = styled(Text)`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

Heading.defaultProps = {
  as: "h1"
};
