import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import { AppDispatch, updateUser } from '../../store'
import { updateComment } from '../../store/slices/comment'
import { getAllComment } from '../../store/slices/comment'
import useStore from '../../store/helper'
import { User } from '../../Interfaces'
import styles from './Home.module.scss'
import { useDispatch } from 'react-redux'
const cx = classNames.bind(styles)
function Home() {
  let [{ user }] = useStore()
  const dispatch = useDispatch<AppDispatch>()
  let x = user
  setTimeout(() => {
    dispatch(getAllComment())
  }, 2000)
  setInterval(() => {
    console.log(x)
  }, 2000)
  return (
    <div className={cx('wrapper')}>
      <h1>Home</h1>
    </div>
  )
}

export default Home
