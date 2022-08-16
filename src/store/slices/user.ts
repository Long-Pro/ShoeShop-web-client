import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { User } from '../../Interfaces'

const initialState: User = {}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => {
      return (state = action.payload)
    },
  },
})
export const { updateUser } = userSlice.actions

export default userSlice.reducer
