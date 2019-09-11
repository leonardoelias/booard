import { createSlice, PayloadAction } from 'redux-starter-kit'

import { Gist, getGist } from 'api'
import { AppThunk } from 'store'

interface GistsState {
  gist: Gist | null
  isLoading: boolean
  error: Error | null
}

const gistsInitialState: GistsState = {
  gist: null,
  isLoading: false,
  error: null
}

const gist = createSlice({
  slice: 'gist',
  initialState: gistsInitialState,
  reducers: {
    getGistStart(state: GistsState) {
      state.isLoading = true
    },
    getGistSuccess(state: GistsState, { payload }: PayloadAction<Gist>) {
      state.gist = payload
      state.isLoading = false
      state.error = null
    },
    getGistFailure(state: GistsState, action: PayloadAction<Error>) {
      state.isLoading = true
      state.error = action.payload
    }
  }
})

export const { getGistFailure, getGistStart, getGistSuccess } = gist.actions

export default gist.reducer

export const fetchGist: AppThunk = (gistId: string) => async dispatch => {
  try {
    dispatch(getGistStart())
    const gist = await getGist(gistId)
    dispatch(getGistSuccess(gist))
  } catch (err) {
    dispatch(getGistFailure(err))
  }
}
