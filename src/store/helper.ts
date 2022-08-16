import type { RootState } from './'

import { useSelector, useDispatch } from 'react-redux'
import { Dispatch } from '@reduxjs/toolkit'

function useStore(): [RootState, Dispatch] {
  const data = useSelector((state: RootState) => state)
  const dispatch = useDispatch()
  return [data, dispatch]
}

export default useStore
