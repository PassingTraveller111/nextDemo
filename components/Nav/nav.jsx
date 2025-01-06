import { useRouter } from 'next/router';
import React from 'react';
import styles from '../../styles/nav.module.scss';

export default () => {  
  const router = useRouter();
  const goTo = (path) => {
    router.push(`/${path}`);
  }
  return <div className={
      `
      nav
      ${styles['font-style']}
      `
  }>
      <span onClick={() => {
          goTo('a')
      }}>a</span>
      <br/>
      <span onClick={() => {
          goTo('b/c')
      }}>b/c</span>
      <br/>
      <span onClick={() => {
          goTo('b')
      }}>b</span>
      <br/>
      <span onClick={() => {
          goTo('randomImg')
      }}>randomImg</span>
      <br/>
      <span onClick={() => {
          goTo('counter')
      }}>counter</span>
      <br/>
      <span onClick={() => {
          goTo('todo')
      }}>todo</span>
  </div>
}