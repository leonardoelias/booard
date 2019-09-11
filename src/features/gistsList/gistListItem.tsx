import React from 'react'

import { Text } from 'components/primitives/text'
import { Heading } from 'components/ui/heading'

import { Gist } from '../../api'

import { ListItemComponent } from 'components/ui/list'

type Props = Gist & {
  setSelectedGist: (id: string) => void
  idGistSeleted: string | null;
}

export const GistListItem = ({ id, setSelectedGist, description, idGistSeleted }: Props) => {
  const onGistClicked = (event: any) => {
    event.preventDefault()
    event.stopPropagation()
    setSelectedGist(id)
  }
  const showDescription = description === '' ? 'No description' : description

  return (
    <ListItemComponent
      onClick={onGistClicked}
      active={idGistSeleted === id}
    >
      <Heading>{showDescription}</Heading>
      <Text>{showDescription}</Text>
    </ListItemComponent>
  )
}
