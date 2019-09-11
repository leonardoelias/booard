import { createSlice, PayloadAction } from 'redux-starter-kit'

interface CurrentDisplayState {
  idGistSeleted: string | null
}

const gistsInitialState: CurrentDisplayState = {
  idGistSeleted: null
}

const gistsDisplaySlice = createSlice({
  slice: 'gistsDisplay',
  initialState: gistsInitialState,
  reducers: {
    setGistSelected(state: CurrentDisplayState, action: PayloadAction<string>) {
      state.idGistSeleted = action.payload
    }
  }
})

export const { setGistSelected } = gistsDisplaySlice.actions

export default gistsDisplaySlice.reducer
