import { useState,useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './ProductDetail.module.scss';
const cx = classNames.bind(styles);
function ProductDetail() {
  return (
    <div className={cx('wrapper')}>
      <h1>ProductDetail</h1>
    </div>
  );
}

export default ProductDetail;