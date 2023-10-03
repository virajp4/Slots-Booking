import React from 'react'

import NavBar from './NavBar';
import PageBody from './PageBody';

export default function Page2() {
    return (
        <>
            <NavBar />
            <PageBody pageNum='2' slotsNum='9' />
        </>
    )
}
