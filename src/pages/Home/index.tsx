import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import { updateUser } from '../../store'
import useStore from '../../store/helper'
import { User } from '../../Interfaces'
import styles from './Home.module.scss'
const cx = classNames.bind(styles)
function Home() {
  let [{ user }, dispatch] = useStore()
  let x = user
  setTimeout(() => {
    dispatch(updateUser({ name: '123', account: '1234' }))
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
