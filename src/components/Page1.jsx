import React from 'react'

import NavBar from './NavBar';
import PageBody from './PageBody';

export default function Page1() {
  return (
    <>
      <NavBar />
      <PageBody pageNum='1' slotsNum='5' />
    </>
  )
}
