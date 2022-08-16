import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getComment } from './service'
import { Comment } from '../../Interfaces'

export const getAllComment = createAsyncThunk('commnet/getAll', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const jsonData = await response.json()
  return jsonData
})

export interface InitialState {
  value: Comment[]
  isLoaded: boolean
  error: any
}
const initialState: InitialState = {
  value: [],
  isLoaded: false,
  error: '',
}
export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    updateComment: (state, action: PayloadAction<Comment[]>) => {
      state.value = action.payload
    },
  },

  // Code logic xử lý async action
  extraReducers: (builder) => {
    // Khi thực hiện action getAllComment thành công (Promise fulfilled)
    builder.addCase(getAllComment.fulfilled, (state, action: any) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoaded = true
      state.value = action.payload
    })
    // Khi thực hiện action getAllComment thất bại (Promise rejected)
    builder.addCase(getAllComment.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.isLoaded = false
      state.error = 'loi ---------------'
    })
  },
})
export const { updateComment } = commentSlice.actions

export default commentSlice.reducer
