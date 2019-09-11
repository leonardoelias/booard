import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'rootReducer'

import { ListComponent, ListHeaderComponent } from 'components/ui/list'

import { GistList } from './gistList'
import { fetchGists } from './gistListSlice'

interface Props {
  setSelectedGist: (id: string) => void
}

export const GistsListContainer = ({ setSelectedGist }: Props) => {
  const dispatch = useDispatch()

  const { isLoading, gists } = useSelector(
    (state: RootState) => state.gistsListReducer
  )

  const { idGistSeleted } = useSelector(
    (state: RootState) => state.setGistSelected
  )

  useEffect(() => {
    dispatch(fetchGists())
  }, [dispatch])

  const renderedGists = (
    <GistList
      gists={gists}
      setSelectedGist={setSelectedGist}
      idGistSeleted={idGistSeleted}
    />
  )

  const renderList = isLoading ? <h3>Loading..</h3> : renderedGists

  return (
    <>
      <ListComponent>
        <ListHeaderComponent />
        {renderList}
      </ListComponent>
    </>
  )
}
