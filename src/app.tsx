import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'rootReducer'

import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from './theme'

import { Box } from 'components/primitives/box'
import {
  NavComponent,
  NavAvatarComponent,
  NavTextComponent,
  NavItemComponent
} from 'components/ui/nav'

import { DasboardLayout } from 'components/layout/dashboard'

import { GistsListContainer } from 'features/gistsList/gistListContainer'
import { GistDetailsContainer } from 'features/gistDetails/gistDetailsContainer'

import { setGistSelected } from 'features/gistsDisplay/gistsDisplaySlice'

const App: React.FC = () => {
  const dispatch = useDispatch()

  const { idGistSeleted } = useSelector(
    (state: RootState) => state.setGistSelected
  )

  const setSelectedGist = (id: string) => {
    dispatch(setGistSelected(id))
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <DasboardLayout>
          <NavComponent bg="#F9F9F9">
            <Box>
              <NavItemComponent>
                <NavAvatarComponent>LE</NavAvatarComponent>
                <NavTextComponent>All notes</NavTextComponent>
              </NavItemComponent>
            </Box>
            <Box>
              <NavItemComponent>
                <NavAvatarComponent>LE</NavAvatarComponent>
                <NavTextComponent>Profile</NavTextComponent>
              </NavItemComponent>
            </Box>
          </NavComponent>
          <GistsListContainer setSelectedGist={setSelectedGist} />
          <GistDetailsContainer idGistSeleted={idGistSeleted} />
        </DasboardLayout>
      </>
    </ThemeProvider>
  )
}

export default App
