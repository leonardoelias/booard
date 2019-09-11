import React from "react";
import styled from "styled-components";
import {
  useToolbarState,
  Toolbar as ToolbarReakit,
  ToolbarItem as ToolbarItemReakit,
  ToolbarSeparator as ToolbarSeparatorReakit
} from "reakit/Toolbar";

export { useToolbarState };

export const ToolBarComponent = styled(ToolbarReakit)`
  display: flex;
  height: 44px;
  border-bottom: 1px solid #ebeced;
  padding: 4px 16px;
  align-items: center;
  justify-content: space-between;
`;

interface ToolbarItem {
  as?: any;
}

export const ToolbarItemComponent = styled(ToolbarItemReakit)``;

export const ToolbarSeparator = styled(ToolbarSeparatorReakit)`
  width: 0px;
  height: auto;
  border-style: solid;
  border-color: #ebeced;
  border-width: 0px 1px 0px 0px;
  margin: 0px 0.5em;
  padding: 0px;

  & > :not(:first-child) {
    margin: 0px 0px 0px 0.5em;
  }
`;

// export const Example = () => {
//   const toolbar = useToolbarState();
//   return (
//     <Toolbar {...toolbar} aria-label="My toolbar">
//       <ToolbarItem {...toolbar} as={Button}>
//         Item 1
//       </ToolbarItem>
//       <ToolbarItem {...toolbar} as={Button}>
//         Item 2
//       </ToolbarItem>
//       <ToolbarSeparator {...toolbar} />
//       <ToolbarItem {...toolbar} as={Button}>
//         Item 3
//       </ToolbarItem>
//     </Toolbar>
//   );
// };
