import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { User } from '../../Interfaces'

export interface InitialState {
  value: User
  isLoaded: boolean
  error: any
}
const initialState: InitialState = {
  value: {},
  isLoaded: false,
  error: '',
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload
    },
  },
})
export const { updateUser } = userSlice.actions

export default userSlice.reducer
