import { createSlice, PayloadAction } from 'redux-starter-kit'

import { Gist, getGits } from 'api'
import { AppThunk } from 'store'

interface GistsState {
  gists: Gist[]
  pageCount: number
  isLoading: boolean
  error: Error | null
}

const gistsInitialState: GistsState = {
  gists: [],
  pageCount: 0,
  isLoading: false,
  error: null
}

const gists = createSlice({
  slice: 'gists',
  initialState: gistsInitialState,
  reducers: {
    getGistsStart(state: GistsState) {
      state.isLoading = true
    },
    getGistsSuccess(state: GistsState, { payload }: PayloadAction<Gist[]>) {
      state.gists = payload
      state.isLoading = false
      state.error = null
    },
    getGistsFailure(state: GistsState, action: PayloadAction<Error>) {
      state.isLoading = true
      state.error = action.payload
    }
  }
})

export const { getGistsFailure, getGistsStart, getGistsSuccess } = gists.actions

export default gists.reducer

export const fetchGists: AppThunk = () => async dispatch => {
  try {
    dispatch(getGistsStart())
    const issues = await getGits()
    dispatch(getGistsSuccess(issues))
  } catch (err) {
    dispatch(getGistsFailure(err))
  }
}
