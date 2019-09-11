import React from 'react'

import { Gist } from '../../api'

import { ListContentComponent } from 'components/ui/list'
import { GistListItem } from './gistListItem'

interface Props {
  gists: Gist[]
  setSelectedGist: (id: string) => void
  idGistSeleted: string | null
}

export const GistList = ({ gists, setSelectedGist, idGistSeleted }: Props) => {
  const renderedIssues = gists.map(gist => (
    <GistListItem
      key={gist.id}
      {...gist}
      setSelectedGist={setSelectedGist}
      idGistSeleted={idGistSeleted}
    />
  ))

  return <ListContentComponent>{renderedIssues}</ListContentComponent>
}
