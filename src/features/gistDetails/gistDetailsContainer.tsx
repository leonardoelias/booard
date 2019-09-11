import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'rootReducer'
import { Button } from "reakit/Button"
import {
  useToolbarState,
  Toolbar,
  ToolbarItem,
  ToolbarSeparator
} from "reakit/Toolbar";

import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'

import { Flex } from 'components/primitives/box'
import { Heading } from 'components/ui/heading'
import { Text } from 'components/primitives/text'

// import {
//   ToolBarComponent,
//   ToolbarItemComponent,
//   useToolbarState,
//   ToolbarSeparator
// } from 'components/ui/toolbar'
import { MainComponent, MainContent, MainFooter } from 'components/ui/main'

import { fetchGist } from './gistDetailsSlice'

interface Props {
  idGistSeleted: string | null
}

const codeFake = `function add(a, b) {
  // 468302
  return a + b;
}
`

export const GistDetailsContainer = ({ idGistSeleted }: Props) => {
  const toolbar = useToolbarState()
  const dispatch = useDispatch()

  const [code, setCode] = useState(codeFake)

  const { isLoading, gist } = useSelector(
    (state: RootState) => state.gistDetailsSlice
  )

  useEffect(() => {
    if (idGistSeleted !== null) {
      dispatch(fetchGist(idGistSeleted))
    }
  }, [dispatch, idGistSeleted])

  useEffect(() => {
    if (gist !== null) {
      // const obj = Object.keys(gist.files)[0];
      // setCode(gist.files[obj].content)
    }
  }, [gist])

  const renderedGists = <pre>{JSON.stringify(gist, null, 2)}</pre>

  const renderList = isLoading ? <h3>Loading..</h3> : renderedGists

  return gist === null ? (
    <div>selecione</div>
  ) : (
    <MainComponent>
      <Toolbar {...toolbar} aria-label="Toolbar Code content">
        <Heading>
          {!gist.description ? 'No description' : gist.description}
        </Heading>
        <Flex {...toolbar}>
          <Text {...toolbar}>{gist.created_at}</Text>
          <ToolbarSeparator {...toolbar} />
          <ToolbarItem {...toolbar} as={Button} >settings</ToolbarItem>
          <ToolbarSeparator {...toolbar} />
          <ToolbarItem {...toolbar}>save</ToolbarItem>
        </Flex>
      </Toolbar>
      <MainContent>
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            width: '100%',
            height: '100%',
            overflow: 'scroll'
          }}
        />
      </MainContent>
      <MainFooter bg="lime">footer</MainFooter>
    </MainComponent>
  )
}
